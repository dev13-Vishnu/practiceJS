import { useState } from "react"
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const[dataFromChild,setDataFromChild] = useState("");
  const handleChildData = (value) => {
    setDataFromChild(value);
  }
  return (
    <div>
      <p>Data from child: {dataFromChild}</p>
      <ChildComponent onSendData={handleChildData}/>
    </div>
  )
} 
export default ParentComponent