let userProfile = [
	{
		id:10101,
		name:"Dhanush S",
		firstName:"Dhanush",
		lastName:"Sithananthan",
		mobile:"7358213126",
		eMail:"dhanush@gmail.com",
		experiance:"3",
		image:"./img/person-1.png",
		banner:"./img/person-1-bg.jpg",
		position:"frontend developer",
		hastag:"#frontend Developer / #Qc / #Designer / #fresher",
		userName:"dhan2023"
		
	},
	{	
		id:10102,
		name:"Soniya V",
		firstName:"soniya",
		lastName:"vasu",
		mobile:"8637643719",
		eMail:"soniya@gmail.com",
		experiance:"2",
		image:"./img/person-3.jpg",
		banner:"./img/person-3-bg.jpg",
		position:"frontend developer",
		hastag:"#frontend Developer /#fresher",
		userName:"soni2023"
	},
	{
		id:10103,
		name:"Akash A",
		firstName:"Akash",
		lastName:"anbu",
		mobile:"8667370862",
		eMail:"akash@gmail.com",
		experiance:"4",
		image:"./img/person-2.jpg",
		banner:"./img/person-2-bg.jpg",
		position:"frontend developer",
		hastag:"#frontend Developer /#fresher",
		userName:"akas2023"
	},
	{
		id:10104,
		name:"Anu G",
		firstName:"anu",
		lastName:"sparw",
		mobile:"8124311701",
		eMail:"anu@gmail.com",
		experiance:"6",
		image:"./img/person-6.jpg",
		banner:"./img/person-6-bg.png",
		position:"frontend developer",
		hastag:"#frontend Developer / #Qc / #fresher",
		userName:"anug2023"
	},
	{
		id:10105,
		name:"Karthi R",
		firstName:"karthi",
		lastName:"kumar",
		mobile:"9751008258",
		eMail:"karthi@gmail.com",
		experiance:"5",
		image:"./img/person-4.jpg",
		banner:"./img/person-4-bg.jpg",
		position:"frontend developer",
		hastag:"#frontend Developer /#fresher",
		userName:"kart2023"
	},
	{
		id:10106,
		name:"Yogash R",
		firstName:"yogash",
		lastName:"raj",
		mobile:"9655306595",
		eMail:"yogash@gmail.com",
		experiance:"1",
		image:"./img/person-8.jpg",
		banner:"./img/person-8-bg.png",
		position:"frontend developer",
		hastag:"#frontend Developer / #Quality Control",
		userName:"yoga2023"
	},
	{
		id:10107,
		name:"Ragu P",
		firstName:"ragu",
		lastName:"parhi",
		mobile:"9095075260",
		eMail:"ragu@gmail.com",
		experiance:"6",
		image:"./img/person-5.jpg",
		banner:"./img/person-5-bg.jpg",
		position:"frontend developer",
		hastag:"#frontend Developer / #fresher",
		userName:"ragu2023"
	},
	{
		id:10108,
		name:"Hari K",
		firstName:"Hari",
		lastName:"kishor",
		mobile:"9500231059",
		eMail:"hari@gmail.com",
		experiance:"4",
		image:"./img/person-1.png",
		banner:"./img/person-1-bg.jpg",
		position:"frontend developer",
		hastag:"#frontend Developer / #Qc",
		userName:"hari2023"
	},
	{
		id:10109,
		name:"Elamugu K",
		firstName:"Elamugu",
		lastName:"kumar",
		mobile:"8667864991",
		eMail:"elamurugu@gmail.com",
		experiance:"2",
		image:"./img/person-7.jpg",
		banner:"./img/person-7-bg.jpg",
		position:"frontend developer",
		hastag:"#frontend Developer / #fresher",
		userName:"elam2023"
	}]
	
	// console.log(userProfile)
	
	let pageUrl = window.location.href;
if(pageUrl.includes("login.html")){
	let getIssignout = localStorage.getItem("signIn");
	if(!getIssighout){
		window.location.replace("index.html");
	}

} 

