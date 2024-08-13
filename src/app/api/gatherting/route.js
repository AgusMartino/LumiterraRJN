import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const fetchData = async (url, query) => {
  const response = await fetch(url, {
    method: "POST",
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": process.env.apiKeySkyMavis,
    },
    body: JSON.stringify({ query }),
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch data from ${url}`);
  }
  return response.json();
};

export async function GET(request) {
  const apiUrl = "https://api-gateway.skymavis.com/graphql/mavis-marketplace";

  try {
    const dataGatheringShoes = await fetchData(
      apiUrl,
      `
      query MyQuery {
        erc1155Tokens(
            from: 0
            size: 50
            tokenAddress: "0xcc451977a4be9adee892f7e610fe3e3b3927b5a1"
            name: "Gathering Shoes"
            sort: PriceAsc
            auctionType: Sale
        ) 
        {
          results {
            minPrice
            name
            tokenId
            attributes
            image
            cdnImage
          }
          total
        }
      }
      `
    );

    const dataGatheringPants = await fetchData(
      apiUrl,
      `query MyQuery {
          erc1155Tokens(
            from: 0
            size: 50
            tokenAddress: "0xcc451977a4be9adee892f7e610fe3e3b3927b5a1"
            name: "Gathering Pants"
            sort: PriceAsc
            auctionType: Sale
          ) 
          {
            results {
              minPrice
              name
              tokenId
              attributes
              image
              cdnImage
            }
            total
          }
        }
      `
    );
    const dataGatheringGloves = await fetchData(
      apiUrl,
      `query MyQuery {
          erc1155Tokens(
            from: 0
            size: 50
            tokenAddress: "0xcc451977a4be9adee892f7e610fe3e3b3927b5a1"
            name: "Gathering Gloves"
            sort: PriceAsc
            auctionType: Sale
          ) 
          {
            results {
              minPrice
              name
              tokenId
              attributes
              image
              cdnImage
            }
            total
          }
        }
      `
    );
    const dataGatheringHat = await fetchData(
      apiUrl,
      `
        query MyQuery {
          erc1155Tokens(
            from: 0
            size: 50
            tokenAddress: "0xcc451977a4be9adee892f7e610fe3e3b3927b5a1"
            name: "Gathering Hat"
            sort: PriceAsc
            auctionType: Sale
          ) {
            results {
              minPrice
              name
              tokenId
              attributes
              image
              cdnImage
            }
            total
          }
        }
      `
    );
    const dataGatheringJacket = await fetchData(
      apiUrl,
      `query MyQuery {
          erc1155Tokens(
            from: 0
            size: 50
            tokenAddress: "0xcc451977a4be9adee892f7e610fe3e3b3927b5a1"
            name: "Gathering Jacket"
            sort: PriceAsc
            auctionType: Sale
          ) {
            results {
              minPrice
              name
              tokenId
              attributes
              image
              cdnImage
            }
            total
          }
        }
      `
    );
    const dataGatheringAxe = await fetchData(
      apiUrl,
      `query MyQuery {
          erc1155Tokens(
            from: 0
            size: 50
            tokenAddress: "0xcc451977a4be9adee892f7e610fe3e3b3927b5a1"
            name: "Axe"
            sort: PriceAsc
            auctionType: Sale
            criteria: {name: "type", values: "sword"}
          ) {
            results {
              minPrice
              name
              tokenId
              attributes
              image
              cdnImage
            }
            total
          }
        }
      `
    );
    const dataGatheringPickaxe = await fetchData(
      apiUrl,
      `query MyQuery {
          erc1155Tokens(
            from: 0
            size: 50
            tokenAddress: "0xcc451977a4be9adee892f7e610fe3e3b3927b5a1"
            name: "Pickaxe"
            sort: PriceAsc
            auctionType: Sale
            criteria: {name: "type", values: "sword"}
          ) {
            results {
              minPrice
              name
              tokenId
              attributes
              image
              cdnImage
            }
            total
          }
        }
      `
    );

    const dataGatheringSickle = await fetchData(
      apiUrl,
      `query MyQuery {
          erc1155Tokens(
            from: 0
            size: 50
            tokenAddress: "0xcc451977a4be9adee892f7e610fe3e3b3927b5a1"
            name: "Sickle"
            sort: PriceAsc
            auctionType: Sale
            criteria: {name: "type", values: "sword"}
          ) {
            results {
              minPrice
              name
              tokenId
              attributes
              image
              cdnImage
            }
            total
          }
        }
      `
    );

    const dataExchangeRate = await fetchData(
      apiUrl,
      `
      query MyQuery {
        exchangeRate {
          ron {
            usd
            }
        }
      }
    `
    );
    const resultsdataGatheringShoes = dataGatheringShoes.data.erc1155Tokens.results.map(
      (result) => ({
        ...result,
        minPrice: Number(
          (result.minPrice / 1000000000000000000) *
            dataExchangeRate.data.exchangeRate.ron.usd
        ).toFixed(2),
        grassproficiency: Number(result.attributes["grassproficiency"][0]),
        oreproficiency: Number(result.attributes["oreproficiency"][0]),
        treeproficiency: Number(result.attributes["treeproficiency"][0]),
        requireslevel: Number(result.attributes["requires level"][0]),
        image: result.image,
        quality: result.attributes["quality"][0],
        type: result.attributes["type"][0]
      })
    );

    const resultsdataGatheringPants = dataGatheringPants.data.erc1155Tokens.results.map(
      (result) => ({
        ...result,
        minPrice: Number(
          (result.minPrice / 1000000000000000000) *
            dataExchangeRate.data.exchangeRate.ron.usd
        ).toFixed(2),
        grassproficiency: Number(result.attributes["grassproficiency"][0]),
        oreproficiency: Number(result.attributes["oreproficiency"][0]),
        treeproficiency: Number(result.attributes["treeproficiency"][0]),
        orecritdmg: Number(result.attributes["orecritdmg"][0]),
        requireslevel: Number(result.attributes["requires level"][0]),
        image: result.image,
        quality: result.attributes["quality"][0],
        type: result.attributes["type"][0]
      })
    );

    const resultsdataGatheringGloves = dataGatheringGloves.data.erc1155Tokens.results.map(
      (result) => ({
        ...result,
        minPrice: Number(
          (result.minPrice / 1000000000000000000) *
            dataExchangeRate.data.exchangeRate.ron.usd
        ).toFixed(2),
        grassproficiency: Number(result.attributes["grassproficiency"][0]),
        oreproficiency: Number(result.attributes["oreproficiency"][0]),
        treeproficiency: Number(result.attributes["treeproficiency"][0]),
        grassatt: Number(result.attributes["grassatt"][0]),
        oreatt: Number(result.attributes["oreatt"][0]),
        treeatt: Number(result.attributes["treeatt"][0]),
        pickaxespd: Number(result.attributes["pickaxespd"][0]),
        requireslevel: Number(result.attributes["requires level"][0]),
        image: result.image,
        quality: result.attributes["quality"][0],
        type: result.attributes["type"][0]
      })
    );

    const resultsdataGatheringHat = dataGatheringHat.data.erc1155Tokens.results.map(
      (result) => ({
        ...result,
        minPrice: Number(
          (result.minPrice / 1000000000000000000) *
            dataExchangeRate.data.exchangeRate.ron.usd
        ).toFixed(2),
        grassproficiency: Number(result.attributes["grassproficiency"][0]),
        oreproficiency: Number(result.attributes["oreproficiency"][0]),
        treeproficiency: Number(result.attributes["treeproficiency"][0]),
        axespd: Number(result.attributes["axespd"][0]),
        requireslevel: Number(result.attributes["requires level"][0]),
        image: result.image,
        quality: result.attributes["quality"][0],
        type: result.attributes["type"][0]
      })
    );

    const resultsdataGatheringJacket = dataGatheringJacket.data.erc1155Tokens.results.map(
      (result) => ({
        ...result,
        minPrice: Number(
          (result.minPrice / 1000000000000000000) *
            dataExchangeRate.data.exchangeRate.ron.usd
        ).toFixed(2),
        grassproficiency: Number(result.attributes["grassproficiency"][0]),
        oreproficiency: Number(result.attributes["oreproficiency"][0]),
        treeproficiency: Number(result.attributes["treeproficiency"][0]),
        treedmgbonus: Number(result.attributes["treedmgbonus"][0]),
        requireslevel: Number(result.attributes["requires level"][0]),
        image: result.image,
        quality: result.attributes["quality"][0],
        type: result.attributes["type"][0]
      })
    );

    const resultsdataGatheringAxe = dataGatheringAxe.data.erc1155Tokens.results.map(
      (result) => ({
        ...result,
        minPrice: Number(
          (result.minPrice / 1000000000000000000) *
            dataExchangeRate.data.exchangeRate.ron.usd
        ).toFixed(2),
        combatatt: Number(result.attributes["combatatt"][0]),
        treeatt: Number(result.attributes["treeatt"][0]),
        requireslevel: Number(result.attributes["requires level"][0]),
        image: result.image,
        quality: result.attributes["quality"][0],
        type: result.attributes["type"][0]
      })
    );

    const resultsdataGatheringPickaxe = dataGatheringPickaxe.data.erc1155Tokens.results.map(
      (result) => ({
        ...result,
        minPrice: Number(
          (result.minPrice / 1000000000000000000) *
            dataExchangeRate.data.exchangeRate.ron.usd
        ).toFixed(2),
        combatatt: Number(result.attributes["combatatt"][0]),
        oreatt: Number(result.attributes["oreatt"][0]),
        requireslevel: Number(result.attributes["requires level"][0]),
        image: result.image,
        quality: result.attributes["quality"][0],
        type: result.attributes["type"][0]
      })
    );

    const resultsdataGatheringSickle = dataGatheringSickle.data.erc1155Tokens.results.map(
      (result) => ({
        ...result,
        minPrice: Number(
          (result.minPrice / 1000000000000000000) *
            dataExchangeRate.data.exchangeRate.ron.usd
        ).toFixed(2),
        combatatt: Number(result.attributes["combatatt"][0]),
        grassatt: Number(result.attributes["grassatt"][0]),
        requireslevel: Number(result.attributes["requires level"][0]),
        image: result.image,
        quality: result.attributes["quality"][0],
        type: result.attributes["type"][0]
      })
    );



    return NextResponse.json(allResults);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
