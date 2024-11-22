let input = document.querySelector('#typeColor');
let container = document.querySelector('.container');
let numInput = document.querySelector
('#numInput');
let colorChanger = document.querySelector('#colorChanger')

let button = document.querySelector('#clear');
function clear() {
            
    container.innerHTML ='';
               }
               



    function draw() {
    

        
        for(let i = 0; i<=700; i++){
            
                let newDivs = document.createElement('div');
               newDivs.classList.add('sub-div');
               newDivs.addEventListener('mouseover', ()=>{
                  newDivs.style.backgroundColor = input.value||`palevioletred`;
                    colorChanger.style.backgroundColor = input.value||'palevioletred';
    
                  
                }
                
            )
            let cellSize =parseInt(numInput.value)||2;
            if (cellSize >5) {
              cellSize =5;
            }
            container.style.gridTemplateColumns = ` repeat(auto-fit, minmax(${cellSize}rem, 1fr))`;
            container.style.gridTemplateRows = ` repeat(auto-fit, minmax(${cellSize}rem, 1fr))`;
            container.appendChild(newDivs);
          
            
        }
           
}
button.addEventListener('click', ()=>{
    clear();
    draw();
})

numInput.addEventListener('input', ()=>{
    clear();
    draw();
})
input.addEventListener('input', ()=>{

    draw()
})
  draw()
