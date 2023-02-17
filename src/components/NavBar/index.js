import './index.css'

export default function NavBar(props) {
  const {seconds, score} = props
  //   const [seconds, setSeconds] = useState(parseInt(60))

  //   let interval

  //   useEffect(() => {
  //     interval = setInterval(() => {
  //       setSeconds(seconds - 1)
  //     }, 1000)
  //     return () => clearInterval(interval)
  //   })

  return (
    <div className="navbar-background">
      <div className="navbar-logo">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
          className="website-logo"
        />
      </div>
      <div className="score-time-logo">
        <div className="game-score">
          <p className="score">Score:{score}</p>
        </div>
        <div className="time-logo">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer"
          />
          <p className="time">{seconds} Sec</p>
        </div>
      </div>
    </div>
  )
}
