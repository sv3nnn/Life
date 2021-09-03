function check(){
	// 先搞一个布尔变量，默认为true如果有任何一步校验失败都变为false
	var isPass = true;
	// 第一个名字校验
	var fname = document.getElementById("fname");
	var fnamefont = document.getElementById("fnamefont");
	var fnamelen = fname.value.length;
	if(fnamelen<2 || fnamelen>10){
		fnamefont.innerText = "The value must be 2 to 10 characters in length";
		isPass = false;
	}else{
		fnamefont.innerText = "";
	}
	// 名字校验
	var lname = document.getElementById("lname");
	var lnamefont = document.getElementById("lnamefont");
	var lnamelen = lname.value.length;
	if(lnamelen<2 || lnamelen>10){
		lnamefont.innerText = "The value must be 2 to 10 characters in length";
		isPass = false;
	}else{
		lnamefont.innerText = "";
	}
	// 邮箱校验
	var email = document.getElementById("email").value;
	var emailfont = document.getElementById("emailfont");
	var	cemail = document.getElementById("cemail").value;
	var cemailfont = document.getElementById("cemailfont");
	var reEmail = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
	if(reEmail.test(email)==false){
		emailfont.innerText = "The mailbox format is incorrect";
		isPass = false;
	}else {
		emailfont.innerText = "";
		if(email!=cemail){
			cemailfont.innerText = "The two entered email addresses are inconsistent";
			isPass = false;
		}else{
			cemailfont.innerText = "";
		}
	}
	// 电话号码校验
	var pnumber = document.getElementById("pnumber").value;
	var pnumberfont = document.getElementById("pnumberfont");
	var rephonenumber = /^(\+?61|0)4\d{8}$/;
	if(rephonenumber.test(pnumber)==false){
		pnumberfont.innerText = "The telephone format is incorrect";
		isPass = false;
	}else{
		pnumberfont.innerText = "";
	}
	
	
		
		
	return isPass;
}
function checkfname(fname){
	var fnamefont = document.getElementById("fnamefont");
	var fnamelen = fname.value.length;
	if(fnamelen<2 || fnamelen>10){
		fnamefont.innerText = "The value must be 2 to 10 characters in length";
	}else{
		fnamefont.innerText = "";
	}
}
function checklname(lname){
	var lnamefont = document.getElementById("lnamefont");
	var lnamelen = lname.value.length;
	if(lnamelen<2 || lnamelen>10){
		lnamefont.innerText = "The value must be 2 to 10 characters in length";
	}else{
		lnamefont.innerText = "";
	}
}
function checkemail(){
	var email = document.getElementById("email").value;
	var emailfont = document.getElementById("emailfont");
	var	cemail = document.getElementById("cemail").value;
	var cemailfont = document.getElementById("cemailfont");
	var reEmail = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
	if(reEmail.test(email)==false){
		emailfont.innerText = "The mailbox format is incorrect";
		isPass = false;
	}else {
		emailfont.innerText = "";
		if(email!=cemail){
			cemailfont.innerText = "The two entered email addresses are inconsistent";
			isPass = false;
		}else{
			cemailfont.innerText = "";
		}
	}
}
function checkpnumber(pnumber){
	var pnumberfont = document.getElementById("pnumberfont");
	var rephonenumber = /^(\+?61|0)4\d{8}$/;
	if(rephonenumber.test(pnumber.value)==false){
		pnumberfont.innerText = "The telephone format is incorrect";
		isPass = false;
	}else{
		pnumberfont.innerText = "";
	}
}
function checkage(){
	var age = document.getElementById("age").value;	
	var agefont = document.getElementById("agefont");
	agefont.innerText = age;
	checkcost();
}
function checkcost(){	
	var count = 0
	var cost = document.getElementById("cost");
	var age = document.getElementById("age").value;
	if(document.getElementById("stu").checked==true){
		count = count+0.05
	}
	if(document.getElementById("els").checked==true){
		count = count+0.4
	}
	if(age>=16 && age<=20){
		count = count+0.1
	}
	console.log(count)
	count = 10-(count*10)
	if(document.getElementById("ayear").checked==true){
		count = count*12
	}
	cost.innerText = count+"$";
	
	
	
}