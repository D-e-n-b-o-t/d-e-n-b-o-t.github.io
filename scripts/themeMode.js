function check_theme(){
    if (localStorage.getItem("theme") == null){
        localStorage.setItem("theme", "theme-light");
    }
    set_theme();
}
function toggle_theme(){
    if(localStorage.getItem("theme") == "theme-light"){
        localStorage.setItem("theme", "theme-dark"); 
    }
    else{
        localStorage.setItem("theme", "theme-light");
    }
    set_theme();
}

function set_theme(){
    document.documentElement.className = localStorage.getItem("theme");
    let elem = document.getElementById("theme-toggler")
    elem.innerHTML = localStorage.getItem("theme");
}