import React from "react";

class Techniques extends React.Component{
render(){
    return (
        <div class="component">
        <input type="checkbox"/>
        <p class="item">{this.props.item}</p>
        </div>
    )
}
}

export default Techniques