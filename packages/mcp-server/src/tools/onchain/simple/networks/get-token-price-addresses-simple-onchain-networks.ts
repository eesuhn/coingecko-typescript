// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Coingecko from 'coingecko';

export const metadata: Metadata = {
  resource: 'onchain.simple.networks',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_token_price_addresses_simple_onchain_networks',
  description:
    'This endpoint allows you to **get token price based on the provided token contract address on a network**',
  inputSchema: {
    type: 'object',
    properties: {
      network: {
        type: 'string',
      },
      addresses: {
        type: 'string',
      },
      include_24hr_price_change: {
        type: 'boolean',
        description: 'include 24hr price change, default: false',
      },
      include_24hr_vol: {
        type: 'boolean',
        description: 'include 24hr volume, default: false',
      },
      include_market_cap: {
        type: 'boolean',
        description: 'include market capitalization, default: false',
      },
      include_total_reserve_in_usd: {
        type: 'boolean',
        description: 'include total reserve in USD, default: false',
      },
      mcap_fdv_fallback: {
        type: 'boolean',
        description: 'return FDV if market cap is not available, default: false',
      },
    },
  },
};

export const handler = (client: Coingecko, args: Record<string, unknown> | undefined) => {
  const { addresses, ...body } = args as any;
  return client.onchain.simple.networks.getTokenPriceAddresses(addresses, body);
};

export default { metadata, tool, handler };
