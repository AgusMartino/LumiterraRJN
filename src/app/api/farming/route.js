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
    const dataFarmingShoes = await fetchData(
      apiUrl,
      `
      query MyQuery {
        erc1155Tokens(
            from: 0
            size: 50
            tokenAddress: "0xcc451977a4be9adee892f7e610fe3e3b3927b5a1"
            name: "Farming Shoes"
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

    const dataFarmingPants = await fetchData(
      apiUrl,
      `query MyQuery {
          erc1155Tokens(
            from: 0
            size: 50
            tokenAddress: "0xcc451977a4be9adee892f7e610fe3e3b3927b5a1"
            name: "Farming Pants"
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
    const dataFarmingGloves = await fetchData(
      apiUrl,
      `query MyQuery {
          erc1155Tokens(
            from: 0
            size: 50
            tokenAddress: "0xcc451977a4be9adee892f7e610fe3e3b3927b5a1"
            name: "Farming Gloves"
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
    const dataFarmingLuckyHat = await fetchData(
      apiUrl,
      `
        query MyQuery {
          erc1155Tokens(
            from: 0
            size: 50
            tokenAddress: "0xcc451977a4be9adee892f7e610fe3e3b3927b5a1"
            name: "Lucky"
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
    const dataFarmingJacket = await fetchData(
      apiUrl,
      `query MyQuery {
          erc1155Tokens(
            from: 0
            size: 50
            tokenAddress: "0xcc451977a4be9adee892f7e610fe3e3b3927b5a1"
            name: "Farming Jacket"
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
    const dataFarmingHoe = await fetchData(
      apiUrl,
      `query MyQuery {
          erc1155Tokens(
            from: 0
            size: 50
            tokenAddress: "0xcc451977a4be9adee892f7e610fe3e3b3927b5a1"
            name: "Hoe"
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
    const dataFarmingKettle = await fetchData(
      apiUrl,
      `query MyQuery {
          erc1155Tokens(
            from: 0
            size: 50
            tokenAddress: "0xcc451977a4be9adee892f7e610fe3e3b3927b5a1"
            name: "Kettle"
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
    const resultsdataFarmingShoes = dataFarmingShoes.data.erc1155Tokens.results.map(
      (result) => ({
        ...result,
        minPrice: Number(
          (result.minPrice / 1000000000000000000) *
            dataExchangeRate.data.exchangeRate.ron.usd
        ).toFixed(2),
        attributes:[
          breedingproficiency= Number(result.attributes["breedingproficiency"][0]),
          homeextramovespd= Number(result.attributes["homeextramovespd"][0]),
          maxfertility= Number(result.attributes["maxfertility"][0]),
          maxpethappiness= Number(result.attributes["maxpethappiness"][0]),
          plantingproficiency= Number(result.attributes["plantingproficiency"][0]),
          requireslevel= Number(result.attributes["requires level"][0]),
          quality= result.attributes["quality"][0]
        ],
        image: result.image,
        type: result.attributes["type"][0]
      })
    );

    const resultsdataFarmingPants = dataFarmingPants.data.erc1155Tokens.results.map(
      (result) => ({
        ...result,
        minPrice: Number(
          (result.minPrice / 1000000000000000000) *
            dataExchangeRate.data.exchangeRate.ron.usd
        ).toFixed(2),
        attributes:[
          breedingproficiency= Number(result.attributes["breedingproficiency"][0]),
          hoespd= Number(result.attributes["hoespd"][0]),
          maxfertility= Number(result.attributes["maxfertility"][0]),
          maxpethappiness= Number(result.attributes["maxpethappiness"][0]),
          plantingproficiency= Number(result.attributes["plantingproficiency"][0]),
          requireslevel= Number(result.attributes["requires level"][0]),
          quality= result.attributes["quality"][0]
        ],
        image: result.image,
        type: result.attributes["type"][0]
      })
    );

    const resultsdataFarmingGloves = dataFarmingGloves.data.erc1155Tokens.results.map(
      (result) => ({
        ...result,
        minPrice: Number(
          (result.minPrice / 1000000000000000000) *
            dataExchangeRate.data.exchangeRate.ron.usd
        ).toFixed(2),
        attributes:[
          breedingproficiency= Number(result.attributes["breedingproficiency"][0]),
          fertilitycapacity= Number(result.attributes["fertilitycapacity"][0]),
          maxfertility= Number(result.attributes["maxfertility"][0]),
          maxpethappiness= Number(result.attributes["maxpethappiness"][0]),
          pethappinesscapacity= Number(result.attributes["pethappinesscapacity"][0]),
          plantingproficiency= Number(result.attributes["plantingproficiency"][0]),
          requireslevel= Number(result.attributes["requires level"][0]),
          quality= result.attributes["quality"][0]
        ],
        image: result.image,
        type: result.attributes["type"][0]
      })
    );

    const resultsdataFarmingLuckyHat = dataFarmingLuckyHat.data.erc1155Tokens.results.map(
      (result) => ({
        ...result,
        minPrice: Number(
          (result.minPrice / 1000000000000000000) *
            dataExchangeRate.data.exchangeRate.ron.usd
        ).toFixed(2),
        attributes:[
          breedingproficiency= Number(result.attributes["breedingproficiency"][0]),
          maxfertility= Number(result.attributes["maxfertility"][0]),
          maxpethappiness= Number(result.attributes["maxpethappiness"][0]),
          plantingproficiency= Number(result.attributes["plantingproficiency"][0]),
          requireslevel= Number(result.attributes["requires level"][0]),
          quality= result.attributes["quality"][0]
        ],
        image: result.image,
        type: result.attributes["type"][0]
      })
    );

    const resultsdataFarmingJacket = dataFarmingJacket.data.erc1155Tokens.results.map(
      (result) => ({
        ...result,
        minPrice: Number(
          (result.minPrice / 1000000000000000000) *
            dataExchangeRate.data.exchangeRate.ron.usd
        ).toFixed(2),
        attributes:[
          breedingproficiency= Number(result.attributes["breedingproficiency"][0]),
          maxfertility= Number(result.attributes["maxfertility"][0]),
          maxpethappiness= Number(result.attributes["maxpethappiness"][0]),
          plantingproficiency= Number(result.attributes["plantingproficiency"][0]),
          requireslevel= Number(result.attributes["requires level"][0]),
          quality= result.attributes["quality"][0]
        ],
        image: result.image,
        type: result.attributes["type"][0]
      })
    );

    const resultsdataFarmingHoe = dataFarmingHoe.data.erc1155Tokens.results.map(
      (result) => ({
        ...result,
        minPrice: Number(
          (result.minPrice / 1000000000000000000) *
            dataExchangeRate.data.exchangeRate.ron.usd
        ).toFixed(2),
        attributes:[
          combatatt= Number(result.attributes["combatatt"][0]),
          fertilitycapacity= Number(result.attributes["fertilitycapacity"][0]),
          hoeingeffect= Number(result.attributes["hoeingeffect"][0]),
          requireslevel= Number(result.attributes["requires level"][0]),
          quality= result.attributes["quality"][0]
        ],
        image: result.image,
        type: result.attributes["type"][0]
      })
    );

    const resultsdataFarmingKettle = dataFarmingKettle.data.erc1155Tokens.results.map(
      (result) => ({
        ...result,
        minPrice: Number(
          (result.minPrice / 1000000000000000000) *
            dataExchangeRate.data.exchangeRate.ron.usd
        ).toFixed(2),
        attributes:[
          wateringeffect= Number(result.attributes["wateringeffect"][0]),
          requireslevel= Number(result.attributes["requires level"][0]),
          quality= result.attributes["quality"][0]
        ],
        image: result.image,
        type: result.attributes["type"][0]
      })
    );



    return NextResponse.json(allResults);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
