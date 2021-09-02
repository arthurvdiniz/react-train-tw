import React, { useState } from 'react'

function Terms(): React.ReactElement {
  const [textColor, setTextColor] = useState('black')
  return (
    <div>
      <h1 id="terms-of-service" style={{ color: textColor }}>
        Terms of Service
      </h1>
      <input
        type="checkbox"
        checked={false}
        onClick={() => setTextColor('green')}
        value="Accept terms of service"
      ></input>
    </div>
  )
}
export default Terms
