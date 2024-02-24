
// .Rectangle calculation..*:
document.getElementById('btn-rec').addEventListener('click', function(){
   
    let W = getInputValue('rectangle1');
    let I = getInputValue('rectangle2');
 
     const rectangleArea =W * I;
    //  console.log(rectangleArea);
 
     setValueToElementField('rec-Area',rectangleArea);
});