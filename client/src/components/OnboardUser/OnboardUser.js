import React, { useState, useEffect, useContext }from "react";
import { UserContext } from "../UserContext/UserContext";
import StepOne from "./SignupFlow/StepOne/StepOne";
import StepTwo from "./SignupFlow/StepTwo/StepTwo";
import StepThree from "./SignupFlow/StepThree/StepThree";

const OnboardUser = () => {
    const [user] = useContext(UserContext);

    const [userStepOne, setUserStepOne] = useState(false);
    const [userStepTwo, setUserStepTwo] = useState(false);
    const [userStepThree, setUserStepThree] = useState(false);
    const [isComplete, setIsComplete] = useState(false);
    console.log("ONBOARDING LOGS: user", user);
    console.log("ONBOARDING LOGS: userStepOne", userStepOne);
    console.log("ONBOARDING LOGS: userStepTwo", userStepTwo);
    console.log("ONBOARDING LOGS: userStepThree", userStepThree);
    console.log("ONBOARDING LOGS: isComplete", isComplete);

    const isStepOne = user == null 
        && !userStepOne 
        && !userStepTwo 
        && !userStepThree
    
    const isStepTwo = user 
        && user?.email 
        && userStepOne 
        && !userStepTwo 
        && !userStepThree
    
    const isStepThree = user 
        && user?.email 
        && user?.leagues?.length > 0 
        && userStepOne 
        && userStepTwo 
        && !userStepThree
    
    useEffect(() => {
      setIsComplete(user 
        && user?.email 
        && user?.leagues?.length > 0 
        && user?.teams?.length > 0 
        && userStepOne 
        && userStepTwo 
        && userStepThree);
    }, []);
    
    
    if (isComplete) {
        window.location = '/home'
    }
    
    return (
        <div>
            {
                isStepOne && <StepOne setUserStepOne={setUserStepOne} />
            }
            {
                isStepTwo && <StepTwo setUserStepTwo={setUserStepTwo}/>
            }
            {
                isStepThree && <StepThree setUserStepThree={setUserStepThree}/>
            }
        </div>
    )
}

export default OnboardUser;
