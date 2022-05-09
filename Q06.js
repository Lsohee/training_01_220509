
// console.log(a);
// let a = 0;

let a = 0;
let timer = setInterval(function(){
    a ++
    console.log(a);
    if(a>=10){
      clearInterval(timer) 
    }
  },1000)
    // if(a>10){
  //   clearInterval
  // }
  // // console.log(0);