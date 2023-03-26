import { useContext, useEffect, useState } from 'react'
import styles from '../styles/components/UserInput.module.css'
import { MessagesContext } from '@/context/MessagesProvider'

export default function UserInput() {
  const [userInput, setUserInput] = useState('')
  const [messages, setMessages] = useContext(MessagesContext)

  function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  useEffect(() => {
    const fetchMessage = async (input: string) => {
      const res = await fetch(`http://localhost:3000/api`, {
        method: 'POST',
        body: JSON.stringify(input)
      })
      const data = await res.json()
      setMessages([...messages, { agent: data }])
    }
    fetchMessage('Hello')
  }, [])

  const fetchMessage = async (input: string) => {
    const res = await fetch(`http://localhost:3000/api`, {
      method: 'POST',
      body: JSON.stringify(input)
    })
    const data = await res.json()
    setMessages((previousMessages) => [...previousMessages, { agent: data }])
  }


  const handleSubmit = async (e: any) => {
    e.preventDefault()
    if (userInput == '') return
    setMessages((previousMessages) => [...previousMessages, { user: userInput }])
    setUserInput('')
    await fetchMessage(userInput)
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          autoFocus
          name='input'
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
