
// .Rhombus calculation..*:
document.getElementById('btn-rho').addEventListener('click', function(){
   
    let p = getInputValue('rhombus1');
    let q = getInputValue('rhombus2');
 
     const rhombusArea =(p*q)/2;
    //  console.log(rhombusArea);
 
     setValueToElementField('rho-Area',rhombusArea);
});