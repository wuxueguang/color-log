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
	if (typeof args[0] === 'object') {
		if (args[0].isLogStyle) {
			this.styleObj = Object.assign({}, this.styleObj, args[0]);
			this.style = styleStr(this.styleObj);
			return log;
		}
		console.log.apply(log, args);
	} else {
		console.log.apply(log, [`%c ${args[0]}`, log.style, ...args.slice(1)]);
	}
}

log.styleObj = {
	color: '#0f0',
	background: '#000'
}

log.style = styleStr(log.styleObj);

export default log;