import {Machine_typesRequestBuilderPostQueryParameters} from './machine_typesRequestBuilderPostQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Configuration for the request such as headers, query parameters, and middleware options.
 */
export class Machine_typesRequestBuilderPostRequestConfiguration {
    /** Request headers */
    public headers?: Record<string, string[]> | undefined;
    /** Request options */
    public options?: RequestOption[] | undefined;
    /** Request query parameters */
    public queryParameters?: Machine_typesRequestBuilderPostQueryParameters | undefined;
}
