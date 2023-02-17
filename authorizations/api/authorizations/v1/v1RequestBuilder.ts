import {Metadata} from '../../../models/';
import {createMetadataFromDiscriminatorValue} from '../../../models/createMetadataFromDiscriminatorValue';
import {Access_reviewRequestBuilder} from './access_review/access_reviewRequestBuilder';
import {Capability_reviewRequestBuilder} from './capability_review/capability_reviewRequestBuilder';
import {Export_control_reviewRequestBuilder} from './export_control_review/export_control_reviewRequestBuilder';
import {Feature_reviewRequestBuilder} from './feature_review/feature_reviewRequestBuilder';
import {Resource_reviewRequestBuilder} from './resource_review/resource_reviewRequestBuilder';
import {Self_access_reviewRequestBuilder} from './self_access_review/self_access_reviewRequestBuilder';
import {Self_capability_reviewRequestBuilder} from './self_capability_review/self_capability_reviewRequestBuilder';
import {Self_feature_reviewRequestBuilder} from './self_feature_review/self_feature_reviewRequestBuilder';
import {Self_terms_reviewRequestBuilder} from './self_terms_review/self_terms_reviewRequestBuilder';
import {Terms_reviewRequestBuilder} from './terms_review/terms_reviewRequestBuilder';
import {V1RequestBuilderGetRequestConfiguration} from './v1RequestBuilderGetRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /api/authorizations/v1
 */
export class V1RequestBuilder {
    /** The access_review property */
    public get access_review(): Access_reviewRequestBuilder {
        return new Access_reviewRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The capability_review property */
    public get capability_review(): Capability_reviewRequestBuilder {
        return new Capability_reviewRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The export_control_review property */
    public get export_control_review(): Export_control_reviewRequestBuilder {
        return new Export_control_reviewRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The feature_review property */
    public get feature_review(): Feature_reviewRequestBuilder {
        return new Feature_reviewRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private requestAdapter: RequestAdapter;
    /** The resource_review property */
    public get resource_review(): Resource_reviewRequestBuilder {
        return new Resource_reviewRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The self_access_review property */
    public get self_access_review(): Self_access_reviewRequestBuilder {
        return new Self_access_reviewRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The self_capability_review property */
    public get self_capability_review(): Self_capability_reviewRequestBuilder {
        return new Self_capability_reviewRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The self_feature_review property */
    public get self_feature_review(): Self_feature_reviewRequestBuilder {
        return new Self_feature_reviewRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The self_terms_review property */
    public get self_terms_review(): Self_terms_reviewRequestBuilder {
        return new Self_terms_reviewRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The terms_review property */
    public get terms_review(): Terms_reviewRequestBuilder {
        return new Terms_reviewRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private urlTemplate: string;
    /**
     * Instantiates a new V1RequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/api/authorizations/v1";
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
