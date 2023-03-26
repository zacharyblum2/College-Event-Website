import React from 'react';
import './rso.css';

export default class RSO extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      description:  props.description
    }
  }

  render() {
    return (
      <div>
          <div class="card" style={{width: "500px"}}>
              <h5 class="card-header">{this.state.name}</h5>
              <div class="card-body">
                  <p class="card-text">{this.state.description}</p>
                  
                  {/* This should link to a page with all of the event information */}
                  <a href="/rso" class="btn btn-success stretched-link">Join Now</a>
              </div>
          </div>
      </div>
    )
  }
}