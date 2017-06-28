import React from 'react';
import Reflux from 'reflux';

class FormControl extends Reflux.Component {
  render() {
    return (
      <input 
        className={ this.props.isError ? "form-control form-control-danger" : "form-control" }
        value={ this.props.value }
        onChange={ this.props.onChange }
        id={ this.props.id }
        placeholder={ this.props.placeholder }
        type={ this.props.type }
        required={ this.props.required }
        minLength={ this.props.minLength }
      />
    );
  }
};

export default FormControl;
