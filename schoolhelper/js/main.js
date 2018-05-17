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

  document.getElementById("avgscore").innerHTML = "Средний балл - "+Math.round(avgscore * 100) / 100+" = "+Math.round(avgscore);
  document.getElementById("fives").innerHTML = "До четвёрки нужно еще "+calculate(score,scoreamt,5,3.51)+" пятёрок или "+calculate(score,scoreamt,4,3.51)+" четверок!";
  document.getElementById("fives2").innerHTML = "До пятерки нужно еще "+calculate(score,scoreamt,5,4.51)+" пятёрок!";
}
