const quizcontainer = document.getElementById('quizcontainer');
const questionlists = [{questions: "1. What is the largest animal in the world?", options : ["Shark","Blue Whale", "Tiger","Elephant"], answer: "2"}, {questions: "2. Which is the smallest country in the world?", options: ["Vatican City","Nepal","Bhutan","Sri Lanka"], answer: "1"}, {questions: "3. Which is the largest desert in the world?", options: ["Kalahari","Gabi","Sahara","Antartica"], answer:"4"},{questions: "4. Which is the samllest continent in the world?", options: ["Asia","Australia","Europe","Africa"], answer: "2"},{questions: "5. Which planet is closest to the Sun?", options: ["Mercury", "Neptune","Earth", "Mars"], answer:"1"}];
 quizcontainer.className = "flex flex-col gap-4"
 let currentIndex = 0;
 let score = 0;
function renderQuiz(){
    if (currentIndex >= questionlists.length){
        quizcontainer.innerHTML = "";
        let p = document.createElement('p');
        p.innerHTML = `You have scored ${score} out of 5`;
        p.className = "ml-5 mt-3 font-semibold text-[18px]"
        quizcontainer.appendChild(p);
        const restartbutton = document.createElement('button');
        restartbutton.innerText = "Restart";
        restartbutton.className = "w-[100px] text-center m-auto bg-[#020240] py-1 rounded-md text-white hover:text-gray-300 ";
        quizcontainer.appendChild(restartbutton);
        restartbutton.addEventListener('click',()=>{
            currentIndex = 0;
            score = 0;
            renderQuiz();
        })
        return;
    }
    quizcontainer.innerHTML = "";
    let p = document.createElement('p');
    p.className = "ml-5 mt-3 font-semibold text-[18px]"
    p.innerHTML = questionlists[currentIndex].questions ;
    quizcontainer.appendChild(p);
    questionlists[currentIndex].options.forEach((value,index)=>{
        let button = document.createElement('button');
        button.className = "border border-black w-[92%] ml-5 rounded text-left pl-2 py-1 mb-2 hover:bg-gray-300 option"
        button.innerHTML = value;
        quizcontainer.append(button)
        const nextbutton = document.createElement('button');
        nextbutton.textContent = "Next";
        nextbutton.className = "w-[180px]  m-auto bg-[#020240] py-1 rounded-md text-white hidden";
        
        button.addEventListener('click',()=> {
            quizcontainer.appendChild(nextbutton);
            const allbuttons = document.querySelectorAll('.option');
            
            let result = checkanswer(index + 1);
            if(result){
                button.className += " bg-green-300";
              
            } else{
                button.className += " bg-red-300";
               
            }
            allbuttons.forEach((b)=>{
                b.disabled = true;
                b.classList.remove("hover:bg-gray-300");
                 
            })
            nextbutton.classList.remove("hidden");
            nextbutton.disabled = false
           nextbutton.addEventListener('click',()=>{
            currentIndex++;
            renderQuiz();
           } )
        })
    })
    
    
}
function checkanswer(index){
    let correctanswer = questionlists[currentIndex].answer;
    if(correctanswer == index){
        score++;
        return true;
        
    }else
        return false;
}

renderQuiz();


