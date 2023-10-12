import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ProtocolComponent from "../layout"
import { AppProvider } from "../context/ProtocolContext"

const AppRouter: React.FC = () => {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" Component={ProtocolComponent} />
        </Routes>
      </Router>
    </AppProvider>
  )
}

export default AppRouter
