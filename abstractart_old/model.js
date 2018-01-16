var previousID;

function model(id) {
	if(previousID) {
		$("#" + previousID).removeClass("modelImage");
	}

	$("#" + id).addClass("modelImage");
	$("html, body").animate({
							scrollTop: $("#" + id).offset().top - ((window.innerHeight-500)/2)}
							,1000);
	
	previousID = id;
}