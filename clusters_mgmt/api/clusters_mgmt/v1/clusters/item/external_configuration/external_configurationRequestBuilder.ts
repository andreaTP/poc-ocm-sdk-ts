import {ExternalConfiguration} from '../../../../../../models/';
import {createExternalConfigurationFromDiscriminatorValue} from '../../../../../../models/createExternalConfigurationFromDiscriminatorValue';
import {External_configurationRequestBuilderGetRequestConfiguration} from './external_configurationRequestBuilderGetRequestConfiguration';
import {WithLabel_ItemRequestBuilder} from './labels/item/withLabel_ItemRequestBuilder';
import {LabelsRequestBuilder} from './labels/labelsRequestBuilder';
import {WithManifest_ItemRequestBuilder} from './manifests/item/withManifest_ItemRequestBuilder';
import {ManifestsRequestBuilder} from './manifests/manifestsRequestBuilder';
import {WithSyncset_ItemRequestBuilder} from './syncsets/item/withSyncset_ItemRequestBuilder';
import {SyncsetsRequestBuilder} from './syncsets/syncsetsRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /api/clusters_mgmt/v1/clusters/{cluster_id}/external_configuration
 */
export class External_configurationRequestBuilder {
    /** The labels property */
    public get labels(): LabelsRequestBuilder {
        return new LabelsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The manifests property */
    public get manifests(): ManifestsRequestBuilder {
        return new ManifestsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private requestAdapter: RequestAdapter;
    /** The syncsets property */
    public get syncsets(): SyncsetsRequestBuilder {
        return new SyncsetsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private urlTemplate: string;
    /**
     * Instantiates a new External_configurationRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/api/clusters_mgmt/v1/clusters/{cluster_id}/external_configuration";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Retrieves the details of the external configuration.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ExternalConfiguration
     */
    public get(requestConfiguration?: External_configurationRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ExternalConfiguration | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<ExternalConfiguration>(requestInfo, createExternalConfigurationFromDiscriminatorValue, responseHandler, undefined) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Gets an item from the ApiSdk.api.clusters_mgmt.v1.clusters.item.external_configuration.labels.item collection
     * @param id Unique identifier of the item
     * @returns a WithLabel_ItemRequestBuilder
     */
    public labelsById(id: string) : WithLabel_ItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["label_id"] = id
        return new WithLabel_ItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.api.clusters_mgmt.v1.clusters.item.external_configuration.manifests.item collection
     * @param id Unique identifier of the item
     * @returns a WithManifest_ItemRequestBuilder
     */
    public manifestsById(id: string) : WithManifest_ItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["manifest_id"] = id
        return new WithManifest_ItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.api.clusters_mgmt.v1.clusters.item.external_configuration.syncsets.item collection
     * @param id Unique identifier of the item
     * @returns a WithSyncset_ItemRequestBuilder
     */
    public syncsetsById(id: string) : WithSyncset_ItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["syncset_id"] = id
        return new WithSyncset_ItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Retrieves the details of the external configuration.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: External_configurationRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
