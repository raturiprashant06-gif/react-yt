import React from 'react'
import Card from './components/card'


const App = () => {
  return (
    <div className='parent'>

      <Card user='Aman' age={18} img='https://images.unsplash.com/photo-1774939234746-434c6f82c489?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fEpyNmZBTXRmY2lVfHxlbnwwfHx8fHw%3D' />
      <Card user='Prashant' age={19} img='https://images.unsplash.com/photo-1775299598615-d43b826a0493?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE1fEpyNmZBTXRmY2lVfHxlbnwwfHx8fHw%3D' />
      <Card user='Pihu' age={19} img='https://images.unsplash.com/photo-1774923309787-d94a3eecd317?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D' />

        
    </div>
  ) 
}

export default App
