var dir = "/AbstractArt/images/";
var fileList = [""];
fileList.sort();

for(var i = 0; i < fileList.length; i++) {
    if(fileList[i] !== "") {
        var filename = fileList[i]
        var div = document.createElement("div");
        var rndNum = Math.floor((Math.random() * 6) + 1);
        if(rndNum == 1 || rndNum == 2 || rndNum == 3) {
            div.setAttribute("class", "sizeOne tile");
        } else if(rndNum == 4 || rndNum == 5) {
            div.setAttribute("class", "sizeTwo tile");
        } else if(rndNum == 6) {
            div.setAttribute("class", "sizeThree tile");
        }
        div.setAttribute("id", "image" + (i * 33));
        div.style.backgroundImage = 'url(' + dir + filename + ')';
        div.content = "&nbsp";
        div.onclick = function() {model(this.id)};
        document.getElementById("flexBox").appendChild(div);
    }
}
