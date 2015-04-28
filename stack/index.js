function Stack(){
  this.top = 0;
  this.dataStore = [];
}

Stack.prototype.push = function(el){
  this.dataStore[this.top++] = el;
}

Stack.prototype.pop = function(){
  return this.dataStore[--this.top];
}

Stack.prototype.peek = function(){
  return this.dataStore[this.top];
}

Stack.prototype.length = function(){
  return this.top
}

Stack.prototype.clear = function(){
  this.stop = 0;
}

function mulBase(num, base) {
  var s = new Stack();
  do {
     s.push(num % base);
     num = Math.floor(num /= base);
  } while (num > 0);
  var converted = "";
  while (s.length() > 0) {
     converted += s.pop();
  }
  return converted;
}
