import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Home } from './components/home';
import { NoMatch } from './components/NoMatch';
import { Layout } from './components/Layout';
import ItemDetailContainer from './components/ItemDetailContainer';




const App = () => {
  
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/nort-sport-Nogueroles" element={<Layout />}>
      <Route index element={ <Home/> } />
      <Route path="/nort-sport-Nogueroles/:id" element={<ItemDetailContainer/>} />
      <Route path="*" element={<NoMatch/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
