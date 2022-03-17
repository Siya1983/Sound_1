https://teachablemachine.withgoogle.com/models/[...]

function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/model.jason', modelReady);
}
function modelReady()
{
    classifier.classify(gotResult);
}