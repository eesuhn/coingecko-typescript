# Key

Types:

- <code><a href="./src/resources/key.ts">KeyGetResponse</a></code>

Methods:

- <code title="get /key">client.key.<a href="./src/resources/key.ts">get</a>() -> KeyGetResponse</code>

# Simple

Types:

- <code><a href="./src/resources/simple.ts">SimpleGetPriceResponse</a></code>
- <code><a href="./src/resources/simple.ts">SimpleGetTokenPriceIDResponse</a></code>

Methods:

- <code title="get /simple/price">client.simple.<a href="./src/resources/simple.ts">getPrice</a>({ ...params }) -> SimpleGetPriceResponse</code>
- <code title="get /simple/token_price/{id}">client.simple.<a href="./src/resources/simple.ts">getTokenPriceID</a>(id, { ...params }) -> SimpleGetTokenPriceIDResponse</code>

# Coins

Types:

- <code><a href="./src/resources/coins/coins.ts">CoinGetCategoriesResponse</a></code>
- <code><a href="./src/resources/coins/coins.ts">CoinGetIDResponse</a></code>
- <code><a href="./src/resources/coins/coins.ts">CoinGetListResponse</a></code>

Methods:

- <code title="get /coins/categories">client.coins.<a href="./src/resources/coins/coins.ts">getCategories</a>({ ...params }) -> CoinGetCategoriesResponse</code>
- <code title="get /coins/{id}">client.coins.<a href="./src/resources/coins/coins.ts">getID</a>(id, { ...params }) -> CoinGetIDResponse</code>
- <code title="get /coins/list">client.coins.<a href="./src/resources/coins/coins.ts">getList</a>({ ...params }) -> CoinGetListResponse</code>

## MarketChart

Types:

- <code><a href="./src/resources/coins/market-chart.ts">MarketChartGetRangeResponse</a></code>

Methods:

- <code title="get /coins/{id}/market_chart/range">client.coins.marketChart.<a href="./src/resources/coins/market-chart.ts">getRange</a>(id, { ...params }) -> MarketChartGetRangeResponse</code>

## Ohlc

Types:

- <code><a href="./src/resources/coins/ohlc.ts">OhlcGetRangeResponse</a></code>

Methods:

- <code title="get /coins/{id}/ohlc/range">client.coins.ohlc.<a href="./src/resources/coins/ohlc.ts">getRange</a>(id, { ...params }) -> OhlcGetRangeResponse</code>

# Onchain

## Simple

### Networks

Types:

- <code><a href="./src/resources/onchain/simple/networks.ts">NetworkGetTokenPriceAddressesResponse</a></code>

Methods:

- <code title="get /onchain/simple/networks/{network}/token_price/{addresses}">client.onchain.simple.networks.<a href="./src/resources/onchain/simple/networks.ts">getTokenPriceAddresses</a>(addresses, { ...params }) -> NetworkGetTokenPriceAddressesResponse</code>

## Networks

Types:

- <code><a href="./src/resources/onchain/networks/networks.ts">NetworkGetResponse</a></code>
- <code><a href="./src/resources/onchain/networks/networks.ts">NetworkGetTrendingPoolsResponse</a></code>

Methods:

- <code title="get /onchain/networks">client.onchain.networks.<a href="./src/resources/onchain/networks/networks.ts">get</a>({ ...params }) -> NetworkGetResponse</code>
- <code title="get /onchain/networks/{network}/trending_pools">client.onchain.networks.<a href="./src/resources/onchain/networks/networks.ts">getTrendingPools</a>(network, { ...params }) -> NetworkGetTrendingPoolsResponse</code>

### Pools

Types:

- <code><a href="./src/resources/onchain/networks/pools.ts">PoolGetResponse</a></code>
- <code><a href="./src/resources/onchain/networks/pools.ts">PoolGetMultiAddressesResponse</a></code>

Methods:

- <code title="get /onchain/networks/{network}/pools">client.onchain.networks.pools.<a href="./src/resources/onchain/networks/pools.ts">get</a>(network, { ...params }) -> PoolGetResponse</code>
- <code title="get /onchain/networks/{network}/pools/multi/{addresses}">client.onchain.networks.pools.<a href="./src/resources/onchain/networks/pools.ts">getMultiAddresses</a>(addresses, { ...params }) -> PoolGetMultiAddressesResponse</code>

### Tokens

Types:

- <code><a href="./src/resources/onchain/networks/tokens.ts">TokenGetMultiAddressesResponse</a></code>

Methods:

- <code title="get /onchain/networks/{network}/tokens/multi/{addresses}">client.onchain.networks.tokens.<a href="./src/resources/onchain/networks/tokens.ts">getMultiAddresses</a>(addresses, { ...params }) -> TokenGetMultiAddressesResponse</code>

## Pools

Types:

- <code><a href="./src/resources/onchain/pools.ts">PoolGetMegafilterResponse</a></code>

Methods:

- <code title="get /onchain/pools/megafilter">client.onchain.pools.<a href="./src/resources/onchain/pools.ts">getMegafilter</a>({ ...params }) -> PoolGetMegafilterResponse</code>
