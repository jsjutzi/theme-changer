import React, { Component } from 'react';

// Components
import EditToggle from './components/EditToggle';
import ColorChanger from './components/ColorChanger';
import SizeChanger from './components/SizeChanger';
import FamilyChanger from './components/FamilyChanger';
import TextContainer from './components/TextContainer';

class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      fontColor: 'black',
      fontSize: 12,
      fontFamily: 'monospace',
      allowEdit: 'true'
    }
    //Explicit Binding, specifically ties 'this' to method instance
    this.updateColor = this.updateColor.bind(this);
    this.updateSize = this.updateSize.bind(this);
    this.updateFamily = this.updateFamily.bind(this);
    this.updateEditStatus = this.updateEditStatus(this);
  
  }

  updateColor(val){
    this.setState({ fontSize: val});
  }
  updateSize(val){
    this.setState({ fontSize: val});
  }
  updateFamily(val){
    this.setState({ fontFamily: val});
  }
  updateEditStatus(val){
    this.setState({ allowEdit: val});
  }


    // componentWillMount(){
    //     console.log('Me First');
    // }
    // componentDidMount(){
    //   console.log('MeThird');
    // }
    //UPDATE PROPS (USED IN CHILD COMPONENTS);
    // componentWillReceiveProps(nextProps){
    //   console.log('Numero Uno: ${nextProps}');
    //   this.setState({allowEdit: newProps.allowEdit});
    // }

    // shouldComponentUpdate(){

    // }
    // componentWillUpdate(){

    // }
    // componentDidUpdate(){

    // }


  render() {
    return (
      <div>
        <div className="headerBar">
          <EditToggle update={ this.updateEditStatus} />
          <ColorChanger update={this.updateColor} allowEdit = {this.state.allowEdit} />
          <SizeChanger update={this.updateSize} allowEdit = {this.state.allowEdit} />
          <FamilyChanger  update={this.updateFamily} allowEdit = {this.state.allowEdit} />
        </div>
        <div className="textArea">
          <TextContainer fontColor={this.state.fontColor}
                         fontSize={this.state.fontSize}
                         fontFamily={this.state.fontFamily} />
        </div>
      </div>
    )
  }
  // componentWillUnmount(){
  //   console.log('Fired Last');
  // }
  // componentDidCatch(){

  }


export default App;
