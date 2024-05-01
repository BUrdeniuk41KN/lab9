import StatusBar from './Components/StatusBar/StatusBar';
import TraficLight from './Components/Trafic_Lights/Trafic_Light';
import Home from './Components/Pages/Home/Home'
import ErrorPage from './Components/Pages/ErrorPage/ErrorPage'
import Header from './Components/Pages/Header'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/TraficLight",
      element: <TraficLight  tlColorDef = "Red" tlContoroller = {<StatusBar />}/>,
      errorElement: <ErrorPage/>
    },
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage/>
    },
  ]);

  return (
    <div className="App">
      <Header></Header>
      <RouterProvider router={router} />
       
    </div>
  );
}

export default App;
