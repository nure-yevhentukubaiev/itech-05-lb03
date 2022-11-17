let rowNum = 0;
let appendCall = 0;

function paintGeneration() {
	return;
}

function randomDataRow() {
	return "<tr><td>" + (Math.random() * 42) + "</tr></td>";
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
		runGeneration();
		appendCall = setInterval(runGeneration, 420);
	});
	
	$("#stop-generation").click(function() {
		clearInterval(appendCall);
	});
});
