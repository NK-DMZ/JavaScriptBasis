// 之前静态使用方法
// import *as m1 from "./27.6.dynamicImportHello"

const btn = document.getElementById('btn');

btn.onclick = function () {
    console.log('点击了');    
    import('./dynamicImportHello.js').then(module =>{
        console.log(module);
        module.hello();     
    })
}