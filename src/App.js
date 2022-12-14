import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/Routes';
import { Toaster } from 'react-hot-toast';


function App() {
  

  return (
    <div className='w-max-[1350px] lg:mx-20 md:mx-10 mx-5'>
     <RouterProvider router={router}></RouterProvider>
     <Toaster />
    </div>
  );
}

export default App;
