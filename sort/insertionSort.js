// insert sort

function insertionSort(arr,sortType){
    var key = 0,
        i = 0,
        j = 0,
        sortType = sortType || 'desc',
        isDescSort = sortType=='desc',
        l = arr.length;
    for(;i<l;i++){
        key = arr[i];
        j = i - 1;
        while((j>=0) && (isDescSort?(key<arr[j]):(key>arr[j]))){
            arr[j+1] = arr[j];
            arr[j] = key;
            j--;
        }
    }
    return arr;
}
