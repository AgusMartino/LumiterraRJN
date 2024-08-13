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
    const dataCombatShoes = await fetchData(
      apiUrl,
      `
        query MyQuery {
        erc1155Tokens(
          auctionType: Sale
          from: 0
          name: "Shoes"
          rangeCriteria: {name: "combatdef", range: {from: "1", to: "1.157920892373162e+77"}}
          size: 50
          sort: PriceAsc
          tokenAddress: "0xcc451977a4be9adee892f7e610fe3e3b3927b5a1"
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

    const dataCombatPants = await fetchData(
      apiUrl,
      `
        query MyQuery {
          erc1155Tokens(
            auctionType: Sale
            from: 0
            name: "Pants"
            rangeCriteria: {name: "combatdef", range: {from: "1", to: "1.157920892373162e+77"}}
            size: 50
            sort: PriceAsc
            tokenAddress: "0xcc451977a4be9adee892f7e610fe3e3b3927b5a1"
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
    const dataCombatGloves = await fetchData(
      apiUrl,
      `
        query MyQuery {
          erc1155Tokens(
            auctionType: Sale
            from: 0
            name: "Gloves"
            rangeCriteria: {name: "combatdef", range: {from: "1", to: "1.157920892373162e+77"}}
            size: 50
            sort: PriceAsc
            tokenAddress: "0xcc451977a4be9adee892f7e610fe3e3b3927b5a1"
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
    const dataCombatHat = await fetchData(
      apiUrl,
      `
        query MyQuery {
          erc1155Tokens(
            auctionType: Sale
            from: 0
            name: "Hat"
            rangeCriteria: {name: "combatdef", range: {from: "1", to: "1.157920892373162e+77"}}
            size: 50
            sort: PriceAsc
            tokenAddress: "0xcc451977a4be9adee892f7e610fe3e3b3927b5a1"
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
    const dataCombatJacket = await fetchData(
      apiUrl,
      `query MyQuery {
          erc1155Tokens(
            from: 0
            size: 50
            tokenAddress: "0xcc451977a4be9adee892f7e610fe3e3b3927b5a1"
            rangeCriteria: {name: "combatdef", range: {to: "1.157920892373162e+77", from: "1"}}
            criteria: {name: "type", values: "chest armor"}
            auctionType: Sale
            sort: PriceAsc
          ) {
            results {
              minPrice
              attributes
              name
              tokenId
              image
              cdnImage
            }
            total
          }
        }
      `
    );
    const dataCombatSword= await fetchData(
      apiUrl,
      `        
      query MyQuery {
          erc1155Tokens(
            from: 0
            size: 50
            tokenAddress: "0xcc451977a4be9adee892f7e610fe3e3b3927b5a1"
            name: "Sword"
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
    const dataCombatBow = await fetchData(
      apiUrl,
      `
        query MyQuery {
          erc1155Tokens(
            from: 0
            size: 50
            tokenAddress: "0xcc451977a4be9adee892f7e610fe3e3b3927b5a1"
            name: "Bow"
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

    const dataCombatHammer = await fetchData(
      apiUrl,
      `
      query MyQuery {
          erc1155Tokens(
            from: 0
            size: 50
            tokenAddress: "0xcc451977a4be9adee892f7e610fe3e3b3927b5a1"
            name: "Hammer"
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

    const resultsdataCombatShoes = dataCombatShoes.data.erc1155Tokens.results.map(
      (result) => ({
        ...result,
        minPrice: Number(
          (result.minPrice / 1000000000000000000) *
            dataExchangeRate.data.exchangeRate.ron.usd
        ).toFixed(2),
        combatdef: Number(result.attributes["combatdef"][0]),
        maxhp: Number(result.attributes["maxhp"][0]),
        movespd: Number(result.attributes["movespd"][0]),
        requireslevel: Number(result.attributes["requires level"][0]),
        image: result.image,
        quality: result.attributes["quality"][0],
        type: result.attributes["type"][0]
      })
    );

    const resultsdataCombatPants = dataCombatPants.data.erc1155Tokens.results.map(
      (result) => ({
        ...result,
        minPrice: Number(
          (result.minPrice / 1000000000000000000) *
            dataExchangeRate.data.exchangeRate.ron.usd
        ).toFixed(2),
        combatdef: Number(result.attributes["combatdef"][0]),
        maxhp: Number(result.attributes["maxhp"][0]),
        requireslevel: Number(result.attributes["requires level"][0]),
        image: result.image,
        quality: result.attributes["quality"][0],
        type: result.attributes["type"][0]
      })
    );

    const resultsdataCombatGloves = dataCombatGloves.data.erc1155Tokens.results.map(
      (result) => ({
        ...result,
        minPrice: Number(
          (result.minPrice / 1000000000000000000) *
            dataExchangeRate.data.exchangeRate.ron.usd
        ).toFixed(2),
        combatatt: Number(result.attributes["combatatt"][0]),
        combatdef: Number(result.attributes["combatdef"][0]),
        maxhp: Number(result.attributes["maxhp"][0]),
        requireslevel: Number(result.attributes["requires level"][0]),
        image: result.image,
        quality: result.attributes["quality"][0],
        type: result.attributes["type"][0]
      })
    );

    const resultsdataCombatHat = dataCombatHat.data.erc1155Tokens.results.map(
      (result) => ({
        ...result,
        minPrice: Number(
          (result.minPrice / 1000000000000000000) *
            dataExchangeRate.data.exchangeRate.ron.usd
        ).toFixed(2),
        combatdef: Number(result.attributes["combatdef"][0]),
        maxhp: Number(result.attributes["maxhp"][0]),
        requireslevel: Number(result.attributes["requires level"][0]),
        image: result.image,
        quality: result.attributes["quality"][0],
        type: result.attributes["type"][0]
      })
    );

    const resultsdataCombatJacket = dataCombatJacket.data.erc1155Tokens.results.map(
      (result) => ({
        ...result,
        minPrice: Number(
          (result.minPrice / 1000000000000000000) *
            dataExchangeRate.data.exchangeRate.ron.usd
        ).toFixed(2),
        combatdef: Number(result.attributes["combatdef"][0]),
        maxhp: Number(result.attributes["maxhp"][0]),
        image: result.image,
        quality: result.attributes["quality"][0],
        type: result.attributes["type"][0]
      })
    );

    const resultsdataCombatSword = dataCombatSword.data.erc1155Tokens.results.map(
      (result) => ({
        ...result,
        minPrice: Number(
          (result.minPrice / 1000000000000000000) *
            dataExchangeRate.data.exchangeRate.ron.usd
        ).toFixed(2),
        combatatt: Number(result.attributes["combatatt"][0]),
        combatcritrate: Number(result.attributes["combatcritrate"][0]),
        grassatt: Number(result.attributes["grassatt"][0]),
        requireslevel: Number(result.attributes["requires level"][0]),
        image: result.image,
        quality: result.attributes["quality"][0],
        type: result.attributes["type"][0]
      })
    );

    const resultsdataCombatbow = dataCombatBow.data.erc1155Tokens.results.map(
      (result) => ({
        ...result,
        minPrice: Number(
          (result.minPrice / 1000000000000000000) *
            dataExchangeRate.data.exchangeRate.ron.usd
        ).toFixed(2),
        combatatt: Number(result.attributes["combatatt"][0]),
        combatcritrate: Number(result.attributes["combatcritrate"][0]),
        requireslevel: Number(result.attributes["requires level"][0]),
        image: result.image,
        quality: result.attributes["quality"][0],
        type: result.attributes["type"][0]
      })
    );

    const resultsdataCombatHammer = dataCombatHammer.data.erc1155Tokens.results.map(
      (result) => ({
        ...result,
        minPrice: Number(
          (result.minPrice / 1000000000000000000) *
            dataExchangeRate.data.exchangeRate.ron.usd
        ).toFixed(2),
        combatatt: Number(result.attributes["combatatt"][0]),
        combathit: Number(result.attributes["combathit"][0]),
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
