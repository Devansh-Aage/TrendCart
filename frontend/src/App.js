import { Routes, Route } from 'react-router-dom';
import './App.css';
import { lazy, Suspense, startTransition } from 'react';
import ProdContext from './ProdContext';
import { Toaster } from 'sonner';


const Flashsale = lazy(() => import("./components/Header/Flashsale"));
const Contact = lazy(() => import("./components/Header/Contact"));
const Home = lazy(() => import("./components/Home"));
const Navbar = lazy(() => import("./components/Header/Navbar"));
const Notfound = lazy(() => import("./components/Notfound"));
const Signup = lazy(() => import("./components/Header/Signup"));
const Login = lazy(() => import("./components/Header/Login"));
const Footer = lazy(() => import("./components/Footer"));
const About = lazy(() => import("./components/Header/About"));
const Spinner = lazy(() => import("./components/Spinner"));
const Cart = lazy(() => import('./components/Header/Icons/Cart'));
const Fav = lazy(() => import('./components/Header/Icons/Favourite'));
const Profile = lazy(() => import('./components/Header/Icons/Profile'));
const Success = lazy(() => import('./components/Success'));
const Product = lazy(() => import('./components/Main/Product'));

function App() {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <ProdContext>
          <div className="">
            <Flashsale startTransition={startTransition}/>
            <Navbar startTransition={startTransition}/>
            <Routes>
              <Route path='/' element={<Home startTransition={startTransition}/>}></Route>
              <Route path='/about' element={<About startTransition={startTransition}/>}></Route>
              <Route path='/contact' element={<Contact startTransition={startTransition}/>}></Route>
              <Route path='/signup' element={<Signup startTransition={startTransition}/>}></Route>
              <Route path='/login' element={<Login startTransition={startTransition}/>}></Route>
              <Route path='/undefined' element={<Notfound startTransition={startTransition}/>}></Route>
              <Route path='/cart' element={<Cart startTransition={startTransition}/>}></Route>
              <Route path='/fav' element={<Fav startTransition={startTransition}/>}></Route>
              <Route path='/profile' element={<Profile startTransition={startTransition}/>}></Route>
              <Route path='/success' element={<Success startTransition={startTransition}/>}></Route>
              <Route path='/products/:name/:image/:price/:rating/:description' element={<Product startTransition={startTransition}/>}></Route>
            </Routes>
            <Toaster richColors />
            <Footer startTransition={startTransition}/>
          </div >
        </ProdContext>
      </Suspense>
    </>
  );
}

export default App;
