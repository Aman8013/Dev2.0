import { Routes, Route } from 'react-router-dom'
import Login from './Components/Login';
import New from './Components/Blog/New';

function App() {
  return (
    <>
        <Routes>
          <Route path="/blog/new" element={<New />} />
          {/* <Route path="/register" element={<Register />} /> */}
          {/* <Route path="*" element={<Error />} /> */}
        </Routes>
    </>
  );
}

export default App;
