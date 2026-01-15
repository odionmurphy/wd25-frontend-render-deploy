import { useState, useEffect } from "react"

import "./App.css"

function App() {
  const [message, setMessage] = useState("")

  useEffect(() => {
    const getMessage = async () => {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/message`)
      const data = await res.json()
      console.log(data)
      setMessage(data.message)
    }

    getMessage()
  }, [])

  return (
    <>
      <h1>Frontend Render Example</h1>
      <p>Here is a connection to our server</p>

      {message.length < 0 ? <p>Loading...</p> : <p>Message: {message}</p>}
    </>
  )
}

export default App