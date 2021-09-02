import React, { useState } from 'react'

function Terms(): React.ReactElement {
  const [textColor, setTextColor] = useState('black')
  const [checked, setChecked] = useState(false)

  var toggle = (value: boolean) => {
    return !value
  }

  return (
    <div>
      <h1 id="terms-of-service-title" style={{ color: textColor }}>
        Terms of Service
      </h1>

      <label>
        <input
          data-testid="terms-of-service-checkbox"
          checked={checked}
          type="checkbox"
          onChange={() => {
            setChecked(toggle)
            setTextColor('green')
          }}
        />
        Accept terms of service
      </label>
    </div>
  )
}
export default Terms
