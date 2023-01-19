// Utility Logic

function isEmpty(testString) {
  return (testString.trim().length === 0);
}

// Business Logic

function wordCounter(text) {
  if (isEmpty(text)) {
    return 0;
  }
  let wordCount = 0;
  const textArray = text.split(" ");
  textArray.forEach(function(element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
}


//FUNCTION 
function numberOfOccurrencesInText(word, text) { 
  if (isEmpty(word)) {
    return 0;
  }
  const textArray = text.split(" ");
  let wordCount = 0;
  
  textArray.forEach(function(element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++;
    }
  });
  return wordCount;
}

function numberOfOccurrencesInUserInputPassage(word, text) { 
  if (isEmpty(text)) {
    return 0;
  }
  let p = document.createElement('p')
  
  //apple world the big world
  const textArray = text.split(" ").sort();


let newArr = [];

  

  
  for(let i = 0; i < textArray.length; i++) {     
    let counter = 0;

    for(let j = 0; j < textArray.length; j++) {
      if(textArray[i] === textArray[j]) {
        counter++;       
      }
    }

    if (!newArr.includes(textArray[i])) {
      p.append(textArray[i] + ": " + counter);
      p.append(document.createElement("br"));
    }

  }

  return p;
  
}

//FUNCTION 
function boldPassage(word, text) {
  
  if (isEmpty(word) || isEmpty(text)) {
    return null;
  }
  
  const p = document.createElement("p");
  let textArray = text.split(" ");
  textArray.forEach(function(element, index) {
    if (word === element) {
      const bold = document.createElement("strong");
      bold.append(element);
      p.append(bold);
    } else {
      p.append(element);
    }
    if (index !== (textArray.length - 1)) {
      p.append(" ");
    }
  });
  return p;
}

// UI Logic

function handleFormSubmission(event) {
  event.preventDefault();
  const passage = document.getElementById("text-passage").value;
  const word = document.getElementById("word").value;
  const wordCount = wordCounter(passage);
  const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
  const wordFrequency = numberOfOccurrencesInUserInputPassage(word, passage);
  console.log(wordFrequency)
  document.getElementById("total-count").innerText = wordCount;
  document.getElementById("selected-count").innerText = occurrencesOfWord;
  // new lines here!
  let boldedPassage = boldPassage(word, passage);
  if (boldedPassage) {
    document.querySelector("div#bolded-passage").append(boldedPassage);
  } else {
    document.querySelector("div#bolded-passage").innerText = null;
  }

  document.querySelector("div#wordUsage").append(wordFrequency);
}

window.addEventListener("load", function() {
  document.querySelector("form#word-counter").addEventListener("submit", handleFormSubmission);
});
