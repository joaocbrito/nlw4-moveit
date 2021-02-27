import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styes from '../styles/components/Profile.module.css'

export function Profile() {
  const { level } = useContext(ChallengesContext)


  return (
    <div className={styes.profileContainer}>
      <img src="https://github.com/joaocbrito.png" alt="Joao Brito" />

      <div>
        <strong>Joao Brito</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  )
}
