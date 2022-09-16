import './App.css'

import Header from './components/Header/Header'
import Weather from './components/Weather/Weather'

function App() {

  const HandleChange = (e) => {
    e.key === 'Enter' ? console.log(e.target.value) : ''
  }

  return (
    <div className="App">
      <Header HandleChange={HandleChange}  />
      <Weather />
    </div>
  )
}

export default App
