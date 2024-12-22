import {Route,Routes} from 'react-router-dom'; 
import Taskpage from './pages/TasksPage.jsx';
import TaskForm from './pages/TaskForm.jsx';
import NotFound from './pages/NotFound.jsx';
import NavBar from './components/NavBar.jsx';
import { TaskContextProvider } from './context/TaskProvider.jsx';

function App() {
  return (
    <TaskContextProvider>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Taskpage />} />
      <Route path="/new" element={<TaskForm />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </TaskContextProvider>
  );
}

export default App;