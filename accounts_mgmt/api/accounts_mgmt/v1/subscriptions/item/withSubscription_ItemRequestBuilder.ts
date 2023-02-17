import {Subscription} from '../../../../../models/';
import {createSubscriptionFromDiscriminatorValue} from '../../../../../models/createSubscriptionFromDiscriminatorValue';
import {LabelsRequestBuilder} from './labels/labelsRequestBuilder';
import {NotifyRequestBuilder} from './notify/notifyRequestBuilder';
import {WithReserved_resource_ItemRequestBuilder} from './reserved_resources/item/withReserved_resource_ItemRequestBuilder';
import {Reserved_resourcesRequestBuilder} from './reserved_resources/reserved_resourcesRequestBuilder';
import {WithRole_binding_ItemRequestBuilder} from './role_bindings/item/withRole_binding_ItemRequestBuilder';
import {Role_bindingsRequestBuilder} from './role_bindings/role_bindingsRequestBuilder';
import {WithSubscription_ItemRequestBuilderDeleteRequestConfiguration} from './withSubscription_ItemRequestBuilderDeleteRequestConfiguration';
import {WithSubscription_ItemRequestBuilderGetRequestConfiguration} from './withSubscription_ItemRequestBuilderGetRequestConfiguration';
import {WithSubscription_ItemRequestBuilderPatchRequestConfiguration} from './withSubscription_ItemRequestBuilderPatchRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /api/accounts_mgmt/v1/subscriptions/{subscription_id}
 */
export class WithSubscription_ItemRequestBuilder {
    /** The labels property */
    public get labels(): LabelsRequestBuilder {
        return new LabelsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The notify property */
    public get notify(): NotifyRequestBuilder {
        return new NotifyRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private requestAdapter: RequestAdapter;
    /** The reserved_resources property */
    public get reserved_resources(): Reserved_resourcesRequestBuilder {
        return new Reserved_resourcesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The role_bindings property */
    public get role_bindings(): Role_bindingsRequestBuilder {
        return new Role_bindingsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private urlTemplate: string;
    /**
     * Instantiates a new WithSubscription_ItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/api/accounts_mgmt/v1/subscriptions/{subscription_id}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Deletes the subscription by ID.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: WithSubscription_ItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.toDeleteRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, undefined) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Retrieves the details of the subscription by ID.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Subscription
     */
    public get(requestConfiguration?: WithSubscription_ItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Subscription | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<Subscription>(requestInfo, createSubscriptionFromDiscriminatorValue, responseHandler, undefined) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Update a subscription
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Subscription
     */
    public patch(body: Subscription | undefined, requestConfiguration?: WithSubscription_ItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Subscription | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<Subscription>(requestInfo, createSubscriptionFromDiscriminatorValue, responseHandler, undefined) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Gets an item from the ApiSdk.api.accounts_mgmt.v1.subscriptions.item.reserved_resources.item collection
     * @param id Unique identifier of the item
     * @returns a WithReserved_resource_ItemRequestBuilder
     */
    public reserved_resourcesById(id: string) : WithReserved_resource_ItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["reserved_resource_id"] = id
        return new WithReserved_resource_ItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.api.accounts_mgmt.v1.subscriptions.item.role_bindings.item collection
     * @param id Unique identifier of the item
     * @returns a WithRole_binding_ItemRequestBuilder
     */
    public role_bindingsById(id: string) : WithRole_binding_ItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["role_binding_id"] = id
        return new WithRole_binding_ItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Deletes the subscription by ID.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: WithSubscription_ItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Retrieves the details of the subscription by ID.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: WithSubscription_ItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update a subscription
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: Subscription | undefined, requestConfiguration?: WithSubscription_ItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
