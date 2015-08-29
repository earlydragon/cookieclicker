console.log("HEY I'M RELEVANT!")

var income = 0;
var name = "Dimension";
var currencyDC = 0;
var time = 0;
var clicks = 0;

var dirtQuantity = 0;
var dirtPrice = 10;
var dirtPriceInc = 0.25;
var dirtIncome = 1;

var stoneQuantity = 0;
var stonePrice = 40;
var stonePriceInc = 1;
var stoneIncome = 5;

var mineralsQuantity = 0;
var mineralsPrice = 300;
var mineralsPriceInc = 10;

var metalsQuantity = 0;
var metalsPrice = 1000;
var metalsPriceInc = 25;

var waterQuantity = 0;
var waterPrice = 2000;
var waterPriceInc = 50;

var lightQuantity = 0;
var lightPrice = 5000;
var lightPriceInc = 100;

var airQuantity = 0;
var airPrice = 10000;
var airPriceInc = 200;

var cellQuantity = 0;
var cellPrice = 100000;
var cellPriceInc = 500;

$(document).ready(function(){

  $("#clickWormhole").click(function(){
    currencyDC = currencyDC + .25;
      $(".money2").html(currencyDC);
      clicks++;
      if(clicks == 10){
        currencyDC += income
        $(".income2").text(income);
        clicks = 0;
      }
  });

  $("#dirt").click(function(){
    if(currencyDC >= dirtPrice){
      income += dirtIncome;
      $(".income2").text(income);
      dirtQuantity++;
      $(".damount").text(dirtQuantity);
      currencyDC -= dirtPrice;
      $(".money2").text(currencyDC);
      dirtPrice += dirtPriceInc;
      dirtPriceInc *= 2;
      $(".dirtInfoPri").text("The cost of this is $" + dirtPrice);
    }
    if(dirtQuantity >= 10){
      $(".dirt-upgrade").css("visibility", "visible");
    }
    else{console.log("Could not complete transaction")}
  });

  $(".dirt-upgrade").click(function(){
    if(dirtQuantity >= 10){
      if(currencyDC >= 1000){
        currencyDC -= 1000;
        dirtIncome += 4;
        income += dirtIncome * dirtQuantity - dirtQuantity;
        $(".dirtInfoIn").text("Increases Income by " + dirtIncome);
        $(".dirt-upgrade").remove();
        $(".income2").text(income);
        $(".money2").text(currencyDC);
      }
    }
  });

  $("#stone").click(function(){
    if(currencyDC >= stonePrice){
      income += 5;
      $(".income2").text(income);
      stoneQuantity++;
      $(".samount").text(stoneQuantity);
      currencyDC -= stonePrice;
      $(".money2").text(currencyDC);
      stonePrice += stonePriceInc;
      stonePriceInc *= 2;
      $(".stoneInfoPri").text("The cost of this is $" + stonePrice);
    }
    else{console.log("Could not complete transaction")}
  });

  $("#minerals").click(function(){
    if(currencyDC >= mineralsPrice){
      income += 20;
      $(".income2").text(income);
      mineralsQuantity++;
      $(".gamount").text(mineralsQuantity);
      currencyDC -= mineralsPrice;
      $(".money2").text(currencyDC);
      mineralsPrice += mineralsPriceInc;
      mineralsPriceInc *= 2;
      $(".gemsInfoPri").text("The cost of this is $" + mineralsPrice);
    }
    else{console.log("Could not complete transaction")}
  });

  $("#metals").click(function(){
    if(currencyDC >= metalsPrice){
      income += 80;
      $(".income2").text(income);
      metalsQuantity++;
      $(".meamount").text(metalsQuantity);
      currencyDC -= metalsPrice;
      $(".money2").text(currencyDC);
      metalsPrice += metalsPriceInc;
      metalsPriceInc *= 2;
      $(".metalsInfoPri").text("The cost of this is $" + metalsPrice);
    }
    else{console.log("Could not complete transaction")}
  });

  $("#water").click(function(){
    if(currencyDC >= waterPrice){
      income += 150;
      $(".income2").text(income);
      waterQuantity++;
      $(".wamount").text(waterQuantity);
      currencyDC -= waterPrice;
      $(".money2").text(currencyDC);
      waterPrice += waterPriceInc;
      waterPriceInc *= 2;
      $(".watersInfoPri").text("The cost of this is $" + waterPrice);
    }
    else{console.log("Could not complete transaction")}
  });

  $("#light").click(function(){
    if(currencyDC >= lightPrice){
      income += 300;
      $(".income2").html(income);
      lightQuantity++;
      $(".lamount").text(lightQuantity);
      currencyDC -= lightPrice;
      $(".money2").html(currencyDC);
      lightPrice += lightPriceInc;
      lightPriceInc *= 2;
      $(".lightsInfoPri").text("The cost of this is $" + lightPrice);
    }
    else{console.log("Could not complete transaction")}
  });

  $("#air").click(function(){
    if(currencyDC >= airPrice){
      income += 500;
      $(".income2").html(income);
      airQuantity++;
      $(".aamount").text(airQuantity);
      currencyDC -= airPrice;
      $(".money2").html(currencyDC);
      airPrice += airPriceInc;
      airPriceInc *= 2;
      $(".airsInfoPri").text("The cost of this is $" + airPrice);
    }
    else{console.log("Could not complete transaction")}
  });

  $("#cell").click(function(){
    if(currencyDC >= cellPrice){
      income += 1000;
      $(".income2").html(income);
      cellQuantity++;
      $(".ceamount").text(cellQuantity);
      currencyDC -= cellPrice;
      $(".money2").html(currencyDC);
      cellPrice += cellPriceInc;
      cellPriceInc *= 2;
      $(".cellsInfoPri").text("The cost of this is $" + cellPrice);
    }
    else{console.log("Could not complete transaction")}
  });

});