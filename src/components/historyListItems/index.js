import './index.css'

const HistoryFound = props => {
  const {eachHistory, onDeleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachHistory

  const onDeleteButton = () => {
    onDeleteHistory(id)
  }

  return (
    <li className="history">
      <p className="time-stamp">{timeAccessed}</p>
      <div className="icon-url-del-icon-container">
        <div className="icon-url-container">
          <img src={logoUrl} alt="domain logo" className="domain-logo" />
          <div className="name-url-con">
            <div className="domain-details">
              <p className="title">{title}</p>
            </div>
            <p className="domain-url">{domainUrl}</p>
          </div>
        </div>
        <button
          onClick={onDeleteButton}
          testid="delete"
          type="button"
          className="delete-button"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryFound
