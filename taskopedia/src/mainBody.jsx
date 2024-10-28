import Student from './Components/Student/student'; 
import StudentReview from './Components/Student/studentReview';
import React from "react";
class MainBody extends React.Component(){
  render(){
    const whatWeWillLearn = "React JS";
    const lectureCount = 3;
  
    return(
      <div style={{minHeight: "70vh"}}>
        <p>In this course, we will learn {whatWeWillLearn} by building Taskopedia!</p>
        <p>Total Lecture - {lectureCount}</p>
        <ul>
          <li>Basic Foundation</li>
          <li>Funtional and Class Components</li>
        </ul>
        {/* <div>
          Enter Task : <input maxLength={5} readonly={false} placeholder='Ben'></input>
        </div> */}
        <div className='container row'>Students Enrolled</div>
        <Student experience={2} name="Kris Walley" headshot="https://ui-avatars.com/api/?name=Kris Walley">
            <StudentReview/>
        </Student>
        <Student experience={5} name="Angel Patrice" headshot="https://ui-avatars.com/api/?name=Angel Patrice">
            <StudentReview/>
        </Student>
        <Student experience={7} name="Rene Parker" headshot="https://ui-avatars.com/api/?name=Rene Parker">
        </Student>
      </div>
    )
  }
   
  }

  export default MainBody