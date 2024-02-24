
// .Triangle calculation..*:
document.getElementById('btn-tri').addEventListener('click', function(){
   
    let b = getInputValue('Triangle1');
    let h = getInputValue('Triangle2');
 
     const TriangleArea = 0.5 * b * h;
    //  console.log(TriangleArea);
 
     setValueToElementField('tri-Area',TriangleArea);

});