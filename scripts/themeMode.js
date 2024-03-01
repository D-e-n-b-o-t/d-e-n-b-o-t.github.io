function check_theme(){
    if (localStorage.getItem("theme") == null){
        localStorage.setItem("theme", "theme-light");
    };
}
function toggle_theme(){
    if(localStorage.getItem("theme") == "theme-light"){
        localStorage.setItem("theme", "theme-dark"); 
    }
    else{
        localStorage.setItem("theme", "theme-light");
    }
    document.documentElement.className = localStorage.getItem("theme");
}