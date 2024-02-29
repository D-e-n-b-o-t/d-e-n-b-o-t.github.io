function set_iframe(url){
    let element = document.getElementById('frame-holder');
    if (typeof element.src != 'undefined'){
        if (element.src.endsWith(url) == true){
            return;
        }
    }
    let iframe = document.createElement("iframe");
    iframe.setAttribute("src",url);
    iframe.setAttribute("id", "frame-holder");
    element.replaceWith(iframe);


}