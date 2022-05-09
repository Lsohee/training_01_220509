let a = 1;
let b = 2;
let c = "3";

function valueTest(){
  if(typeof a === "number"){
    console.log("a 는 데이터 타입이 숫자입니다")
  } else{
    console.log("a는 데이터 타입이 숫자가 아닙니다")
  }


  if(typeof b==="number"){
    console.log("b는 데이터 타입이 숫자입니다")
  } else{
    console.log("b는 데이터 타입이 숫자가 아닙니다")
  }
}
function valueTestTwo(){
  // if (typeof a === "number" && typeof b === "string"){
    //   console.log(" a와 b는 모두 데이터 타입이 숫자입니다")
    // } else {
      //   console.log("다모르겠지만 둘중하나 혹은 둘다가 숫자가 아닐 수 있습니다")
      // };
      
      // ! if / else 중에 하나가 메인 알고리즘일때가 많음
  // if(typeof a==="string" ){
  //   console.log("a는 string 입니다")
  // } else{
  //   if(typeof a === "number"){
  //     console.log("a는 number입니다")
  //     if( a === 1){
  //       console.log("a는 1입니다")
  //     }else{
  //       console.log("a는 1이 아닙니다")
  //     }
  //   } else {
  //     console.log("a는 number가 아닙니다")
  //   }
  // // console.log("test")
  // }
  if(a === c){
    console.log(" a와 c는 같습니다")
  }else{
    console.log("a는 c와 같지 않습니다")
    if (typeof a=== "number" && typeof c === "number"){
      console.log("그러나 a와 c는 숫자입니다")
    }else{
      console.log("심지어 a와 c는 데이터 타입도 같지 않습니다")
    }
  }
  
}



valueTestTwo();



let make = function(){
  if (a < b ){
    console.log("a는 b보다 작습니다")
  }else if (a===b){
    console.log("a는 b와 값이 같습니다")
  }else{
    console.log("a는 b보다 큽니다")
  }
}


make();