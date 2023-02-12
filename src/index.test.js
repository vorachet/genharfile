const fs = require('fs');
const path = require('path');
const Program = require("./index")

test('Given null params, return "--name and --url cannot be empty"', async () => {
    expect(await Program()).toBe("--name and --url cannot be empty");
});

test('Given ---name "Wikipedia" --url <null>, return "--name and --url cannot be empty"', async () => {
    expect(await Program("Wikipedia")).toBe("--name and --url cannot be empty");
});

test('Given --name <null> --url "https://www.wikipedia.org", return "--name and --url cannot be empty"', async () => {
    expect(await Program(null, "https://www.wikipedia.org")).toBe("--name and --url cannot be empty");
});

test('Given --name "Wikipedia" --url "https://www.wikipedia.org", return "done"', async () => {
    expect(await Program("Wikipedia", "https://www.wikipedia.org")).toBe("done");
    const outputHARFilePath = path.join("harfiles", "Wikipedia.har");
    expect(fs.existsSync(outputHARFilePath)).toBe(true);
});