// import React from 'react';

// // function Events() {
// //   function handleClick() {
// //     console.log('Button clicked!');
// //   }

// //   return (
// //     <button onClick={handleClick}>
// //       Click me
// //     </button>
// //   );
// // }

import React, { Component } from 'react';

class Events extends Component {
  handleClick() {
    console.log('Button clicked!');
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Click me
      </button>
    );
  }
}

export default Events;
