import React, { Component } from 'react';
import './navigation.css';
import Aux from '../axu/axu';
import DropMenu from './dropmenu/drop';
import Search from './search/search';
import DrawToggle from './Drawtoggle/draw';

class NavigationBar extends Component {
    state = {
        showDropMenu: false
    }
    showDropMenu = () => {
        this.setState({
            showDropMenu: !this.state.showDropMenu
        });
    }

    render(){
        return(
            <Aux>
                <div className="NavigationBar">
                    <DrawToggle/>
                    <Search/>
                    {this.state.showDropMenu ? <DropMenu clickedSignOutButton={this.props.clickedSignOutButton}/> : ""}
                </div>
            </Aux>
        )
    }
}

export default NavigationBar;