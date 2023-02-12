const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');
const PuppeteerHar = require('puppeteer-har');

const OUTPUT_DIR = "harfiles";

module.exports = async (name, url) => {
    if (!name || !url) return "--name and --url cannot be empty";

    console.log(`outputDir = ${OUTPUT_DIR}, name = ${name}, url = ${url}`);

    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR);
        console.log(`created ${OUTPUT_DIR}`);
    }
    console.time();

    console.log(`processing ...  ${url}`);
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const har = new PuppeteerHar(page);
    const outputPath = path.join(OUTPUT_DIR, `${name}.har`);
    await har.start({ path: outputPath });
    await page.goto(url);
    await har.stop();
    await browser.close();
    console.log(`done!`);
    console.timeEnd();
    console.log(`HAR generated in ${outputPath}`);
    return "done"
}
