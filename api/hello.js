export default async function handler(request, response) {
  // JAXA公式ドキュメント（v2）のデータ取得エンドポイント
  // 東京駅付近の標高を取得する例
  const jaxaUrl = "https://data.earth.jaxa.jp";

  try {
    const res = await fetch(jaxaUrl);
    const data = await res.json();
    
    response.status(200).json({
      title: "JAXA公式API接続テスト",
      location: "東京駅付近",
      elevation: data.value, // JAXAから返ってくる値
      unit: "m",
      raw: data
    });
  } catch (error) {
    response.status(500).json({ 
        error: "JAXAからのデータ取得に失敗しました",
        message: error.message 
    });
  }
}
