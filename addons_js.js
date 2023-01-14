addons = {
	functions:{
	
		//combine function

		combine: function(a,b,c){
		var d = [];
		for(var i = 0; i < a.length; i++){
		if(c === true){
		d.push(b.toString()+a[i]);
		}else if(c === false){
		d.push(a[i]+b.toString());
		}
		} 
		return d;
		},

		//atcombine function

		atcombine: function(a,b,c){
		var d = a;
		for(var i = 0; i < a.length; i++){
		if(c === true){
		d.push(b.toString()+a[i]);
		}else if(c === false){
		d.push(a[i]+b.toString());
		}
		} 
		return d;
		},

		//invert function

		invert: function(a,b){
		var c = b;
		var d = a;
		return c,d;
		},

		//locateHTML function

		locateHTML: function(a,b){
		if(b === true){
		var c = document.getElementById(a).innerHTML;
		}else if(b===false){
		var c = document.getElementsByTagName(a).innerHTML;
		}
		if(!c){
		return false;
		}else{
		return true;
		}
		},

		//chop

		chop: function(text){
		var array = [];
		for(var i = 0; i < text.length; i++){
		array.push(text.substring(i,(i+1)));
		}
		return array;
		},
		
		//nChop
		nchop: function(text,n){
		var array = [];
		var tlen = text.length;
		for(var i = 0; i < tlen; i+=n){
		array.push(text.substring(i,(i+n)));
		}
		return array;
		},
		
		//searcharr
		
		searchArr: function(a,b){
		for(var i = 0; i < a.length; i++){
		if(a[i] == b){
		return true;
		}
		}
		}
	}
}
