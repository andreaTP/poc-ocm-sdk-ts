import {Label} from '../../../../../models/';
import {createLabelFromDiscriminatorValue} from '../../../../../models/createLabelFromDiscriminatorValue';
import {createLabelsResponseFromDiscriminatorValue} from './createLabelsResponseFromDiscriminatorValue';
import {LabelsResponse} from './index';
import {WithLabel_ItemRequestBuilder} from './item/withLabel_ItemRequestBuilder';
import {WithLabels_ItemRequestBuilder} from './item/withLabels_ItemRequestBuilder';
import {LabelsRequestBuilderGetRequestConfiguration} from './labelsRequestBuilderGetRequestConfiguration';
import {LabelsRequestBuilderPostRequestConfiguration} from './labelsRequestBuilderPostRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /api/accounts_mgmt/v1/subscriptions/labels
 */
export class LabelsRequestBuilder {
    /** Path parameters for the request */
    private pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private urlTemplate: string;
    /**
     * Instantiates a new LabelsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/api/accounts_mgmt/v1/subscriptions/labels{?page*,size*}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Retrieves the list of labels of the account/organization/subscription.IMPORTANT: This collection doesn't currently support paging or searching, so the returned`page` will always be 1 and `size` and `total` will always be the total number of labelsof the account/organization/subscription.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of LabelsResponse
     */
    public get(requestConfiguration?: LabelsRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<LabelsResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<LabelsResponse>(requestInfo, createLabelsResponseFromDiscriminatorValue, responseHandler, undefined) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Gets an item from the ApiSdk.api.accounts_mgmt.v1.subscriptions.labels.item collection
     * @param id Unique identifier of the item
     * @returns a WithLabel_ItemRequestBuilder
     */
    public labelsByLabel_id(id: string | undefined) : WithLabel_ItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["label_id"] = id
        return new WithLabel_ItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.api.accounts_mgmt.v1.subscriptions.labels.item collection
     * @param id Unique identifier of the item
     * @returns a WithLabels_ItemRequestBuilder
     */
    public labelsByLabels_id(id: string) : WithLabels_ItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["labels_id"] = id
        return new WithLabels_ItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Create a new account/organization/subscription label.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Label
     */
    public post(body: Label | undefined, requestConfiguration?: LabelsRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Label | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<Label>(requestInfo, createLabelFromDiscriminatorValue, responseHandler, undefined) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Retrieves the list of labels of the account/organization/subscription.IMPORTANT: This collection doesn't currently support paging or searching, so the returned`page` will always be 1 and `size` and `total` will always be the total number of labelsof the account/organization/subscription.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: LabelsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new account/organization/subscription label.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: Label | undefined, requestConfiguration?: LabelsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
