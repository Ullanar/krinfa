import React from 'react'
import {Input} from 'antd';
import css from './11.module.css'
import {connect} from "react-redux";
import {setFirstValueAC} from "../../Redux/mainReducer";

const {Search} = Input;


function FirstTask(props) {

    const onInputX = (value) => {
        if (value != null && value !== '') {
            if (value < -5 || value > 10) {
                console.log('- ' + value)
                props.setY('Значение вне области')
            } else {
                console.log('Попали в область значений, ' + value)
                props.setY(value)
            }
        }
    }

    return (

        <div style={{marginTop: 150}}>
            <h3>Введите значение Х</h3>
            <div>
                <Search
                    type='Number'
                    placeholder="Введите значение Х"
                    allowClear
                    enterButton="Рассчитать"
                    size="large"
                    onSearch={onInputX}
                    style={{width: 500, padding: 10}}
                />
            </div>

            <h3>Рассчитанный Y</h3>

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
        y: state.main.firstValue,
    }),
    dispatch => ({
        setY: (value) => {
            dispatch(setFirstValueAC(value))
        },
    })
)(FirstTask);
