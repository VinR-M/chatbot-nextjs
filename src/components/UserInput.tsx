import { useState } from 'react'
import styles from '../styles/components/UserInput.module.css'

export default function UserInput() {
  const [userInput, setUserInput] = useState('')
  const [messages, setMessages] = useState([])

  const handleSubmit = (e: any) => {
    e.preventDefault()
    setMessages([...messages, userInput])
    setUserInput('')
  }

  const renderMessages = messages.map((message, index) => (
    <p key={index}>{message}</p>
  ))

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type='text'
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button className={styles.sendButton}>Send</button>

      </form>

      <p>{renderMessages}</p>
    </div>
  )

}
