const { exec } = require('child_process');
const path = require('path')
function resolve(dir){
return path.join(__dirname,dir)
}
// 导出前台api
let outPutDir =resolve('../doc/front')
let inPutDir = resolve('../front/controllers')

let execString = `apidoc -i ${inPutDir} -o ${outPutDir}`
exec(execString, (err, stdout, stderr) => {
    if(err) {
        console.log(err);
        return;
    }
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
})
