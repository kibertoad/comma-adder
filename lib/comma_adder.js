const fs = require('fs');
const program = require('commander');

program
  .version('1.0.0')
  .option('-u, --source <sourceFile> --target <targetFile>', 'Add commas after given ids')
  .action(async opts => {
    let { source, target}  = opts;
    target = target || 'target.txt';

    const nonProcessedList = fs.readFileSync(source).toString().split('\n');

    fs.writeFileSync(target, nonProcessedList);
    process.exit(0);
  });

program.parse(process.argv);
