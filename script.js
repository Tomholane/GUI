var settingsmenu = document.querySelector(".setting-menu");
var dropdowns = document.querySelector(".dropdown");
var inputef = document.querySelector(".search-box")
var darkBtn = document.getElementById("dark-btn");
var dr = document.getElementById("dr")

function SettingsMenuToggle()
{
    settingsmenu.classList.toggle("settings-menu-height");
}
function DropDownToggle()
{

   
    inputef.classList.toggle("alo")
    dropdowns.classList.toggle("dropdown-on");
}
function DropDownToggle2()
{
    inputef.classList.remove("alo")
    dropdowns.classList.remove("dropdown-on");
    check = false
}

darkBtn.onclick = function()
{
    darkBtn.classList.toggle("dark-btn-on")
    document.body.classList.toggle("dark-theme");
}