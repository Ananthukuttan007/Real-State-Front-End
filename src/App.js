import Login from './components/login/login'
import Signup from './components/signUp/signUp'
import {BrowserRouter, Routes, Route} from "react-router-dom"
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/login' element = {<Login/>} />
        <Route path='/sign-up' element= {<Signup/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
