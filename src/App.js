import * as React from 'react';
import Header from './components/header';
import TutorialComponent from './components/tutorial';
import KnowledgeComponent from './components/knowledge';
import LonginComponent from './components/login';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  
    return (
      
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Header/>}>
              <Route path= "" element= {<KnowledgeComponent/>}>
              </Route>
              <Route path= "simple-powerful-profitable-bsc-eth-flash-loan-method-tutorial" element= {<TutorialComponent/>}>
              </Route>
            </Route> 
            <Route path="/login" element={<LonginComponent/>}>

            </Route>
                  
          </Routes>
      </BrowserRouter>
    );
}

export default App;
