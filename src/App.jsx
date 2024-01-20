import { useState } from 'react'
import './App.css'
import Home from './pages/home'
import { Routes, Route } from "react-router-dom"
import RecentArticle from './pages/recentArticle'
import ReactHooksPage from './pages/articles/react/ReactHooksPage'
import GuideCompletNode from './pages/articles/nodejs/GuideCompletNode'
import DeveloppementWebBasics from './pages/articles/developpementWeb/DeveloppementWebBasics'
import { Analytics } from '@vercel/analytics/react';


function App() {

  return (
    <>
     <Analytics />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/article/Découvrir React Hooks" element={<ReactHooksPage />} />
      <Route path="/article/Guide complet sur Node.js" element={<GuideCompletNode />} />
      <Route path="/article/Les bases du développement web" element={<DeveloppementWebBasics />} />
    </Routes>
  </>
  
  )
}

export default App
