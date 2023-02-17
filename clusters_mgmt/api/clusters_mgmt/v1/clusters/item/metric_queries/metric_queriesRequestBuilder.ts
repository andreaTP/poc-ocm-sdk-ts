import {AlertsRequestBuilder} from './alerts/alertsRequestBuilder';
import {Cluster_operatorsRequestBuilder} from './cluster_operators/cluster_operatorsRequestBuilder';
import {Cpu_total_by_node_roles_osRequestBuilder} from './cpu_total_by_node_roles_os/cpu_total_by_node_roles_osRequestBuilder';
import {NodesRequestBuilder} from './nodes/nodesRequestBuilder';
import {Socket_total_by_node_roles_osRequestBuilder} from './socket_total_by_node_roles_os/socket_total_by_node_roles_osRequestBuilder';
import {getPathParameters, RequestAdapter} from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /api/clusters_mgmt/v1/clusters/{cluster_id}/metric_queries
 */
export class Metric_queriesRequestBuilder {
    /** The alerts property */
    public get alerts(): AlertsRequestBuilder {
        return new AlertsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The cluster_operators property */
    public get cluster_operators(): Cluster_operatorsRequestBuilder {
        return new Cluster_operatorsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The cpu_total_by_node_roles_os property */
    public get cpu_total_by_node_roles_os(): Cpu_total_by_node_roles_osRequestBuilder {
        return new Cpu_total_by_node_roles_osRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The nodes property */
    public get nodes(): NodesRequestBuilder {
        return new NodesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private requestAdapter: RequestAdapter;
    /** The socket_total_by_node_roles_os property */
    public get socket_total_by_node_roles_os(): Socket_total_by_node_roles_osRequestBuilder {
        return new Socket_total_by_node_roles_osRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private urlTemplate: string;
    /**
     * Instantiates a new Metric_queriesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/api/clusters_mgmt/v1/clusters/{cluster_id}/metric_queries";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
}
