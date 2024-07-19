import { TextField } from '@mui/material';
import Login from './Login';

import Register from './Register';
import Otp from './Otp';
import {
  BrowserRouter,
  Routes,
  
  Route,
  Link,
  
} from  "react-router-dom";
import { Provider } from 'react-redux';
import {store} from './Redux/Store';

function App() {
  return (
    <div >
      <Provider store={store}>
      <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Login/>} />

        <Route path="otp" element={<Otp/>} />
        
      <Route path="signup" element={<Register />} />
      
    </Routes>
  </BrowserRouter></Provider>

      {/* <Otp/> */}
      {/* <Register/> */}
   

{/* <Login/>     */}
    </div>
  );
}

export default App;
