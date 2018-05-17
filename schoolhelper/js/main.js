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

  var ine = document.getElementById("scoreinput");
  var scoreamt = ine.value.length;
  var score = eval(ine.value.split('').join('+'));
  var avgscore = score/scoreamt;
  var wordfour1 = ""
  var wordfive1 = ""
  var wordfive2 = ""

  document.getElementById("avgscore").innerHTML = "Средний балл - "+Math.round(avgscore * 100) / 100+" = "+Math.round(avgscore);

  var fourfour = calculate(score,scoreamt,4,3.51);
  var fivefour = calculate(score,scoreamt,5,3.51);
  var fivefive = calculate(score,scoreamt,5,4.51);

  console.log(fourfour+" "+fivefour+" "+fivefive)

  if (fourfour.toString().slice(-1)==1) {
    wordfour1 = "четверку"
  }else if (fourfour.toString().slice(-1)<5&&fourfour.toString().slice(-1)>1) {
    wordfour1 = "четверки"
  }else {
    wordfour1 = "четверок"
  }

  if (fivefour.toString().slice(-1)==1) {
    wordfive1 = "пятерку"
  }else if (fivefour.toString().slice(-1)<5&&fivefour.toString().slice(-1)>1) {
    wordfive1 = "пятерки"
  }else {
    wordfive1 = "пятерок"
  }

  if (fivefive.toString().slice(-1)==1) {
    wordfive2 = "пятерку"
  }else if (fivefive.toString().slice(-1)<5&&fivefive.toString().slice(-1)>1) {
    wordfive2 = "пятерки"
  }else {
    wordfive2 = "пятерок"
  }

  console.log(fourfour+" "+fivefour+" "+fivefive)
  console.log("--------------------------------")
  if (ine.value != "") {
    if (avgscore<3.5 ) {
      document.getElementById("fives").innerHTML = "До четвёрки нужно получить еще "+fivefour+" "+wordfive1+" или "+fourfour+" "+wordfour1+"!";
      document.getElementById("mark").style.backgroundColor = "#3a3a3a";
      document.getElementById("mark").style.color = "#b1b1b1";
    }else {
      document.getElementById("fives").innerHTML = "Средний балл больше 3.5!";
      document.getElementById("mark").style.backgroundColor = "#c2d23a";
      document.getElementById("mark").style.color = "#fff";
    }

    if (avgscore<4.5) {
      document.getElementById("fives2").innerHTML = "До пятерки нужно получить еще "+fivefive+" "+wordfive2+"!";
      document.getElementById("mark2").style.backgroundColor = "#3a3a3a";
      document.getElementById("mark2").style.color = "#b1b1b1";
    }else {
      document.getElementById("fives2").innerHTML = "Средний балл больше 4.5!";
      document.getElementById("mark2").style.backgroundColor = "#c2d23a";
      document.getElementById("mark2").style.color = "#fff";
    }
  }else {
    document.getElementById("fives").innerHTML = " ";
    document.getElementById("mark").style.backgroundColor = "#3a3a3a";
    document.getElementById("mark").style.color = "#b1b1b1";
    document.getElementById("fives2").innerHTML = " ";
    document.getElementById("mark2").style.backgroundColor = "#3a3a3a";
    document.getElementById("mark2").style.color = "#b1b1b1";
  }
}
