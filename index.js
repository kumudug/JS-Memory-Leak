var theThing = null;
var replaceThing = function () {
  var originalThing = theThing; //If you comment out this line you can view in chrome dev tools [ memory allocation timeline ] the allocation is removed
  var unused = function () {
    if (originalThing) // a reference to 'originalThing'
      console.log("hi");
  };
  theThing = {
    longStr: new Array(1000000).join('*'),
    someMethod: function () {
      console.log("message");
    }
  };
};
setInterval(replaceThing, 1000);