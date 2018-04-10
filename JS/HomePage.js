document.getElementById('BreakfastH').addEventListener('mouseover', Breakwide)
document.getElementById('BreakfastH').addEventListener('mouseout', Breaknarrow)

function Breakwide(){

  document.getElementById('SnacksH').style.display = "none";
  document.getElementById('LunchH').style.display = "none";
  document.getElementById('DinnerH').style.display = "none";
  document.getElementById('DessertH').style.display = "none";
}
function Breaknarrow(){

  document.getElementById('SnacksH').style.display = "flex";
  document.getElementById('LunchH').style.display = "flex";
  document.getElementById('DinnerH').style.display = "flex";
  document.getElementById('DessertH').style.display = "flex";
}

document.getElementById('SnacksH').addEventListener('mouseover', Snackwide)
document.getElementById('SnacksH').addEventListener('mouseout', Snacknarrow)

function Snackwide(){
  document.getElementById('BreakfastH').style.display = "none";
  document.getElementById('LunchH').style.display = "none";
  document.getElementById('DinnerH').style.display = "none";
  document.getElementById('DessertH').style.display = "none";
}
function Snacknarrow(){
  document.getElementById('BreakfastH').style.display = "flex";
  document.getElementById('LunchH').style.display = "flex";
  document.getElementById('DinnerH').style.display = "flex";
  document.getElementById('DessertH').style.display = "flex";
}

document.getElementById('LunchH').addEventListener('mouseover', Lunchwide)
document.getElementById('LunchH').addEventListener('mouseout', Lunchnarrow)

function Lunchwide(){
  document.getElementById('BreakfastH').style.display = "none";
  document.getElementById('SnacksH').style.display = "none";
  document.getElementById('DinnerH').style.display = "none";
  document.getElementById('DessertH').style.display = "none";
}
function Lunchnarrow(){
  document.getElementById('BreakfastH').style.display = "flex";
  document.getElementById('SnacksH').style.display = "flex";
  document.getElementById('DinnerH').style.display = "flex";
  document.getElementById('DessertH').style.display = "flex";
}
