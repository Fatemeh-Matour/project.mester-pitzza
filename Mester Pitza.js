document.addEventListener("DOMContentLoaded", function load() {
  document.getElementById("lblInput").style.visibility = "hidden";
  document.getElementById("img-icon").addEventListener("click", function (e) {
    document.getElementById("lblInput").style.visibility = "visible";
    document.querySelector(".welcome").style.visibility = "hidden";
  });
  document.getElementById("div-america").style.visibility = "hidden";
  document.getElementById("div-iran").style.visibility = "hidden";
  document.getElementById("div-italy").style.visibility = "hidden";

  document.querySelector(".america").addEventListener("mouseover", function () {
    document.getElementById("div-america").style.visibility = "visible";
    document.getElementById("div-iran").style.visibility = "hidden";
    document.getElementById("div-italy").style.visibility = "hidden";
  });

  document.querySelector(".iran").addEventListener("mouseover", function () {
    document.getElementById("div-iran").style.visibility = "visible";
    document.getElementById("div-america").style.visibility = "hidden";
    document.getElementById("div-italy").style.visibility = "hidden";
  });

  document.querySelector(".italy").addEventListener("mouseover", function () {
    document.getElementById("div-italy").style.visibility = "visible";
    document.getElementById("div-america").style.visibility = "hidden";
    document.getElementById("div-iran").style.visibility = "hidden";
  });

  document.getElementById("div-list-americapitzza").style.visibility =
    "visible";
  document.getElementById("div-list-iranpitzza").style.visibility = "hidden";
  document.getElementById("div-list-italy-pitzza").style.visibility = "hidden";
  document.querySelector(".title-line-america").style.visibility = "visible";
  document.querySelector(".title-line-iran").style.visibility = "hidden";
  document.querySelector(".title-line-italy").style.visibility = "hidden";

  document
    .querySelector(".america-pitzza")
    .addEventListener("click", function () {
      document.getElementById("div-list-americapitzza").style.visibility =
        "visible";
      document.getElementById("div-list-iranpitzza").style.visibility =
        "hidden";
      document.getElementById("div-list-italy-pitzza").style.visibility =
        "hidden";
      document.querySelector(".title-line-america").style.visibility =
        "visible";
      document.querySelector(".title-line-iran").style.visibility = "hidden";
      document.querySelector(".title-line-italy").style.visibility = "hidden";
    });
  document.querySelector(".iran-pitzza").addEventListener("click", function () {
    document.getElementById("div-list-americapitzza").style.visibility =
      "hidden";
    document.getElementById("div-list-iranpitzza").style.visibility = "visible";
    document.getElementById("div-list-italy-pitzza").style.visibility =
      "hidden";
    document.querySelector(".title-line-america").style.visibility = "hidden";
    document.querySelector(".title-line-iran").style.visibility = "visible";
    document.querySelector(".title-line-italy").style.visibility = "hidden";
  });
  document
    .querySelector(".italy-pitzza")
    .addEventListener("click", function () {
      document.getElementById("div-list-americapitzza").style.visibility =
        "hidden";
      document.getElementById("div-list-iranpitzza").style.visibility =
        "hidden";
      document.getElementById("div-list-italy-pitzza").style.visibility =
        "visible";

      document.querySelector(".title-line-america").style.visibility = "hidden";
      document.querySelector(".title-line-iran").style.visibility = "hidden";
      document.querySelector(".title-line-italy").style.visibility = "visible";
    });
  document.querySelector("#see-all").addEventListener("click", function () {
    mywindow = window.open("mesterpitzza2.html");
  });
});
