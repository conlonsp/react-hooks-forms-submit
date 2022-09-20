import React, { useState } from "react";

function Form(props) {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");
  const [submitData, setSubmitData] = useState([])
  const [errors, setSubmitError] = useState([])

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault()
    if(firstName.length > 0) {
      const formData = {firstName: firstName, lastName: lastName}
      const dataArr = [...submitData, formData]
      setSubmitData(dataArr)
      setFirstName('')
      setLastName('')
      setSubmitError([])
    } else {
      setSubmitError(['First Name is required!'])
    }
  }

  const submitList = submitData.map((data, index) => {
    return (
      <div key={index}>
        {data.firstName} {data.lastName}
      </div>
    )
  })

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleFirstNameChange} value={firstName} />
        <input type="text" onChange={handleLastNameChange} value={lastName} />
        <button type="submit">Submit</button>
      </form>
      {errors.length > 0
        ? errors.map((error, index) => (
            <p key={index} style={{ color: "red" }}>
              {error}
            </p>
          ))
        : null}
      <h3>Submissions</h3>
      {submitList}
    </div>
  );
}

export default Form;
