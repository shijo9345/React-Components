import React, {useEffect, useRef} from 'react'
//direct access to DOM
//store mutable values

function UseRef() {

  const colorParagraph=useRef(null); //colorparagraph={current:value}
  const colors=['#FF0000','#00FF00','#0000FF','#FFFF00','#800080','#00FFFF']

  useEffect(()=>{
    console.log(colorParagraph)
    console.log(colorParagraph.current)
  })
  const stylePara=()=>{
    const randomcolor=Math.floor(Math.random()*colors.length)
    colorParagraph.current.style.color=colors[randomcolor]
  }
  return (
    <>
        <div>
      <button onClick={()=>{stylePara()}}>Click Me</button>
      <h1 ref={colorParagraph}>Hello !</h1>
      </div>
    </>

  )
}

export default UseRef