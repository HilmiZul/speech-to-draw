let rec;
let speech;
let ball = []; // for array object (Ball)
let t = [];    // for array object (Triangle)

rec = new p5.SpeechRec();
speech = new p5.Speech();
rec.continuous = true;

function setup() {
	createCanvas(windowWidth, windowHeight);

	rec.onResult = showResult;
	rec.start();
}

function showResult() {
	console.log(rec.resultString);
	// speech.speak(rec.resultString);
	if (rec.resultString === 'ball') {
		ball.push(new Ball());
	}
	if (rec.resultString === 'triangle') {
		t.push(new Triangle());
	}
	// add resultString for other shape here...
	
	if (rec.resultString === 'clear' || rec.resultString === 'reset') {
		ball = []
		t = []
	}
}

function draw() {
	background(0);
	fill(255);
	// text(rec.resultString, 0, height / 2);
	for (let i = 0; i < ball.length; i++) {
		ball[i].show();
		ball[i].fallDown();
		ball[i].checkEdge();
	}

	for (let i = 0; i < t.length; i++) {
		t[i].show();
		t[i].fallDown();
		t[i].checkEdge();
	}
}
