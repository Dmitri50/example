var hello = "hello";
console.log("Helps with debugging"+hello);

var a = [1,2,3,4,5];

var print3Ways = function() {
    alert("hello world");
    console.log("Hello World");
    document.write("<b>Hello World</b>")
}

var sumArray = function() {
    var total = 0;
    for (let i=0;i<a.length;i++) {
        total += a[i];
    }
    return total;
}

var findMin = function() {
    min = a[0];
    for (let i=1;i<a.length;i++) {
        if (min > a[i]) {
            max = a[i];
        }
    }
    return min;
}

var findMax = function() {
    max = a[0];
    for (let i =1;i<a.length;i++) {
        if (max < a[i]) {
            max = a[i];
        }
    }
    return max;
}

function plainOldFunction(a="default") {
    console.log("plainOldFunction "+a);
}

var firstFunction= function(func= function() {
    console.log("default function");
    }) {
    func();
}

var callback = function() {
    console.log("this is a callback function");
}
var soManyFunctions = function() {
    plainOldFunction("new parameter");
    plainOldFunction("send argument");
    firstFunction(callback);
    firstFunction();
}

var funWithArrays = function() {
    document.write(sumArray() + "<br>");
    //document.write(findMin() + "<br>");
    //document.write(findMax() + "<br>");
}