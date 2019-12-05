import React, {Component} from 'react';

export default class FilterItems extends Component {

  state = {
    list: ''
  }  

  onSearch = (event) => {
    const list = event.target.value;
    this.setState({list});
    this.props.onSearch(list);
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-4 offset-2">
          <form action="#" className="shop__search" >
            <label className="shop__search-label" htmlFor="filter">Looking for</label>
            <input 
              id="filter" 
              type="text" 
              placeholder="start typing here..." 
              className="shop__search-input" 
              onChange={this.onSearch}/>
          </form>
        </div>
        <div className="col-lg-4">
          <div className="shop__filter">
            <div className="shop__filter-label">
              Or filter
            </div>
            <div className="shop__filter-group">
              <button className="shop__filter-btn">Brazil</button>
              <button className="shop__filter-btn">Kenya</button>
              <button className="shop__filter-btn">Columbia</button>
            </div>
          </div>
        </div>
      </div>
      
    );
  }
  
}

