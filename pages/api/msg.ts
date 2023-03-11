import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {

  msg: string

}

export default function handler(

  req: NextApiRequest,

  res: NextApiResponse<Data>

) {

  res.status(200).json({ msg: 'oke recover your account, talk with your friends, i don\'t want to make any restrictions to your life either, mate, i know it doesn\'t matter how much i ever care for you it\'s always going to be unmatched with your parent\'s care for you, not even close, still i got to know you do value me, thanks! i took the risk and ended up getting a soul that\'s actually true to me, same here, study mate, its hard but imagine the life you have always been dreaming of'})
}
