// function createCourse(x){
// return {
//     title : x,
//     notes : {
//         introduction : "welcome"
//     },
//     enroll(){
//         console.log('welcome to course');
//     }
// }

// }
// const course = createCourse("javascript");
//  console.log(course);

//  course.enroll();
  





function Course(x){
    this.title=x,
    this.enroll = function(){
        console.log("Your are enrolled");
    }
}
const course = new Course('javascript');
course.enroll();
console.log(course);
course.checkEnrollement=function(){
    console.log('30 users enrolled');s
}
console.log(course);


