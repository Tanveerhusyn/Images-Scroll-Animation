const boxes = document.querySelectorAll('.box');
const tags = document.querySelectorAll('.ptg');

window.addEventListener('scroll', UpdateBoxes);

const API_KEY = "563492ad6f91700001000001e8fdd8c72aa741d89fe029c6a5f46e4e"
UpdateBoxes();
function UpdateBoxes(){
    const triggerBottom = (window.innerHeight/3*2);

    boxes.forEach((box)=>{
        boxTop = box.getBoundingClientRect().top;
       
        if(boxTop < triggerBottom){
            box.classList.add('show');
       
        }
        else{
            box.classList.remove('show');
        }

    })


    
}

getImages();

async function getImages(){
    const baseURL = "https://api.pexels.com/v1/curated?per_page=11";
    const response = await fetch(baseURL,{
        method: 'GET',
        headers:{
            accept: 'application/json',
            authorization: API_KEY
        }
    })

   const dat = await response.json();
   console.log(dat);
   boxes.forEach((box,idx)=>{
       box.innerHTML = `<img src ="${dat.photos[idx].src.landscape}" />`
        
   }
   
   )

   tags.forEach((tag,idx)=>{
    tag.innerHTML = `Captured By: ${dat.photos[idx].photographer}`;
});

}

