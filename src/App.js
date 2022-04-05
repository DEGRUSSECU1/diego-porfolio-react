import { HomePage } from "./components/HomePage/HomePage";
import { AboutMePage } from "./components/AboutMePage/AboutMePage";
import { Projects } from "./components/Projects/Projects";
import { Routes, Route} from "react-router-dom";


function App() {
  return (
  <div>
        
      <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="about" element={<AboutMePage/>}/>
          <Route path="projects"element={<Projects/>}/> 

      </Routes>
      
    </div>
  );
}

export default App;
