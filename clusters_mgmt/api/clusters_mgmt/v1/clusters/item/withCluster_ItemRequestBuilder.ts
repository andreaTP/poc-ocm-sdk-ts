import {Cluster} from '../../../../../models/';
import {createClusterFromDiscriminatorValue} from '../../../../../models/createClusterFromDiscriminatorValue';
import {Addon_inquiriesRequestBuilder} from './addon_inquiries/addon_inquiriesRequestBuilder';
import {WithAddon_inquiry_ItemRequestBuilder} from './addon_inquiries/item/withAddon_inquiry_ItemRequestBuilder';
import {Addon_upgrade_policiesRequestBuilder} from './addon_upgrade_policies/addon_upgrade_policiesRequestBuilder';
import {WithAddon_upgrade_policy_ItemRequestBuilder} from './addon_upgrade_policies/item/withAddon_upgrade_policy_ItemRequestBuilder';
import {AddonsRequestBuilder} from './addons/addonsRequestBuilder';
import {WithAddoninstallation_ItemRequestBuilder} from './addons/item/withAddoninstallation_ItemRequestBuilder';
import {Aws_infrastructure_access_role_grantsRequestBuilder} from './aws_infrastructure_access_role_grants/aws_infrastructure_access_role_grantsRequestBuilder';
import {WithAws_infrastructure_access_role_grant_ItemRequestBuilder} from './aws_infrastructure_access_role_grants/item/withAws_infrastructure_access_role_grant_ItemRequestBuilder';
import {AwsRequestBuilder} from './aws/awsRequestBuilder';
import {ClusterdeploymentRequestBuilder} from './clusterdeployment/clusterdeploymentRequestBuilder';
import {CredentialsRequestBuilder} from './credentials/credentialsRequestBuilder';
import {External_configurationRequestBuilder} from './external_configuration/external_configurationRequestBuilder';
import {Gate_agreementsRequestBuilder} from './gate_agreements/gate_agreementsRequestBuilder';
import {WithVersion_gate_agreement_ItemRequestBuilder} from './gate_agreements/item/withVersion_gate_agreement_ItemRequestBuilder';
import {GroupsRequestBuilder} from './groups/groupsRequestBuilder';
import {WithGroup_ItemRequestBuilder} from './groups/item/withGroup_ItemRequestBuilder';
import {HibernateRequestBuilder} from './hibernate/hibernateRequestBuilder';
import {HypershiftRequestBuilder} from './hypershift/hypershiftRequestBuilder';
import {Identity_providersRequestBuilder} from './identity_providers/identity_providersRequestBuilder';
import {WithIdentity_provider_ItemRequestBuilder} from './identity_providers/item/withIdentity_provider_ItemRequestBuilder';
import {IngressesRequestBuilder} from './ingresses/ingressesRequestBuilder';
import {WithIngress_ItemRequestBuilder} from './ingresses/item/withIngress_ItemRequestBuilder';
import {WithLimited_support_reason_ItemRequestBuilder} from './limited_support_reasons/item/withLimited_support_reason_ItemRequestBuilder';
import {Limited_support_reasonsRequestBuilder} from './limited_support_reasons/limited_support_reasonsRequestBuilder';
import {LogsRequestBuilder} from './logs/logsRequestBuilder';
import {WithMachine_pool_ItemRequestBuilder} from './machine_pools/item/withMachine_pool_ItemRequestBuilder';
import {Machine_poolsRequestBuilder} from './machine_pools/machine_poolsRequestBuilder';
import {Metric_queriesRequestBuilder} from './metric_queries/metric_queriesRequestBuilder';
import {WithNode_pool_ItemRequestBuilder} from './node_pools/item/withNode_pool_ItemRequestBuilder';
import {Node_poolsRequestBuilder} from './node_pools/node_poolsRequestBuilder';
import {ProductRequestBuilder} from './product/productRequestBuilder';
import {Provision_shardRequestBuilder} from './provision_shard/provision_shardRequestBuilder';
import {ResourcesRequestBuilder} from './resources/resourcesRequestBuilder';
import {ResumeRequestBuilder} from './resume/resumeRequestBuilder';
import {StatusRequestBuilder} from './status/statusRequestBuilder';
import {WithOperator_iam_role_ItemRequestBuilder} from './sts_operator_roles/item/withOperator_iam_role_ItemRequestBuilder';
import {Sts_operator_rolesRequestBuilder} from './sts_operator_roles/sts_operator_rolesRequestBuilder';
import {WithUpgrade_policy_ItemRequestBuilder} from './upgrade_policies/item/withUpgrade_policy_ItemRequestBuilder';
import {Upgrade_policiesRequestBuilder} from './upgrade_policies/upgrade_policiesRequestBuilder';
import {WithCluster_ItemRequestBuilderDeleteRequestConfiguration} from './withCluster_ItemRequestBuilderDeleteRequestConfiguration';
import {WithCluster_ItemRequestBuilderGetRequestConfiguration} from './withCluster_ItemRequestBuilderGetRequestConfiguration';
import {WithCluster_ItemRequestBuilderPatchRequestConfiguration} from './withCluster_ItemRequestBuilderPatchRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /api/clusters_mgmt/v1/clusters/{cluster_id}
 */
