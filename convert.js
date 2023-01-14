var input = "no u";
var out = encode(input);

function encode(ori){
	var arr = [];
	var ret = sp(ori);
	alert(ret);
	var pos;
	var num;
	for(var j = 0; j < ret.length; j++){
		pos = ret[j];
		switch(pos){
				case "A":
				break;
				case "B":
				break;
				case "C":
				break;
				case "D":
				break;
				case "E":
				break;
				case "F":
				break;
				case "G":
				break;
				case "H":
				break;
				case "I":
				break;
				case "J":
				break;
				case "K":
				break;
				case "L":
				break;
				case "M":
				break;
				case "N":
				break;
				case "O":
				break;
				case "P":
				break;
				case "Q":
				break;
				case "R":
				break;
				case "S":
				break;
				case "T":
				break;
				case "U":
				break;
				case "V":
				break;
				case "W":
				break;
				case "X":
				break;
				case "Y":
				break;
				case "Z":
				break;
				case "a":
				break;
				case "b":
				break;
				case "c":
				break;
				case "d":
				break;
				case "e":
				break;
				case "f":
				break;
				case "g":
				break;
				case "h":
				break;
				case "i":
				break;
				case "j":
				break;
				case "k":
				break;
				case "l":
				break;
				case "m":
				break;
				case "n":
				break;
		}
	}
}

function sp(w){
	var tem = [];
	for(var i = 0; i < w.length; i++) {
		tem.push(w.slice(i,i+1));
	}
	return tem;
}