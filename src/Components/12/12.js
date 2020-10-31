import React from 'react'
import {Input} from 'antd';
import css from './12.modelu.css'
import {connect} from "react-redux";
import {setSecondValueAC} from "../../Redux/mainReducer";
import {Button} from 'antd';

const {Search} = Input;


function SecondTask(props) {

    const handleClick = () => {
        let x = document.getElementById('x').value
        let y = document.getElementById('y').value
        props.setCheckResult(x + ' ; ' + y)

    }

    return (

        <div style={{marginTop: 150}}>
            <h3>Введите значение Х</h3>
            <div>
                <Input placeholder="Введите X"
                       style={{width: 480}}
                       type='Number'
                       id='x'
                />
            </div>

            <h3>Введите значение Y</h3>
            <div>
                <Input placeholder="Введите Y"
                       style={{width: 480}}
                       type='Number'
                       id='y'
                />
            </div>
            <Button type="primary" style={{margin: 20}} onClick={handleClick}>Рассчитать</Button>


            <h3>Результат проверки</h3>

            <div className={css.y}>
                <Input placeholder="Здесь будет Y"
                       style={{width: 480}}
                       value={props.y}
                />
            </div>

        </div>
    )
}

export default connect(
    state => ({
        y: state.main.secondValue,
    }),
    dispatch => ({
        setCheckResult: (value) => {
            dispatch(setSecondValueAC(value))
        },
    })
)(SecondTask);
