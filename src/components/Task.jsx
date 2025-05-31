import { useContext } from "react";
import AlertContext from "../context/AlertContext";
 

 
const Task = (props) => {

  const { toggleAlert } = useContext(AlertContext);


  const handleCheckbox = (e) => {
    let id = e.target.id;
    props.toggleTaskCompleted(id)

  }

  return (
    <>
     <div className='flex w-[95%] h-auto py-2 rounded-4xl mt-4 bg-gradient-to-r from-violet-950 to-[#2D336B] bg-clip-padding shadow-md hover:shadow-lg items-center flex-row px-2'>
          <input onChange={handleCheckbox} type="checkbox" className="ml-4" checked={props.isCompleted} id={props.id}/>
          <div className={`text-white font-bold text-sm ml-4 w-[100%] ${props.isCompleted ? 'line-through' : ''}`}>{props.todo}</div>
           
          <div className='flex justify-end items-center w-[30%]'>

          
          <div className=' mr-4 text-black hover:text-violet-400 flex justify-center items-center pointer-cursor bg-violet-400 p-2 rounded-lg hover:bg-gray-900' onClick={(e) => {props.handleEdit(e, props.id)}}>
            <span className="material-symbols-outlined">edit_square</span>
          </div>
          
          <div className='mr-3 text-red-600 pointer-cursor flex justify-center items-center bg-violet-400 p-2 rounded-lg hover:bg-gray-900' onClick={(e) => {toggleAlert();
            props.onDelete();
          }}>
            <span className="material-symbols-outlined">delete</span> 
          </div>
          
          </div>
        
      </div>
    </>
  ) 
}

export default Task
