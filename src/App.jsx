import './index.css'
import Navbar from './components/Navbar'
import Todos from './components/Todos'
import AlertState from './context/AlertState'
 


function App() {

  return (
    <>
    <AlertState>
      <Navbar />
      <div className="flex justify-center h-screen xl:mt-3 items-center">
        <Todos />
      </div>
    </AlertState>
    </>   
  )
}

export default App
