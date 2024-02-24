// get value from input feild

function getInputValue(inputId) {
    const getInputField = document.getElementById(inputId);
    const getInputFieldValue=getInputField.value;
    const getInputNumberValue = parseFloat(getInputFieldValue);
    // console.log(getInputNumberValue);
    getInputField.value='';
   
   
    return getInputNumberValue;
}

// set element value
function setValueToElementField(elementId,finalValue){
    const previousElementValue= document.getElementById(elementId);
    previousElementValue.innerText=finalValue;

}