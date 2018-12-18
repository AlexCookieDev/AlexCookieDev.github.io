function CalculateFix() {
  function calculate(cur,numb,step,goal) {
    var avg = cur/numb;
    if (avg < goal) {
      for (steps = 0; avg < goal; steps++) {
        numb++;
        cur = cur + step;
        avg = cur/numb;
      }
      return steps;
    }
    else {
      return 0;
    }
  }

  setTimeout(function () {
        let viewheight = $(window).height();
        let viewwidth = $(window).width();
        let viewport = document.querySelector("meta[name=viewport]");
        viewport.setAttribute("content", "height=" + viewheight + "px, width=" + viewwidth + "px, initial-scale=1.0");
    }, 300);

  var ine = document.getElementById("scoreinput");
  var scoreamt = ine.value.length;
  var score = eval(ine.value.split('').join('+'));
  var avgscore = score/scoreamt || 0;
  var wordfour1 = ""
  var wordfive1 = ""
  var wordfive2 = ""

  document.getElementById("avgscore").innerHTML = Math.round(avgscore * 100) / 100;

  var fourfour = calculate(score,scoreamt,4,3.51);
  var fivefour = calculate(score,scoreamt,5,3.51);
  var fivefive = calculate(score,scoreamt,5,4.51);

  console.log(fourfour+" "+fivefour+" "+fivefive)

  if (fourfour.toString().slice(-1)==1) {
    wordfour1 = "четверка"
  }else if (fourfour.toString().slice(-1)<5&&fourfour.toString().slice(-1)>1) {
    wordfour1 = "четверки"
  }else {
    wordfour1 = "четверок"
  }

  if (fivefour.toString().slice(-1)==1) {
    wordfive1 = "пятерка"
  }else if (fivefour.toString().slice(-1)<5&&fivefour.toString().slice(-1)>1) {
    wordfive1 = "пятерки"
  }else {
    wordfive1 = "пятерок"
  }

  if (fivefive.toString().slice(-1)==1) {
    wordfive2 = "пятерка  "
  }else if (fivefive.toString().slice(-1)<5&&fivefive.toString().slice(-1)>1) {
    wordfive2 = "пятерки"
  }else {
    wordfive2 = "пятерок"
  }

  console.log(fourfour+" "+fivefour+" "+fivefive)
  console.log("--------------------------------")
  if (ine.value != "") {
    if (avgscore<3.51 ) {
      document.getElementById("fours").innerHTML = fourfour;
      document.getElementById("fives1").innerHTML = fivefour;

      for (i = 0; i < document.getElementsByClassName("chetverki").length; i++) {
        document.getElementsByClassName("chetverki")[i].style.display = 'block';
      }
    }else {
      document.querySelectorAll("fives1").innerHTML = 0;

      for (i = 0; i < document.getElementsByClassName("chetverki").length; i++) {
        document.getElementsByClassName("chetverki")[i].style.display = 'none';
      }
    }

    if (avgscore<4.51) {
      document.getElementById("fives2").innerHTML = fivefive;

      for (i = 0; i < document.getElementsByClassName("pyaterki").length; i++) {
        document.getElementsByClassName("pyaterki")[i].style.display = 'block';
      }
    }else {
      document.getElementById("fives2").innerHTML = 0;

      for (i = 0; i < document.getElementsByClassName("pyaterki").length; i++) {
        document.getElementsByClassName("pyaterki")[i].style.display = 'none';
      }
    }
  }else {
    document.getElementById("fives").innerHTML = "";
    document.getElementById("fives2").innerHTML = "";
  }
}
