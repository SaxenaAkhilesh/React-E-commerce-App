import './App.css';
import AppRoutes from './app/AppRoutes';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <div className='bg-gray-900'>
      
      <CartProvider>
      <AppRoutes />
      </CartProvider>
    </div>
  );
}

export default App;
