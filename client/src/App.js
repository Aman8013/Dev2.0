import { Routes, Route } from 'react-router-dom'
import New from './Components/Blog/New';
import 'bootstrap/dist/css/bootstrap.min.css';
import Update from './Components/Blog/Update';
import Signin from './Components/Signin';

function App() {
  return (
    <>
        <Routes>
          <Route path="/blog/new" element={<New />} />
          <Route path="/blog/:id/edit" element={<Update />} />
          <Route path="/signin" element={<Signin />} />
          {/* <Route path="*" element={<Error />} /> */}
        </Routes>
    </>
  );
}

export default App;
