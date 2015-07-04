(function(){
  a();
  var a = function (){
    var x = 1 + b();
    console.log(x);
  };
  function b(){
    return 2 + c();
  };
  function c(){
    return 5;
  }
})();
