import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");
  const [suburaExtrema, setSuburaExtrema] = useState([]);

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function cronch(e){
    e.preventDefault()
    const wonderForm = {
      firstName: firstName,
      lastName: lastName,
    };
    const dataarr = [...suburaExtrema, wonderForm]
    setSuburaExtrema(dataarr)
    setFirstName("");
    setLastName("");
    console.log(suburaExtrema)
  }

  const mustSubmit = suburaExtrema.map((great, realestate) => {
    return(
      <div key = {realestate}>
        {great.firstName} {great.lastName}
      </div>
    )
  })

  return (
    <div>
      <form onSubmit={cronch}>
        <input type="text" onChange={handleFirstNameChange} value={firstName} />
        <input type="text" onChange={handleLastNameChange} value={lastName} />
        <button type="submit">Submit</button>
      </form>
      {mustSubmit}
    </div>
  );
}

export default Form;
