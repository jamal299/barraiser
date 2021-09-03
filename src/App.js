import { useState } from 'react';
import './App.css';
import data from './config';
function App() {
  const [formError, setFormError] = useState(true);
  function submitHandler(data) {
    console.log('formdata', data);
  }
  function inputHandler(e, validation) {
    console.log(e.target.value, 'formdata');
    console.log(validation, 'validation');
    if (
      validation &&
      validation.required &&
      validation.required === true &&
      e.target.value.length === 0
    ) {
      setFormError(true);
    } else {
      setFormError(false);
    }
  }

  return (
    <div className='App'>
      <form className='myform' onSubmit={submitHandler}>
        <div className='loginheader'>Login form</div>
        {data &&
          data.map((val) => (
            <div>
              <span className='header'> {val.texts.header}</span>
              <span className='inputs'>
                {val.inputs.map((input) => (
                  <div>
                    <input
                      type={input.type}
                      onChange={(e) => inputHandler(e, input.validation)}
                    />
                  </div>
                ))}
              </span>
            </div>
          ))}
        <button className='submit' disabled={formError} onClick={submitHandler}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
