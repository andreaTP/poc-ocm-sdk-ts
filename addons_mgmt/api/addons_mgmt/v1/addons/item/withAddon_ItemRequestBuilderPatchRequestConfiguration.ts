import {WithAddon_ItemRequestBuilderPatchQueryParameters} from './withAddon_ItemRequestBuilderPatchQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Configuration for the request such as headers, query parameters, and middleware options.
 */
export class WithAddon_ItemRequestBuilderPatchRequestConfiguration {
    /** Request headers */
    public headers?: Record<string, string[]> | undefined;
    /** Request options */
    public options?: RequestOption[] | undefined;
    /** Request query parameters */
    public queryParameters?: WithAddon_ItemRequestBuilderPatchQueryParameters | undefined;
}
