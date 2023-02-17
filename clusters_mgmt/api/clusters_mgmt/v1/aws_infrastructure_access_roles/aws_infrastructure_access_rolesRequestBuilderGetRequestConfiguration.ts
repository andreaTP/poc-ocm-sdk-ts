import {Aws_infrastructure_access_rolesRequestBuilderGetQueryParameters} from './aws_infrastructure_access_rolesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Configuration for the request such as headers, query parameters, and middleware options.
 */
export class Aws_infrastructure_access_rolesRequestBuilderGetRequestConfiguration {
    /** Request headers */
    public headers?: Record<string, string[]> | undefined;
    /** Request options */
    public options?: RequestOption[] | undefined;
    /** Request query parameters */
    public queryParameters?: Aws_infrastructure_access_rolesRequestBuilderGetQueryParameters | undefined;
}
