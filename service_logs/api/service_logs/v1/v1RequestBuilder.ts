import {Metadata} from '../../../models/';
import {createMetadataFromDiscriminatorValue} from '../../../models/createMetadataFromDiscriminatorValue';
import {Cluster_logsRequestBuilder} from './cluster_logs/cluster_logsRequestBuilder';
import {WithLog_entry_ItemRequestBuilder} from './cluster_logs/item/withLog_entry_ItemRequestBuilder';
import {ClustersRequestBuilder} from './clusters/clustersRequestBuilder';
import {WithCluster_ItemRequestBuilder} from './clusters/item/withCluster_ItemRequestBuilder';
import {V1RequestBuilderGetRequestConfiguration} from './v1RequestBuilderGetRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /api/service_logs/v1
 */
export class V1RequestBuilder {
    /** The cluster_logs property */
    public get cluster_logs(): Cluster_logsRequestBuilder {
        return new Cluster_logsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The clusters property */
    public get clusters(): ClustersRequestBuilder {
        return new ClustersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private urlTemplate: string;
    /**
     * Gets an item from the ApiSdk.api.service_logs.v1.cluster_logs.item collection
     * @param id Unique identifier of the item
     * @returns a WithLog_entry_ItemRequestBuilder
     */
    public cluster_logsById(id: string) : WithLog_entry_ItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["log_entry_id"] = id
        return new WithLog_entry_ItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.api.service_logs.v1.clusters.item collection
     * @param id Unique identifier of the item
     * @returns a WithCluster_ItemRequestBuilder
     */
    public clustersById(id: string) : WithCluster_ItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["cluster_id"] = id
        return new WithCluster_ItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new V1RequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/api/service_logs/v1";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Retrieves the version metadata.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Metadata
     */
    public get(requestConfiguration?: V1RequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Metadata | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<Metadata>(requestInfo, createMetadataFromDiscriminatorValue, responseHandler, undefined) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Retrieves the version metadata.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: V1RequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
}
