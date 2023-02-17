import {Metadata} from '../../../models/';
import {createMetadataFromDiscriminatorValue} from '../../../models/createMetadataFromDiscriminatorValue';
import {AddonsRequestBuilder} from './addons/addonsRequestBuilder';
import {WithAddon_ItemRequestBuilder} from './addons/item/withAddon_ItemRequestBuilder';
import {Aws_infrastructure_access_rolesRequestBuilder} from './aws_infrastructure_access_roles/aws_infrastructure_access_rolesRequestBuilder';
import {WithAws_infrastructure_access_role_ItemRequestBuilder} from './aws_infrastructure_access_roles/item/withAws_infrastructure_access_role_ItemRequestBuilder';
import {Aws_inquiriesRequestBuilder} from './aws_inquiries/aws_inquiriesRequestBuilder';
import {Cloud_providersRequestBuilder} from './cloud_providers/cloud_providersRequestBuilder';
import {WithCloud_provider_ItemRequestBuilder} from './cloud_providers/item/withCloud_provider_ItemRequestBuilder';
import {ClustersRequestBuilder} from './clusters/clustersRequestBuilder';
import {WithCluster_ItemRequestBuilder} from './clusters/item/withCluster_ItemRequestBuilder';
import {EnvironmentRequestBuilder} from './environment/environmentRequestBuilder';
import {EventsRequestBuilder} from './events/eventsRequestBuilder';
import {FlavoursRequestBuilder} from './flavours/flavoursRequestBuilder';
import {WithFlavour_ItemRequestBuilder} from './flavours/item/withFlavour_ItemRequestBuilder';
import {Gcp_inquiriesRequestBuilder} from './gcp_inquiries/gcp_inquiriesRequestBuilder';
import {WithLimited_support_reason_template_ItemRequestBuilder} from './limited_support_reason_templates/item/withLimited_support_reason_template_ItemRequestBuilder';
import {Limited_support_reason_templatesRequestBuilder} from './limited_support_reason_templates/limited_support_reason_templatesRequestBuilder';
import {WithMachine_type_ItemRequestBuilder} from './machine_types/item/withMachine_type_ItemRequestBuilder';
import {Machine_typesRequestBuilder} from './machine_types/machine_typesRequestBuilder';
import {WithProduct_ItemRequestBuilder} from './products/item/withProduct_ItemRequestBuilder';
import {ProductsRequestBuilder} from './products/productsRequestBuilder';
import {WithProvision_shard_ItemRequestBuilder} from './provision_shards/item/withProvision_shard_ItemRequestBuilder';
import {Provision_shardsRequestBuilder} from './provision_shards/provision_shardsRequestBuilder';
import {V1RequestBuilderGetRequestConfiguration} from './v1RequestBuilderGetRequestConfiguration';
import {WithVersion_gate_ItemRequestBuilder} from './version_gates/item/withVersion_gate_ItemRequestBuilder';
import {Version_gatesRequestBuilder} from './version_gates/version_gatesRequestBuilder';
import {WithVersion_ItemRequestBuilder} from './versions/item/withVersion_ItemRequestBuilder';
import {VersionsRequestBuilder} from './versions/versionsRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /api/clusters_mgmt/v1
 */
