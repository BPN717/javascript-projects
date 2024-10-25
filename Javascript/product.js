function productNumber() {
    var txt = document.getElementById("number");
    var len = txt.length;

    if (len === 5) {
        alert('Correct product number');
        product_no.focus;
        return true;
    } else if (len !== 5) {
        alert('Please enter valid product number');
        product_no.focus;
        return true;
    }

}

