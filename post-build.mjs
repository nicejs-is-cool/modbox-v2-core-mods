import fs from 'fs/promises'
import path from 'path'
import { execSync } from 'child_process'
import { constants } from 'fs';

/*try {
    await fs.access('./dist/vendor', constants.R_OK | constants.W_OK )
} catch {
    await fs.mkdir('./dist/vendor');
}*/

for (const folder of await fs.readdir("./dist")) {
    /*if (!(await fs.lstat(`./dist/${folder}`)).isDirectory()) {
        console.log('[post-build] moving %s into vendor directory', folder);
        await fs.rename(`./dist/${folder}`, `./dist/vendor/${folder}`)
        continue;
    }*/
    let files = await fs.readdir("./dist/" + folder)
    //if (folder === "vendor") continue;
    if (files.length === 1) {
        console.log('[post-build] moving %s outside its directory (%s)', files[0], folder)
        await fs.rename(`./dist/${folder}/${files[0]}`, `./dist/${folder}.js`);
        await fs.rmdir(`./dist/${folder}`);
        continue;
    }
    await fs.rename(`./dist/${folder}/${folder}.js`, `./dist/${folder}/main.js`);
    //console.log('[post-build] archiving %s', folder);
    //execSync(`tar -czvf dist/${folder}.tar.gz dist/${folder}`)
    //console.log('[post-build] deleting %s', folder);
    //fs.rm(`./dist/${folder}`, { recursive: true })
}
/*console.log('[post-build] archiving...')
execSync("tar -czvf modbox-core.tar.gz dist")*/
console.log('[post-build] all finished');