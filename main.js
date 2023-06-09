status = ""
img = ""
function preload() {
img = loadImage("Sala2.jpg")

}
function setup() {
    canvas = createCanvas(640,420)
    canvas.center()
    objDetector = ml5.objectDetector('cocossd',modelLoaded)
    document.getElementById("status").innerHTML = "Status : Detecting Objects"
}
function modelLoaded() {
console.log("Loaded!")
status = true
objectDetector.detect(img,gotResult)
}
function gotResult(error,results) {
if (error) console.log(error);
console.log(results)
}

function draw() {
    image(img, 0,0,640,420)
    fill("#FAE800")
    text("Rack",45,175)
    noFill()
    stroke("#FAE800")
    rect(30,190,225,300)

    fill("FF0000")
    text("Sofá",320,175)
    noFill()
    stroke("FF0000")
    rect(300,190,270,300)
}
function loc() {
    window.location = "fruits.html"
}