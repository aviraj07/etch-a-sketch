const container = document.getElementById('container')
let colour = 'rgb(0, 0, 0)';
let count = 0;
let truth = "0";

let numberOfGrid = 16;
do{
    numberOfGrid = prompt("Enter the size of grid",'16');
}while(numberOfGrid < 1 || numberOfGrid > 100);

numberOfGrid = parseInt(numberOfGrid);
let size = parseFloat((500/numberOfGrid).toFixed(2));
function makeGrid(){
    makeRows();
    
}

function  makeRows(){
    for(let i = 0; i < numberOfGrid; ++i){
        const rowCell = document.createElement('div');
        rowCell.className = 'row';
        rowCell.style.height = `${size}px`;
        makeColumn(rowCell);
        container.appendChild(rowCell);
    }
    
}

function makeColumn(rowCell){
    for(let i = 0; i < numberOfGrid; ++i){
        const columnCell = document.createElement('div');
        columnCell.className = 'column';
        // console.log(typeof size);
        columnCell.style.height = `${size}px`;
        columnCell.style.width = `${size}px`;
        rowCell.appendChild(columnCell);
    }
}

makeGrid()
const rows = document.getElementsByClassName('row');
const columns = document.getElementsByClassName('column')


Array.from(columns).forEach(function(column){
    column.addEventListener('mouseover',function(e){
        //console.log(e.target);
        e.target.style.backgroundColor = `${colour}`;
    })
})

// container.addEventListener('mouseover',function(e){
   
//     // console.log(e.target);
//     e.stopPropagation();
//     e.target.style.backgroundColor = 'black';
   
    
// })

// Array.from(rows).forEach(function(row){
//     row.addEventListener('mouseover',function(e){
//         console.log(e.target);
//         e.target.style.backgroundColor = 'black';
//     })
// 

const blk = document.getElementById('black');
blk.addEventListener('click',function(){
    truth = "1";
    colour = 'rgb(0, 0, 0)';
    
})  
const btn = document.getElementById('btn');
btn.addEventListener('click',function(){
    Array.from(columns).forEach(function(column){
        column.style.backgroundColor = 'white';
    })
   
});

const rainbow = document.getElementById('rainbow');
rainbow.addEventListener('click',function(){
    
    
        truth = "0";
        container.addEventListener('mousemove',function(){

            if(truth === "0")
            {
                let rgbRandom = getRandomRgb();
                if(rgbRandom === 'rgb(0, 0, 0)' && count < 11){
                    rgbRandom = getRandomRgb();
                    count++;
            
                    if(count > 10)
                    count = 0;
                }
                else{
                    colour = rgbRandom;
                }
            }
            else{
                colour = 'rgb(0, 0, 0)';
            }
           
        })
    
    
    

    

})

function getRandomRgb() {
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = num >> 8 & 255;
    var b = num & 255;
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }
  

