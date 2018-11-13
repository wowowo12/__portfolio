/*
var faceColor = "yellow";
var age = 30;
var name = "임덕규";
name.run();

function pomulsun(x) {
	alert(x * x);
}
var x = prompt("원하는 수를 입력하세요.");
pomulsun(x);
*/
var n = 0;
function swap() {
	$("#mains > li").css("z-index", 9);
	$("#mains > li").eq(n).css("z-index", 10);
	if(n == 2) n = 0;
	else n++;
}
setInterval(swap, 3000);



