window.onload(){
	var myTab=document.getElementById("tab");
	var myNav=document.getElementById("nav_bottom");
	var myUl=myNav.getElementByTagName("ul");
	var myLi=myUl.getElementsByTagName("li");
	var myDiv=myTab.getElementsByName("home");
	for(var i=0;i<myLi.length;i++){
		myLi[i].index=i;
		myLi[i].onclick=function(){
			for(var j=0;j<myLi.length;j++){
				myLi[j].className="off";
				myDiv[j].className="hide";
			}
			this.className="on";
			myDiv[this.index].className="show";
		}
	}
}