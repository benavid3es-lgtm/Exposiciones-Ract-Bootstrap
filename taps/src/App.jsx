
import './App.css'
import SidebarTabs from './SidebarTabs'
import Dashboard from './Dashboard'

function App() {
  return (
    <div className='d-flex'>
      <SidebarTabs></SidebarTabs>
      <Dashboard></Dashboard>
    </div>
  )
}

export default App