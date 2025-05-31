import { useState } from 'react';
import AlertContext from './AlertContext';


const AlertState = (props) => {
  const [alert, setAlert] = useState("hidden");

  const toggleAlert = () => {
    if (alert === "hidden") {
        setAlert("flex");
    }
    else {
        setAlert("hidden");
    }
  }

  return (
    <>
      <AlertContext.Provider value={{ alert, setAlert, toggleAlert}} >
        {props.children}
      </AlertContext.Provider>
    </>
  )
}

export default AlertState
