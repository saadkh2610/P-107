function startclification()
{
    navigator.mediaDevices.getUserMedia({
        audio:true
    });
    clasifier = ml5.soundClassifier(
        'https://teachablemachine.withgoogle.com/models/eNqFL5euI/madal.json',modelReady
    );
}
function modelReady()
{
    clasifier.classify(gotResults);
}
function gotResults(error,results)
{
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
    }
}