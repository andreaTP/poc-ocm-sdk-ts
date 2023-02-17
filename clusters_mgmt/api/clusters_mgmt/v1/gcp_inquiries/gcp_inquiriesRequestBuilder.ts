import {Encryption_keysRequestBuilder} from './encryption_keys/encryption_keysRequestBuilder';
import {Key_ringsRequestBuilder} from './key_rings/key_ringsRequestBuilder';
import {RegionsRequestBuilder} from './regions/regionsRequestBuilder';
import {VpcsRequestBuilder} from './vpcs/vpcsRequestBuilder';
import {getPathParameters, RequestAdapter} from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /api/clusters_mgmt/v1/gcp_inquiries
 */
export class Gcp_inquiriesRequestBuilder {
    /** The encryption_keys property */
    public get encryption_keys(): Encryption_keysRequestBuilder {
        return new Encryption_keysRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The key_rings property */
    public get key_rings(): Key_ringsRequestBuilder {
        return new Key_ringsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private pathParameters: Record<string, unknown>;
    /** The regions property */
    public get regions(): RegionsRequestBuilder {
        return new RegionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The request adapter to use to execute the requests. */
    private requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private urlTemplate: string;
    /** The vpcs property */
    public get vpcs(): VpcsRequestBuilder {
        return new VpcsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new Gcp_inquiriesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/api/clusters_mgmt/v1/gcp_inquiries";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
}
