import {Deleted_subscriptionsRequestBuilderGetQueryParameters} from './deleted_subscriptionsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Configuration for the request such as headers, query parameters, and middleware options.
 */
export class Deleted_subscriptionsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    public headers?: Record<string, string[]> | undefined;
    /** Request options */
    public options?: RequestOption[] | undefined;
    /** Request query parameters */
    public queryParameters?: Deleted_subscriptionsRequestBuilderGetQueryParameters | undefined;
}
