import {Addon_upgrade_policiesRequestBuilderGetQueryParameters} from './addon_upgrade_policiesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Configuration for the request such as headers, query parameters, and middleware options.
 */
export class Addon_upgrade_policiesRequestBuilderGetRequestConfiguration {
    /** Request headers */
    public headers?: Record<string, string[]> | undefined;
    /** Request options */
    public options?: RequestOption[] | undefined;
    /** Request query parameters */
    public queryParameters?: Addon_upgrade_policiesRequestBuilderGetQueryParameters | undefined;
}
