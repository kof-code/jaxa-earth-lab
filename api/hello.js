export default async function handler(request, response) {
  // JAXA Earth API v2 の正しいデータ取得エンドポイント
  // 標高(ELV)を東京駅(35.6812, 139.7671)で取得する例
  const jaxaUrl = "https://data.earth.jaxa.jp";

  try {
    const res = await fetch(jaxaUrl);
    
    // HTMLが返ってきていないかチェック
    const contentType = res.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      const text = await res.text();
      throw new Error(`JAXAからの返却がJSONではありませんでした。内容: ${text.substring(0, 50)}`);
    }

    const data = await res.json();
    
    response.status(200).json({
      success: true,
      elevation: data.value || data.elevation || "取得失敗",
      raw: data
    });
  } catch (error) {
    response.status(500).json({ 
        error: "JAXAからのデータ取得に失敗しました",
        message: error.message 
    });
  }
}
