import  CreateListForm from './components/CreateListForm';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Register } from "./components/Register";
import useLocalStorageState from 'use-local-storage-state';
import Homepage from "./components/Homepage";
import Mainpage from "./components/Mainpage";
import Login from './components/Login.js';
// import Logout from './components/Logout';
import GroceryListDetail from './components/GroceryListDetail';
import SavedGroceryList from './components/SavedGroceryList';
import GoShopping from './components/GoShopping';


export default function App() {
  const [token, setToken] = useLocalStorageState('grocereaseAuthToken', null)
  const [username, setUsername] = useLocalStorageState('grocereaseUsername', '')

  function setAuth(username, token) {
    setUsername(username)
    setToken(token)
  }

  function eraseAuth() {
    setUsername('')
    setToken('')
  }

  const isLoggedIn = username && token
  
  return (
    <Router>
      <Routes>
        <Route path='/' element={ isLoggedIn ? <Mainpage username={username} token={token} eraseAuth={eraseAuth}/> : <Homepage />}></Route>
        <Route path='/lists' element= {<Mainpage username={username} token={token} eraseAuth={eraseAuth}/>} />
        <Route path="/register" element= { <Register setAuth={setAuth} username={username} token={token} isLoggedIn={isLoggedIn}/>} />
        {/* <Route path='/logout' element={<Logout username={username} eraseAuth={eraseAuth} token={token}/>}/> */}
        <Route path="/login" element={ <Login setAuth={setAuth} isLoggedIn={isLoggedIn}/>} />
        <Route path="/saved_list" element={<SavedGroceryList token={token} />} />
        <Route path="/go_shopping" element={ <GoShopping token={token} />}/>
        <Route path="/unlisted_item" />
        <Route path="/create_list_detail" element={<GroceryListDetail token={token}/>} /> 
      </Routes>
    </Router>
    
  );

}
