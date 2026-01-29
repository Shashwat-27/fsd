import React from 'react'
import { useState } from 'react'

function Layout() {

  const[count, setCount] = useState(0);

  return (
    <div>
      <h3>counter value {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment </button>
    </div>
  )
}

export default Layout;
