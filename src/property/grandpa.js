import React from "react";
import Father from "./father";

export default class Grandpa extends React.Component{


    render() {
        return (
            <Father grandpaToFather={this.grandpaReceiveFather}>

            </Father>
        )
    }

    grandpaReceiveFather(fatherValue){
        console.log(fatherValue)
    }
}
