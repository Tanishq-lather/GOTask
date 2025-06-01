import Task from "./Task";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Alert from "./Alert";

const Todos = (props) => {
  // state for the click event
  const [click, setClick] = useState(false);

  // State for the todo input and todos list
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [showFinished, setShowFinished] = useState(true);
  const [taskToDelete, setTaskToDelete] = useState(null);

  // useEffect to get the todos from local storage
  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    const todos = savedTodos ? JSON.parse(savedTodos) : [];
    setTodos(todos);
  }, []);

  useEffect(() => {
    // Save todos to localStorage whenever the `todos` state changes
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // function to save the todos to local storage
   
  const handleDelete = () => {
    setTodos(todos.filter((todo) => todo.id !== taskToDelete));
    setTaskToDelete(null);
     
  };

  // function to handle the add event When the user wants to add a new task
  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    setTodo("");
     
  };

  // function to handle the click event When the user wants to create a new task
  const handleClick = () => {
    setClick(!click);
  };

  // function to handle the change event When the user types in the input
  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  // Function to handle the isCompleted event When the user clicks on the checkbox
  const toggleTaskCompleted = (id) => {
    const updateTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    setTodos(updateTodos);
  };

  // Function to handle the edit event When the user clicks on the edit button
  const handleEdit = (e, id) => {
    let t = todos.find((i) => i.id === id);
    setTodo(t.todo);
    let newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(newTodos);
     
  };

  // Function to handle the show finished event When the user clicks on the show finished checkbox
  const toggleShowFinished = () => {
    setShowFinished(!showFinished);
  };

  return (
    <>
      <div className="w-[100%]  xl:w-[60%] h-screen xl:h-130 bg-violet-400 xl:rounded-3xl flex flex-col items-center">
        <div className="h-14 flex justify-center items-center bg-gradient-to-r from-violet-950 to-[#2D336B] bg-clip-content rounded-b-3xl w-[100%] ">
          <p className="font-bold text-xl text-white font-sans">GOTask</p>
        </div>
        <div
          onClick={handleClick}
          className="flex justify-start items-center h-12 w-[95%] rounded-4xl xl:mt-5 mt-9 bg-gradient-to-r from-violet-950 to-[#2D336B] bg-clip-content cursor-pointer shadow-md hover:shadow-lg"
        >
          <p className="font-bold font-sans text-sm text-white ml-4 w-[80%]">
            Create new Task..
          </p>
          <div className="text-white ml-7 lg:ml-25 xl-ml-149 mt-1">
            <span className="material-symbols-outlined">edit</span>
          </div>
        </div>
        {click && (
          <div className="flex xl:mt-2 mt-4 w-[95%] h-18 bg-gradient-to-r from-violet-950 to-[#2D336B] bg-clip-content rounded-4xl justify-start flex-row shadow-md hover:shadow-lg items-center transition-all duration-300">
            <input
              onChange={handleChange}
              value={todo}
              className="w-[75%]  ml-4 border-2 border-violet-400 rounded-2xl p-2 shadow-md hover:shadow-lg placeholder-black text-white"
              type="text"
              placeholder="type here.."
            />
            <button
              onClick={handleAdd}
              disabled={todo.length < 3}
              className="bg-violet-400 hover:bg-gray-800 ml-4 xl:ml-24 xl:h-12 xl:w-16 h-10 w-12 font-bold rounded-xl text-black hover:text-violet-400 cursor-pointer disabled:font-bold shadow-md hover:shadow-lg disabled:bg-[#373b5f] disabled:text-black"
            >
              Save
            </button>
          </div>
        )}
        {/* Scrollable Div  */}
        <div className="flex flex-col items-center w-full flex-1 overflow-y-auto mt-4">
          {todos.length === 0 && (
            <div className="mt-6 font-bold text-3xl text-white animate-bounce">
              No Task to Display
            </div>
          )}
          {todos.length !== 0 && (
            <div className="flex justify-start w-[95%] ml-7 items-center mt-4">
              <input
                type="checkbox"
                checked={showFinished}
                onChange={toggleShowFinished}
              />
              <p className="text-sm text-black font-semibold ml-2">
                Show Finished
              </p>
            </div>
          )}

          <Alert handleDelete={handleDelete} taskToDelete={taskToDelete} />
          {todos && todos.length > 0 && todos.map((task, index) => {
            return (
              (showFinished || !task.isCompleted) && (
                <Task
                  key={index}
                  todo={task.todo}
                  isCompleted={task.isCompleted}
                  id={task.id}
                  toggleTaskCompleted={toggleTaskCompleted}
                  handleEdit={handleEdit}
                  onDelete={() => {
                    setTaskToDelete(task.id);
                  }}
                />
              )
            );
          })}
        </div>
        <div className="font-medium text-xs flex items-end mb-6 xl:mb-3 text-black">
          Tanishq lather
        </div>
      </div>
    </>
  );
};

export default Todos;
