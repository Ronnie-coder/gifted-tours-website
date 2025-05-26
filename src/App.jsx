import Router from './routes/Router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => (
  <>
    <Router />
    <ToastContainer position="bottom-right" />
  </>
);

export default App;