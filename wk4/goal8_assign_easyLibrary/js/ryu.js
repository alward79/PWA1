/*
	PWA1: Goal8:  Simple Library
*/

var MyLibrary = function(elems){

    return new MyLibrary.prototype.init(elems);

};

MyLibrary.prototype = {

    init: function(elems){
            this.elements = elems; // pass the existing array 
        },
    
    elements: [],

    each: function(callback){
            for(var i = 0, max = this.elements.length; i < max; i++){
                    callback.call(this.elements[i]);
                    console.log(this.elements[i]);
            }
    }

}; // end prototype
MyLibrary.prototype.init.prototype = MyLibrary.prototype;