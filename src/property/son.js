import React from "react";

const sonValue = "儿子的数据"

export default class Son extends React.Component{
    render() {
        // fatherToSon: ƒ fatherReceiveSon(sonValue)
        // paramA: "a"
        // paramB: "b"
        console.log(this.props)
        //this.props.fatherToSon 获取又father传入的fatherReceiveSon方法
        console.log(this.props.fatherToSon)

        return (
            <div onClick={()=>this.sonClick(sonValue)}>xxx</div>
        )


    }

    // son内元素点击方法 sonValue为son内数据
    sonClick(value){
        // this.props.fatherToSon ===
        // fatherReceiveSon(sonValue) {
        //     console.log(sonValue);
        //   }

        // 触发father内fatherReceiveSon方法 参数为value
        this.props.fatherToSon(value)
    }
}
