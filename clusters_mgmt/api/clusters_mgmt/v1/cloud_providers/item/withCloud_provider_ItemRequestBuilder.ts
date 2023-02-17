import {CloudProvider} from '../../../../../models/';
import {createCloudProviderFromDiscriminatorValue} from '../../../../../models/createCloudProviderFromDiscriminatorValue';
import {Available_regionsRequestBuilder} from './available_regions/available_regionsRequestBuilder';
import {WithRegion_ItemRequestBuilder} from './regions/item/withRegion_ItemRequestBuilder';
import {RegionsRequestBuilder} from './regions/regionsRequestBuilder';
import {WithCloud_provider_ItemRequestBuilderGetRequestConfiguration} from './withCloud_provider_ItemRequestBuilderGetRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /api/clusters_mgmt/v1/cloud_providers/{cloud_provider_id}
 */
export class WithCloud_provider_ItemRequestBuilder {
    /** The available_regions property */
    public get available_regions(): Available_regionsRequestBuilder {
        return new Available_regionsRequestBuilder(this.pathParameters, this.requestAdapter);
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
    /**
     * Instantiates a new WithCloud_provider_ItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/api/clusters_mgmt/v1/cloud_providers/{cloud_provider_id}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Retrieves the details of the cloud provider.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of CloudProvider
     */
    public get(requestConfiguration?: WithCloud_provider_ItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<CloudProvider | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<CloudProvider>(requestInfo, createCloudProviderFromDiscriminatorValue, responseHandler, undefined) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Gets an item from the ApiSdk.api.clusters_mgmt.v1.cloud_providers.item.regions.item collection
     * @param id Unique identifier of the item
     * @returns a WithRegion_ItemRequestBuilder
     */
    public regionsById(id: string) : WithRegion_ItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["region_id"] = id
        return new WithRegion_ItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Retrieves the details of the cloud provider.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: WithCloud_provider_ItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
