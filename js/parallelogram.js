

// .Parallelogram calculation..*:
document.getElementById('btn-par').addEventListener('click', function(){
   
    let b = getInputValue('parallelogram1');
    let h = getInputValue('parallelogram2');
 
     const parallelogramArea =b*h;
     console.log(parallelogramArea);
 
     setValueToElementField('par-Area',parallelogramArea);
});