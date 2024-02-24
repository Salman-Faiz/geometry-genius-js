
// .ellipse calculation..*:
document.getElementById('btn-ell').addEventListener('click', function(){
   
    let major = getInputValue('ellipse1');
    let minor = getInputValue('ellipse2');
 
     const ellipseArea = 3.1416 * major * minor;
    //  console.log(TriangleArea);
 
     setValueToElementField('ell-Area',ellipseArea);

});