export class WithCluster_ItemRequestBuilder {
    /** The addon_inquiries property */
    public get addon_inquiries(): Addon_inquiriesRequestBuilder {
        return new Addon_inquiriesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The addon_upgrade_policies property */
    public get addon_upgrade_policies(): Addon_upgrade_policiesRequestBuilder {
        return new Addon_upgrade_policiesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The addons property */
    public get addons(): AddonsRequestBuilder {
        return new AddonsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The aws property */
    public get aws(): AwsRequestBuilder {
        return new AwsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The aws_infrastructure_access_role_grants property */
    public get aws_infrastructure_access_role_grants(): Aws_infrastructure_access_role_grantsRequestBuilder {
        return new Aws_infrastructure_access_role_grantsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The clusterdeployment property */
    public get clusterdeployment(): ClusterdeploymentRequestBuilder {
        return new ClusterdeploymentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The credentials property */
    public get credentials(): CredentialsRequestBuilder {
        return new CredentialsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The external_configuration property */
    public get external_configuration(): External_configurationRequestBuilder {
        return new External_configurationRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The gate_agreements property */
    public get gate_agreements(): Gate_agreementsRequestBuilder {
        return new Gate_agreementsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The groups property */
    public get groups(): GroupsRequestBuilder {
        return new GroupsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The hibernate property */
    public get hibernate(): HibernateRequestBuilder {
        return new HibernateRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The hypershift property */
    public get hypershift(): HypershiftRequestBuilder {
        return new HypershiftRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The identity_providers property */
    public get identity_providers(): Identity_providersRequestBuilder {
        return new Identity_providersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The ingresses property */
    public get ingresses(): IngressesRequestBuilder {
        return new IngressesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The limited_support_reasons property */
    public get limited_support_reasons(): Limited_support_reasonsRequestBuilder {
        return new Limited_support_reasonsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The logs property */
    public get logs(): LogsRequestBuilder {
        return new LogsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The machine_pools property */
    public get machine_pools(): Machine_poolsRequestBuilder {
        return new Machine_poolsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The metric_queries property */
    public get metric_queries(): Metric_queriesRequestBuilder {
        return new Metric_queriesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The node_pools property */
    public get node_pools(): Node_poolsRequestBuilder {
        return new Node_poolsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private pathParameters: Record<string, unknown>;
    /** The product property */
    public get product(): ProductRequestBuilder {
        return new ProductRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The provision_shard property */
    public get provision_shard(): Provision_shardRequestBuilder {
        return new Provision_shardRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The request adapter to use to execute the requests. */
    private requestAdapter: RequestAdapter;
    /** The resources property */
    public get resources(): ResourcesRequestBuilder {
        return new ResourcesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The resume property */
    public get resume(): ResumeRequestBuilder {
        return new ResumeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The status property */
    public get status(): StatusRequestBuilder {
        return new StatusRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The sts_operator_roles property */
    public get sts_operator_roles(): Sts_operator_rolesRequestBuilder {
        return new Sts_operator_rolesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The upgrade_policies property */
    public get upgrade_policies(): Upgrade_policiesRequestBuilder {
        return new Upgrade_policiesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private urlTemplate: string;
    /**
     * Gets an item from the ApiSdk.api.clusters_mgmt.v1.clusters.item.addon_inquiries.item collection
     * @param id Unique identifier of the item
     * @returns a WithAddon_inquiry_ItemRequestBuilder
     */
    public addon_inquiriesById(id: string) : WithAddon_inquiry_ItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["addon_inquiry_id"] = id
        return new WithAddon_inquiry_ItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.api.clusters_mgmt.v1.clusters.item.addon_upgrade_policies.item collection
     * @param id Unique identifier of the item
     * @returns a WithAddon_upgrade_policy_ItemRequestBuilder
     */
    public addon_upgrade_policiesById(id: string) : WithAddon_upgrade_policy_ItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["addon_upgrade_policy_id"] = id
        return new WithAddon_upgrade_policy_ItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.api.clusters_mgmt.v1.clusters.item.addons.item collection
     * @param id Unique identifier of the item
     * @returns a WithAddoninstallation_ItemRequestBuilder
     */
    public addonsById(id: string) : WithAddoninstallation_ItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["addoninstallation_id"] = id
        return new WithAddoninstallation_ItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.api.clusters_mgmt.v1.clusters.item.aws_infrastructure_access_role_grants.item collection
     * @param id Unique identifier of the item
     * @returns a WithAws_infrastructure_access_role_grant_ItemRequestBuilder
     */
    public aws_infrastructure_access_role_grantsById(id: string) : WithAws_infrastructure_access_role_grant_ItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["aws_infrastructure_access_role_grant_id"] = id
        return new WithAws_infrastructure_access_role_grant_ItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new WithCluster_ItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/api/clusters_mgmt/v1/clusters/{cluster_id}{?deprovision*,dry_run*}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Deletes the cluster.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: WithCluster_ItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.toDeleteRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, undefined) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Gets an item from the ApiSdk.api.clusters_mgmt.v1.clusters.item.gate_agreements.item collection
     * @param id Unique identifier of the item
     * @returns a WithVersion_gate_agreement_ItemRequestBuilder
     */
    public gate_agreementsById(id: string) : WithVersion_gate_agreement_ItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["version_gate_agreement_id"] = id
        return new WithVersion_gate_agreement_ItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Retrieves the details of the cluster.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Cluster
     */
    public get(requestConfiguration?: WithCluster_ItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Cluster | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<Cluster>(requestInfo, createClusterFromDiscriminatorValue, responseHandler, undefined) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Gets an item from the ApiSdk.api.clusters_mgmt.v1.clusters.item.groups.item collection
     * @param id Unique identifier of the item
     * @returns a WithGroup_ItemRequestBuilder
     */
    public groupsById(id: string) : WithGroup_ItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["group_id"] = id
        return new WithGroup_ItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.api.clusters_mgmt.v1.clusters.item.identity_providers.item collection
     * @param id Unique identifier of the item
     * @returns a WithIdentity_provider_ItemRequestBuilder
     */
    public identity_providersById(id: string) : WithIdentity_provider_ItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["identity_provider_id"] = id
        return new WithIdentity_provider_ItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.api.clusters_mgmt.v1.clusters.item.ingresses.item collection
     * @param id Unique identifier of the item
     * @returns a WithIngress_ItemRequestBuilder
     */
    public ingressesById(id: string) : WithIngress_ItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["ingress_id"] = id
        return new WithIngress_ItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.api.clusters_mgmt.v1.clusters.item.limited_support_reasons.item collection
     * @param id Unique identifier of the item
     * @returns a WithLimited_support_reason_ItemRequestBuilder
     */
    public limited_support_reasonsById(id: string) : WithLimited_support_reason_ItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["limited_support_reason_id"] = id
        return new WithLimited_support_reason_ItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.api.clusters_mgmt.v1.clusters.item.machine_pools.item collection
     * @param id Unique identifier of the item
     * @returns a WithMachine_pool_ItemRequestBuilder
     */
    public machine_poolsById(id: string) : WithMachine_pool_ItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["machine_pool_id"] = id
        return new WithMachine_pool_ItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.api.clusters_mgmt.v1.clusters.item.node_pools.item collection
     * @param id Unique identifier of the item
     * @returns a WithNode_pool_ItemRequestBuilder
     */
    public node_poolsById(id: string) : WithNode_pool_ItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["node_pool_id"] = id
        return new WithNode_pool_ItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Updates the cluster.
     * @param body Definition of an _OpenShift_ cluster.The `cloud_provider` attribute is a reference to the cloud provider. When acluster is retrieved it will be a link to the cloud provider, containing onlythe kind, id and href attributes:```json{  "cloud_provider": {    "kind": "CloudProviderLink",    "id": "123",    "href": "/api/clusters_mgmt/v1/cloud_providers/123"  }}```When a cluster is created this is optional, and if used it should contain theidentifier of the cloud provider to use:```json{  "cloud_provider": {    "id": "123",  }}```If not included, then the cluster will be created using the default cloudprovider, which is currently Amazon Web Services.The region attribute is mandatory when a cluster is created.The `aws.access_key_id`, `aws.secret_access_key` and `dns.base_domain`attributes are mandatory when creation a cluster with your own Amazon WebServices account.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Cluster
     */
    public patch(body: Cluster | undefined, requestConfiguration?: WithCluster_ItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Cluster | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<Cluster>(requestInfo, createClusterFromDiscriminatorValue, responseHandler, undefined) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Gets an item from the ApiSdk.api.clusters_mgmt.v1.clusters.item.sts_operator_roles.item collection
     * @param id Unique identifier of the item
     * @returns a WithOperator_iam_role_ItemRequestBuilder
     */
    public sts_operator_rolesById(id: string) : WithOperator_iam_role_ItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["operator_iam_role_id"] = id
        return new WithOperator_iam_role_ItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Deletes the cluster.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: WithCluster_ItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.DELETE;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.setQueryStringParametersFromRawObject(requestConfiguration.queryParameters);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Retrieves the details of the cluster.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: WithCluster_ItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Updates the cluster.
     * @param body Definition of an _OpenShift_ cluster.The `cloud_provider` attribute is a reference to the cloud provider. When acluster is retrieved it will be a link to the cloud provider, containing onlythe kind, id and href attributes:```json{  "cloud_provider": {    "kind": "CloudProviderLink",    "id": "123",    "href": "/api/clusters_mgmt/v1/cloud_providers/123"  }}```When a cluster is created this is optional, and if used it should contain theidentifier of the cloud provider to use:```json{  "cloud_provider": {    "id": "123",  }}```If not included, then the cluster will be created using the default cloudprovider, which is currently Amazon Web Services.The region attribute is mandatory when a cluster is created.The `aws.access_key_id`, `aws.secret_access_key` and `dns.base_domain`attributes are mandatory when creation a cluster with your own Amazon WebServices account.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: Cluster | undefined, requestConfiguration?: WithCluster_ItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
    /**
     * Gets an item from the ApiSdk.api.clusters_mgmt.v1.clusters.item.upgrade_policies.item collection
     * @param id Unique identifier of the item
     * @returns a WithUpgrade_policy_ItemRequestBuilder
     */
    public upgrade_policiesById(id: string) : WithUpgrade_policy_ItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["upgrade_policy_id"] = id
        return new WithUpgrade_policy_ItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
}
