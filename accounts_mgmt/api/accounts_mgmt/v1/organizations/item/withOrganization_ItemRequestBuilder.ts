import {Organization} from '../../../../../models/';
import {createOrganizationFromDiscriminatorValue} from '../../../../../models/createOrganizationFromDiscriminatorValue';
import {LabelsRequestBuilder} from './labels/labelsRequestBuilder';
import {Quota_costRequestBuilder} from './quota_cost/quota_costRequestBuilder';
import {WithResource_quota_ItemRequestBuilder} from './resource_quota/item/withResource_quota_ItemRequestBuilder';
import {Resource_quotaRequestBuilder} from './resource_quota/resource_quotaRequestBuilder';
import {Summary_dashboardRequestBuilder} from './summary_dashboard/summary_dashboardRequestBuilder';
import {WithOrganization_ItemRequestBuilderGetRequestConfiguration} from './withOrganization_ItemRequestBuilderGetRequestConfiguration';
import {WithOrganization_ItemRequestBuilderPatchRequestConfiguration} from './withOrganization_ItemRequestBuilderPatchRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /api/accounts_mgmt/v1/organizations/{organization_id}
 */
export class WithOrganization_ItemRequestBuilder {
    /** The labels property */
    public get labels(): LabelsRequestBuilder {
        return new LabelsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private pathParameters: Record<string, unknown>;
    /** The quota_cost property */
    public get quota_cost(): Quota_costRequestBuilder {
        return new Quota_costRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The request adapter to use to execute the requests. */
    private requestAdapter: RequestAdapter;
    /** The resource_quota property */
    public get resource_quota(): Resource_quotaRequestBuilder {
        return new Resource_quotaRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The summary_dashboard property */
    public get summary_dashboard(): Summary_dashboardRequestBuilder {
        return new Summary_dashboardRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private urlTemplate: string;
    /**
     * Instantiates a new WithOrganization_ItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/api/accounts_mgmt/v1/organizations/{organization_id}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Retrieves the details of the organization.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Organization
     */
    public get(requestConfiguration?: WithOrganization_ItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Organization | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<Organization>(requestInfo, createOrganizationFromDiscriminatorValue, responseHandler, undefined) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Updates the organization.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Organization
     */
    public patch(body: Organization | undefined, requestConfiguration?: WithOrganization_ItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Organization | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<Organization>(requestInfo, createOrganizationFromDiscriminatorValue, responseHandler, undefined) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Gets an item from the ApiSdk.api.accounts_mgmt.v1.organizations.item.resource_quota.item collection
     * @param id Unique identifier of the item
     * @returns a WithResource_quota_ItemRequestBuilder
     */
    public resource_quotaById(id: string) : WithResource_quota_ItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["resource_quota_id"] = id
        return new WithResource_quota_ItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Retrieves the details of the organization.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: WithOrganization_ItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Updates the organization.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: Organization | undefined, requestConfiguration?: WithOrganization_ItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
