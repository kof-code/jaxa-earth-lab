export default function handler(request, response) {
  response.status(200).json({
    message: "こんにちは！これは Node.js (Vercel Functions) からの返事です。",
    target: "衛星データ解析への第一歩"
  });
}
