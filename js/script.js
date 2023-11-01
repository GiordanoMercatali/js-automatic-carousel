const itemsElem  = document.querySelector(".items");
const images = ['img/01.jpg', 'img/02.jpg', 'img/03.jpg', 'img/04.jpg', 'img/05.jpg'];

let curImageIndex = 0;

let curInterval = undefined;

const intervalDuration = 5000;

for (let i = 0; i < images.length; i++) {
    // const element = images[i];
    console.log(images[i]);

    /*if (i === 0) {
        itemsElem.innerHTML += `<div class="item active"><img src="${element}" alt=""></div>`
    } else{
        itemsElem.innerHTML += `<div class="item"><img src="${element}" alt=""></div>`
    }*/

    itemsElem.innerHTML += `<div class="item"><img src="${images[i]}" alt=""></div>`
};

const item = document.querySelectorAll(".item");
console.log(item);

item[curImageIndex].classList.add("active");

startTimer();

document.getElementById("next-btn").addEventListener("click", pressNextBtn);

document.getElementById("prev-btn").addEventListener("click", pressPrevBtn);

function pressNextBtn(){
        
    // if(curImageIndex < images.length - 1){
    //     item[curImageIndex].classList.remove("active");
    //     curImageIndex++;
    //     item[curImageIndex].classList.add("active");
    // }

        clearInterval(curInterval);
        curInterval = setInterval(pressNextBtn, intervalDuration);
        
        item[curImageIndex].classList.remove("active");
        if (curImageIndex >= images.length - 1){
            curImageIndex = 0;
            item[curImageIndex].classList.add("active");}
        else{
            curImageIndex++;
            item[curImageIndex].classList.add("active");
        }
        // clearInterval(curInterval);
          
}

function pressPrevBtn(){
        
    // if(curImageIndex > 0){
    //     item[curImageIndex].classList.remove("active");
    //     curImageIndex--;
    //     item[curImageIndex].classList.add("active");
    // }

    clearInterval(curInterval);
    curInterval = setInterval(pressNextBtn, intervalDuration);

    item[curImageIndex].classList.remove("active");
        if (curImageIndex <= 0){
            curImageIndex = images.length - 1;
            item[curImageIndex].classList.add("active");}
        else{
            curImageIndex--;
            item[curImageIndex].classList.add("active");
        }
        // clearInterval(curInterval);
}


function startTimer(){
    
    if (curInterval === undefined){
        curInterval = setInterval(pressNextBtn, intervalDuration);
    }
}