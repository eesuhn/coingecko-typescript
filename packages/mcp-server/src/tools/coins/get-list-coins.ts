// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Coingecko from 'coingecko-typescript-test';

export const metadata: Metadata = {
  resource: 'coins',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_list_coins',
  description:
    'This endpoint allows you to **query all the supported coins on CoinGecko with coins ID, name and symbol**',
  inputSchema: {
    type: 'object',
    properties: {
      include_platform: {
        type: 'boolean',
        description: "include platform and token's contract addresses, default: false",
      },
      status: {
        type: 'string',
        description: 'filter by status of coins, default: active',
        enum: ['active', 'inactive'],
      },
    },
  },
};

export const handler = (client: Coingecko, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.coins.getList(body);
};

export default { metadata, tool, handler };
