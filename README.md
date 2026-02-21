# LinkedIn Lead Generator & Email Extractor

A premium, glassmorphism-themed dashboard for scraping LinkedIn hiring leads via Apify and extracting emails from CSV/TXT files.

## 🚀 Features

### 1. LinkedIn Scraper
- **Parallel Processing**: Fires all batch requests simultaneously using `Promise.all` for maximum speed.
- **Batch Activity Log**: Real-time status entries for every batch fired, showing exact result counts.
- **Custom JSON Config**: integrated JSON editor to modify Apify parameters (maxPosts, limit, etc.) on the fly.
- **Smart Deduplication**: Automatically filters out duplicate leads based on their LinkedIn URL.
- **CSV Export**: One-click download once the scraping process is complete.

### 2. Email Extractor
- **Bulk Extraction**: Upload `.csv` or `.txt` files to extract all unique email addresses.
- **Deduplication**: Automatically removes duplicates and cleans the list.
- **Customization**: Supports custom separators (Comma, Pipe, Colon, New Line) and alphabetical sorting.
- **Instant Actions**: Copy to clipboard or download as a `.txt` file.

## 🛠️ Tech Stack
- **Frontend**: HTML5, CSS3 (Vanilla), JavaScript (ES6+)
- **Styling**: Modern Glassmorphism System
- **API Integration**: Apify (LinkedIn Post Search)

## 📖 How to Use

### LinkedIn Scraper
1. Enter your **Apify API Token**.
2. Customize the **Actor Input (JSON)** if needed.
3. Click **Start Scraping** and monitor the live log.
4. Click **Download CSV** once finished.

### Email Extractor
1. Switch to the **Email Extractor** tab.
2. Drag and drop your file into the upload zone.
3. Select your preferred **Separator** and **Sorting** options.
4. Click **Extract Emails** and then **Copy** or **Download**.

---
*Created with focus on performance and aesthetic excellence.*
