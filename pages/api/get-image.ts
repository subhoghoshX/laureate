import type { NextApiRequest as ApiReq, NextApiResponse as ApiRes } from "next";

// type Data = {
//   imageData: string;
// };

export default async function handler(req: ApiReq, res: ApiRes) {
  try {
    const url = JSON.parse(req.body).imageUrl;
    const response = await fetch(url, { method: "get" });
    const contentType = response.headers.get("Content-Type");
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    res
      .status(200)
      .json({
        imageData:
          "data:" + contentType + ";base64," + buffer.toString("base64"),
      });
  } catch (e: any) {
    res.status(404).json({ message: e.message });
  }
}
