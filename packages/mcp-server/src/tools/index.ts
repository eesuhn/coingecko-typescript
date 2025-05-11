// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Coingecko from 'coingecko';
import { Tool } from '@modelcontextprotocol/sdk/types.js';

import get_key from './key/get-key';
import get_price_simple from './simple/get-price-simple';
import get_token_price_id_simple from './simple/get-token-price-id-simple';
import get_categories_coins from './coins/get-categories-coins';
import get_id_coins from './coins/get-id-coins';
import get_list_coins from './coins/get-list-coins';
import get_range_coins_market_chart from './coins/market-chart/get-range-coins-market-chart';
import get_range_coins_ohlc from './coins/ohlc/get-range-coins-ohlc';
import get_token_price_addresses_simple_onchain_networks from './onchain/simple/networks/get-token-price-addresses-simple-onchain-networks';
import get_onchain_networks from './onchain/networks/get-onchain-networks';
import get_trending_pools_onchain_networks from './onchain/networks/get-trending-pools-onchain-networks';
import get_networks_onchain_pools from './onchain/networks/pools/get-networks-onchain-pools';
import get_multi_addresses_networks_onchain_pools from './onchain/networks/pools/get-multi-addresses-networks-onchain-pools';
import get_multi_addresses_networks_onchain_tokens from './onchain/networks/tokens/get-multi-addresses-networks-onchain-tokens';
import get_megafilter_onchain_pools from './onchain/pools/get-megafilter-onchain-pools';

export type HandlerFunction = (client: Coingecko, args: Record<string, unknown> | undefined) => Promise<any>;

export type Metadata = {
  resource: string;
  operation: 'read' | 'write';
  tags: string[];
};

export type Endpoint = {
  metadata: Metadata;
  tool: Tool;
  handler: HandlerFunction;
};

export const endpoints: Endpoint[] = [];

function addEndpoint(endpoint: Endpoint) {
  endpoints.push(endpoint);
}

addEndpoint(get_key);
addEndpoint(get_price_simple);
addEndpoint(get_token_price_id_simple);
addEndpoint(get_categories_coins);
addEndpoint(get_id_coins);
addEndpoint(get_list_coins);
addEndpoint(get_range_coins_market_chart);
addEndpoint(get_range_coins_ohlc);
addEndpoint(get_token_price_addresses_simple_onchain_networks);
addEndpoint(get_onchain_networks);
addEndpoint(get_trending_pools_onchain_networks);
addEndpoint(get_networks_onchain_pools);
addEndpoint(get_multi_addresses_networks_onchain_pools);
addEndpoint(get_multi_addresses_networks_onchain_tokens);
addEndpoint(get_megafilter_onchain_pools);

export type Filter = {
  type: 'resource' | 'operation' | 'tag' | 'tool';
  op: 'include' | 'exclude';
  value: string;
};

export function query(filters: Filter[], endpoints: Endpoint[]): Endpoint[] {
  const allExcludes = filters.length > 0 && filters.every((filter) => filter.op === 'exclude');
  const unmatchedFilters = new Set(filters);

  const filtered = endpoints.filter((endpoint: Endpoint) => {
    let included = false || allExcludes;

    for (const filter of filters) {
      if (match(filter, endpoint)) {
        unmatchedFilters.delete(filter);
        included = filter.op === 'include';
      }
    }

    return included;
  });

  // Check if any filters didn't match
  if (unmatchedFilters.size > 0) {
    throw new Error(
      `The following filters did not match any endpoints: ${[...unmatchedFilters]
        .map((f) => `${f.type}=${f.value}`)
        .join(', ')}`,
    );
  }

  return filtered;
}

function match({ type, value }: Filter, endpoint: Endpoint): boolean {
  switch (type) {
    case 'resource': {
      const regexStr = '^' + normalizeResource(value).replace(/\*/g, '.*') + '$';
      const regex = new RegExp(regexStr);
      return regex.test(normalizeResource(endpoint.metadata.resource));
    }
    case 'operation':
      return endpoint.metadata.operation === value;
    case 'tag':
      return endpoint.metadata.tags.includes(value);
    case 'tool':
      return endpoint.tool.name === value;
  }
}

function normalizeResource(resource: string): string {
  return resource.toLowerCase().replace(/[^a-z.*\-_]*/g, '');
}
