window.onload = function(){

    document.querySelector(".secondPage").style.display = "none";
    document.querySelector(".thirdPage").style.display = "none";
    document.querySelector(".fourthPage").style.display = "none";
    document.querySelector(".confirmPage").style.display = "none";
    
    let plan = document.getElementsByClassName("pan");
    let monYear = 'year';
    for (let i=0;i<plan.length;i+=1){
        plan[i].classList.add('toggleclass');
    }
    

    let goNext = document.getElementById("NextButton");
    let sgoNext = document.getElementById("SNextButton");
    let sgoBack = document.getElementById("SBackButton");
    let tgoNext = document.getElementById("TNextButton");
    let tgoBack = document.getElementById("TBackButton");
    let goBack = document.getElementById("BackButton");
    let confirm = document.getElementById("confirm");

    let monthSw = document.getElementById("sw");
    
    
    goNext.onclick = function() {
        document.querySelector(".firstPage").style.display = "none";
        document.querySelector(".secondPage").style.display = "";
        document.querySelector(".num1").classList.toggle("active");
        document.querySelector(".num2").classList.toggle("active");
        document.querySelector(".num11").classList.toggle("active");
        document.querySelector(".num22").classList.toggle("active");
    }


    monthSw.onclick = function() {
        if (monYear === 'year'){
            monYear = 'month';
        }else{
            monYear = 'year';
        }
        console.log(monYear);
        for (let i=0;i<plan.length;i+=1){
            plan[i].classList.toggle('toggleclass');
        }
    }

    sgoNext.onclick = function() {
        document.querySelector(".secondPage").style.display = "none";
        document.querySelector(".thirdPage").style.display = "";

        document.querySelector(".num2").classList.toggle("active");
        document.querySelector(".num3").classList.toggle("active");
        document.querySelector(".num22").classList.toggle("active");
        document.querySelector(".num33").classList.toggle("active");

        if(monYear === 'year'){
            document.querySelector(".my1").innerHTML= "+$10/yr";
            document.querySelector(".my2").innerHTML= "+$20/yr";
            document.querySelector(".my3").innerHTML= "+$20/yr";
        }
        else{
            document.querySelector(".my1").innerHTML= "+$1/mo";
            document.querySelector(".my2").innerHTML= "+$2/mo";
            document.querySelector(".my3").innerHTML= "+$2/mo";
        }
    }

    sgoBack.onclick = function() {
        document.querySelector(".firstPage").style.display = "";
        document.querySelector(".secondPage").style.display = "none";

        document.querySelector(".num1").classList.toggle("active");
        document.querySelector(".num2").classList.toggle("active");
        document.querySelector(".num11").classList.toggle("active");
        document.querySelector(".num22").classList.toggle("active");
    }

    tgoNext.onclick = function() {
        document.querySelector(".thirdPage").style.display = "none";
        document.querySelector(".fourthPage").style.display = "";

        document.querySelector(".num3").classList.toggle("active");
        document.querySelector(".num4").classList.toggle("active");
        document.querySelector(".num33").classList.toggle("active");
        document.querySelector(".num44").classList.toggle("active");


        if(monYear === 'year'){
            document.querySelector(".tot1").innerHTML= "+$90/yr";
            document.querySelector(".tot2").innerHTML= "+$10/yr";
            document.querySelector(".tot3").innerHTML= "+$20/yr";
            document.querySelector(".tot4").innerHTML= "+$120/yr";
        }
        else{
            document.querySelector(".tot1").innerHTML= "+$9/mo";
            document.querySelector(".tot2").innerHTML= "+$1/mo";
            document.querySelector(".tot3").innerHTML= "+$2/mo";
            document.querySelector(".tot4").innerHTML= "+$12/mo";
        }
    }

    tgoBack.onclick = function() {
        document.querySelector(".secondPage").style.display = "";
        document.querySelector(".thirdPage").style.display = "none";
        document.querySelector(".num2").classList.toggle("active");
        document.querySelector(".num3").classList.toggle("active");
        document.querySelector(".num22").classList.toggle("active");
        document.querySelector(".num33").classList.toggle("active");
    }

    goBack.onclick = function() {
        document.querySelector(".thirdPage").style.display = "";
        document.querySelector(".fourthPage").style.display = "none";
        document.querySelector(".num3").classList.toggle("active");
        document.querySelector(".num4").classList.toggle("active");
        document.querySelector(".num33").classList.toggle("active");
        document.querySelector(".num44").classList.toggle("active");
    }


    confirm.onclick = function() {
        document.querySelector(".confirmPage").style.display = "";
        document.querySelector(".fourthPage").style.display = "none";
    }



}
