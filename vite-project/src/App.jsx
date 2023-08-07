import { useState } from 'react'
import './App.css'
import SignUpForm from './components/SignUpForm'
import Authenticate from './components/Authenticate'

function App() {
  const [token, setToken] = useState(null)

  return (
    <>
      <div className='cup'>
        <SignUpForm token={token} setToken={setToken} />
        <Authenticate token={token} setToken={setToken} />
      </div>
    </>
  )
}

export default App
