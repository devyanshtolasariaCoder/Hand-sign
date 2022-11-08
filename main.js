Webcam.set({
    width:350,
    height:300,
    image_format: 'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach('camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';  
});
}

function check()
{
  img= document.getElementById('captured_image');
  classifier.classify(img, gotResult);
}

console.log('ml5 version', ml5.version);
classifier = ml5.imageClassifier('',modelLoaded);
function modelLoaded(){
    console.log('Model Loaded!');
}
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/R94_RqLhR/model.json',modelLoaded);
function speak(){
    var synth = window.speechSynthesis;
    speak_data_1= "The first predicition is " + prediction1;
    speak_data_2 = "And the second prediction is " + prediction2;
    var utterThis= new SpeechSynthesisUterrance(speak_data_1 + speak_dta_2);
    synth.speak(utterThis);
}
function gotResult(error, results){
    if (error){
      console.error(error);
    }
    else{
      console.log(results)
  ;
  document.getElementById("result_emotion_name").innerHTML= results[0].label;
  document.getElementById("result_emotion_name2").innerHTML = results[1].label;
  }
  prediction_1 = results[0].label;
  prediction_2 = results[1].label;
  speak();
  if(results[0].label == "Victory")
  {
    document.getElementById("update_emoji").innerHTML = "✌️";
  }
  if(results[0].label== "All the best")
  {
    document.getElementById("update_emoji").innerHTML= "👍";
  }
  if(results[0].label == "Amazing")
  {
    document.getElementById("update_emoji").innerHTML = "👌";
  }
  if(results[1].label == "Victory")
  {
    document.getElementById("update_emoji2").innerHTML = "✌️";
  }
  if(results[1].label== "All the best")
  {
    document.getElementById("update_emoji2").innerHTML= "👍";
  }
  if(results[1].label == "Amazing")
  {
    document.getElementById("update_emoji2").innerHTML = "👌";
  }
  }
  
  
   
  
  