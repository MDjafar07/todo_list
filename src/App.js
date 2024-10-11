import React,{useState,useEffect,useRef,useCallback} from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

const App=() =>{

  const [todos,setTodos]= useState([]);
  const [userInput,setUseInput]=useState('');
  const ref=useRef(null);

  const addTodoHandler=useCallback(()=>{
      const oldTodos=[...todos];
      if(userInput ==="")
      {
        return;
      }
      else{
          const newTodo={
            id:Math.floor(Math.random()*100),
            text:userInput
          };
          const newTodos=oldTodos.concat(newTodo);
          setTodos(newTodos);
      }
      setUseInput("")

  },[todos,userInput])

  useEffect(()=>{
    ref.current.focus()
  },[])

  return (
    <div className='App'>
      <Navbar />
       <div className='container'>
        <span>Total Todolist : {todos.length}</span>
        <div className='input-container'>
          <input type='text' value={userInput} onChange={(event)=>setUseInput(event.target.value)}
            ref={ref}
          />
          <button onClick={addTodoHandler}>Add</button>
        </div>
        <div className='todos-container-parent'>
          {todos.map((todo,index)=>(
              <div key={todo.id}>{todo.text}</div>
          ))}
        </div>
       </div>
      <Footer />
    </div>
  );
}

export default App;
