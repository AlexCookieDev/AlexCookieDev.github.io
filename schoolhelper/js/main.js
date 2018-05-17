function CalculateFix() {
  var ine = document.getElementById("scoreinput");
  var scoreamt = ine.value.length;
  if (scoreamt>0) {
      var score = eval(ine.value.split('').join('+'));
      var avgscore = score/scoreamt;

      var newscore = score;
      var fiveamt = 0;
      var fouramt = 0;
      var newavgscore = 0;
      var newscoreamt = scoreamt;

      console.log("Кол-во - "+scoreamt);
      console.log("Сумма - "+score)
      console.log("Средн балл - "+avgscore)

      document.getElementById("avgscore").innerHTML = "Средний балл - "+Math.round(avgscore * 100) / 100+" = "+Math.round(avgscore);

      if (scoreamt >= 2) {

        console.log("-- Начало расчета --")

        for (fiveamt = 0; newavgscore < 3.51; fiveamt++) {
          newscoreamt++;
          newscore = newscore + 5;
          newavgscore = newscore/newscoreamt;
        }

        console.log("Нужно еще "+fiveamt+" пятерок")
        console.log(newscoreamt)
        console.log(newavgscore)
        document.getElementById("fives").innerHTML = "До четвёрки нужно еще "+fiveamt+" пятёрок и ваш средний балл будет "+Math.round(newavgscore * 100) / 100;
        console.log("-- -------------- --")

        newscore = score;
        fiveamt = 0;
        fouramt = 0;
        newavgscore = 0;
        newscoreamt = scoreamt;

        for (fiveamt = 0; newavgscore < 4.51; fiveamt++) {
          newscoreamt++;
          newscore = newscore + 5;
          newavgscore = newscore/newscoreamt;
        }

        console.log("Нужно еще "+fiveamt+" пятерок")
        console.log(newscoreamt)
        console.log(newavgscore)
        document.getElementById("fives2").innerHTML = "До пятерки нужно еще "+fiveamt+" пятёрок и ваш средний балл будет "+Math.round(newavgscore * 100) / 100;
        console.log("-- -------------- --")
      }
  }
}
