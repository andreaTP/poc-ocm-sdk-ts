import {PrivateLinkConfiguration} from '../../../../../../../models/';
import {createPrivateLinkConfigurationFromDiscriminatorValue} from '../../../../../../../models/createPrivateLinkConfigurationFromDiscriminatorValue';
import {WithPrincipal_ItemRequestBuilder} from './principals/item/withPrincipal_ItemRequestBuilder';
import {PrincipalsRequestBuilder} from './principals/principalsRequestBuilder';
import {Private_link_configurationRequestBuilderGetRequestConfiguration} from './private_link_configurationRequestBuilderGetRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /api/clusters_mgmt/v1/clusters/{cluster_id}/aws/private_link_configuration
 */
export class Private_link_configurationRequestBuilder {
    /** Path parameters for the request */
    private pathParameters: Record<string, unknown>;
    /** The principals property */
    public get principals(): PrincipalsRequestBuilder {
        return new PrincipalsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The request adapter to use to execute the requests. */
    private requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private urlTemplate: string;
    /**
     * Instantiates a new Private_link_configurationRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/api/clusters_mgmt/v1/clusters/{cluster_id}/aws/private_link_configuration";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Retrieves the details of the configuration for the Private Link.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of PrivateLinkConfiguration
     */
    public get(requestConfiguration?: Private_link_configurationRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<PrivateLinkConfiguration | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<PrivateLinkConfiguration>(requestInfo, createPrivateLinkConfigurationFromDiscriminatorValue, responseHandler, undefined) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Gets an item from the ApiSdk.api.clusters_mgmt.v1.clusters.item.aws.private_link_configuration.principals.item collection
     * @param id Unique identifier of the item
     * @returns a WithPrincipal_ItemRequestBuilder
     */
    public principalsById(id: string) : WithPrincipal_ItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["principal_id"] = id
        return new WithPrincipal_ItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Retrieves the details of the configuration for the Private Link.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: Private_link_configurationRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
