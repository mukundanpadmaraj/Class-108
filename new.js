function startClassification() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    })
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/k6fR4y9Ys/model.json", modelLoaded)
}

function modelLoaded() {
    classifier.classify(gotResult)
}

function gotResult(error, result) {
    if (error) {
        console.error(error)
    } else {
        console.log(result)

        random_number_r = Math.floor(Math.random() * 255 + 1)
        random_number_g = Math.floor(Math.random() * 255 + 1)
        random_number_b = Math.floor(Math.random() * 255 + 1)

        document.getElementById("result_label").style.color = "r(" + random_number_r + "," + random_number_g + "," + random_number_b + ")"
        document.getElementById("result_confidence").style.color = "r(" + random_number_r + "," + random_number_g + "," + random_number_b + ")"
        document.getElementById("result_label").innerHTML = "I can hear " + result[0].label
        document.getElementById("result_confidence").innerHTML = "Accuracy: " + (result[0].confidence*100).toFixed(2)+" %"

        img1 = document.getElementById("alien1")
        img2 = document.getElementById("alien2")
        img3 = document.getElementById("alien3")
        img4 = document.getElementById("alien4")

        if (result[0].label == "Clapping") {
            img1.src = "aliens-01.gif"
            img2.src = "aliens-02.png"
            img3.src = "aliens-03.png"
            img4.src = "aliens-04.png"
        } else if (result[0].label == "Snapping") {
            img1.src = "aliens-01.png"
            img2.src = "aliens-02.gif"
            img3.src = "aliens-03.png"
            img4.src = "aliens-04.png"
        }
        else if (result[0].label == "Tabla on the table") {
            img1.src = "aliens-01.png"
            img2.src = "aliens-02.png"
            img3.src = "aliens-03.gif"
            img4.src = "aliens-04.png"
        }
        else {
            img1.src = "aliens-01.png"
            img2.src = "aliens-02.png"
            img3.src = "aliens-03.png"
            img4.src = "aliens-04.gif"
        }
    }
}