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

start();
async function start() {
    await genHARFile({
        name: argv.name,
        url: argv.url
    });
}
