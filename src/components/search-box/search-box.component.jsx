import { Component } from "react";
import './search-box.styles.css';

class SearchBox extends Component{

    render() {
        return (
        <input
          className={this.props.className}
          type='search'
          placeholder={this.props.placeholderText}
          onChange={this.props.onChangeHandler}
        />
        )
    }
}

export default SearchBox;