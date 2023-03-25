import React from 'react';

class FocusInput extends React.Component {
  constructor(props) {
    super(props);
    this.textInputRef = React.createRef();
    this.focusOnInput = this.focusOnInput.bind(this);
  }

  focusOnInput() {
    this.textInputRef.current.focus();
  }

  render() {
    return (
      <div>
        <input type='text' ref={this.textInputRef}/>
        <button onClick={this.focusOnInput}>Click to focus on input</button>
      </div>
    );
  }
}

export default FocusInput;