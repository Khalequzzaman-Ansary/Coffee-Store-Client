import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CoffeeCard from './components/CoffeeCard';
import { useAuth } from './providers/AuthProvider'; // Import useAuth

function App() {
  const [count, setCount] = useState(0);
  const coffees = useLoaderData();
  const { user } = useAuth(); // Get the current user

  return (
    <>
      <div className='mx-8 text-center'>
        <h3 className='text-4xl text-green-500 py-4'>Welcome to Coffee Store!</h3>
        <nav className='pt-3 pb-5'>
          <Link className="btn mx-4 btn-sm btn-outline btn-secondary" to={'/addCoffee'}>Add New Coffee</Link>
          <Link className="btn mx-4 btn-sm btn-outline btn-secondary" to={'/signUp'}>Sign Up</Link>
          <Link className="btn mx-4 btn-sm btn-outline btn-secondary" to={'/signIn'}>Sign In</Link>
          {user && ( // Only show the Users List link if the user is authenticated
            <Link className="btn mx-4 btn-sm btn-outline btn-secondary" to={'/users'}>Users List</Link>
          )}
        </nav>
        <div className='grid md:grid-cols-2 gap-3'>
          {coffees.map(coffee => (
            <CoffeeCard key={coffee._id} coffee={coffee} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;