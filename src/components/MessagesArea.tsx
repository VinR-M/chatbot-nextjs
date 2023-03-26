import { useContext } from 'react'
import styles from '../styles/components/MessagesArea.module.css'
import { MessagesContext } from '@/context/MessagesProvider'

type messages = {
  user: string,
  agent: string,
}

export default function MessagesArea() {
  const [messages] = useContext(MessagesContext)

  const renderMessages = messages.map((message: messages, index: number) => (
    <div key={index} className={styles.messageContainer}>
      {message?.agent
        ? (
          <p className={styles.agentMessage}>{message?.agent}</p>
        )
        : (
          <p className={styles.userMessage}>{message?.user}</p>
        )
      }
    </div>
  ))

  return (
    <div className={styles.container}>
      {renderMessages}
    </div>
  )

}
