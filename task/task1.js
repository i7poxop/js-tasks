// Task 1. Rewrite to class

/* eslint-disable no-undef */
class Clock {
	constructor({ template }) {
		this._template = template;
	}
	_render() {
		let date = new Date();

		let hours = date.getHours();
		if (hours < 10) hours = '0' + hours;

		let mins = date.getMinutes();
		if (mins < 10) mins = '0' + mins;

		let secs = date.getSeconds();
		if (secs < 10) secs = '0' + secs;

		let output = this._template
			.replace('h', hours)
			.replace('m', mins)
			.replace('s', secs);

		alert(output);
	}
	stop() {
		clearInterval(this._timer);
	}
	start() {
		this._render();
		this._timer = setInterval(() => this._render(), 1000);
	}
}

// Done 