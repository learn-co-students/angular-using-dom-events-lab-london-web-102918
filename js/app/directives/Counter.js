function Counter() {
	return {
		template: [
			'<div>',
				'<h3>Counter</h3>',
				'<div>Click anywhere to increment the counter!</div>',
				'<div>Current count: {{ count }}</div>',
			'</div>'
		].join(''),
		controller: function ($scope) {
			$scope.count = 0;
		},
		link: (s, e, a, c, t) => {
			e.on('click', () => {
				s.count++
				s.$apply()
			})
			s.$on('$destroy', () => {
           e.off();
        })
		}
	}
}

angular
	.module('app')
	.directive('counter', Counter);
