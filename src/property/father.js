import React from "react";
import Son from "./son";

const fatherV = "父亲的数据"

export default class Father extends React.Component{

    constructor() {
        super();
        this.fatherReceiveSon = this.fatherReceiveSon.bind(this)
    }

    // fatherToSon 由father传递给Son的方法 在son类里为this.props.fatherToSon
    // fatherToSon={this.fatherReceiveSon} 将fatherReceiveSon方法以参数形式传递给son（参数名为fatherToSon） 在son里以this.props.fatherToSon获取
    render() {

        //this.props.grandpaToFather 获取grandpa传入的grandpaReceiveFather方法
        console.log(this.props.grandpaToFather)

        return (
            // <Son fatherToSon={this.fatherReceiveSon} paramA={"a"} paramB={"b"}>
            // 此时son拥有三个属性 分别为: fatherToSon paramA paramA
            <Son fatherToSon={this.fatherReceiveSon} paramA={"a"} paramB={"b"}>

            </Son>
        )
    }

    // fatherReceiveSon father类里定义的接收方法
    // sonValue son触发此函数式的参数 由son传入
    fatherReceiveSon(sonValue){

        console.log(sonValue)


        // this.props.grandpaToFather ===
        // grandpaReceiveFather(fatherValue) {
        //     console.log(fatherValue);
        //   }
        //father触发grandpa的接收方法 参数为 sonValue 与 fatherV
        this.props.grandpaToFather(sonValue + " 与 " + fatherV)
    }
}
