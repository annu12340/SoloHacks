import React from "react";

import Home from "./pages/HomePage/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Details from "./pages/DetailView/Details";
import CapmpaignForm from "./pages/Forms/CampaignForm";

import Dashboard from "./pages/Dashboard";
import HistoryTab from "./pages/History/HistoryTab";

function App() {
   return (
      <>
         <Router>
            <Routes>
               <Route path='/' element={<Home />}>
                  <Route path='/dashboard' element={<Dashboard />}></Route>
                  <Route path='/campaignhistory' element={<HistoryTab />}></Route>
                  <Route path='/campaign/:id' element={<Details />}></Route>
                  <Route path='/addcampaign' element={<CapmpaignForm />}></Route>
               </Route>
            </Routes>
         </Router>
      </>
   );
}

export default App;
