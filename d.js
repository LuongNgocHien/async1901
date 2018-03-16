const request = require('request');
const URL='http://localhost:3000/tinh';
function Cong(a,b,cb){
    if(isNaN(a)||isNaN(b)) return cb(new Error('Type error'));
    request(`${URL}/CONG/${a}/${b}`,(error , response,body)=>{
        if(error) return cd(error);
        cb(null , body);
    });
}
// // Cong(5,5,(error,total)=>{
// //     if(error) return console.log(error);
// //     console.log(total);
// // });
function nhan(a,b,cb){
    if(isNaN(a)||isNaN(b)) return cb(new Error('Type error'));
    request(`${URL}/NHAN/${a}/${b}`,(error , response,body)=>{
        if(error) return cd(error);
        cb(null , body);
    });
}
// // nhan(4,5,(error,total)=>{
// //    if(error) return console.log(err);
// //    console.log(total);
// // });
function chia(a,b,cb){
    if(b==0) return cb(new Error('Divice by zero'));
    if(isNaN(a)||isNaN(b)) return cb(new Error('Type error'));
    request(`${URL}/CHIA/${a}/${b}`,(error , response,body)=>{
        if(error) return cd(error);
        cb(null , body);
    });
}
// // chia(20,0,(error,total)=>{
// //    if(error) return console.log(error);
// //    console.log(total);
// // });
// //(4+5)*6/2 ;
function Dientichhinhthang(a,b,h,cb){

    Cong(a,b, (error1,tong)=>{
        if(error1) return cb(error1);
        nhan(tong , h,(error2,tich)=>{
        if(error2) return cb(error2);
        chia(tich , 2,(error3,thuong)=>{
       if(error3) return cb(error3);
       cb(null,thuong);
        });
      });
   });

};
Dientichhinhthang(4,5,6,(error ,total)=>{
    if(error) return console.log(error);
    console.log(total);
})
