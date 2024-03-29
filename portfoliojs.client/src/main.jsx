import React from 'react'
import ReactDOM from 'react-dom/client'
import ResponsiveAppBar from '../src/Components/NavigationBar.jsx'
import RowAndColumnSpacing from '../src/Components/CharacterStatements.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ResponsiveAppBar/>
    <RowAndColumnSpacing/>
  </React.StrictMode>,
)
