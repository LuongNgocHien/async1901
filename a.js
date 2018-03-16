//vehinh;
function vehinh(n ,fn){
   for(let i =1;i<=n;i++){
       let u='';
       for(let j=1;j<=n;j++){
       const dk = fn(i,j,n);
       u += dk?'*':' ';
       }
       console.log(u);
   }
}
// vehinh(5,(i,j,n) => j>=i );
// vehinh(5,(i,j,n) => j<=i );
// console.log('------') ;
// vehinh(5,(i,j,n) => j+i<=n+1 );
// vehinh(5,(i,j,n) => j+i>=n+1 );
// vehinh(9,(i,j,n) => {   
//     const tongbuocchan = (n-1)/2;
//     const trungtam = (n+1)/2;
//     const sobuocngang = Math.abs(j - trungtam) ;
//     const sobuocdoc = Math.abs(i - trungtam) ;
//     const namtrentrucdoc = j===trungtam ;
//     const namtrentrucngang = i===trungtam ;
//     const namtrenduongvien = sobuocdoc+sobuocngang===tongbuocchan ;
//     const dk = namtrenduongvien || namtrentrucdoc || namtrentrucngang;
//     return  dk ;
// } );

//inso ;

function inso(fn){
    for(let i =0;i<=100;i++){
        const dk= fn(i);
        if(dk) console.log(i);
    }
  
}
// inso((k)=> k%2===0);
// inso((k)=> k%2===1);
// inso((k)=> k%3===1);
inso((i)=> {
    const hangdonvi = i%10;
    const hangchuc =  (i-hangdonvi)/10;
    return i%10===(i-i%10)/10;
});