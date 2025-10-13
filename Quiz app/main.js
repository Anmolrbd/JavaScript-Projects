const getquizcontainerID = document.getElementById('quizcontainer');
const questionlists = [{questions: "1. What is the largest animal in the world?", options : ["Shark","Blue Whale", "Tiger","Elephant"], answer: "2"}, {questions: "2. Which is the smallest country in the world?", options: ["Vatican City","Nepal","Bhutan","Sri Lanka"], answer: "1"}, {questions: "3. Which is the largest desert in the world?", options: ["Kalahari","Gabi","Sahara","Antartica"], answer:"4"},{questions: "4. Which is the samllest continent in the world?", options: ["Asia","Australia","Europe","Africa"], answer: "2"},{question: "5. Which planet is closest to the Sun?", options: ["Mercury", "Neptune","Earth", "Mars"], answer:"1"}];
 getquizcontainerID.className = "flex flex-col gap-4"
function renderQuiz(){
    let currentIndex = 0;
    let displayqquestion = questionlists[currentIndex].questions
    let p = document.createElement('p');
    p.className = "m-5 font-semibold text-[18px]"
    p.innerHTML = displayqquestion ;
    let button1 = document.createElement('button');
    let button2 = document.createElement('button');
    let button3 = document.createElement('button');
    let button4 = document.createElement('button');
    button1.className = "border border-black w-[92%] ml-5 rounded text-left pl-2 py-1 mb-2 hover:bg-gray-300"
    button1.innerHTML = questionlists[currentIndex].options[0];

    button2.innerHTML = questionlists[currentIndex].options[1];
    button2.className = "border border-black w-[92%] ml-5 rounded text-left pl-2 py-1 mb-2 hover:bg-gray-300"

    button3.innerHTML = questionlists[currentIndex].options[2];
    button3.className = "border border-black w-[92%] ml-5 rounded text-left pl-2 py-1 mb-2 hover:bg-gray-300"

    button4.innerHTML = questionlists[currentIndex].options[3];
    button4.className = "border border-black w-[92%] ml-5 rounded text-left pl-2 py-1 mb-2 hover:bg-gray-300"
    
    quizcontainer.appendChild(p);
    quizcontainer.appendChild(button1)
    quizcontainer.appendChild(button2)
    quizcontainer.appendChild(button3)
    quizcontainer.appendChild(button4)
    button1.classList.add("option");
    button2.classList.add("option");
    button3.classList.add("option");
    button4.classList.add("option");

function clickbutton(){
    const buttons = document.querySelectorAll('.option');
    buttons.forEach((btn,index)=>{
        btn.addEventListener('click',()=>{
          let check =  checkanswer(index + 1);
            
            
        })
    })
}
function checkanswer(index){
    
}
}
renderQuiz();

