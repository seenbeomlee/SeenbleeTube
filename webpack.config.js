/* we need to use old-type Js in this file */
const path = require('path');

/* this is modern import, same as above, import path from "path"; */
const ENTRY_FILE = path.resolve(__dirname, 'assets', 'js', 'main.js');
const OUTPUT_DIR = path.join(__dirname, 'static');

const config = {
  entry: ENTRY_FILE,
  output: {
    path: OUTPUT_DIR,
    filename: '[name].[format]',
  },
};

module.exports = config;
