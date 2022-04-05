import {Route, Routes} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Home from "./components/Home/Home";
import Details from './components/Cards/Details/Details';
import CreateActivity from './components/Create/CreateActivity';
import Error from './components/Error/Error';



function App() {
  return (
    <div>
      <Routes>
        <Route extact path="/" element={<LandingPage/>}/>
        <Route extact path="/countries" element={<Home/>}/>
        <Route extact path="/countries/:id" element={<Details/>}/>
        <Route extact path="/create" element={<CreateActivity/>}/>
        <Route extact path = '*' element = {<Error/>}/>
      </Routes>      
    </div>
  );
}

export default App;
