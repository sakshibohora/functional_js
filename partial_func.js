var slice = Array.prototype.slice
    
    function logger(namespace) {
		return function(){
			console.log.apply(this.console,[namespace].concat(slice.call(arguments)))
		}      

    }
    
    module.exports = logger
