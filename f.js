const request = require('request');
const URL='http://localhost:3000/tinh';
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
congPromise(4,5)
.then(tong=> nhanPromise(tong,'x'))
.catch(error => 10)
.then(nhan=> {return chiaPromise(nhan,2)})
.then(result => console.log(result))
.catch(error=> console.log(error.message))