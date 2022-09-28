import React from 'react';

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        email: '',
        password: '',
        address: '',
        city: '',
        country: '',
        acceptRules: false,
      },
      mode: 'form',
    };
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    // console.log(name, value);
    // [name]: value

    this.setState(({ form }) => {
      form[name] = value;

      return form;
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ mode: 'table' });
  };

  backBtn = () => {
    this.setState({ mode: 'form' });
  };

  render () {
    // const { opened, text } = this.state;
    
    if (this.state.mode === 'form') {

      return (
        <form name='myForm' onSubmit={this.handleSubmit}>
          <div className='form-row'>
            <div className='form-group col-md-6'>
              <label htmlFor='email' className='col-form-label'>Email</label>
              <input type='email' name='email' className='form-control' id='email' placeholder='Email' onChange={this.handleChange} value={this.state.form.email}/>
            </div>
            <div className='form-group col-md-6'>
              <label htmlFor='password' className='col-form-label'>Password</label>
              <input type='password' name='password' className='form-control' id='password' placeholder='Password' onChange={this.handleChange} value={this.state.form.password}/>
            </div>
          </div>
          <div className='form-group'>
            <label htmlFor='address' className='col-form-label'>Address</label>
            <textarea type='text' className='form-control' name='address' id='address' placeholder='1234 Main St' onChange={this.handleChange} value={this.state.form.address}></textarea>
          </div>
          <div className='form-row'>
            <div className='form-group col-md-6'>
              <label htmlFor='city' className='col-form-label'>City</label>
              <input type='text' className='form-control' name='city' id='city' onChange={this.handleChange} value={this.state.form.city}/>
            </div>
            <div className='form-group col-md-6'>
              <label htmlFor='country' className='col-form-label'>Country</label>
              <select id='country' name='country' className='form-control' onChange={this.handleChange} value={this.state.form.country}>
                <option>Choose</option>
                <option value='argentina'>Argentina</option>
                <option value='russia'>Russia</option>
                <option value='china'>China</option>
              </select>
            </div>
          </div>
          <div className='form-group'>
            <div className='form-check'>
              <label className='form-check-label' htmlFor='rules'>
                <input id='rules' type='checkbox' name='acceptRules' className='form-check-input' checked={this.state.form.acceptRules} onChange={this.handleChange}/>
                Accept Rules
              </label>
            </div>
          </div>
          <button type='submit' className='btn btn-primary'>Sign in</button>
        </form>
      );
    
    } else if (this.state.mode === 'table') {
      const formEntries = Object.entries(this.state.form);
      formEntries.sort(([key1, value1], [key2, value2]) => {
        return key1.localeCompare(key2);
      });
      // console.log(formEntries);

      return (
        <div>
          <button type='button' className='btn btn-primary' onClick={this.backBtn}>Back</button>
          <table className='table'>
            <tbody>
              {formEntries.map(([key, value], index) => {
                // console.log(key, value);
                return (
                  <tr key={index}>
                    <td>{key}</td>
                    <td>{value.toString()}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );

    }
  }
}
