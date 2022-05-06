// note: solution #1 --------------------------------------------
// https://codesandbox.io/s/2upmx?file=/src/FileUpload.js
// this example uses react-form-hook to get data
//---------------------------------------------------------------
import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const FileUpload = () => {
  const { register, handleSubmit } = useForm();

  const submitData = async data => {
    try {
      //Since we need the id of the post before we can create the picture, we will create it and the use the id from axios to create it's picture

      //since axios need an object
      const formDataToSend = {
        title: data.title
      };
      const inputValue = await axios({
        url: "http://localhost:1337/posts",
        method: "POST",
        data: formDataToSend
      });

      //grab the id
      const id = inputValue.data.id;

      const formData = new FormData();
      formData.append("files", data.file[0]);
      formData.append("source", "users-permissions"); //This allows you to attach  picture to the user profile
      formData.append("ref", "book"); //name of content type
      formData.append("refId", "5e78b6cb873f3070e682bb7b"); //id of content type
      formData.append("field", "picture"); //name of key for the content type
      const res = await axios({
        method: "POST",
        url: "http://localhost:1337/upload",
        data: formData
      });
      console.log("Success", res);
    } catch (error) {
      console.log(error);
    }
  };

// note: solution #2 ------------------------------------------------------
//  https://stackoverflow.com/questions/70747000/proper-way-of-uploading-files-using-react-hook-form-with-axios
const onSubmit = (data => {
  const formData = new FormData();
  for (const [key, value] of Object.entries(data)) {
     formData.append(key, value);
  }

 api.submitPost(formData, {headers: {'Content-Type': 'multipart/form-data'}})
    .then((response) => {
         console.log(response);
    })
    .catch((error) => {
         console.log(error);
    });
};

// note: soluiton #3 -------------------------------------------------------
// https://github.com/react-hook-form/react-hook-form/discussions/2912
const onSubmit = (fData) => {
  const data = new FormData()

  for (const key in fData) {
    if (key === 'field') {
      data.append(key, fData[key][1])
    } else {
      data.append(key, fData[key])
    }
  }

// note: solution #4 ----------------------------------------------------
// strapi docs - upload plugin - Upload file during entry creation
const formElement = document.querySelector('form');

formElement.addEventListener('submit', (e) => {
  e.preventDefault();

  const request = new XMLHttpRequest();

  const formData = new FormData();

  const formElements = formElement.elements;

  const data = {};

  for (let i = 0; i < formElements.length; i++) {
    const currentElement = formElements[i];
    if (!['submit', 'file'].includes(currentElement.type)) {
      data[currentElement.name] = currentElement.value;
    } else if (currentElement.type === 'file') {
      for (let i = 0; i < currentElement.files.length; i++) {
        const file = currentElement.files[i];
        formData.append(`files.${currentElement.name}`, file, file.name);
      }
    }
  }

  formData.append('data', JSON.stringify(data));

  request.open('POST', `${HOST}/restaurants`);

  request.send(formData);
});