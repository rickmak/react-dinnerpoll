import React, { Component } from 'react';

class FormGroup extends Component {
  render() {
    if (this.props.formControl) {
      return (
        <div className={ this.props.isError ? "form-group has-danger" : "form-group" }>
          { this.props.formControl }
        </div>
      );
    } else if (this.props.feedback) {
      if (this.props.isError) {
        return (
          <div className={ this.props.isError ? "form-group has-danger" : "form-group" }>
            <div className="form-control-feedback">{ this.props.feedback }</div>
          </div>
        );
      } else {
        return null;
      }
    } else {
      return null;
    }
  }
};

export default FormGroup;
