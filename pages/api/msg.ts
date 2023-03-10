import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {

  msg: string

}

export default function handler(

  req: NextApiRequest,

  res: NextApiResponse<Data>

) {

  res.status(200).json({ msg: 'oke recover ypur account, talk with your friends, i don\'t want to make any restrictions to your life, mate, i know it doesn\'t matter how much i ever care for you it\'s aleays going to be unmatched with your parent\'s care for you, not even close, still i got to know you do value me, thanks!'})
}
