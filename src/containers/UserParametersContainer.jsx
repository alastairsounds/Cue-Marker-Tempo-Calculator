import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserParametersContainer extends Component {
  render() {
    return (
      <div className="userParameters">
        <div className="userParametersDiv">
          <h2>Tempo Range</h2>
          <input
            id="inputTempoMax"
            type="text"
            placeholder="100"
            name="inputTempoMax"
            maxLength="6"
            pattern="^\d{1,3}(\.\d{0,2})?$"
            onInput={(event) => {
              const value = event.target.value;
              const valid = event.target.validity.valid;
              if (!valid) {
                event.target.value = value.slice(0, value.length - 1);
              }
            }}
          />
          <span>-</span>
          <input
            id="inputTempoMax"
            type="text"
            placeholder="140"
            name="inputTempoMax"
            maxLength="6"
            pattern="^\d{1,3}(\.\d{0,2})?$"
            onInput={(event) => {
              const value = event.target.value;
              const valid = event.target.validity.valid;
              if (!valid) {
                event.target.value = value.slice(0, value.length - 1);
              }
            }}
          />
          <select defaultValue="0.1 Interval">
            <option value="0.01 Interval">0.01</option>
            <option value="0.05 Interval">0.05</option>
            <option value="0.1 Interval">0.1</option>
            <option value="0.2 Interval">0.2</option>
            <option value="0.5 Interval">0.5</option>
            <option value="1 Interval">1</option>
          </select>
          <span className="userParametersDivLast">testing interval (BPM)</span>
        </div>
        <div className="userParametersDiv">
          <select name="" id="" defaultValue="24">
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="30">30</option>
            <option value="60">60</option>
          </select>
          <span className="userParametersDivLast">FPS</span>
        </div>
        <div className="userParametersDiv">
          <select name="" id="" defaultValue="4/4">
            <option value="2/4">2/4</option>
            <option value="3/4">3/4</option>
            <option value="4/4">4/4</option>
            <option value="5/4">5/4</option>
            <option value="6/4">6/4</option>
          </select>
          <span className="userParametersDivLast">time signature</span>
        </div>
      </div>
    );
  }
}

export default UserParametersContainer;
