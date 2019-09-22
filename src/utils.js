export function moveOnMax(event, nextFieldID) {
    if (event.target.value.length >= event.target.maxLength
      && isNumberOrLetter(event)) {
      document.getElementById(nextFieldID).focus();
    }
  }
  
  export function moveOnBackspace(event, nextFieldID) {
    if (event.keyCode === 8 && event.target.value.length === 0) {
      document.getElementById(nextFieldID).focus();
    }
  }
  
  export function arrows(event) {
    switch (event.keyCode) {
      case 37:
        return 'left'
      case 38:
        return 'up'
      case 39:
        return 'right'
      case 40:
        return 'down'
      default:
        return false
    }
  }
  
  export function nextElement(event){
    let nextSibling =  document.getElementById(event.target.id).nextSibling;
    if (nextSibling) nextSibling.focus()
  }
  
  export function prevElement(event){
    let previousSibling =  document.getElementById(event.target.id).previousSibling;
    if (previousSibling) previousSibling.focus()
  }
  
  export function isLetter(event){
    return /^[a-z]$/i.test(event.key);
  }
  
  export function isNumber(event){
    return /^[0-9]$/i.test(event.key);
  }
  
  export function isNumberOrLetter(event){
    return /^[a-z0-9]$/i.test(event.key);
  }