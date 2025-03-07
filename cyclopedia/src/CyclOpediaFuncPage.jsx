import React, { useId, useRef } from "react";
import { getRandomUser } from "./Utility/api";
import Instructor from "./Instructor";
import { useState } from "react";
import { useEffect } from "react";

const CyclOpediaFuncPage =()=> {

    const[state, setState] = useState(() =>{
        return {
        instructor: undefined,
        studentList: [],
        studentCount: 0,
        hideInstructor: false,
        };
    });

    //const [totalRender, setTotalRender] = useState(0);
    const totalRender = useRef(0);
    const prevStudentCount = useRef(0);
    const feedbackInputRef = useRef(null);
    const id = useId();

    const[inputName, setInputName] = useState(() => { 
        return "";
    });
    
    const[inputFeedback, setInputFeedback] = useState(() => { 
        return "";
    });

    useEffect(() => {
        //setTotalRender((prevState) => prevState+1)
        totalRender.current = totalRender.current + 1;
        console.log("render" + totalRender.current);
    });

    useEffect(() => {
        const getUser = async () => {
            const response = await getRandomUser();
            setState((prevState) => {
                return {
                    ...prevState,
                    instructor: {
                        name: response.data.first_name + " " + response.data.last_name,
                        email: response.data.email,
                        phone: response.data.phone_number,
                    },
                };
            });
        };
        if (!state.hideInstructor){
            getUser();
        }    
    }, [state.hideInstructor]);


    useEffect(() => {
        const getUser = async () => {
            const response = await getRandomUser();
            setState((prevState) => {
                return {
                    ...prevState,
                    studentList: [
                        ...prevState.studentList, {
                            name: response.data.first_name + " " + response.data.last_name,
                        },   
                    ],
                };
            });
        };
        if (prevStudentCount.current < state.studentCount){
            getUser();
        } else if (prevStudentCount.current > state.studentCount){
            setState((prevState) => {
                return { ...prevState, studentList:[] };
            });
        }   
    }, [state.studentCount]);

    useEffect(() => {
        prevStudentCount.current = state.studentCount;
    }, [state.studentCount]);

    useEffect(() => {
        feedbackInputRef.current.focus();
        return() => {

        };
    }, []);

    const handleAddStudent = () => {
        setState((prevState) => {
            return{
                ...prevState,
                studentCount: prevState.studentCount + 1,
            };
        });
    };

    const handleRemoveAllStudent = () => {
        setState((prevState) => {
            return{
                ...prevState,
                studentCount: 0,
            };
        });
    };
    
    const handleToggleInstructor = () => {
        setState((prevState) => {
            return {
                ...prevState,
                hideInstructor: !prevState.hideInstructor,
            };
        });
    };
    
        return (
        <div>
            <div className="p-3">
                <span className="h4 text-success">Instructor </span>
                <i className= {`bi ${state.hideInstructor ? "bi-toggle-off" : "bi-toggle-on"} 
                    btn btn-success btn-sm`}
                onClick={handleToggleInstructor}></i>
                { !state.hideInstructor && state.instructor? (
                    <Instructor instructor={state.instructor} />
                    ) : null }
            </div>
            <div className="p-3">Total Render : {totalRender.current}</div>
            <div className="p-3">
                <span className="h4 text-success">Feedback</span> <br />
                <input 
                    type="text" 
                    value={inputName} 
                    placeholder="Name.." 
                    onChange={(e) => {
                        setInputName(e.target.value);
                    }}
                    id={`${id}-inputName`}
                />
                {" "}
                <label htmlFor={`${id}-inputName`}>Name Value : </label> {inputName}
                <br />
                <textarea 
                    placeholder="Feedback.."
                    ref={feedbackInputRef}
                    value={inputFeedback}
                    id={`${id}-inputFeedback`}
                    onChange={(e) => {
                        setInputFeedback(e.target.value);
                    }}
                ></textarea>
                {" "}
                <label htmlFor={`${id}-inputFeedback`}>Feedback Value :</label>{inputFeedback} 

            </div>

            <div className="p-3">
                <span className="h4 text-success">Students</span> <br />
                <div>Student Count : {state.studentCount}</div>
                <button className="btn btn-success btn-sm" onClick={handleAddStudent}>
                    Add Student
                </button>
                &nbsp;
                <button className="btn btn-danger btn-sm" onClick={handleRemoveAllStudent}>
                    Remove All Students
                </button>

                {state.studentList.map((student, index) => {
                    return(
                        <div className="text-white" key={index}>
                            - {student.name}
                        </div>
                    )
                })}
            </div>
        </div>
        );
}


export default CyclOpediaFuncPage;