const fs = require('fs');
const path = require('path');
const genHARFile = require("./genHARFile")

test('Given null params, return "--name and --url cannot be empty"', async () => {
    expect(await genHARFile()).toBe("--name and --url cannot be empty");
});

test('Given ---name "Wikipedia" --url <null>, return "--name and --url cannot be empty"', async () => {
    expect(await genHARFile("Wikipedia")).toBe("--name and --url cannot be empty");
});

test('Given --name <null> --url "https://www.wikipedia.org", return "--name and --url cannot be empty"', async () => {
    expect(await genHARFile(null, "https://www.wikipedia.org")).toBe("--name and --url cannot be empty");
});

test('Given --name "Wikipedia" --url "https://www.wikipedia.org", return "done"', async () => {
    expect(await genHARFile("Wikipedia", "https://www.wikipedia.org")).toBe("done");
    const outputHARFilePath = path.join("harfiles", "Wikipedia.har");
    expect(fs.existsSync(outputHARFilePath)).toBe(true);
});