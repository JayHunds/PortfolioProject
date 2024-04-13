import React from 'react'
import ReactDOM from 'react-dom/client'
import ResponsiveAppBar from '../src/Components/NavigationBar.jsx'
import RowAndColumnSpacing from '../src/Components/ProjectShowcase.jsx'
import App from '../src/Components/DarkMode.jsx'
import SpacingGrid from './Components/AboutMe.jsx'
import {Example} from './Components/MuiCarousel.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
    <ResponsiveAppBar/>
    <Example/>
    <SpacingGrid/>
    <RowAndColumnSpacing/>
    <App/>
  </React.StrictMode>,
)
