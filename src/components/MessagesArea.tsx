import { useContext } from 'react'
import styles from '../styles/components/MessagesArea.module.css'
import { MessagesContext } from '@/context/MessagesProvider'

export default function MessagesArea() {
  const [messages] = useContext(MessagesContext)

  const renderMessages = messages.map((message: string[], index: number) => (
    <p key={index}>{message}</p>
  ))

  return (
    <div className={styles.container}>
      {renderMessages}
    </div>
  )

}
