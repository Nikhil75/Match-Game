import './index.css'

const RandomImagesList = props => {
  const {imagesList, onClickImage} = props
  const {thumbnailUrl, id} = imagesList

  const showId = () => {
    onClickImage(id)
  }

  return (
    <li>
      <img
        src={thumbnailUrl}
        alt="thumbnail"
        className="thumbnail"
        onClick={showId}
      />
    </li>
  )
}

export default RandomImagesList
