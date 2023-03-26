import React from 'react';
import './rso.css';

export default class RSO extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      description:  props.description,
      part: props.part
    }
  }

  render() {
    return (
      <div>
          <div class="card" style={{width: "500px"}}>
              <h5 class="card-header">{this.state.name}</h5>
              <div class="card-body">
                  <p class="card-text">{this.state.description}</p>
                  
                  {/* Hidden if the user is already a part of the RSO*/}
                  <div class="buttons">
                    <button id="join" class={this.state.part ? "btn btn-success stretched-link hidden" : "btn btn-success stretched-link"}>Join RSO</button>
                    <button id="leave" class={this.state.part ? "btn btn-success stretched-link" : "btn btn-success stretched-link hidden"}>Leave RSO</button>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}