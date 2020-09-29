// *   Word List variables - start.
var wordCard = [
    ['ball', 'fingerprint', 'recycle', 'tug boat', 'studio'],
    ['The Rolling Stones', 'silence', 'barber', 'bugle', 'concert'],
    ['chalk', 'snooze', 'random', 'glove compartment', 'paint'],
    ['homework', 'dip', 'definition', 'mallet', 'call'],
    ['George Steinbrenner', 'waves', 'coffee bean', 'lot', 'Michael Jackson'],
    ['decoration', 'back pack', 'sphere', 'nuclear power', 'lobster'],
    ['Frankenstein', 'diplomat', 'wool', 'Brooklyn', 'pipe'],
    ['university', 'accordian', 'baloney', 'real estate', 'indigestion'],
    ['soup', 'ice', 'dancing', 'aircraft', 'cricket'],
    ['Keith Richards', 'hymn', 'hypnosis', 'venom', 'Demi Moore'],
    ['Stephen King', 'stock market', 'smile', 'condominium', 'gopher'],
    ['hard', 'breeze', 'tutor', 'journey', 'frost'],
    ['pogo stick', 'prison cell', 'boredom', 'link', 'chlorine'],
    ['wacky', 'pop', 'tree fort', 'general', 'pizza'],
    ['moat', 'altar', 'nose', 'harpoon', 'wheelbarrow'],
    ['dangle', 'heaven', 'confidence', 'launch', 'frying-pan'],
    ['taxi', 'spill', 'huddle', 'thirst', 'perfect'],
    ['bite', 'gripe', 'flashback', 'technology', 'cattle'],
    ['right', 'lice', 'italian food', 'erupt', 'taste'],
    ['water', 'post', 'skirt', 'boulevard', 'swine'],
    ['scoop', 'Robert Deniro', 'bronco', 'complain', 'haunt'],
    ['land', 'grease', 'bathroom', 'fight', 'hang up'],
    ['Pennsylvania', 'hog', 'mouth', 'channel', 'salon'],
    ['problem', 'dare', 'oral', 'Transylvania', 'name'],
    ['help', 'zero', 'foot', 'superior', 'dolly'],
    ['Tennesse', 'wardrobe', 'nip', 'sir', 'hood'],
    ['roast', 'words', 'sexy', 'water gun', 'stack'],
    ['locker', 'antler', 'mosque', 'take-out', 'canvas'],
    ['saliva', 'purell', 'cantaloupe', 'tour', 'calorie'],
    ['shorts', 'pipe', 'floor', 'windows', 'stamp'],
    ['speed', 'chips', 'fat', 'host', 'knee'],
    ['crash', 'fold', 'stray', 'make out', 'peg'],
    ['backyard', 'quartet', 'wedge', 'lock', 'broker'],
    ['sign language', 'Audi', 'pink eye', 'Spike Lee', 'mint']
  ];
  
var wordOne = document.querySelector('#wordone');
var wordTwo = document.querySelector('#wordtwo');
var wordThree = document.querySelector('#wordthree');
var wordFour = document.querySelector('#wordfour');
var wordFive = document.querySelector('#wordfive');
var btnOne = document.querySelector('#btn1');
var btnTwo = document.querySelector('#btn2');
var btnThree = document.querySelector('#btn3');
var btnFour = document.querySelector('#btn4');
var btnFive = document.querySelector('#btn5');
var wordCardLen = wordCard.length;
var wordCardIndex = 0;
var wordCardIndexLast = 0;
var correctCnt = 0;
var listFlag = false;


// **  Word Count Variables - start.
var words = 22;
var displayW = document.querySelector('#wordCnt');
var sliderW = document.querySelector('#slideWordCnt');
var WordCntBtn = document.querySelector('#BtnWordCnt');
var wordFlag = false;


// *** Countdown Timer Variables - start.
var sec = 45;
var displayT = document.querySelector('#timeCnt');
var sliderT = document.querySelector('#slideTimer');
var intervalID = null;
var TimeCntBtn = document.querySelector('#BtnTimeCnt');
var timeFlag = false;


// ****New Card Variables - start.
var NewCardBtn = document.querySelector('#BtnNewCard');
var displayN = document.querySelector('#newMsg');

// *****Instructions Variables - start
var startGameBut = document.querySelector('.but_start_game');
var startGameDiv = document.querySelector('#start_game');


// *   Word List function calls - start.
WordListBtnAction();


// **  Word Count function calls - start.
sliderW.oninput = function() {
    words = this.value;
    displayW.innerHTML = this.value;
  }


// *** Countdown Timer function calls - start.
sliderT.oninput = function() {
    sec = this.value;
    displayT.innerHTML = this.value;
  }


