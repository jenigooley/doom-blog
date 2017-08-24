import React, { Component } from 'react';

import '../koala.css';

export default class Koala extends Component {

   constructor(props) {
   super(props);
   }

   render() {
     return (
      <div>
       <div className="box">

          <div className="head">

            <div className="head-copy"></div>


            <div className="eye-left">
              <div className="pupil"></div>
            </div>

            <div className="eye-right">
              <div className="pupil"></div>
            </div>

             <div className="nose"></div>

            <div className="hair-left"></div>
            <div className="hair-right"></div>

          </div>

       </div>
      </div>
      )
    }
}
