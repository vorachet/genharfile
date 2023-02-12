#! /usr/bin/env node
const genHARFile = require("../src/genHARFile")
const argv = require('yargs/yargs')(process.argv.slice(2))
    .usage('Usage: $0 --name [string] --url [string]')
    .demandOption(['name','url'])
    .alias('n', 'name')
    .alias('u', 'url')
    .describe('n', 'HAR Filename to be saved')
    .describe('u', 'Website url')
    .argv;

function usage() {
    console.log(`npx genHARFile --name "Wikipedia" --url "https://www.wikipedia.org"`)
}

if (!argv.name) {
    console.error("--name cannot be empty");
    usage();
    process.exit(1);

}

if (!argv.url) {
    console.error("--url cannot be empty");
    usage();
    process.exit(1);
}

start();

async function start() {
    await genHARFile({
        name: argv.name,
        url: argv.url
    });
}
