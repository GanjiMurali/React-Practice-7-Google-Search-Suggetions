// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {eachSuggestion, clickText} = props
  const {suggestion} = eachSuggestion
  const upDateText = () => {
    clickText(suggestion)
  }

  return (
    <li className="list-item">
      <p className="para-sug">{suggestion}</p>
      <img
        onClick={upDateText}
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow"
      />
    </li>
  )
}

export default SuggestionItem
