import {AWSInfrastructureAccessRoleGrant} from '../../../../../../models/';
import {createAWSInfrastructureAccessRoleGrantFromDiscriminatorValue} from '../../../../../../models/createAWSInfrastructureAccessRoleGrantFromDiscriminatorValue';
import {Aws_infrastructure_access_role_grantsRequestBuilderGetRequestConfiguration} from './aws_infrastructure_access_role_grantsRequestBuilderGetRequestConfiguration';
import {Aws_infrastructure_access_role_grantsRequestBuilderPostRequestConfiguration} from './aws_infrastructure_access_role_grantsRequestBuilderPostRequestConfiguration';
import {createAws_infrastructure_access_role_grantsResponseFromDiscriminatorValue} from './createAws_infrastructure_access_role_grantsResponseFromDiscriminatorValue';
import {Aws_infrastructure_access_role_grantsResponse} from './index';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /api/clusters_mgmt/v1/clusters/{cluster_id}/aws_infrastructure_access_role_grants
 */
export class Aws_infrastructure_access_role_grantsRequestBuilder {
    /** Path parameters for the request */
    private pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private urlTemplate: string;
    /**
     * Instantiates a new Aws_infrastructure_access_role_grantsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/api/clusters_mgmt/v1/clusters/{cluster_id}/aws_infrastructure_access_role_grants{?order*,page*,search*,size*}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Retrieves the list of AWS infrastructure access role grants.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Aws_infrastructure_access_role_grantsResponse
     */
    public get(requestConfiguration?: Aws_infrastructure_access_role_grantsRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Aws_infrastructure_access_role_grantsResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<Aws_infrastructure_access_role_grantsResponse>(requestInfo, createAws_infrastructure_access_role_grantsResponseFromDiscriminatorValue, responseHandler, undefined) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create a new AWS infrastructure access role grant and add it to the collection ofAWS infrastructure access role grants on the cluster.
     * @param body Representation of an AWS infrastructure access role grant.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of AWSInfrastructureAccessRoleGrant
     */
    public post(body: AWSInfrastructureAccessRoleGrant | undefined, requestConfiguration?: Aws_infrastructure_access_role_grantsRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<AWSInfrastructureAccessRoleGrant | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<AWSInfrastructureAccessRoleGrant>(requestInfo, createAWSInfrastructureAccessRoleGrantFromDiscriminatorValue, responseHandler, undefined) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Retrieves the list of AWS infrastructure access role grants.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: Aws_infrastructure_access_role_grantsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.setQueryStringParametersFromRawObject(requestConfiguration.queryParameters);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Create a new AWS infrastructure access role grant and add it to the collection ofAWS infrastructure access role grants on the cluster.
     * @param body Representation of an AWS infrastructure access role grant.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: AWSInfrastructureAccessRoleGrant | undefined, requestConfiguration?: Aws_infrastructure_access_role_grantsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
}
