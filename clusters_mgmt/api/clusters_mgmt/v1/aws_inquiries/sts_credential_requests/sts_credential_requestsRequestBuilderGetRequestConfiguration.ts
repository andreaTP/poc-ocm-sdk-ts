import {Sts_credential_requestsRequestBuilderGetQueryParameters} from './sts_credential_requestsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Configuration for the request such as headers, query parameters, and middleware options.
 */
export class Sts_credential_requestsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    public headers?: Record<string, string[]> | undefined;
    /** Request options */
    public options?: RequestOption[] | undefined;
    /** Request query parameters */
    public queryParameters?: Sts_credential_requestsRequestBuilderGetQueryParameters | undefined;
}
