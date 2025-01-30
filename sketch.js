let originalPoem = [
  "O me O life",
  "O Captain My Captian"
];

let inputField, button, outputText = "";

function setup() {
  createCanvas(500, 400);
  textSize(16);

  inputField = createInput("O"); 
  inputField.position(20, 50);

  button = createButton("Find");
  button.position(180, 50);
  button.mousePressed(generatePoem);
}

function generatePoem() {
  let userWord = inputField.value(); 
  let newPoem = [];

  for (let line of originalPoem) {
    let words = RiTa.tokenize(line); 
    let newLine = [];

    for (let word of words) {
      if (word === userWord) {
        let rhymes = RiTa.rhymes(word); 
        let synonyms = RiTa.similarBySound(word);
        let randomWord = random([...rhymes, ...synonyms, "captian", "me", "life"]); 
        newLine.push(randomWord || word);
      } else {
        newLine.push(word);
      }
    }

    newPoem.push(newLine.join(""));
  }

  outputText = newPoem.join("\n");
}

function draw() {
  background(240);
  text("Search a key word：", 20, 30);
  text(outputText, 20, 120, 460, 300); 
}