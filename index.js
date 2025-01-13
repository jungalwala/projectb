const puppeteer = require('puppeteer');

(async () => {
  try {
    // Launch Puppeteer
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Navigate to the URL
    await page.goto('https://www.google.com', { waitUntil: 'networkidle2' });

    // Generate a PDF
    await page.pdf({
      path: 'google.pdf', // Save as 'google.pdf' in the current directory
      format: 'A4', // Paper format
      printBackground: true // Include background graphics
    });

    console.log('PDF created: google.pdf');

    // Close the browser
    await browser.close();
  } catch (error) {
    console.error('Error generating PDF:', error);
  }
})();
