import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {CheckBox} from "react-native-elements";
import {Text, View, TextInput,TouchableOpacity,KeyboardAvoidingView,Alert} from "react-native";

import Logo from "../logo";
import Actions from "../../actions/index";
import {LoginStyle} from "../stylesheets/index";

class LoginScreen extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            "email":props.email,
            "password":props.password,
            "remember":props.remember,
            "emailError":null,
            "passwordError":null,
            "error":false
        }

        this.onChangeRemember = this.onChangeRemember.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps){
        const {email,password,remember} = nextProps;

        this.setState({"email":email,"password":password,"remember":remember});
    }

    renderEmailError = () =>{
        const {emailError} = this.state;

        if(emailError){
            return (
                <View>
                    <Text style={LoginStyle.errorLabel}>{emailError}</Text>
                </View>
            )
        }

        return null;
    }

    renderPasswordError = () =>{
        const {passwordError} = this.state;

        if(passwordError){
            return (
                <View>
                    <Text style={LoginStyle.errorLabel}>{passwordError}</Text>
                </View>
            )
        }

        return null;
    }

    onChangeRemember = () =>{
        const {remember} = this.state;

        this.setState({"remember":!remember});
    }

    onChangeEmail = (email) =>{
        this.setState({"email":email});

        const error = this.validateEmail(email);

        if(error){
            this.setState({"emailError":error,"error":true});
        }else{
            this.setState({"emailError":null},() => {
                this.checkError();
            });
        }
    }

    onChangePassword = (password) =>{
        this.setState({"password":password});

        const error = this.validatePassword(password);

        if(error){
            this.setState({"passwordError":error,"error":true});
        }else{
            this.setState({"passwordError":null},() => {
                this.checkError();
            });
        }
    }

    checkError = () =>{
        const {emailError,passwordError} = this.state;

        if(emailError || passwordError){
            this.setState({"error":true});
        }else{
            this.setState({"error":false});
        }
    }

    validateEmail = (email) =>{
        let error = null;

        if(email){
            const isEmail = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(email);

            if(!isEmail){
                error = "not correct format for email address";
            }
        }else{
            error = "email is required";
        }

        return error;
    }

    validatePassword = (password) =>{
        let error = null;

        if(password){
            const passwordLength = password.length;

            if(passwordLength < 6 || passwordLength > 12){
                error = "please use atleast 6 - 12 characters";
            }
        }else{
            error = "password is required";
        }

        return error;
    }

    onSubmit = () =>{
        const {email,password,remember} = this.state;

        const emailError = this.validateEmail(email);
        const passwordError = this.validatePassword(password);

        if(emailError || passwordError){
            this.setState({"error":true});

            if(emailError){
                this.setState({"emailError":emailError});
            }

            if(passwordError){
                this.setState({"passwordError":passwordError});
            }
        }else{
            this.setState({"email":"","password":"",remember:false});

            Alert.alert("Success","Login successful");

            if(remember){
                this.props.actions.setUserLogin(email,password,remember);
            }else{
                this.props.actions.clearUserLogin();
            }
        }
    }

    render(){
        const {email,password,remember,error} = this.state;

        return (
            <KeyboardAvoidingView behavior={"padding"} style={LoginStyle.container}>
                <Logo />
                <View style={LoginStyle.form}>
                    <View style={LoginStyle.formGroup}>
                        <View><Text style={LoginStyle.label}>Email</Text></View>
                        <View>
                            <TextInput
                                value={email}
                                style={LoginStyle.input}
                                onChangeText={this.onChangeEmail}
                            />
                        </View>
                        {this.renderEmailError()}
                    </View>
                    <View style={LoginStyle.formGroup}>
                        <View><Text style={LoginStyle.label}>Password</Text></View>
                        <View>
                            <TextInput 
                                value={password}
                                style={LoginStyle.input}
                                secureTextEntry={true}
                                onChangeText={this.onChangePassword}
                            />
                        </View>
                        {this.renderPasswordError()}
                    </View>
                    <View style={LoginStyle.formGroup}>
                        <View>
                            <CheckBox 
                                checked={remember} 
                                onPress={this.onChangeRemember} 
                                title={"Remember Me"}
                                containerStyle={LoginStyle.checkBoxContainer}
                                textStyle={LoginStyle.label}
                                checkedColor={"#8e6fc8"}
                                uncheckedColor={"#8e6fc8"}
                            />
                        </View>
                    </View>
                    <View style={LoginStyle.formGroup}>
                        <View>
                            <TouchableOpacity onPress={this.onSubmit} disabled={error}>
                                <View style={LoginStyle.button}>
                                    <Text style={LoginStyle.buttonLabel}>Sign In</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

const mapStateToProps = (state) => ({
   "email":state.login.email,
   "password":state.login.password,
   "remember":state.login.remember
});

const mapDispatchToProps = (dispatch) =>{
    return { 
        actions: bindActionCreators(Actions,dispatch) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);