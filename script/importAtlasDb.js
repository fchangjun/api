const { exec } = require('child_process');
const path = require('path')

let dbdirectory = path.join(__dirname,'../dbtest')
let dbhost = '127.0.0.1'
let dbname = 'yimei'
let pass ='1q2w3e4r5t.'
// 数据库备份

let execString = `mongorestore --host cluster0-shard-00-00.ph5rk.mongodb.net:27017,cluster0-shard-00-01.ph5rk.mongodb.net:27017,cluster0-shard-00-02.ph5rk.mongodb.net:27017 --ssl --username fangchangjun --password ${pass} --authenticationDatabase admin --dir ${dbdirectory}`
exec(execString, (err, stdout, stderr) => {
    if(err) {
        console.log(err);
        return;
    }
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
})
