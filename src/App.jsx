import { RecoilRoot } from 'recoil';
import { Routes, Route} from 'react-router-dom';
import TodoPage from './pages/TodoPage';
import PostPage from './pages/PostPage';
import UserPage from './pages/UserPage';
import HomePage from './pages/HomePage';



const App = () => {
  return (
    <RecoilRoot>
        <Routes>
          <Route path='' element={<HomePage/>}/>
          <Route path='/todos' element={<TodoPage />} />
          <Route path='/posts' element={<PostPage />} />
          <Route path='/users' element={<UserPage/>} />
          <Route path='/comments' element={<div>Comments Page</div>} />
        </Routes>
    </RecoilRoot>
  );
};

export default App;
