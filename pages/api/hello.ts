import type { NextApiRequest as ApiReq, NextApiResponse as ApiRes } from "next";

type Data = {
  message: string;
};

const token = process.env.BEARER_TOKEN;

export default async function handler(req: ApiReq, res: ApiRes<Data>) {
  try {
    const id = JSON.parse(req.body).tweetUrl.split(/[\/?]/g)[5];

    let data;

    if (id) {
      const url = `https://api.twitter.com/2/tweets/${id}?expansions=author_id&user.fields=profile_image_url&tweet.fields=public_metrics,created_at`;

      const res = await fetch(url, {
        headers: new Headers({
          Authorization: `Bearer ${token}`,
        }),
      });

      data = await res.json();
    }

    res.status(200).json(data);
  } catch (e) {
    res
      .status(404)
      .json({ message: "Something went wrong. Make sure the url is correct" });
  }
}
