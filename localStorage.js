
localStorage.setItem("nishit",JSON.stringify({
    test:"bikaji",
    tv:'android',
    college:'Gcet'
  }));
  
  console.log( localStorage.getItem("nishit"),localStorage.length);
  
  let data = JSON.parse(localStorage.getItem("nishit"));
  console.log(data.test); //bikaji