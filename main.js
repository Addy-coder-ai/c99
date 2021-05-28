// <javascript>
var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() {
  document.getElementById("text_box").innerHTML = " ";
  recognition.start();
}

recognition.onresult = function (event) {

    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("text_box").innerHTML = content;

    console.log(content);
    speak();
}

function speak() {

  SpeekData = document.getElementById("text_box").value;
  var synth = window.speechSynthesis;
  var UtterThiss = new SpeechSynthesisUtterance(SpeekData);

  synth.speak(UtterThiss);
  Webcam.attach(camera);
}

camera = document.getElementById("camera");
Webcam.set({

  width:400,
  height:300,
  
  image_format:'png',
  png_quality:90
});
// </javascript>