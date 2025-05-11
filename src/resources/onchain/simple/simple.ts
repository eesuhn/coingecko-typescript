// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as NetworksAPI from './networks';
import {
  NetworkGetTokenPriceAddressesParams,
  NetworkGetTokenPriceAddressesResponse,
  Networks,
} from './networks';

export class Simple extends APIResource {
  networks: NetworksAPI.Networks = new NetworksAPI.Networks(this._client);
}

Simple.Networks = Networks;

export declare namespace Simple {
  export {
    Networks as Networks,
    type NetworkGetTokenPriceAddressesResponse as NetworkGetTokenPriceAddressesResponse,
    type NetworkGetTokenPriceAddressesParams as NetworkGetTokenPriceAddressesParams,
  };
}
