import {Sts_operator_rolesRequestBuilderGetQueryParameters} from './sts_operator_rolesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Configuration for the request such as headers, query parameters, and middleware options.
 */
export class Sts_operator_rolesRequestBuilderGetRequestConfiguration {
    /** Request headers */
    public headers?: Record<string, string[]> | undefined;
    /** Request options */
    public options?: RequestOption[] | undefined;
    /** Request query parameters */
    public queryParameters?: Sts_operator_rolesRequestBuilderGetQueryParameters | undefined;
}
