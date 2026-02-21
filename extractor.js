// Email Extractor Logic (Isolated)

const dropZone = document.getElementById('dropZone');
const fileInput = document.getElementById('fileInput');
const extractBtn = document.getElementById('extractBtn');
const extractorOutput = document.getElementById('extractorOutput');
const emailCountEl = document.getElementById('emailCount');
const separatorSelect = document.getElementById('extractorSeparator');
const sortCheckbox = document.getElementById('sortEmails');
const copyEmailsBtn = document.getElementById('copyEmailsBtn');
const downloadEmailsBtn = document.getElementById('downloadEmailsBtn');
const activityLogEl = document.getElementById('logEntries');

let extractedEmails = [];

// Drag and Drop
dropZone.addEventListener('click', () => fileInput.click());

dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.classList.add('dragover');
});

dropZone.addEventListener('dragleave', () => {
    dropZone.classList.remove('dragover');
});

dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.classList.remove('dragover');
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
});

fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) handleFile(file);
});

function handleFile(file) {
    if (!file.name.endsWith('.csv') && !file.name.endsWith('.txt')) {
        alert('Please upload a .csv or .txt file');
        return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
        const text = e.target.result;
        processExtraction(text);
        addLogEntry(`Loaded file: ${file.name} (${(file.size / 1024).toFixed(1)} KB)`, 'success');
    };
    reader.readAsText(file);
}

function processExtraction(text) {
    const emailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi;
    const matches = text.match(emailRegex) || [];

    // Deduplicate
    extractedEmails = [...new Set(matches.map(e => e.toLowerCase()))];

    if (sortCheckbox.checked) {
        extractedEmails.sort();
    }

    updateExtractorUI();
}

extractBtn.addEventListener('click', () => {
    updateExtractorUI();
    addLogEntry(`Re-processed list with ${separatorSelect.value} separator.`, 'success');
});

function updateExtractorUI() {
    let separator = separatorSelect.value === 'newline' ? '\n' : separatorSelect.value;
    extractorOutput.innerText = extractedEmails.join(separator);
    emailCountEl.innerText = extractedEmails.length;
}

// Actions
copyEmailsBtn.addEventListener('click', () => {
    if (extractedEmails.length === 0) return;

    const text = extractorOutput.innerText;
    navigator.clipboard.writeText(text).then(() => {
        addLogEntry('Emails copied to clipboard!', 'success');

        const originalText = copyEmailsBtn.innerText;
        copyEmailsBtn.innerText = 'Copied!';
        setTimeout(() => copyEmailsBtn.innerText = originalText, 2000);
    });
});

downloadEmailsBtn.addEventListener('click', () => {
    if (extractedEmails.length === 0) return;

    const content = extractorOutput.innerText;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `extracted_emails_${new Date().toISOString().slice(0, 10)}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    addLogEntry('.txt file downloaded.', 'success');
});

function addLogEntry(message, type = '') {
    const entry = document.createElement('div');
    entry.className = `log-entry ${type}`;
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    entry.innerHTML = `<span class="log-time">[${time}]</span> ${message}`;
    activityLogEl.prepend(entry);
}
