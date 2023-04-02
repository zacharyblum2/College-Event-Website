import React from 'react';
import './rso.css';

export default class RSO extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      part: props.part,
      message: ""
    }

    this.join = this.join.bind(this);
    this.leave = this.leave.bind(this);
    this.isJSON = this.join.bind(this);
  }

  isJSON(str) {
    try 
    {
        JSON.parse(str);
    }
    catch (e)
    {
        return false;
    }

    return true;
  }

  async join(event) {
    event.preventDefault();
    let user_data = JSON.parse(localStorage.getItem("user_data"));
    let obj = {user_id: user_data.id, rso: this.state.name};
    let js = JSON.stringify(obj);

    try
    {
      const response = await fetch('http://localhost:8000/api/join_rso/',
      {method:'POST', body:js, headers: {'Content-Type': 'application/json'}});
  
      let r = await response.text();
  
      if (!this.isJSON(r))
      {
        console.log(r);
        this.setState({message: r});
      }
      else
      {
        this.setState({message: ''});
      }
    }
    catch (e)
    {
      alert(e.toString());
      return;
    }

    window.location.reload(true);
  }

  async leave(event) {
    event.preventDefault();
    let user_data = JSON.parse(localStorage.getItem("user_data"));
    let obj = {user_id: user_data.id, rso: this.state.name};
    let js = JSON.stringify(obj);

    try
    {
      const response = await fetch('http://localhost:8000/api/leave_rso/',
      {method:'POST', body:js, headers: {'Content-Type': 'application/json'}});

      let r = await response.text();

      if (!this.isJSON(r))
      {
        console.log(r);
        this.setState({message: r});
      }
      else
      {
        this.setState({message: ''});
      }
    }
    catch (e)
    {
      alert(e.toString());
      return;
    }

    window.location.reload(true);
  }

  render() {
    return (
      <div>
          <div class="card" style={{width: "500px"}}>
              <h5 class="card-header">{this.state.name}</h5>
              <div class="card-body">                  
                  {/* Hidden if the user is already a part of the RSO*/}
                  <div class="buttons">
                    <button id="join" class={this.state.part ? "btn btn-success stretched-link hidden" : "btn btn-success stretched-link"} onClick={this.join}>Join RSO</button>
                    <button id="leave" class={this.state.part ? "btn btn-success stretched-link" : "btn btn-success stretched-link hidden"} onClick={this.leave}>Leave RSO</button>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}