/*var dir = "/AbstractArt/images/";
var fileextension = [".jpg", ".png", ".bmp", ".gif", ".tif"];
var fileList = [];

$.ajax({url: dir,
		success: function(data) {
			var index = 0;
			$(fileextension).each(function() {
				$(data).find("a:contains(" + fileextension[index] + ")").each(function() {
					if(fileList.indexOf(this.href.replace(window.location.host, "").replace("https://", "")) == -1) {
						fileList.push(this.href.replace(window.location.host, "").replace("https://", ""));
					}
				});
				index = index + 1;
			});
			fileList.sort();
			
			for(var i = 0; i < fileList.length; i++) {
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
});*/
var dir = "/AbstractArt/images/";
var fileList = ["a_red_11.jpg", "a_red_3.jpg", "e_cyan_4.jpg", "g_purple_1.jpg", "h_pink_7.png", "a_red_12.jpg", "b_orange_2.jpg", "f_blue_10.jpg", "g_purple_5.png", "a_red_13.jpg", "d_green_14.jpg", "f_blue_9.jpg", "h_pink_6.jpg"];
fileList.sort();

for(var i = 0; i < fileList.length; i++) {
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
