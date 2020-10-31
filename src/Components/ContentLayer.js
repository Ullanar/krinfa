import React from 'react';
import 'antd/dist/antd.css';
import {Route} from "react-router-dom";
import FirstTask from "./11/11";
import SecondTask from "./12/12";


function ContentLayer() {
    return (

        <div style={{padding: 10}}>

            <Route path='/task1' render={() => <FirstTask/>}/>
            <Route path='/task2' render={() => <SecondTask/>}/>

        </div>
    )
}

export default ContentLayer
