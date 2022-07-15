const coverage = require('../coverage/coverage-summary.json');

(() => {
  const total = coverage.total;

  function prepareData(name, data) {
    const extraSpacesQuantity = 10 - name.length;
    const spaces = Array(extraSpacesQuantity).fill(' ').join('')
    return `\x1b[34m${name}:\x1b[0m ${spaces}\x1b[32m${data.covered}\x1b[0m/\x1b[34m${data.total}\x1b[0m \x1b[35m(${data.pct}%)\x1b[0m`;
  }

  console.log('\n\x1b[31mUnit tests coverage\x1b[0m\n')
  console.log(prepareData('Lines', total.lines));
  console.log(prepareData('Functions', total.functions));
  console.log(prepareData('Branches', total.branches));
  console.log(prepareData('Statements', total.statements));
  console.log()
})();
