import { Routes, Route } from 'react-router-dom'
import Login from './Components/Login';

function App() {
  return (
    <>
        <Routes>
          <Route path="/login" element={<Login />} />
          {/* <Route path="/register" element={<Register />} /> */}
          {/* <Route path="*" element={<Error />} /> */}
        </Routes>
    </>
  );
}

export default App;
