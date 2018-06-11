import React, { Component } from "react";

const di_looping = [
  'Nulla pulvinar diam',
  'Facilisis bibendum',
  'Vestibulum vulputate',
  'Eget erat',
  'Id porttitor'
]

class Stuff extends Component {
  render() {
    return (
      <div>
        <h2>STUFF</h2>
        <p>Mauris sem velit, vehicula eget sodales vitae,
        rhoncus eget sapien:</p>
        <ol>
          {
            di_looping.map((data) => (
              <li>{data}</li>
            ))
          }
        </ol>
      </div>
    );
  }
}

export default Stuff;
