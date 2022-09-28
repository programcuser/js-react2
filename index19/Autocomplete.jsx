import React from 'react';

export default class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      countries: null,
      term: '',
    };
  }

  getCountriesList = async (event) => {
    const res = await axios.get('/countries', { params: { term: event.target.value } });
    this.setState({ countries: res.data, term: event.target.value });
  };

  renderList() {
    return (
      <ul>
        {this.state.countries.map(country => <li key={country}>{country}</li>)}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <form>
          <div className='form-group'>
            <input type='text' className='form-control' placeholder='Enter Country' onChange={this.getCountriesList} value={this.state.term}/>
          </div>
        </form>
        {this.state.countries && this.renderList()}
      </div>
    );
  }
}
