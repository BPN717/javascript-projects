function bmiCalculator() {

    var weight = Number(document.getElementById("weight").value);
    var height = Number(document.getElementById("height").value);
    
  var BMI = weight/(height/100)**2;
  if (BMI <= 18.5) {
    BMI= 'Your BMI is' + ' ' + BMI + ' ' + 'which means you are underweight.';
  } else if (BMI > 18.5 && BMI < 25) { 
    BMI= 'Your BMI is' + ' ' + BMI + ' ' + 'which means you are normal.';
  } else if (BMI > 25 && BMI < 30) {
    BMI= 'Your BMI is' + ' ' + BMI + ' ' + 'which means you are overweight.';
  } else if(BMI > 30) {
    BMI= 'Your BMI is' + ' ' + BMI + ' ' + 'which means you are obese.';
  }
  
  document.getElementById("output").innerHTML = BMI;
  
  }