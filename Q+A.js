
function a(){
  var allArg=Array.prototype.slice.call(arguments);
  allArg=allArg.slice(0);
  console.log('HERE:',allArg);
}
a({a:1},'asd');
/////////////////////////////////////////////////////////////////////

function FirstReverse(str) { 
  var result='';
  for (var i = str.length-1; i > -1; i--) {
    result+=str[i]
  }
  // code goes here  
  return result; 
         
}
   
///////////////////////////////////////////////////////

                        


function FirstReverse2(str) { 
  
  return str.split("").reverse().join(""); 
         
}

