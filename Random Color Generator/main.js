
        const clickstart = document.getElementById("Start");
        const clickstop = document.getElementById("Stop");
        const min = 0;
        const max = 255;
        function generatecolor() {
            const randomvalue = ()=> Math.floor(Math.random() *256);
            let red = randomvalue();
       let green = randomvalue();
       let blue = randomvalue();
        const hex = (hexchange)=> hexchange.toString(16).padStart(2,"0");

      
       const hexcode = `#${hex(red)}${hex(green)}${hex(blue)}`
       return hexcode;
        }

       const randomcolor = function (){
        let getcolor = 0;
        getcolor = generatecolor();
        document.body.style.backgroundColor = getcolor;
       }
       let startgenerating ;
     clickstart.addEventListener('click', ()=>{
        if(!startgenerating){
            startgenerating = setInterval(randomcolor,1000);
        }
        
       });

       clickstop.addEventListener('click',()=>{
        clearInterval(startgenerating);
        startgenerating = null;
       });
