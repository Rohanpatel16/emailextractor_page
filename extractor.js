// Email Extractor Logic (Isolated)

const dropZone = document.getElementById('dropZone');
const fileInput = document.getElementById('fileInput');
const extractBtn = document.getElementById('extractBtn');
const extractorOutput = document.getElementById('extractorOutput');
const emailCountEl = document.getElementById('emailCount');
const separatorSelect = document.getElementById('extractorSeparator');
const sortCheckbox = document.getElementById('sortEmails');
const filterByDomainCheckbox = document.getElementById('filterByDomain');
const domainFilterSection = document.getElementById('domainFilterSection');
const domainListInput = document.getElementById('domainList');
const copyEmailsBtn = document.getElementById('copyEmailsBtn');
const downloadEmailsBtn = document.getElementById('downloadEmailsBtn');
const activityLogEl = document.getElementById('logEntries');

let extractedEmails = [];
let rawExtractedText = ""; // Store the full text for re-processing
let extractorWorker = null;

// Initialize Worker
function initWorker() {
    if (window.Worker) {
        extractorWorker = new Worker('extractor-worker.js');
        extractorWorker.onmessage = function (e) {
            extractedEmails = e.data.emails;
            hideLoading();
            updateExtractorUI();
            addLogEntry(`Processed ${extractedEmails.length} unique emails.`, 'success');
        };
        extractorWorker.onerror = function (err) {
            console.error('Worker error:', err);
            hideLoading();
            addLogEntry('Error during processing.', 'error');
        };
    }
}

initWorker();

// Persistence & Domain Logic
const savedDomains = localStorage.getItem('allowed_extractor_domains');
if (savedDomains) domainListInput.value = savedDomains;

const isFilterEnabled = localStorage.getItem('domain_filter_enabled') === 'true';
filterByDomainCheckbox.checked = isFilterEnabled;
domainFilterSection.style.display = isFilterEnabled ? 'block' : 'none';

filterByDomainCheckbox.addEventListener('change', () => {
    domainFilterSection.style.display = filterByDomainCheckbox.checked ? 'block' : 'none';
    localStorage.setItem('domain_filter_enabled', filterByDomainCheckbox.checked);
    updateExtractorUI();
});

domainListInput.addEventListener('input', () => {
    localStorage.setItem('allowed_extractor_domains', domainListInput.value);
});

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

    showLoading(`Reading ${file.name}...`);
    const reader = new FileReader();
    reader.onload = (e) => {
        rawExtractedText = e.target.result;
        addLogEntry(`Loaded file: ${file.name} (${(file.size / 1024).toFixed(1)} KB)`, 'success');
        startExtraction();
    };
    reader.readAsText(file);
}

function startExtraction() {
    if (!rawExtractedText) return;

    showLoading('Extracting emails...');

    const settings = {
        filterEnabled: filterByDomainCheckbox.checked,
        allowedDomains: domainListInput.value
            .split('\n')
            .map(line => {
                let d = line.trim().toLowerCase();
                try {
                    if (d.startsWith('http')) d = new URL(d).hostname;
                } catch (e) { }
                return d.replace(/^www\./, '');
            })
            .filter(d => d.length > 0),
        sortEnabled: sortCheckbox.checked
    };

    if (extractorWorker) {
        extractorWorker.postMessage({ text: rawExtractedText, settings });
    } else {
        // Fallback to synchronous if worker fails to init (unlikely)
        processExtractionSync(rawExtractedText, settings);
    }
}

function processExtractionSync(text, settings) {
    const emailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi;
    const matches = text.match(emailRegex) || [];

    const cleaned = matches.map(email => {
        return email.toLowerCase().trim().replace(/^[.-]+|[.-]+$/g, '');
    }).filter(email => {
        const parts = email.split('@');
        return parts.length === 2 && parts[1].includes('.') && !email.endsWith('.') && email.length > 5;
    });

    extractedEmails = [...new Set(cleaned)];

    if (settings.filterEnabled && settings.allowedDomains.length > 0) {
        extractedEmails = extractedEmails.filter(email => {
            const domain = email.split('@')[1].replace(/^www\./, '');
            return settings.allowedDomains.some(allowed => domain.includes(allowed) || allowed.includes(domain));
        });
    }

    if (settings.sortEnabled) extractedEmails.sort();

    hideLoading();
    updateExtractorUI();
}

extractBtn.addEventListener('click', () => {
    if (!rawExtractedText) {
        addLogEntry('No data to process. Please upload a file first.', 'error');
        return;
    }
    startExtraction();
    addLogEntry(`Re-processing list with current settings...`, 'info');
});

function updateExtractorUI() {
    const listToDisplay = extractedEmails;
    const separator = separatorSelect.value === 'newline' ? '\n' : separatorSelect.value;

    // UI Optimization: Only render the first 1000 emails in the preview
    // This prevents the browser from freezing due to DOM overload.
    const displayLimit = 1000;
    const truncated = listToDisplay.slice(0, displayLimit);

    extractorOutput.innerText = truncated.join(separator);

    if (listToDisplay.length > displayLimit) {
        extractorOutput.innerText += `\n\n... and ${listToDisplay.length - displayLimit} more. (Full list available for copy/download)`;
        extractorOutput.style.color = '#ffcc00'; // Warning color if truncated
    } else {
        extractorOutput.style.color = '#00ff41'; // Normal color
    }

    emailCountEl.innerText = listToDisplay.length;
}

function showLoading(message) {
    extractBtn.disabled = true;
    extractBtn.innerHTML = `<span class="spinner"></span> ${message}`;
}

function hideLoading() {
    extractBtn.disabled = false;
    extractBtn.innerText = 'Refresh Results';
}

// Actions
copyEmailsBtn.addEventListener('click', () => {
    if (extractedEmails.length === 0) return;

    const separator = separatorSelect.value === 'newline' ? '\n' : separatorSelect.value;
    const text = extractedEmails.join(separator);

    navigator.clipboard.writeText(text).then(() => {
        addLogEntry(`Copied ${extractedEmails.length} emails to clipboard!`, 'success');

        const originalText = copyEmailsBtn.innerText;
        copyEmailsBtn.innerText = 'Copied!';
        setTimeout(() => copyEmailsBtn.innerText = originalText, 2000);
    });
});

downloadEmailsBtn.addEventListener('click', () => {
    if (extractedEmails.length === 0) return;

    const separator = separatorSelect.value === 'newline' ? '\n' : separatorSelect.value;
    const content = extractedEmails.join(separator);
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
