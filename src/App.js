import { Route, Routes } from 'react-router-dom';
import './App.css';
import Error from './components/Error';
import Post from './components/Post';
import UsersList from './components/UsersList';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<UsersList/>} />
        <Route path='/Profile/Post/:id' element={<Post/>} />
        <Route path='*' element={<Error/>} />
      </Routes>
    </div>
  );
}

export default App;
