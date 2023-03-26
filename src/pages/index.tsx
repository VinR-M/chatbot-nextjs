import MessagesArea from '@/components/MessagesArea'
import UserInput from '@/components/UserInput'

export default function Home() {
  return (
    <div className='mainContainer'>
      <MessagesArea />
      <UserInput />
    </div>
  )
}
