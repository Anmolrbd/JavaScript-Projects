const getpassword = document.getElementById("getpassword");
const copybutton = document.getElementById("copybutton");
const generatepassword = document.getElementById("generatepassword");
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
const range = document.getElementById("range");
const lengthvalue = document.getElementById("lengthvalue");
const decrease = document.getElementById("decrease");
const increase = document.getElementById("increase");
const textcontainer =document.getElementById("textcontainer");
let currentPassword = "";

lengthvalue.textContent = range.value
decrease.addEventListener('click',()=>{
    if(lengthvalue.textContent >1){ 
    lengthvalue.textContent--;
    range.value--;
    }
    else{
        lengthvalue.textContent = 1;
    }
    
})
increase.addEventListener('click',()=>{
    if(lengthvalue.textContent <20){
        lengthvalue.textContent++;
        range.value++;
    }else{
        lengthvalue.textContent = 20;
    }
    
    
})
range.addEventListener('input',(event)=>{
    lengthvalue.textContent = event.target.value;
})
function renderpage(){
    getpassword.value = "";
    generatepasswordfunction();
}
function createpassword(){
    let newpassword ="";
    for(let i = 1; i<= lengthvalue.textContent; i++){
        newpassword += characters[(Math.floor(Math.random() * 72))];
    }
    return newpassword;
}
function generatepasswordfunction(){
    generatepassword.addEventListener('click', () => {
    currentPassword = createpassword(range.value);
    getpassword.value = currentPassword;
});
   copybutton.addEventListener('click', async () => {
    if (!currentPassword) return; 
    try {
        await navigator.clipboard.writeText(currentPassword);

        const message = document.createElement('span');
        message.innerText = "Copied!";
        message.className = "absolute top-4 right-1 text-green-400 font-semibold";
        copybutton.appendChild(message);

        setTimeout(() => {
            copybutton.removeChild(message);
        }, 1000);

    } catch (error) {
        alert("Failed to copy.");
    }
});
   
}
renderpage();
