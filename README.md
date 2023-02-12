
# genharfile

This is a Nodejs-based tool for generating HTTP Archive (HAR) files for web requests.

## Installation

To use this tool, you will need to have Nodejs and npm installed on your machine. You can install them from the official Nodejs website.

Once you have Nodejs and npm installed, you can install the tool by running the following command in your terminal:

```
$ npx genharfile
Usage: genharfile --name [string] --url [string]

Options:
      --help     Show help                                             [boolean]
      --version  Show version number                                   [boolean]
  -n, --name     HAR Filename to be saved                             [required]
  -u, --url      Website url                                          [required]
```

## Usage

To generate a HAR file for a webpage, simply run the following command in your terminal:

```
$ npx genharfile --name "Wikipedia" --url "https://www.wikipedia.org"

outputDir = ./harfiles, name = Wikipedia, url = https://www.wikipedia.org
processing ...  https://www.wikipedia.org
done!
default: 3.425s
HAR generated in harfiles/Wikipedia.har
```

This will generate a HAR file for all of the HTTP requests made by the webpage. 

By default, the generated HAR file will be saved to the directory `harfiles/` in the working directory with the filename <Name>.har. 

License

This tool is released under the MIT License. See the LICENSE file for more information