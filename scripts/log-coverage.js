const coverage = require('../coverage/coverage-summary.json');

(() => {
  const total = coverage.total;

  function prepareData(name, data) {
    const extraSpacesQuantity = 10 - name.length;

    return `\x1b[34m${name}:\x1b[0m ${' '.repeat(extraSpacesQuantity)}\x1b[32m${data.covered}\x1b[0m/\x1b[34m${data.total}\x1b[0m \x1b[35m(${
      data.pct
    }%)\x1b[0m\n`;
  }

  process.stdout.write('\n\x1b[31mUnit tests coverage\x1b[0m\n');
  process.stdout.write(prepareData('Lines', total.lines));
  process.stdout.write(prepareData('Functions', total.functions));
  process.stdout.write(prepareData('Branches', total.branches));
  process.stdout.write(prepareData('Statements', total.statements));
  console.log();
})();
