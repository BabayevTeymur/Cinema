let videoContainer=document.querySelector('.grid_video_container')
let cardArrow=document.querySelector('.card_arrow')
let leftArrow=document.querySelector('.arrow')
let rightArrow=document.querySelector('.arrow1')
fetch('./database/videomovie.json')
.then(resp=>resp.json())
.then(data=>{
    data.forEach(video => {
        videoContainer.innerHTML+=`
        <div class="video">
             <video src="${video.video}" controls></video>
        </div>`
    });
})

fetch('./database/photo.json')
.then(resp1=>resp1.json())
.then(data1=>{
    data1.forEach(photo=>{
        cardArrow.innerHTML+=`<div>
        <img src="${photo.image}" alt="">
        <p>${photo.name}</p>
    </div>`
    })
    let count = 0
    function slider1() {
        for (let i = 0; i < cardArrow.children.length; i++) {
            cardArrow.children[i].style.transform = `translateX(${-300*count}px)`
        }
    }
    setInterval(()=>{
        if(count<cardArrow.children.length-4){
            count++
            slider1()
        }else{
            count=0
            slider1()
        }
    },2000)
    leftArrow.addEventListener('click',()=>{
        if(count>0){
            count--
            slider1()
        }else{
            count=0
            slider1()
        }
    })
    rightArrow.addEventListener('click',()=>{
        if(count<cardArrow.children.length-4){
            count++
            slider1()
        }else{
            count=0
            slider1()
        }
    })
})