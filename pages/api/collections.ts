// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

// It's too easy to reach size limitation, so don't use edge runtime temporarily.
// export const config = {
//   runtime: 'edge',
// }

type Collection = {
  name: string;
  playlists: string[];
}

type Data = {
  collections: Collection[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ collections: [
    {
      name: 'lofi',
      playlists: [],
    }
  ] })
}
