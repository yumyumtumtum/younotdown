import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreatePoll from './pages/CreatePoll';
import Home from './pages/Home';
import Plan from './pages/Plan';


const Main = () => {
  return (
    <BrowserRouter> {/* The Switch decides which component to show based on the current URL.*/}
    <Routes>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/Plan' element={<Plan/>}></Route>
      <Route exact path='/CreatePoll' element={<CreatePoll/>}></Route>
    </Routes> 
    </BrowserRouter>
    
  );
}

export default Main;