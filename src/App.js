import logo from './logo.svg';
import './App.css';
import api from './api/axiosConfig';
import {useEffect, useState} from 'react';
import React, { Component }  from 'react';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';


function App() {

  const [members, setMembers] = useState();

  const getMembers = async () => {
    try {

    const response = await api.get("/api/v1/members/list");
    console.log(response.data);
    setMembers(response.data)

    } catch (err) {
      console.log(err);
    }

  } 

  useEffect(() => {
    getMembers();
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home members={members} />}>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
