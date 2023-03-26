// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import chatHandler from './chatHandler'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, body } = req

  if (method === 'POST') {
    const response = await chatHandler(body)
    res.status(200).json(response)

  } else {
    res.status(405).send('Method not allowed.')
  }
}
