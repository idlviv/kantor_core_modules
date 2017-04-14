var util = require('util');

var obj = {
  a: 5,
  b: 6,

};

// obj.self = obj;
obj.can = function() {
  console.log('show');
};

// if object has inspect method log returns this method
// instead object description
// obj.inspect = function(){
//   return 'output instead object description';
// };

var strInspect = util.inspect(obj);
console.log(strInspect);

// s - string, d - digit, j - object in JSON (not object)
var strFormat = util.format('My %s %d %j', 'string', 123, {test: 'obj'});
console.log(strFormat);
// також працює неявно, без format і без підключення util
console.log('My %s %d %j', 'string', 123, {test: 'obj'});

// util.inherits
// parent
function Animal(name) {
  this.name = name;
}

Animal.prototype.walk = function() {
  console.log('walk', this.name);
};

// child
function Rabbit(name) {
  this.name = name;
}

util.inherits(Rabbit, Animal);

Animal.prototype.jump = function() {
  console.log('jump', this.name);
};

var rabbit = new Rabbit('Rab');
rabbit.walk();
rabbit.jump();