// *   Word List Event Listeners - start.
btnOne.addEventListener('click', btnOneAction);
btnTwo.addEventListener('click', btnOneAction);
btnThree.addEventListener('click', btnOneAction);
btnFour.addEventListener('click', btnOneAction);
btnFive.addEventListener('click', btnOneAction);


// **  Word Count Event Listeners - start.
WordCntBtn.addEventListener('click', WordCntBtnAction);


// *** Countdown Timer Event Listener - start.
TimeCntBtn.addEventListener('click', TimeCntBtnAction);


// ****New Card Event Listener - start.
NewCardBtn.addEventListener('click', NewCardBtnAction);

// *****Instruction Event Listener - start
startGameBut.addEventListener('click', hideDialog);


// *   Word List functions - start.
function WordListBtnAction() {
  wordCardIndex = Math.floor(Math.random() * wordCardLen);
  if (wordCardIndex === wordCardIndexLast) {
    if (wordCardIndex === wordCardLen) {
      wordCardIndex = 1;
    }
    else
    {
      wordCardIndex++;
    }
  }
  wordOne.innerHTML = (wordCard[wordCardIndex][0]);
  wordTwo.innerHTML = (wordCard[wordCardIndex][1]);
  wordThree.innerHTML = (wordCard[wordCardIndex][2]);
  wordFour.innerHTML = (wordCard[wordCardIndex][3]);
  wordFive.innerHTML = (wordCard[wordCardIndex][4]);
  wordCardIndexLast = wordCardIndex;
  btnReset();
}
  
function btnOneAction() {
  this.style.backgroundColor = '#90EE90';
  this.style.color = '#000';
  playBtn();
  correctCnt++;
  if (correctCnt === 5) {
    listFlag = true;
    checkStatus();
    playEnd();
  }
}
  
function btnReset() {
  for (var i = 1; i <= 5; i++) {
    document.querySelector('#btn' + i).style.backgroundColor = '#FF0000';
    document.querySelector('#btn' + i).style.color = '#FFF';
  }
}
  
function playBtn() { 
  var audio = new Audio('ding.mp3'); 
  audio.play(); 
}

function playEnd() { 
  var audio = new Audio('winner.mp3'); 
  audio.play(); 
}


// **  Word Count functions - start.
function WordCntBtnAction() {
  words--;
  displayW.innerHTML = words;
  if (words < 3) {
    displayW.style.color = "red";
  }
  if (words < 0) {
    displayW.innerHTML = "DONE!";
    wordFlag = true;
    checkStatus();
    play();
    WordCntBtn.classList.add("hide-me");
  }
}

function play() { 
var audio = new Audio('alarm-buzzer-2b.mp3'); 
audio.play(); 
} 


// *** Countdown Timer functions - start.
function TimeCntBtnAction() {
  TimeCntBtn.classList.add("hide-me");
  sliderT.classList.add("hide-me");
  sliderW.classList.add("hide-me");
  intervalID = setInterval(function() {
    displayT.innerHTML = sec;
    sec--;
    if (sec < 10) {
      displayT.style.color = "red";
    }
    if (sec <= 0) {
      displayT.innerHTML = "DONE!";
      timeFlag = true;
      checkStatus();
      play();
      setTimeout(function(){ clearInterval(intervalID); }, 1000);
    }
  }, 1000);
}


// ****New Card functions - start.
function NewCardBtnAction() {
  correctCnt = 0;
  words = 22;
  sec = 45;
  intervalID = null;
  listFlag = false;
  wordFlag = false;
  timeFlag = false;
  WordListBtnAction();
  sliderW.classList.remove("hide-me");
  WordCntBtn.classList.remove("hide-me");
  sliderT.classList.remove("hide-me");
  TimeCntBtn.classList.remove("hide-me");
  displayW.innerHTML = words;
  displayW.style.color = "black";
  displayT.innerHTML = sec;
  displayT.style.color = "black";
  displayN.style.visibility = 'hidden';
  sliderW.value = words;
  sliderT.value = sec;
} 

function checkStatus() {
  if (listFlag && !wordFlag && ! timeFlag) {
    clearInterval(intervalID);
    WordCntBtn.classList.add("hide-me");
    displayN.style.visibility = 'visible';
    displayN.innerHTML = "WON!";
  } else if (wordFlag && !listFlag && !timeFlag) {
    clearInterval(intervalID);
    displayN.style.visibility = 'visible'
    displayN.innerHTML = "LOOSE";
  } else if (timeFlag && !listFlag && !wordFlag) {
    WordCntBtn.classList.add("hide-me");
    displayN.style.visibility = 'visible';
    displayN.innerHTML = "LOOSE";
  }
}

// ***** Instruction function - Start
function hideDialog() {
  startGameBut.removeEventListener('click', hideDialog);
  startGameDiv.classList.toggle('fade');
  setTimeout(myHideIt, 2500);
  function myHideIt() {
    startGameDiv.style.display = 'none';
  }
}

