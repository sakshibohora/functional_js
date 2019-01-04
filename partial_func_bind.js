var slice = Array.prototype.slice
    
    function logger(namespace) {
		return function(){
			console.log.bind(null,namespace);
		}      

    }
    
    module.exports = logger
