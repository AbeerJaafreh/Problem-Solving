
function a(){
  var allArg=Array.prototype.slice.call(arguments);
  allArg=allArg.slice(0);
  console.log('HERE:',allArg);
}
a({a:1},'asd');
/////////////////////////////////////////////////////////////////////




