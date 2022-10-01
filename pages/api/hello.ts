import type { NextApiRequest as ApiReq, NextApiResponse as ApiRes } from "next";

type Data = {
  name: string;
};

export default function handler(req: ApiReq, res: ApiRes<Data>) {
  res.status(200).json({ name: "John Doe" });
}
