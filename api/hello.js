export default async function handler(request, response) {
  // JAXAのAPI（例として標高データ）を取得するURL
  // ※本来はここにAPIキーを含めますが、まずは公開データでテスト
  const jaxaUrl = "https://data.earth.jaxa.jp";

  try {
    const res = await fetch(jaxaUrl);
    const data = await res.json();
    
    response.status(200).json({
      title: "JAXAデータ取得テスト成功！",
      location: "東京駅付近",
      elevation: data.elevation, // JAXAから届いた値
      raw: data
    });
  } catch (error) {
    response.status(500).json({ error: "JAXAからのデータ取得に失敗しました" });
  }
}
