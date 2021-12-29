import Header from './components/header'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'
import { RouteList } from './router/route'

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={'/'}>
        <Header />
        {RouteList}
      </BrowserRouter>
    </div>
  )
}

export default App
