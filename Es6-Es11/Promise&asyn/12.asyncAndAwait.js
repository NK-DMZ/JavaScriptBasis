// 1.引入fs模块
const fs = require("fs")

// 读取文件1
function read1() {
    return new Promise((resolve,reject) =>{
        fs.readFile("./PromiseMoreFile1.md",(err,data) =>{
            // 如果失败
            if(err) reject(err)
            // 如果成功
            resolve(data);
        })
    })
}
function read2() {
    return new Promise((resolve,reject) =>{
        fs.readFile("./PromiseMoreFile2.md",(err,data) =>{
            // 如果失败
            if(err) reject(err)
            // 如果成功
            resolve(data);
        })
    })
}
function read3() {
    return new Promise((resolve,reject) =>{
        fs.readFile("./PromiseMoreFile3.md",(err,data) =>{
            // 如果失败
            if(err) reject(err)
            // 如果成功
            resolve(data);
        })
    })
}
// 返回结果都是promise对象

async function main() {
    let one = await read1();
    let two = await read2();
    let three = await read3();
    console.log(one.toString());
    console.log(two.toString());
    console.log(three.toString());    
}

main();