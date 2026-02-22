// Email Extractor Web Worker
self.onmessage = function (e) {
    const { text, settings } = e.data;
    const { filterEnabled, allowedDomains, sortEnabled } = settings;

    // 1. Extract
    const emailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi;
    const matches = text.match(emailRegex) || [];

    // 2. Clean and Deduplicate
    const cleaned = matches.map(email => {
        return email.toLowerCase().trim().replace(/^[.-]+|[.-]+$/g, '');
    }).filter(email => {
        const parts = email.split('@');
        return parts.length === 2 &&
            parts[1].includes('.') &&
            !email.endsWith('.') &&
            email.length > 5;
    });

    let result = [...new Set(cleaned)];

    // 3. Domain Filter
    if (filterEnabled && allowedDomains && allowedDomains.length > 0) {
        result = result.filter(email => {
            const domain = email.split('@')[1].replace(/^www\./, '');
            return allowedDomains.some(allowed => domain.includes(allowed) || allowed.includes(domain));
        });
    }

    // 4. Sort
    if (sortEnabled) {
        result.sort();
    }

    // Send back results
    self.postMessage({ emails: result });
};
