import {Component} from 'react'

import HistoryFound from './components/historyListItems'

import './App.css'

// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

// Replace your code here
class App extends Component {
  state = {searchInput: '', historyListItems: initialHistoryList}

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  noHistoryFound = () => (
    <p className="no-history">There is no history to show</p>
  )

  onDeleteHistory = id => {
    const {historyListItems} = this.state
    const filterHistory = historyListItems.filter(
      eachHistory => eachHistory.id !== id,
    )
    this.setState({historyListItems: filterHistory})
  }

  searchHistoryItem = () => {
    const {searchInput, historyListItems} = this.state
    const filteredHistory = historyListItems.filter(eachHistory =>
      eachHistory.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return filteredHistory
  }

  render() {
    const {searchInput} = this.state

    const searchHistory = this.searchHistoryItem()

    return (
      <div className="bg-container">
        <div className="nav-container">
          <img
            className="history-image"
            alt="app logo"
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
          />
          <ul className="search-icon-con">
            <li>
              <button type="button" className="button-container">
                <img
                  className="search-image"
                  type="button"
                  alt="search"
                  src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                />
              </button>
            </li>
            <li>
              <input
                className="search-bar"
                type="search"
                placeholder="Search History"
                onChange={this.onChangeInput}
                value={searchInput}
              />
            </li>
          </ul>
        </div>
        {searchHistory.length === 0 ? (
          this.noHistoryFound()
        ) : (
          <ul className="all-history-container">
            <ul className="history-list">
              {searchHistory.map(eachHistory => (
                <HistoryFound
                  key={eachHistory.id}
                  eachHistory={eachHistory}
                  onDeleteHistory={this.onDeleteHistory}
                />
              ))}
            </ul>
          </ul>
        )}
      </div>
    )
  }
}

export default App
