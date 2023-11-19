import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomeLayout from './layouts/home';
import AuthLayout from './layouts/auth';

function App() {
  return (
    // <Button color={'neutral'}>Button</Button>
    <>
      <Router>
        <Routes>

          <Route path='*' element={<HomeLayout />} />
          <Route path='/auth/*' element={<AuthLayout />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
