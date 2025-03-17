import React, { useState } from 'react'
import { generateMnemonic } from 'bip39'

const App = () => {
  const [mnemonic,setMnemonic]  = useState("")
  return (
    <>
        <button onClick={async function(){    
          const mn = await generateMnemonic();
          setMnemonic(mn)
        }}> Create seed Phrase </button>
        <input type = "text" value = {mnemonic}></input>
      
    </>
  )
}

export default App
