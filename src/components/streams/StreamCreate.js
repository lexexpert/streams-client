import React from 'react';
import {Field, reduxForm} from "redux-form";

class StreamCreate extends React.Component {
  renderError = ({error, touched}) => {
    if(touched && error) {
      return (
        <div className="ui error message">
          {error}
        </div>
      );
    }
  };

  renderInput = ({input, label, meta}) => {
    const fieldClassName = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={fieldClassName}>
        <label>{label}</label>
        <input {...input} autoComplete="off"/>
        {this.renderError(meta)}
      </div>
      )
  };

  onSubmit(formValues) {

  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
        <Field name="title" component={this.renderInput} label="Enter title" />
        <Field name="description" component={this.renderInput} label="Enter description" />
        <button className="ui button primary">Submit</button>
      </form>
    )
  }
}

const validate = (formValues) => {
  const errors = {};
  if(!formValues.title) {
    errors.title = 'You must enter a title';
  }
  if(!formValues.description) {
    errors.description = 'You must enter a description';
  }
  return errors;
};

export default reduxForm({
  form: 'streamCreate',
  validate
})(StreamCreate);
