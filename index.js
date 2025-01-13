// Import the puppeteer module
const puppeteer = require('puppeteer');

(async () => {
    try {
        // Launch Puppeteer with the --no-sandbox flag
        const browser = await puppeteer.launch({
            args: ['--no-sandbox', '--disable-setuid-sandbox'] // Flags for no-sandbox
        });

        // Open a new browser page
        const page = await browser.newPage();

        // Navigate to Google's homepage
        await page.goto('https://www.google.com', {
            waitUntil: 'networkidle2' // Wait until the page is fully loaded
        });

        // Generate a PDF of the page
        await page.pdf({
            path: 'google.pdf', // Save the PDF with this filename
            format: 'A4', // Use A4 paper size
            printBackground: true // Include background graphics
        });

        console.log('PDF successfully generated as "google.pdf"');

        // Close the browser
        await browser.close();
    } catch (error) {
        console.error('Error generating PDF:', error);
    }
})();
