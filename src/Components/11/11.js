import React from 'react'
import {Input} from 'antd';
import css from './11.module.css'
import {connect} from "react-redux";
import {setFirstValueAC} from "../../Redux/mainReducer";
import firstTask from '../../assets/firstTask.png'

const {Search} = Input;


function FirstTask(props) {

    const onInputX = (value) => {

        value = Number(value)
        if (value != null && value !== '') {


            if (value < -8 || value > 8) {
                console.log('Значение вне области')
                props.setY('Значение вне области')
            }

            else if (value >= -8 && value < -2) {
                props.setY(Math.sqrt(9 - Math.pow(value + 5, 2)) - 4)
            }

            else if (value >= -2 && value < 4) {
                props.setY(5/6 * value - 7/3)
            }

            else if (value >= 4 && value < 6) {
                props.setY(1)
            }

            else if (value >= 6 && value <= 8) {
                props.setY(value - 5)
            }
        }
    }

    return (

        <div style={{marginTop: 150}}>
            <img src={firstTask}/>
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
