<!DOCTYPE html>
<html>
    <head>
        <title>ROCK PAPER SCISSOR</title>
    </head>
    <body>
        <p>RPS</p>
        <button onclick="
            let computermove='';
            game('rock');
        ">Rock</button>
            
        <button onclick="
            game('Paper'); 
        ">Paper</button>

         <button onclick="
            game('scissor')
        ">scissor</button>

        <script>
            function game(name){
                randomNumber = Math.random();
       
            if(randomNumber <= 0.3) {
                computermove='rock';
            }
            else if(randomNumber <=0.6 && randomNumber >0.3)
            {
                 computermove='Paper';
            }
            else{
                 computermove='scissor';
            }
            result='';
            
            
            if((computermove=='rock' && name =='Paper') || (computermove=='Paper' && name =='scissor') || (computermove=='scissor' && name =='rock')) result='you win';
            else if(computermove===name)

                result='it was Tie';
            else
                result='you lost';
           

            alert(`You picked ${name}, Computer picked ${computermove} and ${result}`);

                }        
        </script>
    </body>
</html>
