function myFunction(){

  var btnText = document.getElementById('change-css');
  var changeCss = document.getElementById('make-it-fancy');

  if (btnText.firstChild.data == "CSS hinzufügen"){
    btnText.firstChild.data = "CSS löschen";
    changeCss.setAttribute("class", "fancy");
  }

  else {
    btnText.firstChild.data = "CSS hinzufügen";
    changeCss.classList.remove("fancy");
  }
}
