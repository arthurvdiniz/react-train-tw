import React, { useState } from 'react'
import { LoremIpsum } from 'react-lorem-ipsum'

function Terms(): React.ReactElement {
  const [textColor, setTextColor] = useState('black')
  const [checked, setChecked] = useState(false)

  var changeColor = (checked: boolean) => {
    return checked == true ? setTextColor('green') : setTextColor('black')
  }

  return (
    <div>
      <h1 id="terms-of-service-title">Terms of Service</h1>
      <div data-testid="terms-of-service-text" style={{ color: textColor }}>
        <LoremIpsum p={2} />
      </div>
      <label>
        <input
          id="terms-of-service-checkbox"
          checked={checked}
          type="checkbox"
          onChange={() => {
            setChecked(!checked)
            changeColor(!checked)
          }}
        />
        Accept terms
      </label>
    </div>
  )
}
export default Terms
