const fs = require('fs');
const path = require('path');
const prettier = require('prettier');

const pkg = require('../package.json');
const prettierConfig = require('../.prettierrc.js');

(() => {
  const newPkg = prettier.format(
    JSON.stringify({
      ...pkg,
      version: process.env.TAG_VERSION,
    }),
    {
      parser: 'json',
      prettierConfig,
    }
  );

  fs.writeFileSync(path.resolve(__dirname, '../package.json'), newPkg);
})();
