import React from 'react'
import Dark from '../images/dark.png'
import Light from '../images/light.png'

import Store from '../zustand/store'

const Theme = () => {
  const { themeState: { dark }, toggleDarkMode} = Store()

  return (
    <div style={{cursor: 'pointer', padding: '15px'}}>
      {
        dark
        ? <img src={Dark} alt="Dark" width={50}
        onClick={() => toggleDarkMode(false)} />
        : <img src={Light} alt="Light" width={50}
        onClick={() => toggleDarkMode(true)} />
      }
    </div>
  )
}

export default Theme