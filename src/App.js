import { useState } from 'react';
import './App.css';
import data from './config';
function App() {
  const [formError, setFormError] = useState(true);
  const [formData, setFormData] = useState({});
  function submitHandler(event) {
    event.preventDefault();
    console.log(formData, 'formData');
    localStorage.setItem('formData', JSON.stringify(formData));
  }
  function inputHandler(e, validation, name) {
    console.log(e.target.value, 'formdata');
    console.log(validation, 'validation');
    const data = { ...formData };

    if (
      validation &&
      validation.required &&
      validation.required === true &&
      e.target.value.length === 0
    ) {
      setFormError(true);
    } else {
      data[name] = e.target.value;
      setFormError(false);
      setFormData(data);
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
                      onChange={(e) =>
                        inputHandler(e, input.validation, input.name)
                      }
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
