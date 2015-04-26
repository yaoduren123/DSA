function List(){
    this.dataStore = [];
    this.curPos = 0;
    this.listSize = 0;
};

List.prototype = {
    constructor : List,
    pos : function(){
       // return this.datasStore[this.curPos];
       return this.curPos;
    },
    next : function(){
        //return this.dataStore[++this.curPos>=this.listSize?this.listSize-1 : this.curPos]
        ++this.curPos>=this.listSize ? this.listSize-1 : this.curPos
    },
    prev : function(){
        //return this.dataStore[--this.curPos<0 ? 0 : this.curPos];
        --this.curPos<0 ? 0 : this.curPos;
    },
    clear : function(){
        this.dataStore = [];
    },
    append : function(el){
        return this.dataStore[this.listSize++] = el;
    },
    remove : function(el){
        var index = this.find(el);
        ~index&&(this.dataStore.splice(index,1),this.listSize--);
    },
    insert : function(el,index){
        this.dataStore.splice(index,0,el);
        this.listSize++;
        return true;
    },
    find : function(el){
        for(var i = 0, len = this.listSize; i<len; i++){
            if(this.dataStore[i] === el){
                return i;
            }
        }
        return -1;
    },
    size : function(){
        return this.listSize;
    },
    toString : function(){
        return this.dataStore.toString()
    },
    front : function(){
        this.curPos = 0;
    },
    end : function(){
        this.curPos = this.listSize - 1;
    },
    moveTo : function(pos){
        this.curPos = pos;
    },
    getCurElement : function(){
        return this.dataStore[this.curPos];
    }

}
