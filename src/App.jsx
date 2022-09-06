import './App.css'
import Principal from './pages/Principal'
import { CrudProvider } from './context/CrudProvider'

function App() {

  return (
    <CrudProvider>
      <Principal/>
    </CrudProvider>
  )
}

export default App
