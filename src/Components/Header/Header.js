import 'antd/dist/antd.css'
import React from "react";
import css from './Header.module.css'
import {Menu} from 'antd';
import {NavLink} from "react-router-dom";

class Header extends React.Component {
    state = {
        current: 'mail',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({current: e.key});
    };

    render() {
        const {current} = this.state;
        return (
            <div className={css.header}>
                <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal" theme={"dark"}>
                    <Menu.Item key="mail">
                        <NavLink to='/task1'>
                            11 Задание
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="app">
                        <NavLink to='/task2'>
                            12 Задание
                        </NavLink>
                    </Menu.Item>

                </Menu>
            </div>
        );
    }
}


export default Header
