
// window.onload = function () {
//     var span = document.createElement('span');
  
//     span.className = 'fas';
//     span.style.display = 'none';
//     document.body.insertBefore(span, document.body.firstChild);
    
//     alert(window.getComputedStyle(span, null).getPropertyValue('font-family'));
      
//     document.body.removeChild(span);
//   };
  const bar = document.getElementById('bar');
  const close = document.getElementById('close');
  const nav = document.getElementById('navbar');


  if(bar){
    bar.addEventListener('click', ()=>{
        nav.classList.add('active');
    })
  }


  if(close){
    close.addEventListener('click', ()=>{
        nav.classList.remove('active');
    })
  }