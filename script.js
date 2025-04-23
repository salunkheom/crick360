
        let balls = document.getElementById("balls");
        let overs = document.getElementById("overs");
        let run = document.getElementById("run");
        let cut = document.getElementById("cut");
        let wide = document.getElementById("wide");


        function Run(){
   runs.value = parseInt(runs.value) + 1;
        }

        function Cut(){
          runs.value = parseInt(runs.value) -1;
        }

        function Wide(){
           runs.value = parseInt(runs.value) + 1;
        }
        function Ball(){
            balls.value = parseInt(balls.value) + 1;
           
        }


        function Overs(){
            if (balls.value % 6 == 0) {
                overs.value = parseInt(overs.value) + 1;
                balls.value = 0;
            }
        }
        run.addEventListener("click", Run);
        cut.addEventListener("click", Cut);
        wide.addEventListener("click", Wide);                                               
        ball.addEventListener("click", Ball);                                               
        ball.addEventListener("click", Overs);                                               

