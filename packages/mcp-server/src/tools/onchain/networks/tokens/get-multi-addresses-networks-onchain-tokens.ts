// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Coingecko from 'coingecko';

export const metadata: Metadata = {
  resource: 'onchain.networks.tokens',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_multi_addresses_networks_onchain_tokens',
  description:
    'This endpoint allows you to **query multiple tokens data based on the provided token contract addresses on a network**',
  inputSchema: {
    type: 'object',
    properties: {
      network: {
        type: 'string',
      },
      addresses: {
        type: 'string',
      },
      include: {
        type: 'string',
        description: 'attributes to include',
        enum: ['top_pools'],
      },
    },
  },
};

export const handler = (client: Coingecko, args: Record<string, unknown> | undefined) => {
  const { addresses, ...body } = args as any;
  return client.onchain.networks.tokens.getMultiAddresses(addresses, body);
};

export default { metadata, tool, handler };
