import React, { Suspense, lazy } from 'react';
import './App.css';
import TodoPage from './pages/TodoPage';
// import FollowersPage from './pages/FollowersPage';
import { Routes, Route } from 'react-router-dom'
import MainLayout from './layout/MainLayout';

const FollowersPage = lazy(() => import('./pages/FollowersPage'));

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  // componentDidCatch(error, errorInfo) {
  //   // You can also log the error to an error reporting service
  // }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div style={{ height: '60vh' }}>
          <h1 className='centered-item'>Something went wrong.</h1>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  return (
    <ErrorBoundary>
      <div className="app-container">
        <Suspense fallback={<MainLayout>Loading...</MainLayout>}>
          <Routes>
            <Route element={<MainLayout />} >
              <Route strict path="/" element={<TodoPage />} />
              <Route strict exact path="/followers" element={<FollowersPage />} />
            </Route>
          </Routes>
        </Suspense>
      </div>
    </ErrorBoundary>
  );
}

export default App;
