const path = require("path");
const fs = require("fs");
const glob = require("glob");
const { spawn } = require("child_process");

const rootDir = path.resolve(process.cwd());

const srcDir = "packages/*";
const destDir = path.join(rootDir, "www");

/**
 * Generate TypeDoc's for each package
 */
function execute() {

    console.log("Generating API documentation using TypeDoc:");
    // todo: if (dryRun) console.log("In docs/en/packages/, this script would...");

    // Get resolved package names
    const packages = path.resolve(rootDir, srcDir);

    glob(packages, {realpath:true}, function(error, srcFiles) {
       
        srcFiles.forEach((srcPath) => {    
            
            var packageName = srcPath
            .split(path.sep)
            .pop();

            // ignore packages that don't comform to same consistency standards
            // for one reason or another
            if( srcPath.includes("fast-animation") || srcPath.includes("fast-browser-extensions") || srcPath.includes("fast-development-site-react") || srcPath.includes("fast-permutator") || srcPath.includes("fast-tslint-rules"))
            {
                console.log(`${packageName} - skipped`); return;
            }
            // process.exit(1);
            createAPI(
                packageName,
                path.join(srcPath, '/tsconfig.json'), 
                path.join(srcPath, '/website/static/',packageName, '/api'),
                path.join(srcPath, '/src/index.ts')
            );
        });
    });
}
execute();

/**
 * Execute TypeDoc commands to generate API documentation
 * @param {*} packageName
 * @param {*} config 
 * @param {*} output 
 * @param {*} file 
 */
function createAPI(packageName, config, output, file) {
    
    console.log(`${packageName} - processing`);
    
    // console.log(config);
    // console.log(output);
    // console.log(file);
   new Promise(function(resolve, reject) {
       
        const typedoc = spawn('typedoc', 
            [
                '--tsconfig', config,
                '--out', output, file
            ]);
   
        //console.log(typedoc);

        typedoc.stdout.on('data', (data) => {
           resolve(`${data}`.trim());
         });
        typedoc.stderr.on('data', (data) => {
           reject(`fail - "${data}"`);
        });
   });
   
}

// if (!validArg) {
//     console.log('\x1b[31m%s\x1b[0m', 'Invalid argument used. To perform a dry-run use --dry-run');
//     process.exit(1);
// }