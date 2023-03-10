import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {

  msg: string

}

export default function handler(

  req: NextApiRequest,

  res: NextApiResponse<Data>

) {

  res.status(200).json({ msg: 'you\'re indirectly breaking my heart by just recovering your insta account, it indicates you don\'t value my words, not meaning to say cut-off from your daily life as well but as you already know NEET needs sacrifice, even if the sacrifice is me, it\'s worth it' })

}
