import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import UpdateCoffee from './components/UpdateCoffee.jsx';
import AddCoffee from './components/AddCoffee.jsx';
import SignUp from './components/SignUp.jsx';
import SignIn from './components/SignIn.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import UsersList from './components/UsersList.jsx';
import ProtectedRoute from './components/ProtectedRoute'; // Import the ProtectedRoute

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    loader: () => fetch('http://localhost:5000/coffee'),
  },
  {
    path: '/addCoffee',
    element: <AddCoffee></AddCoffee>,
  },
  {
    path: '/updateCoffee/:id',
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`),
  },
  {
    path: '/signUp',
    element: <SignUp></SignUp>,
  },
  {
    path: '/signIn',
    element: <SignIn></SignIn>,
  },
  {
    path: '/users',
    element: (
      <ProtectedRoute>
        <UsersList />
      </ProtectedRoute>
    ),
    loader: () => fetch('http://localhost:5000/users'),
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);