function signOut(event){
	event.preventDefault();
	localStorage.removeItem("signIn");
	window.location.replace("login.html");
}


function gotohome(event){
	event.preventDefault();
	localStorage.removeItem("signIn");
	window.location.replace("index.html");
}

function profileView(event){
	event.preventDefault();
	localStorage.removeItem("index.html");
	window.location.replace("Profile.html")
}

function gotoecperiance(event){
	event.preventDefault();
	localStorage.removeItem("profile.html");
	window.location.replace("experiance.html");
}

function gotoeducation(event){
	event.preventDefault();
	localStorage.removeItem("profile.html");
	window.location.replace("education.html");
}

function goprofpageArrow(event){
	event.preventDefault();
	localStorage.removeItem("experiance.html");
	window.location.replace("Profile.html")
}

function gotohome(event){
	event.preventDefault();
	localStorage.removeItem("profile.html");
	window.location.replace("index.html")
}


// let profileimg = document.getElementById("img_icon");

// profileimg.src = "./img/person-8.jpg";

// console.log(localStorage.getItem("userid"));

let getidfromuser = parseInt(localStorage.getItem("userid"));

// console.log(getidfromuser);

let finduser = userProfile.find(function(user){
	return user.id == getidfromuser;
	// console.log(finduser)
});

console.log(finduser);



if(pageUrl.includes("Profile.html")){
	console.log(pageUrl)
if(finduser){
	let userimg = document.getElementById("img_icon");
	userimg.src = finduser.image;
	let userimg2 = document.getElementById("log11");
	userimg2.src = finduser.image;
	let userbg = document.getElementById("img_bg");
	userbg.src = finduser.banner;
	let username = document.getElementById("name");
	username.innerHTML = finduser.firstName+" "+finduser.lastName;
	let username2 = document.getElementById("name-b");
	username2.innerHTML = finduser.firstName;
	let contact = document.getElementById("con_info");
	contact.innerHTML = " +91 "+finduser.mobile;
	let position = document.querySelector(".work_knowlage");
	position.textContent = finduser.position;
	let hastag = document.querySelector(".hastag");
	hastag.textContent = finduser.hastag;
}

}


// let userfind = parseInt(localStorage.getItem("userid"));
// console.log(userfind);

// let getuser = homeuser.find(function(search) {
  // return search.id === userfind;
// });

// console.log(getuser);


if(pageUrl.includes("index.html")){
if (finduser) {
  let changename = document.getElementById("usrname");
  changename.innerHTML = finduser.name;
  let changehovername = document.getElementById("name1");
  changehovername.innerHTML = finduser.name;
  let bgimg = document.getElementById("dp");
  bgimg.src = finduser.banner;
  let profileimg = document.getElementById("log1");
  profileimg.src = finduser.image;
  let profileimg2 = document.getElementById("log2");
  profileimg2.src = finduser.image;
  let hoverprofileimg = document.getElementById("log11");
  hoverprofileimg.src = finduser.image;
}
}



// pencil button click 
if(pageUrl.includes("Profile.html")){
let pencilBtn = document.getElementById("pencil_btn");
let popSection = document.getElementById("editintro");
let popSection2 = document.getElementById("editintro2");
let saveBtn = document.getElementById("save_btn");
let saveBtn2 = document.getElementById("save_btn2");
let removeButton = document.getElementById("removeBtn");
let removeButton2 = document.getElementById("removeBtn2");
let blurdiv = document.getElementById("blurDiv");
let onoffbuttondiv = document.getElementById("schaldiv2");
let onoffbutton = document.getElementById("schal2");
let onofftext = document.getElementById("schal_on_off");
let plusbtn = document.getElementById("plus");

plusbtn.addEventListener("click", function(event){
	popSection2.classList.add("visivle");
})

saveBtn2.addEventListener("click", function(event){
	popSection2.classList.remove("visivle");
})

removeButton2.addEventListener("click", function(event){
	popSection2.classList.remove("visivle");
})

pencilBtn.addEventListener("click", function(event){
	popSection.classList.add("visivle");
})

saveBtn.addEventListener("click", function(event){
	popSection.classList.remove("visivle");
})

removeButton.addEventListener("click", function(event){
	popSection.classList.remove("visivle");
})

onoffbutton.addEventListener("click",function(event){
	onoffbutton.classList.toggle("schal3");
})

let visible = false;
onoffbutton.addEventListener("click",function(event){
	if(!visible) {
    onofftext.innerHTML = 'OFF';
  } else {
    onofftext.innerHTML = 'ON';
  }
	visible = !visible
});

}

