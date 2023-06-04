import logo from './logo.svg';
import './App.css';
import Contador from './componentes/contador';
import { useState } from 'react';
import Tarea from './componentes/Tarea';
import Tarealista from './componentes/Tarealist';
import Centigrados from './componentes/Centigrados';
import Galeria from './componentes/Galeria';

function App() {
  const [listTodo, setListTodo] = useState([]);
  let addList = (inputText) => {
    setListTodo([...listTodo,inputText]);
  }
  const borraritem = (key)=>{
    let newListTodo =[...listTodo];
    newListTodo.splice(key,1)
    setListTodo([...newListTodo])
  }
  return (
    <div className="App">
      <Contador></Contador>
      <Tarea
      addList = {addList}></Tarea>
      {listTodo.map((listItem,i)=>{
        return(
          <Tarealista key={i} item ={listItem} borraritem={borraritem}></Tarealista>
        );
      })}
      <Centigrados ></Centigrados>
      <Galeria></Galeria>
    </div>
  );
}

export default App;
