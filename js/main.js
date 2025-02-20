const music_img = document.querySelector(".img");
const music_name = document.querySelector(".music_name");
const audio = document.querySelector("audio");

const playbtn= document.querySelector(".play_btn");
const body = document.querySelector("body");
const chap = document.querySelector(".chap");
const ong= document.querySelector(".ong");
const line= document.querySelector(".color");
const startTime= document.querySelector(".boshlanish");
const endTime= document.querySelector(".toliq");
const music_info= document.querySelector(".music_info");
const past= document.querySelector(".past");
const orta= document.querySelector(".orta");
const baland= document.querySelector(".baland");

const musics = [
    "AbrorDostov",
    "FaruxXamrayev",
    "SardorMizaliyev",
    "TalıbTale"
];

var index = 0 ; 




const ChangeMusic=()=>{
    music_img.setAttribute("src" , `./imgs/${musics[index]}.jpg`);
    music_name.textContent = musics[index]; 
    audio.setAttribute("src", `./music/${musics[index]}.mp3`)
}

ChangeMusic();
// audio.play();


playbtn.addEventListener('click', ()=>{
if(!body.classList.contains("playing")){
    body.classList.add("playing")
audio.play();

}else{
    body.classList.remove("playing")
    audio.pause();
}
})





// console.log(musics.length);

    ong.addEventListener('click', () => {
        index++;
        if (index >= musics.length){ index = 0;  }
        ChangeMusic();
        if(body.classList.contains("playing")){
            audio.play()
         
        }else{
            audio.pause
        }
    
    
    })
        
        
    chap.addEventListener('click', () => {
        index--;
        if (index < 0) {
            index = musics.length - 1
        };
        ChangeMusic();

        if(body.classList.contains("playing")){
            audio.play()
         
        }else{
            audio.pause()
        }
    });


const formatter=(time)=>{
  var minutes= Math.floor(time/60)<10 ? "0" + Math.floor(time/60):Math.floor(time/60);

  var seconds= Math.floor(time%60)<10 ?  "0" +Math.floor(time%60) : Math.floor(time%60);


if(isNaN(time)){
    return "00:00"
}else{
  return `${minutes} : ${seconds}`
}


}


const playing = (e) => {
    var currentTime = e.srcElement.currentTime;

    var duration = e.srcElement.duration; 
  
    startTime.textContent = formatter(currentTime); 

    endTime.textContent = formatter(duration); 
  
    var progress = (currentTime * 100) / duration; 

    line.style.width = `${progress}%`; 
 
     

  };
  audio.addEventListener("ended", () => {
    index++;
    if (index >= musics.length)
        { index = 0;  }
    ChangeMusic();
    if(body.classList.contains("playing")){
        audio.play()
     }

}); 
  
  audio.addEventListener("timeupdate", playing); 



  music_info.addEventListener('click', (e) => {
    var width = e.offsetX; 
    var AlWidth = e.currentTarget.offsetWidth; 
    audio.currentTime = (width * audio.duration) / AlWidth; 
    // console.log(audio.valume);
    
});





const menu=document.querySelector(".menu");
const music_list=document.querySelector(".music_list");
const delet=document.querySelector(".delet");
const box=document.querySelector(" .box");
const boxs=document.querySelector(" .boxs");
const music_duration=document.querySelector(".music_duration");
const box_music_name=document.querySelector(".box_music_name");
const voice=document.querySelector(".voice");

menu.addEventListener('click' , ()=>{
    music_list.style.display=" block"
})
delet.addEventListener('click' , ()=>{
    music_list.style.display=" none"
})

      
 



musics.forEach((item , index)=>{

    
boxs.innerHTML+=`

 <div class="box" onclick="selectMusic(${index})">
  <i class="fa-solid fa-music"></i>
  <div class="music-item">
    <p >${item}</p>
    <span class="music_duration">04:19</span>
  </div>
 </div>

`
})
const VoiceIconFunk = ()=>{
    if (voice.value >= 50) {
        orta.style = "display: none"
       baland.style= "    display: block;"
       past.style= "display: none"
        
    }
    else if(voice.value < 49 && voice.value > 0 ){
        orta.style = "display: block"
           baland.style= "display: none"
    past.style= "    display: none"
    }
    
    else if(voice.value < 1){  
        baland.style= "display: none"
        orta.style = "display: none"
           past.style= "    display: block"
        }
}
const selectMusic = (id)=>{
    index=id;
    ChangeMusic();
    body.classList.add("playing")
    audio.play();
    
}

voice.addEventListener('input' , ()=>{
    audio.volume = voice.value/100;

    VoiceIconFunk();

}  )
document.addEventListener("keypress" , (e)=>{

if(e.key=="."){
  
    index--;
    if (index < 0) {
        index = musics.length - 1
    };
    ChangeMusic();

    if(!body.classList.contains("playing")){
        body.classList.add("playing")
    audio.play();
     
    }else{
        audio.play()
    }
}



    
 


if(e.key==","){
  
    index++;
    if (index >= musics.length){ index = 0;  }
    ChangeMusic();
    if(!body.classList.contains("playing")){
        body.classList.add("playing")
        audio.play();
     
    }else{
        audio.play()
    }

}
if(e.key=="/"){

    if(!body.classList.contains("playing")){
        body.classList.add("playing")
    audio.play();
    
    }else{
        body.classList.remove("playing")
        audio.pause();
    }

}
else if(e.key == "+"){
    audio.volume=(voice.value++)/100    
}else if(e.key == "-"){
    audio.volume=(voice.value--)/100
    
}
    
VoiceIconFunk();
})






















  

























