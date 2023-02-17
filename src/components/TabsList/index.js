import './index.css'

const TabsList = props => {
  const {tabsList, showTabClickedImages} = props
  const {displayText, tabId} = tabsList

  const showTabImages = () => {
    showTabClickedImages(tabId)
  }

  return (
    <li className="button-tabs-list">
      <button className="tab-name" type="button" onClick={showTabImages}>
        {displayText}
      </button>
    </li>
  )
}

export default TabsList
