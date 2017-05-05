

/*
This is empty on purpose! Your code to build the resume will go here.
 */
// var name = "ZhengJirong";
// var formattedName = HTMLheaderName.replace("%data%", name);
// var role = "Web developer";
// var formattedRole = HTMLheaderRole.replace("%data%", role);

var bio = {
	"name": "ZhengJirong",
	"role": "Web developer",
	"contact": {
		"mobile": "159-2006-3206",
		"email": "archire@qq.com",
		"github": "archi-git",
		"wechat": "Zheng-jirong",
		"location": "Shenzhen",
	},
	"welcomeMessage": "hello world",
	"skills": [
		"awesomeness", "self-learning"
	],
	"bioPic": "images/fry.jpg"
}

var work = {
	"Position" : "Student",
	"employer" : "school",
	"yearsWorked" : "Yes",
	"cityOfTheBussiness" : "what"
}
var education = {
	"name" : "Insitution of Shenzhen",
	"yearsOfAttend" : "2016",
	"city": "Shenzhen"
}

// $("#header").prepend(formattedName);
// $("#header").prepend(formattedRole);
if ( bio.name.lenght > 0 ){
	$("#header").append(HTMLnameStart);
	var fomattedName = HTMLName.replace("%data%", bio.Name);
	$("#name").append(fomattedName);

}
if ( bio.skills.lenght > 0 ){
	$("#header").append(HTMLskillsStart);
	var fomattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
	$("skills").append(fomattedSkills);

}