export class V1RequestBuilder {
    /** The addons property */
    public get addons(): AddonsRequestBuilder {
        return new AddonsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The aws_infrastructure_access_roles property */
    public get aws_infrastructure_access_roles(): Aws_infrastructure_access_rolesRequestBuilder {
        return new Aws_infrastructure_access_rolesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The aws_inquiries property */
    public get aws_inquiries(): Aws_inquiriesRequestBuilder {
        return new Aws_inquiriesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The cloud_providers property */
    public get cloud_providers(): Cloud_providersRequestBuilder {
        return new Cloud_providersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The clusters property */
    public get clusters(): ClustersRequestBuilder {
        return new ClustersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The environment property */
    public get environment(): EnvironmentRequestBuilder {
        return new EnvironmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The events property */
    public get events(): EventsRequestBuilder {
        return new EventsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The flavours property */
    public get flavours(): FlavoursRequestBuilder {
        return new FlavoursRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The gcp_inquiries property */
    public get gcp_inquiries(): Gcp_inquiriesRequestBuilder {
        return new Gcp_inquiriesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The limited_support_reason_templates property */
    public get limited_support_reason_templates(): Limited_support_reason_templatesRequestBuilder {
        return new Limited_support_reason_templatesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The machine_types property */
    public get machine_types(): Machine_typesRequestBuilder {
        return new Machine_typesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private pathParameters: Record<string, unknown>;
    /** The products property */
    public get products(): ProductsRequestBuilder {
        return new ProductsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The provision_shards property */
    public get provision_shards(): Provision_shardsRequestBuilder {
        return new Provision_shardsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The request adapter to use to execute the requests. */
    private requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private urlTemplate: string;
    /** The version_gates property */
    public get version_gates(): Version_gatesRequestBuilder {
        return new Version_gatesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The versions property */
    public get versions(): VersionsRequestBuilder {
        return new VersionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Gets an item from the ApiSdk.api.clusters_mgmt.v1.addons.item collection
     * @param id Unique identifier of the item
     * @returns a WithAddon_ItemRequestBuilder
     */
    public addonsById(id: string) : WithAddon_ItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["addon_id"] = id
        return new WithAddon_ItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.api.clusters_mgmt.v1.aws_infrastructure_access_roles.item collection
     * @param id Unique identifier of the item
     * @returns a WithAws_infrastructure_access_role_ItemRequestBuilder
     */
    public aws_infrastructure_access_rolesById(id: string) : WithAws_infrastructure_access_role_ItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["aws_infrastructure_access_role_id"] = id
        return new WithAws_infrastructure_access_role_ItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.api.clusters_mgmt.v1.cloud_providers.item collection
     * @param id Unique identifier of the item
     * @returns a WithCloud_provider_ItemRequestBuilder
     */
    public cloud_providersById(id: string) : WithCloud_provider_ItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["cloud_provider_id"] = id
        return new WithCloud_provider_ItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.api.clusters_mgmt.v1.clusters.item collection
     * @param id Unique identifier of the item
     * @returns a WithCluster_ItemRequestBuilder
     */
    public clustersById(id: string) : WithCluster_ItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["cluster_id"] = id
        return new WithCluster_ItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new V1RequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/api/clusters_mgmt/v1";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Gets an item from the ApiSdk.api.clusters_mgmt.v1.flavours.item collection
     * @param id Unique identifier of the item
     * @returns a WithFlavour_ItemRequestBuilder
     */
    public flavoursById(id: string) : WithFlavour_ItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["flavour_id"] = id
        return new WithFlavour_ItemRequestBuilder(urlTplParams, this.requestAdapter);
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
     * Gets an item from the ApiSdk.api.clusters_mgmt.v1.limited_support_reason_templates.item collection
     * @param id Unique identifier of the item
     * @returns a WithLimited_support_reason_template_ItemRequestBuilder
     */
    public limited_support_reason_templatesById(id: string) : WithLimited_support_reason_template_ItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["limited_support_reason_template_id"] = id
        return new WithLimited_support_reason_template_ItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.api.clusters_mgmt.v1.machine_types.item collection
     * @param id Unique identifier of the item
     * @returns a WithMachine_type_ItemRequestBuilder
     */
    public machine_typesById(id: string) : WithMachine_type_ItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["machine_type_id"] = id
        return new WithMachine_type_ItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.api.clusters_mgmt.v1.products.item collection
     * @param id Unique identifier of the item
     * @returns a WithProduct_ItemRequestBuilder
     */
    public productsById(id: string) : WithProduct_ItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["product_id"] = id
        return new WithProduct_ItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.api.clusters_mgmt.v1.provision_shards.item collection
     * @param id Unique identifier of the item
     * @returns a WithProvision_shard_ItemRequestBuilder
     */
    public provision_shardsById(id: string) : WithProvision_shard_ItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["provision_shard_id"] = id
        return new WithProvision_shard_ItemRequestBuilder(urlTplParams, this.requestAdapter);
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
    /**
     * Gets an item from the ApiSdk.api.clusters_mgmt.v1.version_gates.item collection
     * @param id Unique identifier of the item
     * @returns a WithVersion_gate_ItemRequestBuilder
     */
    public version_gatesById(id: string) : WithVersion_gate_ItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["version_gate_id"] = id
        return new WithVersion_gate_ItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.api.clusters_mgmt.v1.versions.item collection
     * @param id Unique identifier of the item
     * @returns a WithVersion_ItemRequestBuilder
     */
    public versionsById(id: string) : WithVersion_ItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["version_id"] = id
        return new WithVersion_ItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
}
