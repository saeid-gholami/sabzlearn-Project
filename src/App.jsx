import React from 'react'
import './App.css'
import Main from './components/main/Main'
import Topbar from './components/Header/Topbar'
import Navbar from './components/Header/Navbar'
import Footer from './components/Footer/Footer'

export default function App() {
  return (
    <>
      <Topbar />
      <Navbar />
      <Main />
      <Footer />
    </>
  )
}
