var images = new Array();
function preload() {
    for (var i = 0; i < preload.arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
    }
}
preload(
    "../images/homepage/pink.jpg",
    "../images/homepage/whitehusky.jpg"
);
