
import { DndProvider } from 'react-dnd';
import './App.css';
import Layout from './Components/Layout';
import MainPage from './Pages/MainPage';
import {Toaster} from "react-hot-toast"
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {
  return (
   <Layout>
    <DndProvider backend={HTML5Backend}>

  <Toaster position='top-center' reverseOrder={false}/>
     <MainPage/>
    </DndProvider>
   </Layout>
  );
}

export default App;
