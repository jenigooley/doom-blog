import React, { Component } from 'react';
import { postFeedback, getFeedbackList } from './apiUtils.js'

import '../Canvas.css';

export default class Canvas extends Component {

   constructor(props) {
   super(props);
   }

   render() {
     return (
       <div className="canvas">
       <div className="pixel"></div>
       {
        [...Array(81)].map((e) => <div className="pixel"></div>)
      }
       </div>
     )
    }
  }

 //  {
 //    [...Array(62)].map( (e, i) => {
 //    <div className="pixel" key={i}></div>
 //  })
 // }
