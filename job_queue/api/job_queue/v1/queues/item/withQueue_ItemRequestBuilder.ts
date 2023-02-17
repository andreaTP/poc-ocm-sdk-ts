import {Queue} from '../../../../../models/';
import {createQueueFromDiscriminatorValue} from '../../../../../models/createQueueFromDiscriminatorValue';
import {WithJob_ItemRequestBuilder} from './jobs/item/withJob_ItemRequestBuilder';
import {JobsRequestBuilder} from './jobs/jobsRequestBuilder';
import {PopRequestBuilder} from './pop/popRequestBuilder';
import {PushRequestBuilder} from './push/pushRequestBuilder';
import {WithQueue_ItemRequestBuilderGetRequestConfiguration} from './withQueue_ItemRequestBuilderGetRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /api/job_queue/v1/queues/{queue_id}
 */
export class WithQueue_ItemRequestBuilder {
    /** The jobs property */
    public get jobs(): JobsRequestBuilder {
        return new JobsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private pathParameters: Record<string, unknown>;
    /** The pop property */
    public get pop(): PopRequestBuilder {
        return new PopRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The push property */
    public get push(): PushRequestBuilder {
        return new PushRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The request adapter to use to execute the requests. */
    private requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private urlTemplate: string;
    /**
     * Instantiates a new WithQueue_ItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/api/job_queue/v1/queues/{queue_id}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Retrieves the details of a job queue by ID.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Queue
     */
    public get(requestConfiguration?: WithQueue_ItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Queue | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<Queue>(requestInfo, createQueueFromDiscriminatorValue, responseHandler, undefined) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Gets an item from the ApiSdk.api.job_queue.v1.queues.item.jobs.item collection
     * @param id Unique identifier of the item
     * @returns a WithJob_ItemRequestBuilder
     */
    public jobsById(id: string) : WithJob_ItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["job_id"] = id
        return new WithJob_ItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Retrieves the details of a job queue by ID.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: WithQueue_ItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
