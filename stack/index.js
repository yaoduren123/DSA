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

//数制间相互转换
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

//()匹配
function braceMatch(str){
  var stack = new Stack(),
      i = -1,
      rword = '',
      braceMap = {
        '(' : ')',
        ')' : '('
      },
      len = str.length;
  while(++i <= len){
    if(str[i]=='('){
      stack.push(i)
    }else if(str[i]==')'){
      typeof stack.pop() == 'undefined' && console.log(i+':not matched')

    }
    if(stack.length()){
      console.log(stack.pop() + ': not matched');
    }
  }


}
