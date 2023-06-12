import React from 'react'

const Content = () => {

  const handleNameChange = () => {
    const names = ['Bob', 'Jane', 'Joe', 'Jill', 'Jack', 'Jenny', 'Jerry', 'Judy', 'Jim', 'Jen'];
    const int = Math.floor(Math.random() * 10);
    return names[int];
  }

  const handleClick = () => {
    console.log('button clicked')
  }

  const handleClick2 = (name) => {
    console.log(`${name} clicked`)
  }

  const handleClick3 = (e) => {
    console.log(e.target.innerText)
  }


  return (
    <main>
      <p>
        Hello {handleNameChange()}!
      </p>
      <button onClick={handleClick}>click</button>
      <button onClick={() => { handleClick2('Devin') }}>click 2</button>
      <button onClick={(e) => { handleClick3(e) }}>click 3</button>
    </main>

  )
}

export default Content