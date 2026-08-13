function initLpgCalc() {
  var calc = document.getElementById("lpgCalc");
  if (!calc) return;

  var mileage = document.getElementById("calcMileage");
  var consumption = document.getElementById("calcConsumption");
  var petrolPrice = document.getElementById("calcPetrolPrice");
  var lpgPrice = document.getElementById("calcLpgPrice");
  var consumptionIncrease = document.getElementById("calcConsumptionIncrease");
  var installCost = document.getElementById("calcInstallCost");
  var directInjection = document.getElementById("calcDirectInjection");
  var dotryskField = document.getElementById("calcDotryskField");
  var dotrysk = document.getElementById("calcDotrysk");

  var monthlyOut = document.getElementById("calcMonthlySavings");
  var yearlyOut = document.getElementById("calcYearlySavings");
  var paybackOut = document.getElementById("calcPayback");

  function formatPLN(value) {
    return Math.round(value).toLocaleString("pl-PL") + " zł";
  }

  function recalculate() {
    var km = parseFloat(mileage.value) || 0;
    var l100 = parseFloat(consumption.value) || 0;
    var pPrice = parseFloat(petrolPrice.value) || 0;
    var gPrice = parseFloat(lpgPrice.value) || 0;
    var incPct = parseFloat(consumptionIncrease.value) || 0;
    var cost = parseFloat(installCost.value) || 0;

    var petrolFraction = 0;
    if (directInjection.checked) {
      petrolFraction = (parseFloat(dotrysk.value) || 0) / 100;
    }
    var lpgFraction = 1 - petrolFraction;

    var lpgL100 = l100 * (1 + incPct / 100);
    var costPer100Petrol = l100 * pPrice;
    var costPer100OnGasMode = (lpgL100 * lpgFraction * gPrice) + (l100 * petrolFraction * pPrice);
    var savingsPer100 = costPer100Petrol - costPer100OnGasMode;

    var monthlyKm = km / 12;
    var monthlySavings = (savingsPer100 * monthlyKm) / 100;
    var yearlySavings = monthlySavings * 12;

    monthlyOut.textContent = formatPLN(Math.max(monthlySavings, 0));
    yearlyOut.textContent = formatPLN(Math.max(yearlySavings, 0));

    if (monthlySavings > 0 && cost > 0) {
      var months = cost / monthlySavings;
      if (months < 1) {
        paybackOut.textContent = "poniżej miesiąca";
      } else if (months <= 36) {
        paybackOut.textContent = Math.round(months) + " mies.";
      } else {
        paybackOut.textContent = (months / 12).toLocaleString("pl-PL", { maximumFractionDigits: 1 }) + " lat";
      }
    } else {
      paybackOut.textContent = "–";
    }
  }

  function toggleDirectInjection() {
    dotryskField.hidden = !directInjection.checked;
    recalculate();
  }

  [mileage, consumption, petrolPrice, lpgPrice, consumptionIncrease, installCost, dotrysk].forEach(function (input) {
    input.addEventListener("input", recalculate);
  });
  directInjection.addEventListener("change", toggleDirectInjection);

  recalculate();
  initSteppers(calc);
}

function initSteppers(scope) {
  scope.querySelectorAll(".lpg-calc__number").forEach(function (wrap) {
    var input = wrap.querySelector("input[type='number']");
    if (!input) return;

    function updateDisabled() {
      var value = parseFloat(input.value);
      var up = wrap.querySelector(".lpg-calc__step--up");
      var down = wrap.querySelector(".lpg-calc__step--down");
      up.disabled = input.max !== "" && !isNaN(value) && value >= parseFloat(input.max);
      down.disabled = input.min !== "" && !isNaN(value) && value <= parseFloat(input.min);
    }

    wrap.querySelectorAll(".lpg-calc__step").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var step = parseFloat(input.step) || 1;
        var min = input.min !== "" ? parseFloat(input.min) : -Infinity;
        var max = input.max !== "" ? parseFloat(input.max) : Infinity;
        var current = parseFloat(input.value) || 0;
        var next = btn.classList.contains("lpg-calc__step--up") ? current + step : current - step;
        next = Math.min(max, Math.max(min, next));

        var decimals = (String(step).split(".")[1] || "").length;
        input.value = next.toFixed(decimals);
        input.dispatchEvent(new Event("input", { bubbles: true }));
      });
    });

    input.addEventListener("input", updateDisabled);
    updateDisabled();
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initLpgCalc);
} else {
  initLpgCalc();
}
