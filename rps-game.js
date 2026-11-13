let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

 const  genComputerchoice = () =>{
    const option = ["rock ", "paper", "scissors"];
     const ranId = Math.floor(Math.random()*3);
     return option[ranId];
 }

const playgame=(userchoice) =>
{
   console.log("user choice =", userchoice);


const compchoice=genComputerchoice();

   console.log("computer choice =", compchoice);
};

choices.forEach((choice) =>{
    console.log(choice);
    choice.addEventListener("click",() => {
        const userchoice =choice.getAttribute("id");
        console.log("choices was click", userchoice);

    });
});
