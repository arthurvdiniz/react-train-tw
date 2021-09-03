import React, { useState } from 'react'

function Terms(): React.ReactElement {
  const [textColor, setTextColor] = useState('black')
  const [checked, setChecked] = useState(false)

  var toggle = (value: boolean) => {
    return !value
  }

  var changeColor = (checked: boolean) => {
    return checked == true ? setTextColor('green') : setTextColor('black')
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
            changeColor(!checked)
          }}
        />
        Accept terms of service
      </label>
    </div>
  )
}
export default Terms
