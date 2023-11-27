import  {useState} from 'react';
import classes from './App.module.scss'
import {Link, Outlet} from "react-router-dom";
import About from "@/pages/about/About";
export const App = () => {
    const [count, setCount] = useState<number>(0)
    const increment = () => setCount(prevState => prevState + 1)
    if (__PLATFORM__ === 'desktop'){
        return <div>ISDESKTOPLATFORM</div>
    }
    if (__PLATFORM__ === 'mobile'){
        return <div>ISMOBILEPLATFORM</div>
    }
    return (

        <div>
            <h1>PLATFORM={__PLATFORM__}</h1>
            <div>
                photo
            </div>
            <Link to={'/about'}>about</Link>
            <br/>
            <Link to={'/shop'}>shop</Link>
            <h1>{count}</h1>
            <button className={classes.button} onClick={increment}></button>
            <About/>
        </div>
    );
};

