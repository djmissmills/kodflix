import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import getGallery from '../get-gallery';
import './details.css';

export default class Details extends Component {



  constructor() {
    super();
    this.state = {
      technology: {}
    };
  }


  componentDidMount() {
    let technologyId = this.props.match.params.technologyId;
    let technology = getGallery().find(function(technology) {
        return technology.id === technologyId;
    });
      this.setState({
       technology: technology
      });
   
  }

  render() {
    if(this.state.technology === undefined) { //not found
      return <Redirect to='not-found' />;

    } else{
    return (
      <div className='details'>
        <h1>{this.state.technology.name}</h1>
        <div className='description'>{this.state.technology.details}</div>
        <img className='imagedetails'src={this.state.technology.logo} alt={this.state.technology.name}/>
        <div className='home'>
        <Link to='/'> Back to home</Link>
        </div>
      </div>
    );
  }
}
}


