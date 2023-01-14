
var chatBoxBoolean = true;
//pick your choice: true will turn it on, while false turns it off...
//false gives you a syntax errors...

/**
!!!!
Do not edit beyond this point
!!!!
**/
if(chatBoxBoolean === true){
var chatBoxVersion = '<p>1.0</p>';
var chatBoxHTMLCode = '<div id="chatBox"></div><div id="poster"><input id="chatBoxInput" size="9"/><br><button onclick="submit()" id="chatBoxButton"><span id="chatBoxButtonText">Post / submit</span></button></div>';
var chatBoxHTMLStyles ='<style>#chatBox{width: 200px; background-color: #BCBCBC; padding: 10px; height: 100%; position: fixed; margin-left: 85%;}#chatBoxButton{background-color: #f00;}#chatBoxButtonText{color:#FFF}#poster{width: 100px; height: 50px;background-color: #00f;}</style>';
}




var d = chatBoxHTMLCode;
var e = chatBoxHTMLStyles;
var f = chatBoxVersion;
document.write(d+e);
//getElementById("chatBox").innerHTML = 
function submit(){
var a = document.getElementById("chatBoxInput").value;//gets input value
var b = document.getElementById("chatBox").innerHTML;//old
var c = "default_user:";
var h = c+a;
document.getElementById("chatBox").innerHTML = 	b + '<p class="chatBoxText">'+h+'</p>';
}