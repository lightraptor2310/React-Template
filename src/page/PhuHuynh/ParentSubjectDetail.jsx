import { useState } from "react"
import { useParams } from "react-router-dom";


const ParentSubjectDetail = () => {
    const [ParentSubject, setTeacherSubject] = useState();
    const param = useParams();
    console.log(param);
    
    return (
        <>
            hello 
        </>
    )
}

export default ParentSubjectDetail