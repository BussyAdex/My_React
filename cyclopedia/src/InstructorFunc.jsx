import React, { useEffect } from "react"

const InstructorFunc =()=>{
    useEffect(() => {
        return () => {
            console.log("Instructor - UnMounted")
        };
    }, []);

        return(
            <div >
                Name: {props.instructor.name} <br />
                Email: {props.instructor.email} <br />
                Phone: {props.instructor.phone} <br />
            </div>
        );
        
};


export default InstructorFunc;