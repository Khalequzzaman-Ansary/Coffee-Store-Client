import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useLoaderData, useNavigate } from 'react-router-dom'
import CoffeeCard from './components/CoffeeCard'

function App() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate();
  const coffees = useLoaderData();

  const goToAddCoffee = () => {
    navigate('/addCoffee');
  }

  return (
    <>
      <div className='m-10 text-center'>
        <h3 className='text-4xl text-green-500 pb-4'>Welcome to Coffee Store!</h3>
        <button className="btn btn-sm btn-outline btn-secondary" onClick={goToAddCoffee}>Add New Coffee</button>
        <div className='grid md:grid-cols-2 gap-3'>
          {
            coffees.map(coffee => <CoffeeCard
              key={coffee._id} coffee={coffee}></CoffeeCard>)
          }
        </div>
      </div>
    </>
  )
}

export default App
