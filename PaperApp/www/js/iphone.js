
window.onload=
    function showiphonecss() {
        var stylesheet = document.createElement('link');
        stylesheet.rel = "stylesheet";
        stylesheet.type = "text/css";
        stylesheet.media = "all";
        stylesheet.href = "css/iphone.css";
        document.getElementsByTagName("head")[0].appendChild(stylesheet);

    }
