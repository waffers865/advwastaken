import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {

  msg: string

}

export default function handler(

  req: NextApiRequest,

  res: NextApiResponse<Data>

) {

  res.status(200).json({ msg: 'you're breaking my heart by just recovering your insta account, it indicates you don't value my words' })

}
