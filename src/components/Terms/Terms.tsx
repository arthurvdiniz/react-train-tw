import React from 'react'

function Terms(): React.ReactElement {
  return (
    <div>
      <h1 style={{ color: 'red' }}>Terms of Service</h1>
      <input type='checkbox' checked={false} value='Accept terms of service'></input>
    </div>
  )
}

export default Terms
