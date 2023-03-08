
import './App.css';
import DeleteRecord from './DeleteRecord';
import Login from './Login';
import Showdata from './Showdata';
import Update from './Update';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {
  

  return (
    <div className="App">
      <BrowserRouter ><Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/Showdata' element={<Showdata/>}/>
        <Route path='/Update' element={<Update/>}/>
        <Route path='/DeleteRecord' element={<DeleteRecord/>}/>
        </Routes></BrowserRouter>
    </div>
  );
}

export default App;
