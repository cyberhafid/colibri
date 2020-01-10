import React, { Component } from 'react';
import fs from 'fs';
export default class Fits  extends Component {
   constructor(props) {
        super(props);
        this.state = {dimensions: {}};
        this.onImgLoad = this.onImgLoad.bind(this);
    }
    onImgLoad({target:img}) {
        this.setState({dimensions:{height:img.offsetHeight,
                                   width:img.offsetWidth}});
    }
    render(){
        const {src} = this.props;
        const {width, height} = this.state.dimensions;
      
        return (<div>
                dimensions width{width}, height{height}
                <br/>
                <img alt="ajour" onLoad={this.onImgLoad} src={src}/>
                </div>
               );
    }
}
