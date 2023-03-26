import { useState, createContext } from "react";

export const MessagesContext = createContext()

export default function MessagesProvider(props: any) {
  const [messages, setMessages] = useState([])

  return (
    <MessagesContext.Provider value={[messages, setMessages]} >
      {props.children}
    </MessagesContext.Provider>
  )
}

