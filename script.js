let rowNum = 0;

function paintGeneration() {
	return;
}

function randomDataRow() {
	return Math.random() + "a";
}

function runGeneration() {
	//if (rowNum++ == 0) {
		$("#random-table").append(randomDataRow());
	//}
	return;
}

// function stopGeneration()
jQuery(document).ready(function() {
	$("#run-generation").click(function() {
		setInterval(runGeneration(), 420);
	});
	
	$("#stop-generation").click(function() {
		clearInterval();
	});
});
