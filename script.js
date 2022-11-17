let rowNum = 0;
let appendCall = 0;

function paintGeneration() {
	let color = '#A8889E';
	if (rowNum % 2 == 0)
		color = '#00CC00';
	if (rowNum == 0)
		color = '#CC00CC';
	$("#random-table").map(function(index, elem) { return $(elem).children()[rowNum]}).css('background-color', color);
	return;
}

function randomDataRow() {
	return "<tr><td>" + Math.random() * 42 + "</tr></td>";
}

function runGeneration() {
	$("#random-table").append(randomDataRow());
	paintGeneration();
	rowNum += 1;
	return;
}

jQuery(document).ready(function() {
	$("#run-generation").click(function() {
		// run only one instance
		if (!appendCall) {
			let appendInterval = parseFloat($("#append-interval").val());
			appendInterval = (appendInterval) ? appendInterval * 1000 : 0.42 * 1000;
			runGeneration();
			appendCall = setInterval(
				runGeneration,
				appendInterval	
			);
		}
	});
	
	$("#stop-generation").click(function() {
		clearInterval(appendCall);
		appendCall = 0;
	});
});
