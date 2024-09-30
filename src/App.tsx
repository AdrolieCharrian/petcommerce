import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col justify-center items-center w-screen h-screen'>
      <h1 className='text-cyan-400'>Vite + React</h1>
      <div className="card">
        <Button variant={'ghost'} className='hover:bg-opacity-85' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
      </div>
    </div>
  )
}

export default App
