// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as PoolsAPI from './pools';
import { PoolGetMegafilterParams, PoolGetMegafilterResponse, Pools } from './pools';
import * as NetworksAPI from './networks/networks';
import {
  NetworkGetParams,
  NetworkGetResponse,
  NetworkGetTrendingPoolsParams,
  NetworkGetTrendingPoolsResponse,
  Networks,
} from './networks/networks';
import * as SimpleAPI from './simple/simple';
import { Simple } from './simple/simple';

export class Onchain extends APIResource {
  simple: SimpleAPI.Simple = new SimpleAPI.Simple(this._client);
  networks: NetworksAPI.Networks = new NetworksAPI.Networks(this._client);
  pools: PoolsAPI.Pools = new PoolsAPI.Pools(this._client);
}

Onchain.Simple = Simple;
Onchain.Networks = Networks;
Onchain.Pools = Pools;

export declare namespace Onchain {
  export { Simple as Simple };

  export {
    Networks as Networks,
    type NetworkGetResponse as NetworkGetResponse,
    type NetworkGetTrendingPoolsResponse as NetworkGetTrendingPoolsResponse,
    type NetworkGetParams as NetworkGetParams,
    type NetworkGetTrendingPoolsParams as NetworkGetTrendingPoolsParams,
  };

  export {
    Pools as Pools,
    type PoolGetMegafilterResponse as PoolGetMegafilterResponse,
    type PoolGetMegafilterParams as PoolGetMegafilterParams,
  };
}
