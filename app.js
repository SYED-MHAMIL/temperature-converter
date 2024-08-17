
function converter(){
  
    let display=document.querySelector("input").value;
    let FromSub=document.querySelector("#from").value;     
    let ToSub=document.querySelector("#to").value;  
    
    let temperature=parseFloat(display);
   
    let converterUtils;

    if(FromSub === "celcius"){


        if(ToSub === "farenheit"){
            converterUtils= (temperature * 9/5) + 32;
        }else if(ToSub === "kelvin"){
              converterUtils= temperature + 273.15;
        }else{
            converterUtils=temperature
        }

        
    }else if(FromSub === "farenheit"){


        if(ToSub === "celcius"){
            converterUtils=  (temperature-32) (5/9);
        }else if(ToSub === "kelvin"){
              converterUtils= (temperature-32) (5/9) + 273.15;
        }else{
            converterUtils=temperature;
        }  


    }else{
        if(ToSub === "celcius"){
            converterUtils= temperature - 273.15;
        }else if(ToSub === "farenheit"){
              converterUtils= (temperature-273.15) (9/5) + 32;
        }else{
            converterUtils=temperature;
        }  
    }


   let result=document.querySelector(".result");

   result.innerHTML=converterUtils.toFixed(2) + " " + ToSub;

         

     
}