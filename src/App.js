import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Home } from './components/pages/home';
import { NoMatch } from './components/NoMatch';
import { Layout } from './components/MainLayout';
import ItemDetailContainer from './components/ItemDetailContainer';
import { CartProvider } from './components/context/CartContext';



const App = () => {
  
  return (
    <CartProvider>
  <BrowserRouter>
    <Routes>
      <Route path="/nort-sport-Nogueroles" element={<Layout />}>
      <Route index element={ <Home/> } />
      <Route path="/nort-sport-Nogueroles/:id" element={<ItemDetailContainer/>} />
      <Route path="*" element={<NoMatch/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
  </CartProvider>
  );
}

export default App;
