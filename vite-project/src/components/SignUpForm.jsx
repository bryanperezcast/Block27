import { useState } from 'react'

function SignUpForm({ setToken }) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)
  const [successMessage, setSuccessMessage] = useState(null)

  async function handleSubmit(event) {
    event.preventDefault()
    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    } 
    try {
      const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup",
      { 
        method: "POST", 
        headers: { 
          "Content-Type": "application/json" 
        }, 
        body: JSON.stringify({ 
          username, 
          password
        }) 
      })
      const result = await response.json()
      setSuccessMessage(result.message)
      setToken(result.token)
    }
    catch (error) {
      setError(error.message);
    }
  }

    return (
      <div className='container top'>
        <h2>Sign Up</h2>
        {successMessage && <p>{successMessage}</p>}
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
          <label>
            Username: {" "}<input value={username} onChange={(e) => setUsername(e.target.value)} />
          </label>
          <label>
            Password: {" "}<input value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <button className='btn'>Submit</button>
        </form>
      </div>
    )
  }
  
  export default SignUpForm
  