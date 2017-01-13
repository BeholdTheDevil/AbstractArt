var dir = "/images";
var fileextension = [".jpg", ".png", ".bmp", ".gif", ".tif"];

$.ajax({url: dir, 
		success: function(data) {
			var index = 0;
			$(fileextension).each(function() {
				$(data).find("a:contains(" + fileextension[index] + ")").each(function() {
            	var filename = this.href.replace(window.location.host, "").replace("http://", "");
            	var div = document.createElement("div");
            	var rndNum = Math.floor((Math.random() * 6) + 1);
            	console.log(rndNum);
            	if(rndNum == 1 || rndNum == 2 || rndNum == 3) {
            		div.setAttribute("class", "sizeOne tile");
            	} else if(rndNum == 4 || rndNum == 5) {
            		div.setAttribute("class", "sizeTwo tile");
            	} else if(rndNum == 6) {
            		div.setAttribute("class", "sizeThree tile");
            	}
            	div.style.backgroundImage = 'url(' + dir + filename + ')';
   	   		    div.content = "&nbsp";
    	        document.getElementById("flexBox").appendChild(div);
	        	});
	        	index = index + 1;
			});
    	}
});