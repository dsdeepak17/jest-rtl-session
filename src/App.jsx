import './App.css';
import TodoPage from './pages/TodoPage';
import FollowersPage from './pages/FollowersPage';
import { Routes, Route } from 'react-router-dom'
import MainLayout from './layout/MainLayout';

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route element={<MainLayout />} >
          <Route strict path="/" element={<TodoPage />} />
          <Route strict exact path="/followers" element={<FollowersPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
