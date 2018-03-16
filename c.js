const request = require('request');

const URL='http://api.openweathermap.org/data/2.5/weather?appid=01cc37655736835b0b75f2b395737694&units=metric&q=';
 

function getTemp(cityName,cb){
    request(URL + cityName,(error , response,body)=>{
        if(error) return cb(error,null);
        const abc = JSON.parse(body);
        cb(null, abc.main.temp); 
    });
}
getTemp('SaiGon',(error ,temp)=> {
    if(error) return console.log(error);
    console.log(`nhiệt độ hiện tại: ${temp}`)}


);


// getTemp('SaiGon',(t)=> {
//     const double = t*2;
//     console.log(`nhiet đô hiện tại: ${double}`);

// });
// getTemp('Hanoi');
// getTemp('Tokyo');
// [1,3,5].filter(x=>true);
// [1,3,5].map(x=>true);
