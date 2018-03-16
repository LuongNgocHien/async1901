const request = require('request');
const URL='http://localhost:3000/tinh';
// function Cong(a,b,cb){
//     if(isNaN(a)||isNaN(b)) return cb(new Error('Type error'));
//     request(`${URL}/CONG/${a}/${b}`,(error , response,body)=>{
//         if(error) return cd(error);
//         cb(null , body);
//     });
// };

function congPromise(a,b){
    return new Promise((resolve,reject)=> { 
        if(isNaN(a)||isNaN(b)) return reject(new Error('Type error'));
        request(`${URL}/CONG/${a}/${b}`,(error , response,body)=>{
        if(error) return reject(error);
        resolve(body);
    });
  });
}
function truPromise(a,b){
    return new Promise((resolve,reject)=> { 
        if(isNaN(a)||isNaN(b)) return reject(new Error('Type error'));
        request(`${URL}/TRU/${a}/${b}`,(error , response,body)=>{
        if(error) return reject(error);
        resolve(body);
    });
  });
}
function nhanPromise(a,b){
    return new Promise((resolve,reject)=> { 
        if(isNaN(a)||isNaN(b)) return reject(new Error('Type error'));
        request(`${URL}/NHAN/${a}/${b}`,(error , response,body)=>{
        if(error) return reject(error);
        resolve(body);
    });
  });
}
function chiaPromise(a,b){
    return new Promise((resolve,reject)=> { 
        if(isNaN(a)||isNaN(b)) return reject(new Error('Type error'));
        if(b==0) return reject(new Error('Divice by zero'));
        request(`${URL}/CHIA/${a}/${b}`,(error , response,body)=>{
        if(error) return reject(error);
        resolve(body);
    });
  });
}
//(4+5)*6/2
// congPromise(4,5)
// .then(tong=> nhanPromise(tong,6))
// .then(nhan=> chiaPromise(nhan,2))
// .then(result => console.log(result))
// .catch(error=> console.log(error.message))

function Dientichhinhthang(a,b,h){
    return  congPromise(a,b,h)
        .then(tong=> nhanPromise(tong,h))
        .then(nhan=> chiaPromise(nhan,2))
}; 
// Dientichhinhthang(4,5,6)
// .then(result=> console.log(result))
// .catch(error => console.log(error.message))

async function tinhdientich(a,b,h){
    let tich ;
    try {
        const tong = await congPromise(a,b);
        tich = await nhanPromise(tong ,h);
    } catch (error) {
       tich= 10; 
    }
    const kq = await chiaPromise(tich ,2);
    return kq;
}
tinhdientich(4,5,6)
.then(result => console.log(result))
.catch(error => console.log(error.message))

// tinhdientich(1,2,3)
// .then(result => console.log(result))
// .catch(error => console.log(error.message))

// function tinhdientichdongbo(a,b,h){
//     const tong = a+b;
//     console.log('Tong = ' ,tong);
//     const tich = tong*h;
//     console.log('Tich = ' ,tich);
//     const kq = tich/2;
//     console.log('Kq = ' ,kq);
//     return kq;
// }
// tinhdientichdongbo(4,5,6); 
// tinhdientichdongbo(1,2,3); 

// congPromise(4,5)
// .then(function(result){return console.log(result)})
// .catch(function(error){return console.log(error.message)})
// truPromise(4,5)
// .then(function(result){return console.log(result)})
// .catch(function(error){return console.log(error.message)})
// nhanPromise(4,5)
// .then(function(result){return console.log(result)})
// .catch(function(error){return console.log(error.message)})
// chiaPromise(4,0)
// .then(function(result){return console.log(result)})
// .catch(function(error){return console.log(error.message)})