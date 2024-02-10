
import './App.css';
import Layout from './Components/Layout';
import MainPage from './Pages/MainPage';
import {Toaster} from "react-hot-toast"

function App() {
  return (
   <Layout>
  <Toaster position='top-center' reverseOrder={false}/>
     <MainPage/>
   </Layout>
  );
}

export default App;
