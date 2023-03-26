import { useContext, useState } from 'react'
import styles from '../styles/components/UserInput.module.css'
import { MessagesContext } from '@/context/MessagesProvider'

export default function UserInput() {
  const [userInput, setUserInput] = useState('')
  const [messages, setMessages] = useContext(MessagesContext)

  function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  // const fetchData = async () => {
  //   const res = await fetch(`https://swapi.dev/api/planets/${getRandomInt(59)}`)
  //   const data = await res.json()
  //   return data?.name
  // }

  const fetchMessage = async (input: string) => {
    const res = await fetch(`http://localhost:3000/api`, {
      method: 'POST',
      body: JSON.stringify(input)
    })
    const data = await res.json()
    return data
  }


  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const msg = await fetchMessage(userInput)
    setMessages([...messages, { user: userInput }, { agent: msg }])
    console.log(msg)
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
