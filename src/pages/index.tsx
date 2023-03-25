import MessagesArea from '@/components/MessagesArea'
import UserInput from '@/components/UserInput'
import MessagesProvider from '@/context/MessagesProvider'

export default function Home() {
  return (
    <div className='mainContainer'>
      <MessagesProvider>
        <MessagesArea />
        <UserInput />
      </MessagesProvider>
    </div>
  )
}
