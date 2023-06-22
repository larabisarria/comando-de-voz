var api=window.webkitSpeechRecognition;
var configuracao=new api();

function iniciar(){
    document.getElementById("frase").innerHTML="";
    configuracao.start();
}

configuracao.onresult=function(evento){
textofalado=evento.results[0][0].transcript;
console.log(evento);
document.getElementById("frase").innerHTML=textofalado;

if (textofalado=="tire minha selfie") {
    fala();
}
}

function fala(){
    api2=window.speechSynthesis;
    texto="tirando sua selfie em cinco segundos";
    config=new SpeechSynthesisUtterance(texto)
    api2.speak(config);

    Webcam.attach(camera);

    setTimeout(function(){
        tirarselfie();
        salvar();
    },5000)


}

camera=document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format:"jpg",
    jpg_quality:90
})

function tirarselfie(){
    Webcam.snap(function(imagemcapturada){
        document.getElementById("foto").innerHTML="<img src='"+imagemcapturada+"' id='selfie'>"
    })
}

function salvar(){
    link=document.getElementById("download");
    image=document.getElementById("selfie").src;
    link.href=image;
    link.click();
}