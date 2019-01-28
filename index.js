/**
style object example:

{
	color: '#0f0',
	background: '#000',
	isLogStyle: true
}
*/


const styleStr = function({color, background}){
	return `color:${color};background:${background}`;
}

const log = function() {
	let args = [...arguments];
	if (typeof args[0] === 'string') {
		console.log(...[`%c${args[0]}`, this.style, ...args.slice(1)]);
	} else {
		if (args[0] instanceof Object && args[0].isLogStyle) {
			this.styleObj = Object.assign({}, this.styleObj, args[0]);
			this.style = styleStr(this.styleObj);
			args.length > 1 && log(...args.slice(1));
		} else {
			console.log(...args);
		}
	}
}

log.styleObj = {
	color: '#0f0',
	background: '#000'
}

log.style = styleStr(log.styleObj);

export default log.bind(log);