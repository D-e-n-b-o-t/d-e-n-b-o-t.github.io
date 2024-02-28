function set_iframe(sig, url){
    let element = document.getElementById('frame-holder');
    let iframe = document.createElement("iframe");
    iframe.setAttribute("src",url);
    iframe.setAttribute("id", "frame-holder");
    element.replaceWith(iframe);


}