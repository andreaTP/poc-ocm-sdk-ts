import {Ingress} from '../../../../../../../models/';
import {createIngressFromDiscriminatorValue} from '../../../../../../../models/createIngressFromDiscriminatorValue';
import {WithIngress_ItemRequestBuilderDeleteRequestConfiguration} from './withIngress_ItemRequestBuilderDeleteRequestConfiguration';
import {WithIngress_ItemRequestBuilderGetRequestConfiguration} from './withIngress_ItemRequestBuilderGetRequestConfiguration';
import {WithIngress_ItemRequestBuilderPatchRequestConfiguration} from './withIngress_ItemRequestBuilderPatchRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /api/clusters_mgmt/v1/clusters/{cluster_id}/ingresses/{ingress_id}
 */
export class WithIngress_ItemRequestBuilder {
    /** Path parameters for the request */
    private pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private urlTemplate: string;
    /**
     * Instantiates a new WithIngress_ItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/api/clusters_mgmt/v1/clusters/{cluster_id}/ingresses/{ingress_id}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Deletes the ingress.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: WithIngress_ItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.toDeleteRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, undefined) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Retrieves the details of the ingress.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Ingress
     */
    public get(requestConfiguration?: WithIngress_ItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Ingress | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<Ingress>(requestInfo, createIngressFromDiscriminatorValue, responseHandler, undefined) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Updates the ingress.
     * @param body Representation of an ingress.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Ingress
     */
    public patch(body: Ingress | undefined, requestConfiguration?: WithIngress_ItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Ingress | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<Ingress>(requestInfo, createIngressFromDiscriminatorValue, responseHandler, undefined) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Deletes the ingress.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: WithIngress_ItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.DELETE;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Retrieves the details of the ingress.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: WithIngress_ItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Updates the ingress.
     * @param body Representation of an ingress.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: Ingress | undefined, requestConfiguration?: WithIngress_ItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
}
