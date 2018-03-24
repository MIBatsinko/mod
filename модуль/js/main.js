$(".triangle-up").mouseenter(function() {
	$(".triangle-bottomleft").show();
}
);

$(".triangle-up").mouseleave(function() {
	$(".triangle-bottomleft").hide();
}
);

$(".sqr_2_internal").mouseenter(function() {
	$('.triangle-bottomleft').addClass("cl");
});

$(".sqr_2_internal").mouseleave(function() {
	$('.triangle-bottomleft').removeClass("cl");
});

$(".sqr_2_internal").click(function() {
	console.log("---")
	$('.wrapper').addClass("cl_col");
});

$(".sqr_2_internal").dblclick(function() {
	console.log("---")
	$('.wrapper').removeClass("cl_col");
});