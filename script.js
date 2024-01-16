// alert("Hello");
const playbutton=document.querySelector("#pl")
playbutton.addEventListener("click",playaudio);
const ctx=new AudioContext();
let audio;

function playaudio(){
    console.log("got")
    fetch("8 Parche Baani Sandhu 128 Kbps.mp3")
.then((response)=>{
    return response.arrayBuffer();
}).then((buffer)=>{
    return ctx.decodeAudioData(buffer);
}).then((decoded)=>{
    audio=decoded;
    const play=ctx.createBufferSource();
    play.buffer=audio;
    play.connect(ctx.destination);
    play.start(ctx.currentTime);
    pausebutton.addEventListener("click",changestate);
// //     console.log("done");
})
}