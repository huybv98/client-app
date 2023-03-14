import React from 'react'
import './App.scss'
import AppRoutes from 'components/AppRoutes/index'
import AppSpinner from 'components/AppSpinner/index'

function App() {
  const loading = false
  return (
    <div className="Client-App">
      <AppSpinner loading={loading} />
      <AppRoutes />
    </div>
  )
}

export default App
