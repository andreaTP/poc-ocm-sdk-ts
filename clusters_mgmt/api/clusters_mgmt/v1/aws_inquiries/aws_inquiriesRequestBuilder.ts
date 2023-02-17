import {Machine_typesRequestBuilder} from './machine_types/machine_typesRequestBuilder';
import {RegionsRequestBuilder} from './regions/regionsRequestBuilder';
import {Sts_credential_requestsRequestBuilder} from './sts_credential_requests/sts_credential_requestsRequestBuilder';
import {Sts_policiesRequestBuilder} from './sts_policies/sts_policiesRequestBuilder';
import {VpcsRequestBuilder} from './vpcs/vpcsRequestBuilder';
import {getPathParameters, RequestAdapter} from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /api/clusters_mgmt/v1/aws_inquiries
 */
export class Aws_inquiriesRequestBuilder {
    /** The machine_types property */
    public get machine_types(): Machine_typesRequestBuilder {
        return new Machine_typesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private pathParameters: Record<string, unknown>;
    /** The regions property */
    public get regions(): RegionsRequestBuilder {
        return new RegionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The request adapter to use to execute the requests. */
    private requestAdapter: RequestAdapter;
    /** The sts_credential_requests property */
    public get sts_credential_requests(): Sts_credential_requestsRequestBuilder {
        return new Sts_credential_requestsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The sts_policies property */
    public get sts_policies(): Sts_policiesRequestBuilder {
        return new Sts_policiesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private urlTemplate: string;
    /** The vpcs property */
    public get vpcs(): VpcsRequestBuilder {
        return new VpcsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new Aws_inquiriesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/api/clusters_mgmt/v1/aws_inquiries";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
}
