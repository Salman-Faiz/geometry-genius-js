
// .pentagon calculation..*:
document.getElementById('btn-pen').addEventListener('click', function(){
   
    let p = getInputValue('pentagon1');
    let a = getInputValue('pentagon2');
 
     const pentagonArea = 0.5 * p * a;
    //  console.log(TriangleArea);
 
     setValueToElementField('pen-Area',pentagonArea);

});