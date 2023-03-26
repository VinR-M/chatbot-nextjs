import { Configuration, OpenAIApi } from "openai"

// Free Trial Key
const apiKey = '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'

export default async function chatHandler(userMessage: string) {
  const openai = new OpenAIApi(new Configuration({
    apiKey
  }))

  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [{
      role: 'user',
      content: userMessage
    }]
  })

  const message = response?.data?.choices[0]?.message?.content

  return message

}
