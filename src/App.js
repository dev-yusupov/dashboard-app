import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomeLayout from './layouts/home';

function App() {
  return (
    // <Button color={'neutral'}>Button</Button>
    <>
      <Router>
        <Routes>

          <Route path='*' element={<HomeLayout />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
