import React from 'react'
import ReactDOM from 'react-dom/client'
import ResponsiveAppBar from '../src/Components/NavigationBar.jsx'
import RowAndColumnSpacing from '../src/Components/CharacterStatements.jsx'
import App from '../src/Components/DarkMode.jsx'
import SpacingGrid from '../src/Components/RotatingCards.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ResponsiveAppBar/>
    <RowAndColumnSpacing/>
    <App/>
    <SpacingGrid/>
  </React.StrictMode>,
)
