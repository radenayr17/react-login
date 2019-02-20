import {StyleSheet} from 'react-native';

export const LoginStyle = StyleSheet.create({
    "container":{
        "flex":1,
        "flexDirection":"column",
        "justifyContent":"center",
    },"form":{
        "marginTop":20,
        "paddingHorizontal":20
    },"formGroup":{
        "marginBottom":16
    },"input":{
        "backgroundColor":"#ffffff",
        "borderRadius":5,
        "borderColor":"#8e6fc8",
        "borderWidth":2,
        "padding":10,
        "fontSize":18
    },"label":{
        "color":"#363636",
        "fontWeight":"bold",
        "fontSize":16
    },"checkBoxContainer":{
        "backgroundColor":"#ffffff",
        "borderWidth":0,
        "padding":0,
        "marginLeft":0
    },"button":{
        "borderRadius":5,
        "paddingVertical":14,
        "backgroundColor":"#8e6fc8",
        "alignItems":"center"
    },"buttonLabel":{
        "color":"#ffffff",
        "fontWeight":"bold",
        "fontSize":16
    },"errorLabel":{
        "color":"#f33333",
        "fontStyle":"italic",
        "fontSize":12
    }
});

export const LogoStyle = StyleSheet.create({
    "container":{
        "alignItems":"center"
    },"logo":{
        "resizeMode":"contain",
        "width":250,
        "height":180
    }
});
