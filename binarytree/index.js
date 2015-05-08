function Node(){
	this.data = null;
	this.leftChild = null;
	this.rightChild = null;
}

var charecters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
function buildTree(node, i) {
    var leftIndex = 2*i+1,                          //左孩子节点的索引
        rightIndex = 2*i+2;                         //右孩子节点的索引
    if(leftIndex < charecters.length) {             //判断索引的长度是否超过了charecters数组的大小
        var childNode = new Node();                 //创建一个新的节点对象
        childNode.text = charecters[leftIndex];     //给节点赋值
        node.leftChild = childNode;                 //给当前节点node加入左孩子节点
        buildTree(childNode, leftIndex);            //递归创建左孩子
    }
    if(rightIndex < charecters.length) {            //下面注释参照上面的构建左孩子的节点
        var childNode = new Node();
        childNode.text = charecters[rightIndex];
        node.rightChild = childNode;
        buildTree(childNode, rightIndex);
    }
}
//下面构造二叉树
var node = new Node();
node.text = charecters[0];
buildTree(node, 0);   //索引i是从0开始构建