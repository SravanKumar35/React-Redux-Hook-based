import React, { useEffect } from "react";
import {connect} from 'react-redux'
import Proptypes from 'prop-types'
import {createPost} from '../actions/postActions'
import { useFormik } from "formik";

import "../postform.css";

const validate = (values) => {
  const errors = {};
  if (!values.title) {
    errors.title = "Required";
  }
  if (!values.body) {
    errors.body = "Required";
  }

  return errors;
};

function Postform(props) {
  const formik = useFormik({
    initialValues: {
      title: "",
      body: "",
    },
    validate,
    onSubmit:( (values) => {
     
      const post = {
          title: values.title,
          body: values.body
      }
      
    })
  });


  useEffect( () => {
    props.createPost();
    return () => {};
  }, [props ]);

  return (
    <div>
      <h1>Add Post</h1>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" {...formik.getFieldProps("title")} />
        </div>
        {formik.touched.title && formik.errors.title ? (
          <div>{formik.errors.title}</div>
        ) : null}

        <div>
          <label htmlFor="body">Body</label>
          <textarea name="body" {...formik.getFieldProps("body")} />
        </div>
        {formik.touched.body && formik.errors.body ? (
          <div>{formik.errors.body}</div>
        ) : null}
        <button type="submit" disabled={!(formik.isValid && formik.dirty)} >POST</button>
      </form>
    </div>
  );
}

Postform.prototypes = {
  createPost: Proptypes.func.isRequired,
}

const mapDispatchToProps = { createPost }



export default connect(null, mapDispatchToProps )(Postform);
