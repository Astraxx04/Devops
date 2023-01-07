
//Course name - Key,, current chapter - 0 index,, chapter name - 1 index

var NoOfSemester = 7;
var currentSem = 1;
const data = document.currentScript.dataset;
const user_usn = data.username;

//const from html
const CourseContainer = document.getElementById("CourseContainer");  
const dropdown = document.getElementById("dropdown");  
const useinfo = document.getElementById("useinfo");  

//User Usn
var span = document.createElement('span');
span.classList.add("user_usn");
span.innerHTML = user_usn;
useinfo.appendChild(span);


for (let index = 0; index < NoOfSemester; index++) {

  var a = document.createElement('a');
  a.setAttribute("id","Sem_"+(index+1));
  a.innerHTML=`<li>Semester `+(index+1)+`</li>`;
  dropdown.appendChild(a);
}
var sem_1 = document.getElementById('Sem_1');
sem_1.addEventListener('click',function(){
  currentSem = 1;
  console.log(currentSem);
  remove_courses();
  add_courses();
});
var sem_2 = document.getElementById('Sem_2');
sem_2.addEventListener('click',function(){
  currentSem = 2;
  console.log(currentSem);
  remove_courses();
  add_courses();
});
var sem_3 = document.getElementById('Sem_3');
sem_3.addEventListener('click',function(){
  currentSem = 3;
  console.log(currentSem);
  remove_courses();
  add_courses();
});
var sem_4 = document.getElementById('Sem_4');
sem_4.addEventListener('click',function(){
  currentSem = 4;
  console.log(currentSem);
  remove_courses();
  add_courses();
});
var sem_5 = document.getElementById('Sem_5');
sem_5.addEventListener('click',function(){
  currentSem = 5;
  console.log(currentSem);
  remove_courses();
  add_courses();
});var sem_5 = document.getElementById('Sem_5');
sem_5.addEventListener('click',function(){
  currentSem = 5;
  console.log(currentSem);
  remove_courses();
  add_courses();
});var sem_6 = document.getElementById('Sem_6');
sem_6.addEventListener('click',function(){
  currentSem = 6;
  console.log(currentSem);
  remove_courses();
  add_courses();
});
var sem_7 = document.getElementById('Sem_7');
sem_7.addEventListener('click',function(){
  currentSem = 7;
  console.log(currentSem);
  remove_courses();
  add_courses();
});

function log(theElement) {
  let course_name = theElement.srcElement.id;
  sessionStorage.setItem("courseTeacher", course_name);
  // console.log(sessionStorage.getItem("course"));
  location.assign("/teacher");
}
function remove_courses() {
  CourseContainer.innerHTML="";
}

function add_courses() {
  
  courses[currentSem][0].forEach(Course => {
  //Creted div with class card;
  var div = document.createElement('div');
  div.classList.add("card");
  CourseContainer.appendChild(div);
  //Creted div with class course-preview and make card as parent;
  var div1 = document.createElement('div');
  div1.classList.add("course-preview");
  div1.innerHTML=`
  <h2>`+Course[0]+`</h2>
  <button class="btn" id="${Course[0]}">Continue</button>`;
  div.appendChild(div1);
});
}


add_courses();

var all_button = document.getElementsByClassName('btn');
for (var i = 0 ; i < all_button.length; i++) {
  all_button[i].addEventListener('click' , log , false ) ; 
}
