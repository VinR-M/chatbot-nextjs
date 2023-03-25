import { useContext, useState } from 'react'
import styles from '../styles/components/UserInput.module.css'
import { MessagesContext } from '@/context/MessagesProvider'

export default function UserInput() {
  const [userInput, setUserInput] = useState('')
  const [messages, setMessages] = useContext(MessagesContext)

  const handleSubmit = (e: any) => {
    e.preventDefault()
    setMessages([...messages, userInput])
    setUserInput('')
  }

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
    </div>
  )

}
