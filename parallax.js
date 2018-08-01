(function(p, f) {
	p.Parallax = f();
})(this, function() {
	var Parallax = function(selector) {
		var self = Object.create(Parallax.prototype);

		document.querySelectorAll(selector).forEach(function(node) {
			if (typeof(node) !== 'object') {
				return;
			}

			node.initial = node.getBoundingClientRect().top + window.scrollY;
			node.speed = node.dataset.speed || 2;
			node.style.top = node.initial + 'px';

			self.items.push(node);
		});

		window.addEventListener('scroll', function() {
			self.items.forEach(function(node) {
				var top = node.initial + window.scrollY * -(node.speed / 10);
				node.style.top = (top) + 'px';
			});
		});
	}
	Parallax.prototype.items = [];
	return Parallax;
});
