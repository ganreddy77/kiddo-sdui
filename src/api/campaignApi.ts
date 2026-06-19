export async function getCampaign(
  campaignName: string
) {
  const url =
    `http://localhost:3000/campaigns?id=${campaignName}`;

  console.log("URL =", url);

  const response =
    await fetch(url);

  const data =
    await response.json();

  return data[0];
}