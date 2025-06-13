import { useState } from 'react'

function ConditionalRenderingDemo() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div>
      {isLoggedIn ? (
        <h2>Welcome back!</h2>
      ) : (
        <h2>Please log in.</h2>
      )}

      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </div>
  )
}
export default ConditionalRenderingDemo;
