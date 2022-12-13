// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
    // console.log(event.target.value)
  }

  clickText = value => {
    this.setState({
      searchInput: value,
    })
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const searchInputLowerCase = searchInput.toLowerCase()
    const searchResults = suggestionsList.filter(eachText =>
      eachText.suggestion.toLowerCase().includes(searchInputLowerCase),
    )
    // console.log(searchInputLowerCase)

    return (
      <div className="container">
        <div>
          <h1>
            <img
              alt="google logo"
              src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
              className="google-name"
            />
          </h1>
        </div>
        <div className="search-container">
          <div className="search-input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-icon"
            />
            <input
              className="input-holder"
              placeholder="Search Google"
              type="search"
              onChange={this.onChangeSearchInput}
              value={searchInput}
            />
          </div>
          <ul className="list-container">
            {searchResults.map(eachSuggestion => (
              <SuggestionItem
                eachSuggestion={eachSuggestion}
                key={eachSuggestion.id}
                clickText={this.clickText}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
