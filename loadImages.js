var dir = "/home/anton/private/course/webbutveckling/AbstractArt/images/";
var fileList = ["a_red_2.jpg", "a_red_3.jpg", "b_orange_6.jpg", "b_orange_8.jpg", "_9.jpg", "b_orange_10.jpg", "b_orange_11.jpg", "d_green_12.jpg", "g_purple_13.jpg", "b_orange_14.jpg", "h_pink_15.jpg", "h_pink_16.png", "f_blue_18.jpg", "b_orange_19.jpg", "f_blue_21.jpg", "b_orange_22.jpg", "a_red_23.jpg", "a_red_24.jpg", "f_blue_25.jpg", "a_red_26.jpg", "g_purple_27.jpg", "g_purple_29.jpg", "b_orange_30.jpg", "b_orange_31.jpg", "b_orange_32.jpg", "f_blue_33.jpg", "f_blue_35.jpg", "f_blue_37.jpg", "a_red_38.jpg", "f_blue_39.jpg", "a_red_40.jpg", "a_red_41.jpg", "f_blue_42.jpg", "f_blue_43.jpg", "b_orange_44.jpg", "a_red_45.jpg", "g_purple_46.png", "b_orange_47.jpg", "a_red_48.jpg", ""];
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