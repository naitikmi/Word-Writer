window.addEventListener('load',start);

const clevel = 3;
let t = clevel;
let score = 0;
let istrue;

const Iword = document.querySelector("#wordinput");
const Cword = document.querySelector("#currentword");
const Dscore = document.querySelector("#currentscore")
const Dtime = document.querySelector("#remaintime");
const result = document.querySelector("#result");
const sec = document.querySelector("#giventime");


const words = [
    "listen", "talk", "speak", "write", "read", "explain", "question", "answer", "learn", "teach",
    "communicate", "conversation", "discussion", "chat", "message", "email", "letter", "note", "text",
    "phone", "call", "talk", "speak", "voice", "tone", "language", "speech", "dialogue", "expression",
    "gesture", "sign", "smile", "laugh", "cry", "empathy", "sympathy", "comprehend", "interpret", "exchange",
    "convey", "articulate", "emphasize", "clarify", "articulate", "compose", "correspond", "transmit", "converse",
    "dialogue", "discuss", "express", "communicative", "verbal", "nonverbal", "conversation", "dialogue", "interaction",
    "connection", "relationship", "interpersonal", "rapport", "bond", "relation", "association", "connection", "link",
    "tie", "interact", "engage", "relate", "connect", "associate", "communicative", "social", "community", "group",'hat', 'river', 'lucky', 'statue','generate','stubborn', 'cocktail', 'runaway', 'joke','developer', 'establishment','hero','javascript', 'nutrition', 'revolver', 'echo','siblings', 'investigate','horrendous','symptom','laughter','magic','master','space','definition'
  ];

function start(){
    sec.innerHTML = clevel ; 
    DisplayWord(words);
    Iword.addEventListener('input' , MatchWord);
    setInterval(countdown , 1000);
    setInterval(checkStatus, 50);
}

function MatchWord(){
    if(wordscomp()){
        istrue = true;
        t = clevel + 1;
        DisplayWord(words);
        Iword.value = '';
        score ++ ;
    }
    if(score === -1){
        Dscore.innerHTML = 0;
    }else {
        Dscore.innerHTML = score;
    }
}

function wordscomp(){
    if(Iword.value === Cword.innerHTML){
        result.innerHTML = 'Well Done!!!';
        return true;
    }else{
        result.innerHTML = '';
        return false;
    }
}

function DisplayWord(words){
    const rand = Math.floor(Math.random()*words.length);
    Cword.innerHTML = words[rand];
}

function countdown(){
    if(t>0){t--;}
    else if(t=== 0){istrue=false;}
    Dtime.innerHTML = t;
}

function checkStatus(){
    if(!istrue && t === 0){
        result.innerHTML = 'Play Again!!!';
        score = -1;
    }
}