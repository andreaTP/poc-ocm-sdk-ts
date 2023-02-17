import {Addon_inquiriesRequestBuilder} from './addon_inquiries/addon_inquiriesRequestBuilder';
import {WithAddon_inquiry_ItemRequestBuilder} from './addon_inquiries/item/withAddon_inquiry_ItemRequestBuilder';
import {WithAddon_ItemRequestBuilder} from './status/item/withAddon_ItemRequestBuilder';
import {StatusRequestBuilder} from './status/statusRequestBuilder';
import {getPathParameters, RequestAdapter} from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /api/addons_mgmt/v1/clusters/{cluster_id}
 */
export class WithCluster_ItemRequestBuilder {
    /** The addon_inquiries property */
    public get addon_inquiries(): Addon_inquiriesRequestBuilder {
        return new Addon_inquiriesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private requestAdapter: RequestAdapter;
    /** The status property */
    public get status(): StatusRequestBuilder {
        return new StatusRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private urlTemplate: string;
    /**
     * Gets an item from the ApiSdk.api.addons_mgmt.v1.clusters.item.addon_inquiries.item collection
     * @param id Unique identifier of the item
     * @returns a WithAddon_inquiry_ItemRequestBuilder
     */
    public addon_inquiriesById(id: string) : WithAddon_inquiry_ItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["addon_inquiry_id"] = id
        return new WithAddon_inquiry_ItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new WithCluster_ItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/api/addons_mgmt/v1/clusters/{cluster_id}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Gets an item from the ApiSdk.api.addons_mgmt.v1.clusters.item.status.item collection
     * @param id Unique identifier of the item
     * @returns a WithAddon_ItemRequestBuilder
     */
    public statusById(id: string) : WithAddon_ItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["addon_id"] = id
        return new WithAddon_ItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
}
