var fortunes = [
				"Conquer your fears or they will conquer you",
				"River needs spring.",
				"Do not fear what you don't know.",
				"YOu will have a pleasant surprise.",
				"Whenever possible, keep it simple"
			];

exports.getFortune = function() {
	var idx = Math.floor(Math.random() * fortunes.length);
	return fortunes[idx];
};