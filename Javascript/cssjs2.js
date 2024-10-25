var button = document.querySelector('button');
button.addEventListener('click', modifyStyleSheet);

function modifyStyleSheet(){
  
  const stylesheet = document.styleSheets[0];
  console.log(stylesheet);
  let elementRules;

  
  for(let i = 0; i < stylesheet.cssRules.length; i++) {
    if(stylesheet.cssRules[i].selectorText === '.element') {
      elementRules = stylesheet.cssRules[i];
    }
  }

  
  elementRules.style.setProperty('background', 'blue');
}