if(pageUrl.includes("experiance.html")){
if (finduser) {
let pencilExp = document.getElementById("penicon");
let pencilExp2 = document.getElementById("penicon2");
let pencilExp3 = document.getElementById("penicon3");
let popExp = document.getElementById("editintro2");
let removexicon = document.getElementById("removeBtn");
let savebtn = document.getElementById("save_btn");
let onoffbuttondiv = document.getElementById("schaldiv2");
let onoffbutton = document.getElementById("schal2");
let onofftext = document.getElementById("schal_on_off");

pencilExp.addEventListener("click",function(event){
	popExp.classList.add("visivle");
})

pencilExp2.addEventListener("click",function(event){
	popExp.classList.add("visivle");
})

pencilExp3.addEventListener("click",function(event){
	popExp.classList.add("visivle");
})

removexicon.addEventListener("click",function(event){
	popExp.classList.remove("visivle");
})

savebtn.addEventListener("click",function(event){
	popExp.classList.remove("visivle");
})

onoffbutton.addEventListener("click",function(event){
	onoffbutton.classList.toggle("schal3");
})

let visible = false;
onoffbutton.addEventListener("click",function(event){
	if(!visible) {
    onofftext.innerHTML = 'OFF';
  } else {
    onofftext.innerHTML = 'ON';
  }
	visible = !visible
});

}
}


if(pageUrl.includes("experiance.html")){
if (finduser) {
	let userimg2 = document.getElementById("log11");
	userimg2.src = finduser.image;
	let username2 = document.getElementById("name-b");
	username2.innerHTML = finduser.firstName;
	let head2name = document.getElementById("work_knowlage_name");
	head2name.innerHTML = finduser.firstName+" "+finduser.lastName;
	let head2img = document.getElementById("exp_img");
	head2img.src = finduser.image;
}
}


//education section



if(pageUrl.includes("education.html")){
if (finduser) {
let pencilExp = document.getElementById("penicon");
let popExp = document.getElementById("editintro2");
let removexicon = document.getElementById("removeBtn");
let savebtn = document.getElementById("save_btn");
let onoffbuttondiv = document.getElementById("schaldiv2");
let onoffbutton = document.getElementById("schal2");
let onofftext = document.getElementById("schal_on_off");

pencilExp.addEventListener("click",function(event){
	popExp.classList.add("visivle");
})

removexicon.addEventListener("click",function(event){
	popExp.classList.remove("visivle");
})

savebtn.addEventListener("click",function(event){
	popExp.classList.remove("visivle");
})

onoffbutton.addEventListener("click",function(event){
	onoffbutton.classList.toggle("schal3");
})

//on off text

let visible = false;
onoffbutton.addEventListener("click",function(event){
	if(!visible) {
    onofftext.innerHTML = 'OFF';
  } else {
    onofftext.innerHTML = 'ON';
  }
	visible = !visible
});

}
}

if(pageUrl.includes("education.html")){
if (finduser) {
	let userimg2 = document.getElementById("log11");
	userimg2.src = finduser.image;
	let username2 = document.getElementById("name-b");
	username2.innerHTML = finduser.firstName;
	let head2name = document.getElementById("work_knowlage_name");
	head2name.innerHTML = finduser.firstName+" "+finduser.lastName;
	let head2img = document.getElementById("exp_img");
	head2img.src = finduser.image;
}
}
