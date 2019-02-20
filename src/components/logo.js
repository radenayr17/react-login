import React from "react";
import {View,Text,Image,Keyboard} from "react-native";

import {LogoStyle} from "./stylesheets/index";

class Logo extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            "keyboard":false
        }
        this.logo = require('../../assets/logo.png');
    }

    componentDidMount(){
        this.keyboardDidShowListener = Keyboard.addListener("keyboardDidShow",this.keyboardDidShow);
        this.keyboardDidHideListener = Keyboard.addListener("keyboardDidHide",this.keyboardDidHide);
    }

    componentWillUnmount(){
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }

    keyboardDidShow = () =>{
        this.setState({"keyboard":true});
    }

    keyboardDidHide = () =>{
        this.setState({"keyboard":false});
    }

    render(){
        const {keyboard} = this.state;

        if(keyboard){
            return null;
        }

        return (
            <View style={LogoStyle.container}>
                <Image source={this.logo} style={LogoStyle.logo} />
            </View>
        )
    }
}

export default Logo;