import { BrowserRouter,Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Cmss from './cms2'
import Cms from './cms'

function App() {
 

  return (
    <>
  {/* <Cmss/> */}
  <BrowserRouter>
  {/* <Link to="/" className='uppercase text-red-400'>Mine</Link>
  <Link to="version2" className='uppercase'>v2</Link> */}
  <Routes>
    <Route path="/" element=  {<Cms/>}/>
    <Route path="/version2" element=  {<Cmss/>}/>
  </Routes>
  </BrowserRouter>
  
    </>
  )
}

export default App
