function lotto() {
    var arr = [];
    while(arr.length < 7){
        var r = Math.floor(Math.random() * 38) + 1;
        if(arr.indexOf(r) === -1) arr.push(r);
        arr = arr
}

document.getElementById("output").innerHTML = arr;
}
