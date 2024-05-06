const questions =[
    {
        question:"What is another word which means the same as ‘nomadic’?",
        answer:[
            {text:"Wild",correct:false},
            {text:"Barbarous",correct:false},
            {text:"Brave",correct:false},
            {text:"Roving",correct:true},
        ]
    },
    {
        question:" Find the word which has the same meaning as ‘cleave’.",
        answer:[
            {text:" Big",correct:false},
            {text:"Cut",correct:true},
            {text:"Little",correct:false},
            {text:"Green",correct:false},
        ]
    },
    {
        question:"Fill the blank with the appropriate word: ‘The decision will ___ the entire nation.’",
        answer:[
            {text:"Impact",correct:true},
            {text:"Impress",correct:false},
            {text:"Implant",correct:false},
            {text:"Implement",correct:false},
        ]
    },
    {
        question:" What is another word for ‘precarious’?",
        answer:[
            {text:"Secure",correct:false},
            {text:"Exalted",correct:false},
            {text:"Uncertain",correct:true},
            {text:"Important",correct:false},
        ]
    },
    {
        question:"What is the synonym of the word ‘Parochial’?",
        answer:[
            {text:"Abstract",correct:false},
            {text:"Unorthodox",correct:false},
            {text:"Baffling",correct:false},
            {text:"Conservative",correct:true},
        ]
    },
    {
        question:"Find the word that has the same meaning as ‘Impoverished’.",
        answer:[
            {text:"Destitute",correct:true},
            {text:"Indolent",correct:false},
            {text:"Affluent",correct:false},
            {text:"Inane",correct:false},
        ]
    },
    {
        question:"Which of the following word means to recede back?",
        answer:[
            {text:"Come",correct:false},
            {text:"Forward",correct:false},
            {text:"Retreat",correct:true},
            {text:"Move",correct:false},
        ]
    },
    {
        question:"What word corresponds to the meaning of being implied without being stated.",
        answer:[
            {text:"Hostile",correct:false},
            {text:"Tacit",correct:true},
            {text:"Overt",correct:false},
            {text:"Generic",correct:false},
        ]
    },
    {
        question:"Select the right antonym of the word ‘amicable’.",
        answer:[
            {text:"Grumpy",correct:true},
            {text:"Friendly",correct:false},
            {text:"Pleasant",correct:false},
            {text:"Affable",correct:false},
        ]
    },
    {
        question:"Find the word which is a synonym for ‘berated’.",
        answer:[
            {text:"Praised",correct:false},
            {text:"Supervised",correct:false},
            {text:"Reproached",correct:true},
            {text:"Detained",correct:false},
        ]
    },
    {
        question:"What word is the opposite of ‘counterfeit’?",
        answer:[
            {text:"Fraudulent",correct:false},
            {text:"Cheat",correct:false},
            {text:"Deceit",correct:false},
            {text:"Genuine",correct:true},
        ]
    },
    {
        question:" What is the antonym of the word ‘intrepid’?",
        answer:[
            {text:"Cowardly",correct:false},
            {text:"Courageous",correct:true},
            {text:"Fearful",correct:false},
            {text:"Timid",correct:false},
        ]
    },
    {
        question:"Choose the word which means the opposite of ‘quench’.",
        answer:[
            {text:"Parch",correct:true},
            {text:"Douse",correct:false},
            {text:"Extinguish",correct:false},
            {text:"Smother",correct:false},
        ]
    },
    {
        question:"She wasn’t feeling well, so she was ___ to go to the evening party. What word should be used to fill in the blank?",
        answer:[
            {text:"Reliant",correct:false},
            {text:"Reluctant",correct:true},
            {text:"Relinquished",correct:false},
            {text:"Resistance",correct:false},
        ]
    },
    {
        question:" He fired his assistant for accessing his files without his ___. What word is appropriate for the blank?",
        answer:[
            {text:"Consensus",correct:false},
            {text:"Contempt",correct:false},
            {text:"Consent",correct:true},
            {text:"Concede",correct:false},
        ]
    },
    {
        question:"Pick the option which is the antonym for ‘vicious’.",
        answer:[
            {text:"Passive",correct:false},
            {text:"Savage",correct:false},
            {text:"Merciless",correct:false},
            {text:"Cordial",correct:true},
        ]
    },
    {
        question:"What word has the same meaning as ‘hostility’?",
        answer:[
            {text:"Cynosure",correct:false},
            {text:"Antagonism",correct:true},
            {text:"Support",correct:false},
            {text:"Behemoth",correct:false},
        ]
    },
    {
        question:"What word is used for someone ‘practising living like a hermit’?",
        answer:[
            {text:"Ascetic",correct:true},
            {text:"Raconteur",correct:false},
            {text:"Aesthetic",correct:false},
            {text:"Eclectic",correct:false},
        ]
    },
    {
        question:" Select the right word which means ‘something huge’.",
        answer:[
            {text:"Collusion",correct:false},
            {text:"Behemoth",correct:true},
            {text:"Trivial",correct:false},
            {text:"Piety",correct:false},
        ]
    },
    {
        question:"What is the antonym of ‘amass’?",
        answer:[
            {text:"Relegate",correct:false},
            {text:"Digress",correct:false},
            {text:"Assemble",correct:false},
            {text:"Dissipate",correct:true},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    let currentQuestionIndex = 0;
    let score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}
function resetState() {
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct ==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
    
}
nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        // Quiz has ended, display score or perform other actions
        alert("Quiz Ended. Your Score: " + score);
    }
});
startQuiz();