import React from "react";
import CreateUser from "../../../CreateUser/CreateUser";

const StepOne = (props) => {
    const { setUserStepOne } = props
    return (
        <>
          <span>StepOne Component</span>
          <CreateUser setUserStepOne={setUserStepOne}/>
        </>

    )
}

export default StepOne