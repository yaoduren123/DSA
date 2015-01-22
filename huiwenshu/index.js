function getHuiwen(num){
    var key = '';
    var ret = [];
    for(var i=0,l=num;i<l;i++){
        key = ''+i;
        /^(\d+)\d?\1$/.test(key) && (ret.push(i))
    }
    return ret;
}
