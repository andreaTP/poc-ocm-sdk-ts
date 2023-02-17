import {BillingModel} from './billingModel';
import {ClusterHealthState} from './clusterHealthState';
import {ClusterState} from './clusterState';
import {createAddOnInstallationFromDiscriminatorValue} from './createAddOnInstallationFromDiscriminatorValue';
import {createAWSFromDiscriminatorValue} from './createAWSFromDiscriminatorValue';
import {createAWSInfrastructureAccessRoleGrantFromDiscriminatorValue} from './createAWSInfrastructureAccessRoleGrantFromDiscriminatorValue';
import {createByoOidcFromDiscriminatorValue} from './createByoOidcFromDiscriminatorValue';
import {createCCSFromDiscriminatorValue} from './createCCSFromDiscriminatorValue';
import {createCloudProviderFromDiscriminatorValue} from './createCloudProviderFromDiscriminatorValue';
import {createCloudRegionFromDiscriminatorValue} from './createCloudRegionFromDiscriminatorValue';
import {createCluster_propertiesFromDiscriminatorValue} from './createCluster_propertiesFromDiscriminatorValue';
import {createClusterAPIFromDiscriminatorValue} from './createClusterAPIFromDiscriminatorValue';
import {createClusterConsoleFromDiscriminatorValue} from './createClusterConsoleFromDiscriminatorValue';
import {createClusterNodesFromDiscriminatorValue} from './createClusterNodesFromDiscriminatorValue';
import {createClusterStatusFromDiscriminatorValue} from './createClusterStatusFromDiscriminatorValue';
import {createDNSFromDiscriminatorValue} from './createDNSFromDiscriminatorValue';
import {createExternalConfigurationFromDiscriminatorValue} from './createExternalConfigurationFromDiscriminatorValue';
import {createFlavourFromDiscriminatorValue} from './createFlavourFromDiscriminatorValue';
import {createGCPEncryptionKeyFromDiscriminatorValue} from './createGCPEncryptionKeyFromDiscriminatorValue';
import {createGCPFromDiscriminatorValue} from './createGCPFromDiscriminatorValue';
import {createGCPNetworkFromDiscriminatorValue} from './createGCPNetworkFromDiscriminatorValue';
import {createGroupFromDiscriminatorValue} from './createGroupFromDiscriminatorValue';
import {createHypershiftFromDiscriminatorValue} from './createHypershiftFromDiscriminatorValue';
import {createIdentityProviderFromDiscriminatorValue} from './createIdentityProviderFromDiscriminatorValue';
import {createInflightCheckFromDiscriminatorValue} from './createInflightCheckFromDiscriminatorValue';
import {createIngressFromDiscriminatorValue} from './createIngressFromDiscriminatorValue';
import {createMachinePoolFromDiscriminatorValue} from './createMachinePoolFromDiscriminatorValue';
import {createManagedServiceFromDiscriminatorValue} from './createManagedServiceFromDiscriminatorValue';
import {createNetworkFromDiscriminatorValue} from './createNetworkFromDiscriminatorValue';
import {createNodePoolFromDiscriminatorValue} from './createNodePoolFromDiscriminatorValue';
import {createProductFromDiscriminatorValue} from './createProductFromDiscriminatorValue';
import {createProvisionShardFromDiscriminatorValue} from './createProvisionShardFromDiscriminatorValue';
import {createProxyFromDiscriminatorValue} from './createProxyFromDiscriminatorValue';
import {createSubscriptionFromDiscriminatorValue} from './createSubscriptionFromDiscriminatorValue';
import {createValueFromDiscriminatorValue} from './createValueFromDiscriminatorValue';
import {createVersionFromDiscriminatorValue} from './createVersionFromDiscriminatorValue';
import {AddOnInstallation, AWS, AWSInfrastructureAccessRoleGrant, ByoOidc, CCS, CloudProvider, CloudRegion, Cluster_properties, ClusterAPI, ClusterConsole, ClusterNodes, ClusterStatus, DNS, ExternalConfiguration, Flavour, GCP, GCPEncryptionKey, GCPNetwork, Group, Hypershift, IdentityProvider, InflightCheck, Ingress, MachinePool, ManagedService, Network, NodePool, Product, ProvisionShard, Proxy, Subscription, Value, Version} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Definition of an _OpenShift_ cluster.The `cloud_provider` attribute is a reference to the cloud provider. When acluster is retrieved it will be a link to the cloud provider, containing onlythe kind, id and href attributes:```json{  "cloud_provider": {    "kind": "CloudProviderLink",    "id": "123",    "href": "/api/clusters_mgmt/v1/cloud_providers/123"  }}```When a cluster is created this is optional, and if used it should contain theidentifier of the cloud provider to use:```json{  "cloud_provider": {    "id": "123",  }}```If not included, then the cluster will be created using the default cloudprovider, which is currently Amazon Web Services.The region attribute is mandatory when a cluster is created.The `aws.access_key_id`, `aws.secret_access_key` and `dns.base_domain`attributes are mandatory when creation a cluster with your own Amazon WebServices account.
 */
export class Cluster implements AdditionalDataHolder, Parsable {
    /** Additional trust bundle. */
    private _additional_trust_bundle?: string | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** List of add-ons on this cluster. */
    private _addons?: AddOnInstallation[] | undefined;
    /** Information about the API of a cluster. */
    private _api?: ClusterAPI | undefined;
    /** _Amazon Web Services_ specific settings of a cluster. */
    private _aws?: AWS | undefined;
    /** List of AWS infrastructure access role grants on this cluster. */
    private _aws_infrastructure_access_role_grants?: AWSInfrastructureAccessRoleGrant[] | undefined;
    /** Billing model for cluster resources. */
    private _billing_model?: BillingModel | undefined;
    /** ByoOidc configuration. */
    private _byo_oidc?: ByoOidc | undefined;
    /** The ccs property */
    private _ccs?: CCS | undefined;
    /** Cloud provider. */
    private _cloud_provider?: CloudProvider | undefined;
    /** Information about the console of a cluster. */
    private _console?: ClusterConsole | undefined;
    /** Date and time when the cluster was initially created, using theformat defined in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt). */
    private _creation_timestamp?: Date | undefined;
    /** Indicates whether the User workload monitoring is enabled or notIt is enabled by default */
    private _disable_user_workload_monitoring?: boolean | undefined;
    /** DNS settings of the cluster. */
    private _dns?: DNS | undefined;
    /** Indicates whether that etcd is encrypted or not.This is set only during cluster creation. */
    private _etcd_encryption?: boolean | undefined;
    /** Date and time when the cluster will be automatically deleted, using the format defined in[RFC3339](https://www.ietf.org/rfc/rfc3339.txt). If no timestamp is provided, the clusterwill never expire.This option is unsupported. */
    private _expiration_timestamp?: Date | undefined;
    /** Representation of cluster external configuration. */
    private _external_configuration?: ExternalConfiguration | undefined;
    /** External identifier of the cluster, generated by the installer. */
    private _external_id?: string | undefined;
    /** Create cluster that uses FIPS Validated / Modules in Process cryptographic libraries. */
    private _fips?: boolean | undefined;
    /** Set of predefined properties of a cluster. For example, a _huge_ flavour can be a clusterwith 10 infra nodes and 1000 compute nodes. */
    private _flavour?: Flavour | undefined;
    /** Google cloud platform settings of a cluster. */
    private _gcp?: GCP | undefined;
    /** GCP Encryption Key for CCS clusters. */
    private _gcp_encryption_key?: GCPEncryptionKey | undefined;
    /** GCP Network configuration of a cluster. */
    private _gcp_network?: GCPNetwork | undefined;
    /** Link to the collection of groups of user of the cluster. */
    private _groups?: Group[] | undefined;
    /** ClusterHealthState indicates the health of a cluster. */
    private _health_state?: ClusterHealthState | undefined;
    /** Self link. */
    private _href?: string | undefined;
    /** Hypershift configuration. */
    private _hypershift?: Hypershift | undefined;
    /** Unique identifier of the object. */
    private _id?: string | undefined;
    /** Link to the collection of identity providers of the cluster. */
    private _identity_providers?: IdentityProvider[] | undefined;
    /** List of inflight checks on this cluster. */
    private _inflight_checks?: InflightCheck[] | undefined;
    /** InfraID is used for example to name the VPCs. */
    private _infra_id?: string | undefined;
    /** List of ingresses on this cluster. */
    private _ingresses?: Ingress[] | undefined;
    /** Indicates the type of this object. Will be 'Cluster' if this is a complete object or 'ClusterLink' if it is just a link. */
    private _kind?: string | undefined;
    /** Load Balancer quota to be assigned to the cluster. */
    private _load_balancer_quota?: number | undefined;
    /** List of machine pools on this cluster. */
    private _machine_pools?: MachinePool[] | undefined;
    /** Flag indicating if the cluster is managed (by Red Hat) orself-managed by the user. */
    private _managed?: boolean | undefined;
    /** Contains the necessary attributes to support role-based authentication on AWS. */
    private _managed_service?: ManagedService | undefined;
    /** Flag indicating if the cluster should be created with nodes indifferent availability zones or all the nodes in a single onerandomly selected. */
    private _multi_az?: boolean | undefined;
    /** Name of the cluster. This name is assigned by the user when thecluster is created. */
    private _name?: string | undefined;
    /** Network configuration of a cluster. */
    private _network?: Network | undefined;
    /** Numeric value and the unit used to measure it.Units are not mandatory, and they're not specified for some resources. Forresources that use bytes, the accepted units are:- 1 B = 1 byte- 1 KB = 10^3 bytes- 1 MB = 10^6 bytes- 1 GB = 10^9 bytes- 1 TB = 10^12 bytes- 1 PB = 10^15 bytes- 1 B = 1 byte- 1 KiB = 2^10 bytes- 1 MiB = 2^20 bytes- 1 GiB = 2^30 bytes- 1 TiB = 2^40 bytes- 1 PiB = 2^50 bytes */
    private _node_drain_grace_period?: Value | undefined;
    /** List of node pools on this cluster.NodePool is a scalable set of worker nodes attached to a hosted cluster. */
    private _node_pools?: NodePool[] | undefined;
    /** Counts of different classes of nodes inside a cluster. */
    private _nodes?: ClusterNodes | undefined;
    /** Version of _OpenShift_ installed in the cluster, for example `4.0.0-0.2`.When retrieving a cluster this will always be reported.When provisioning a cluster this will be ignored, as the version todeploy will be determined internally. */
    private _openshift_version?: string | undefined;
    /** Representation of an product that can be selected as a cluster type. */
    private _product?: Product | undefined;
    /** User defined properties for tagging and querying. */
    private _properties?: Cluster_properties | undefined;
    /** Contains the properties of the provision shard, including AWS and GCP related configurations */
    private _provision_shard?: ProvisionShard | undefined;
    /** Proxy configuration of a cluster. */
    private _proxy?: Proxy | undefined;
    /** Description of a region of a cloud provider. */
    private _region?: CloudRegion | undefined;
    /** Overall state of a cluster. */
    private _state?: ClusterState | undefined;
    /** Detailed status of a cluster. */
    private _status?: ClusterStatus | undefined;
    /** Numeric value and the unit used to measure it.Units are not mandatory, and they're not specified for some resources. Forresources that use bytes, the accepted units are:- 1 B = 1 byte- 1 KB = 10^3 bytes- 1 MB = 10^6 bytes- 1 GB = 10^9 bytes- 1 TB = 10^12 bytes- 1 PB = 10^15 bytes- 1 B = 1 byte- 1 KiB = 2^10 bytes- 1 MiB = 2^20 bytes- 1 GiB = 2^30 bytes- 1 TiB = 2^40 bytes- 1 PiB = 2^50 bytes */
    private _storage_quota?: Value | undefined;
    /** Definition of a subscription. */
    private _subscription?: Subscription | undefined;
    /** Representation of an _OpenShift_ version. */
    private _version?: Version | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Gets the additional_trust_bundle property value. Additional trust bundle.
     * @returns a string
     */
    public get additional_trust_bundle() {
        return this._additional_trust_bundle;
    };
    /**
     * Sets the additional_trust_bundle property value. Additional trust bundle.
     * @param value Value to set for the additional_trust_bundle property.
     */
    public set additional_trust_bundle(value: string | undefined) {
        this._additional_trust_bundle = value;
    };
    /**
     * Gets the addons property value. List of add-ons on this cluster.
     * @returns a AddOnInstallation
     */
    public get addons() {
        return this._addons;
    };
    /**
     * Sets the addons property value. List of add-ons on this cluster.
     * @param value Value to set for the addons property.
     */
    public set addons(value: AddOnInstallation[] | undefined) {
        this._addons = value;
    };
    /**
     * Gets the api property value. Information about the API of a cluster.
     * @returns a ClusterAPI
     */
    public get api() {
        return this._api;
    };
    /**
     * Sets the api property value. Information about the API of a cluster.
     * @param value Value to set for the api property.
     */
    public set api(value: ClusterAPI | undefined) {
        this._api = value;
    };
    /**
     * Gets the aws property value. _Amazon Web Services_ specific settings of a cluster.
     * @returns a AWS
     */
    public get aws() {
        return this._aws;
    };
    /**
     * Sets the aws property value. _Amazon Web Services_ specific settings of a cluster.
     * @param value Value to set for the aws property.
     */
    public set aws(value: AWS | undefined) {
        this._aws = value;
    };
    /**
     * Gets the aws_infrastructure_access_role_grants property value. List of AWS infrastructure access role grants on this cluster.
     * @returns a AWSInfrastructureAccessRoleGrant
     */
    public get aws_infrastructure_access_role_grants() {
        return this._aws_infrastructure_access_role_grants;
    };
    /**
     * Sets the aws_infrastructure_access_role_grants property value. List of AWS infrastructure access role grants on this cluster.
     * @param value Value to set for the aws_infrastructure_access_role_grants property.
     */
    public set aws_infrastructure_access_role_grants(value: AWSInfrastructureAccessRoleGrant[] | undefined) {
        this._aws_infrastructure_access_role_grants = value;
    };
    /**
     * Gets the billing_model property value. Billing model for cluster resources.
     * @returns a BillingModel
     */
    public get billing_model() {
        return this._billing_model;
    };
    /**
     * Sets the billing_model property value. Billing model for cluster resources.
     * @param value Value to set for the billing_model property.
     */
    public set billing_model(value: BillingModel | undefined) {
        this._billing_model = value;
    };
    /**
     * Gets the byo_oidc property value. ByoOidc configuration.
     * @returns a ByoOidc
     */
    public get byo_oidc() {
        return this._byo_oidc;
    };
    /**
     * Sets the byo_oidc property value. ByoOidc configuration.
     * @param value Value to set for the byo_oidc property.
     */
    public set byo_oidc(value: ByoOidc | undefined) {
        this._byo_oidc = value;
    };
    /**
     * Gets the ccs property value. The ccs property
     * @returns a CCS
     */
    public get ccs() {
        return this._ccs;
    };
    /**
     * Sets the ccs property value. The ccs property
     * @param value Value to set for the ccs property.
     */
    public set ccs(value: CCS | undefined) {
        this._ccs = value;
    };
    /**
     * Gets the cloud_provider property value. Cloud provider.
     * @returns a CloudProvider
     */
    public get cloud_provider() {
        return this._cloud_provider;
    };
    /**
     * Sets the cloud_provider property value. Cloud provider.
     * @param value Value to set for the cloud_provider property.
     */
    public set cloud_provider(value: CloudProvider | undefined) {
        this._cloud_provider = value;
    };
    /**
     * Gets the console property value. Information about the console of a cluster.
     * @returns a ClusterConsole
     */
    public get console() {
        return this._console;
    };
    /**
     * Sets the console property value. Information about the console of a cluster.
     * @param value Value to set for the console property.
     */
    public set console(value: ClusterConsole | undefined) {
        this._console = value;
    };
    /**
     * Instantiates a new Cluster and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the creation_timestamp property value. Date and time when the cluster was initially created, using theformat defined in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt).
     * @returns a Date
     */
    public get creation_timestamp() {
        return this._creation_timestamp;
    };
    /**
     * Sets the creation_timestamp property value. Date and time when the cluster was initially created, using theformat defined in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt).
     * @param value Value to set for the creation_timestamp property.
     */
    public set creation_timestamp(value: Date | undefined) {
        this._creation_timestamp = value;
    };
    /**
     * Gets the disable_user_workload_monitoring property value. Indicates whether the User workload monitoring is enabled or notIt is enabled by default
     * @returns a boolean
     */
    public get disable_user_workload_monitoring() {
        return this._disable_user_workload_monitoring;
    };
    /**
     * Sets the disable_user_workload_monitoring property value. Indicates whether the User workload monitoring is enabled or notIt is enabled by default
     * @param value Value to set for the disable_user_workload_monitoring property.
     */
    public set disable_user_workload_monitoring(value: boolean | undefined) {
        this._disable_user_workload_monitoring = value;
    };
    /**
     * Gets the dns property value. DNS settings of the cluster.
     * @returns a DNS
     */
    public get dns() {
        return this._dns;
    };
    /**
     * Sets the dns property value. DNS settings of the cluster.
     * @param value Value to set for the dns property.
     */
    public set dns(value: DNS | undefined) {
        this._dns = value;
    };
    /**
     * Gets the etcd_encryption property value. Indicates whether that etcd is encrypted or not.This is set only during cluster creation.
     * @returns a boolean
     */
    public get etcd_encryption() {
        return this._etcd_encryption;
    };
    /**
     * Sets the etcd_encryption property value. Indicates whether that etcd is encrypted or not.This is set only during cluster creation.
     * @param value Value to set for the etcd_encryption property.
     */
    public set etcd_encryption(value: boolean | undefined) {
        this._etcd_encryption = value;
    };
    /**
     * Gets the expiration_timestamp property value. Date and time when the cluster will be automatically deleted, using the format defined in[RFC3339](https://www.ietf.org/rfc/rfc3339.txt). If no timestamp is provided, the clusterwill never expire.This option is unsupported.
     * @returns a Date
     */
    public get expiration_timestamp() {
        return this._expiration_timestamp;
    };
    /**
     * Sets the expiration_timestamp property value. Date and time when the cluster will be automatically deleted, using the format defined in[RFC3339](https://www.ietf.org/rfc/rfc3339.txt). If no timestamp is provided, the clusterwill never expire.This option is unsupported.
     * @param value Value to set for the expiration_timestamp property.
     */
    public set expiration_timestamp(value: Date | undefined) {
        this._expiration_timestamp = value;
    };
    /**
     * Gets the external_configuration property value. Representation of cluster external configuration.
     * @returns a ExternalConfiguration
     */
    public get external_configuration() {
        return this._external_configuration;
    };
    /**
     * Sets the external_configuration property value. Representation of cluster external configuration.
     * @param value Value to set for the external_configuration property.
     */
    public set external_configuration(value: ExternalConfiguration | undefined) {
        this._external_configuration = value;
    };
    /**
     * Gets the external_id property value. External identifier of the cluster, generated by the installer.
     * @returns a string
     */
    public get external_id() {
        return this._external_id;
    };
    /**
     * Sets the external_id property value. External identifier of the cluster, generated by the installer.
     * @param value Value to set for the external_id property.
     */
    public set external_id(value: string | undefined) {
        this._external_id = value;
    };
    /**
     * Gets the fips property value. Create cluster that uses FIPS Validated / Modules in Process cryptographic libraries.
     * @returns a boolean
     */
    public get fips() {
        return this._fips;
    };
    /**
     * Sets the fips property value. Create cluster that uses FIPS Validated / Modules in Process cryptographic libraries.
     * @param value Value to set for the fips property.
     */
    public set fips(value: boolean | undefined) {
        this._fips = value;
    };
    /**
     * Gets the flavour property value. Set of predefined properties of a cluster. For example, a _huge_ flavour can be a clusterwith 10 infra nodes and 1000 compute nodes.
     * @returns a Flavour
     */
    public get flavour() {
        return this._flavour;
    };
    /**
     * Sets the flavour property value. Set of predefined properties of a cluster. For example, a _huge_ flavour can be a clusterwith 10 infra nodes and 1000 compute nodes.
     * @param value Value to set for the flavour property.
     */
    public set flavour(value: Flavour | undefined) {
        this._flavour = value;
    };
    /**
     * Gets the gcp property value. Google cloud platform settings of a cluster.
     * @returns a GCP
     */
    public get gcp() {
        return this._gcp;
    };
    /**
     * Sets the gcp property value. Google cloud platform settings of a cluster.
     * @param value Value to set for the gcp property.
     */
    public set gcp(value: GCP | undefined) {
        this._gcp = value;
    };
    /**
     * Gets the gcp_encryption_key property value. GCP Encryption Key for CCS clusters.
     * @returns a GCPEncryptionKey
     */
    public get gcp_encryption_key() {
        return this._gcp_encryption_key;
    };
    /**
     * Sets the gcp_encryption_key property value. GCP Encryption Key for CCS clusters.
     * @param value Value to set for the gcp_encryption_key property.
     */
    public set gcp_encryption_key(value: GCPEncryptionKey | undefined) {
        this._gcp_encryption_key = value;
    };
    /**
     * Gets the gcp_network property value. GCP Network configuration of a cluster.
     * @returns a GCPNetwork
     */
    public get gcp_network() {
        return this._gcp_network;
    };
    /**
     * Sets the gcp_network property value. GCP Network configuration of a cluster.
     * @param value Value to set for the gcp_network property.
     */
    public set gcp_network(value: GCPNetwork | undefined) {
        this._gcp_network = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "additional_trust_bundle": n => { this.additional_trust_bundle = n.getStringValue(); },
            "addons": n => { this.addons = n.getCollectionOfObjectValues<AddOnInstallation>(createAddOnInstallationFromDiscriminatorValue); },
            "api": n => { this.api = n.getObjectValue<ClusterAPI>(createClusterAPIFromDiscriminatorValue); },
            "aws": n => { this.aws = n.getObjectValue<AWS>(createAWSFromDiscriminatorValue); },
            "aws_infrastructure_access_role_grants": n => { this.aws_infrastructure_access_role_grants = n.getCollectionOfObjectValues<AWSInfrastructureAccessRoleGrant>(createAWSInfrastructureAccessRoleGrantFromDiscriminatorValue); },
            "billing_model": n => { this.billing_model = n.getEnumValue<BillingModel>(BillingModel); },
            "byo_oidc": n => { this.byo_oidc = n.getObjectValue<ByoOidc>(createByoOidcFromDiscriminatorValue); },
            "ccs": n => { this.ccs = n.getObjectValue<CCS>(createCCSFromDiscriminatorValue); },
            "cloud_provider": n => { this.cloud_provider = n.getObjectValue<CloudProvider>(createCloudProviderFromDiscriminatorValue); },
            "console": n => { this.console = n.getObjectValue<ClusterConsole>(createClusterConsoleFromDiscriminatorValue); },
            "creation_timestamp": n => { this.creation_timestamp = n.getDateValue(); },
            "disable_user_workload_monitoring": n => { this.disable_user_workload_monitoring = n.getBooleanValue(); },
            "dns": n => { this.dns = n.getObjectValue<DNS>(createDNSFromDiscriminatorValue); },
            "etcd_encryption": n => { this.etcd_encryption = n.getBooleanValue(); },
            "expiration_timestamp": n => { this.expiration_timestamp = n.getDateValue(); },
            "external_configuration": n => { this.external_configuration = n.getObjectValue<ExternalConfiguration>(createExternalConfigurationFromDiscriminatorValue); },
            "external_id": n => { this.external_id = n.getStringValue(); },
            "fips": n => { this.fips = n.getBooleanValue(); },
            "flavour": n => { this.flavour = n.getObjectValue<Flavour>(createFlavourFromDiscriminatorValue); },
            "gcp": n => { this.gcp = n.getObjectValue<GCP>(createGCPFromDiscriminatorValue); },
            "gcp_encryption_key": n => { this.gcp_encryption_key = n.getObjectValue<GCPEncryptionKey>(createGCPEncryptionKeyFromDiscriminatorValue); },
            "gcp_network": n => { this.gcp_network = n.getObjectValue<GCPNetwork>(createGCPNetworkFromDiscriminatorValue); },
            "groups": n => { this.groups = n.getCollectionOfObjectValues<Group>(createGroupFromDiscriminatorValue); },
            "health_state": n => { this.health_state = n.getEnumValue<ClusterHealthState>(ClusterHealthState); },
            "href": n => { this.href = n.getStringValue(); },
            "hypershift": n => { this.hypershift = n.getObjectValue<Hypershift>(createHypershiftFromDiscriminatorValue); },
            "id": n => { this.id = n.getStringValue(); },
            "identity_providers": n => { this.identity_providers = n.getCollectionOfObjectValues<IdentityProvider>(createIdentityProviderFromDiscriminatorValue); },
            "inflight_checks": n => { this.inflight_checks = n.getCollectionOfObjectValues<InflightCheck>(createInflightCheckFromDiscriminatorValue); },
            "infra_id": n => { this.infra_id = n.getStringValue(); },
            "ingresses": n => { this.ingresses = n.getCollectionOfObjectValues<Ingress>(createIngressFromDiscriminatorValue); },
            "kind": n => { this.kind = n.getStringValue(); },
            "load_balancer_quota": n => { this.load_balancer_quota = n.getNumberValue(); },
            "machine_pools": n => { this.machine_pools = n.getCollectionOfObjectValues<MachinePool>(createMachinePoolFromDiscriminatorValue); },
            "managed": n => { this.managed = n.getBooleanValue(); },
            "managed_service": n => { this.managed_service = n.getObjectValue<ManagedService>(createManagedServiceFromDiscriminatorValue); },
            "multi_az": n => { this.multi_az = n.getBooleanValue(); },
            "name": n => { this.name = n.getStringValue(); },
            "network": n => { this.network = n.getObjectValue<Network>(createNetworkFromDiscriminatorValue); },
            "nodes": n => { this.nodes = n.getObjectValue<ClusterNodes>(createClusterNodesFromDiscriminatorValue); },
            "node_drain_grace_period": n => { this.node_drain_grace_period = n.getObjectValue<Value>(createValueFromDiscriminatorValue); },
            "node_pools": n => { this.node_pools = n.getCollectionOfObjectValues<NodePool>(createNodePoolFromDiscriminatorValue); },
            "openshift_version": n => { this.openshift_version = n.getStringValue(); },
            "product": n => { this.product = n.getObjectValue<Product>(createProductFromDiscriminatorValue); },
            "properties": n => { this.properties = n.getObjectValue<Cluster_properties>(createCluster_propertiesFromDiscriminatorValue); },
            "provision_shard": n => { this.provision_shard = n.getObjectValue<ProvisionShard>(createProvisionShardFromDiscriminatorValue); },
            "proxy": n => { this.proxy = n.getObjectValue<Proxy>(createProxyFromDiscriminatorValue); },
            "region": n => { this.region = n.getObjectValue<CloudRegion>(createCloudRegionFromDiscriminatorValue); },
            "state": n => { this.state = n.getEnumValue<ClusterState>(ClusterState); },
            "status": n => { this.status = n.getObjectValue<ClusterStatus>(createClusterStatusFromDiscriminatorValue); },
            "storage_quota": n => { this.storage_quota = n.getObjectValue<Value>(createValueFromDiscriminatorValue); },
            "subscription": n => { this.subscription = n.getObjectValue<Subscription>(createSubscriptionFromDiscriminatorValue); },
            "version": n => { this.version = n.getObjectValue<Version>(createVersionFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the groups property value. Link to the collection of groups of user of the cluster.
     * @returns a Group
     */
    public get groups() {
        return this._groups;
    };
    /**
     * Sets the groups property value. Link to the collection of groups of user of the cluster.
     * @param value Value to set for the groups property.
     */
    public set groups(value: Group[] | undefined) {
        this._groups = value;
    };
    /**
     * Gets the health_state property value. ClusterHealthState indicates the health of a cluster.
     * @returns a ClusterHealthState
     */
    public get health_state() {
        return this._health_state;
    };
    /**
     * Sets the health_state property value. ClusterHealthState indicates the health of a cluster.
     * @param value Value to set for the health_state property.
     */
    public set health_state(value: ClusterHealthState | undefined) {
        this._health_state = value;
    };
    /**
     * Gets the href property value. Self link.
     * @returns a string
     */
    public get href() {
        return this._href;
    };
    /**
     * Sets the href property value. Self link.
     * @param value Value to set for the href property.
     */
    public set href(value: string | undefined) {
        this._href = value;
    };
    /**
     * Gets the hypershift property value. Hypershift configuration.
     * @returns a Hypershift
     */
    public get hypershift() {
        return this._hypershift;
    };
    /**
     * Sets the hypershift property value. Hypershift configuration.
     * @param value Value to set for the hypershift property.
     */
    public set hypershift(value: Hypershift | undefined) {
        this._hypershift = value;
    };
    /**
     * Gets the id property value. Unique identifier of the object.
     * @returns a string
     */
    public get id() {
        return this._id;
    };
    /**
     * Sets the id property value. Unique identifier of the object.
     * @param value Value to set for the id property.
     */
    public set id(value: string | undefined) {
        this._id = value;
    };
    /**
     * Gets the identity_providers property value. Link to the collection of identity providers of the cluster.
     * @returns a IdentityProvider
     */
    public get identity_providers() {
        return this._identity_providers;
    };
    /**
     * Sets the identity_providers property value. Link to the collection of identity providers of the cluster.
     * @param value Value to set for the identity_providers property.
     */
    public set identity_providers(value: IdentityProvider[] | undefined) {
        this._identity_providers = value;
    };
    /**
     * Gets the inflight_checks property value. List of inflight checks on this cluster.
     * @returns a InflightCheck
     */
    public get inflight_checks() {
        return this._inflight_checks;
    };
    /**
     * Sets the inflight_checks property value. List of inflight checks on this cluster.
     * @param value Value to set for the inflight_checks property.
     */
    public set inflight_checks(value: InflightCheck[] | undefined) {
        this._inflight_checks = value;
    };
    /**
     * Gets the infra_id property value. InfraID is used for example to name the VPCs.
     * @returns a string
     */
    public get infra_id() {
        return this._infra_id;
    };
    /**
     * Sets the infra_id property value. InfraID is used for example to name the VPCs.
     * @param value Value to set for the infra_id property.
     */
    public set infra_id(value: string | undefined) {
        this._infra_id = value;
    };
    /**
     * Gets the ingresses property value. List of ingresses on this cluster.
     * @returns a Ingress
     */
    public get ingresses() {
        return this._ingresses;
    };
    /**
     * Sets the ingresses property value. List of ingresses on this cluster.
     * @param value Value to set for the ingresses property.
     */
    public set ingresses(value: Ingress[] | undefined) {
        this._ingresses = value;
    };
    /**
     * Gets the kind property value. Indicates the type of this object. Will be 'Cluster' if this is a complete object or 'ClusterLink' if it is just a link.
     * @returns a string
     */
    public get kind() {
        return this._kind;
    };
    /**
     * Sets the kind property value. Indicates the type of this object. Will be 'Cluster' if this is a complete object or 'ClusterLink' if it is just a link.
     * @param value Value to set for the kind property.
     */
    public set kind(value: string | undefined) {
        this._kind = value;
    };
    /**
     * Gets the load_balancer_quota property value. Load Balancer quota to be assigned to the cluster.
     * @returns a integer
     */
    public get load_balancer_quota() {
        return this._load_balancer_quota;
    };
    /**
     * Sets the load_balancer_quota property value. Load Balancer quota to be assigned to the cluster.
     * @param value Value to set for the load_balancer_quota property.
     */
    public set load_balancer_quota(value: number | undefined) {
        this._load_balancer_quota = value;
    };
    /**
     * Gets the machine_pools property value. List of machine pools on this cluster.
     * @returns a MachinePool
     */
    public get machine_pools() {
        return this._machine_pools;
    };
    /**
     * Sets the machine_pools property value. List of machine pools on this cluster.
     * @param value Value to set for the machine_pools property.
     */
    public set machine_pools(value: MachinePool[] | undefined) {
        this._machine_pools = value;
    };
    /**
     * Gets the managed property value. Flag indicating if the cluster is managed (by Red Hat) orself-managed by the user.
     * @returns a boolean
     */
    public get managed() {
        return this._managed;
    };
    /**
     * Sets the managed property value. Flag indicating if the cluster is managed (by Red Hat) orself-managed by the user.
     * @param value Value to set for the managed property.
     */
    public set managed(value: boolean | undefined) {
        this._managed = value;
    };
    /**
     * Gets the managed_service property value. Contains the necessary attributes to support role-based authentication on AWS.
     * @returns a ManagedService
     */
    public get managed_service() {
        return this._managed_service;
    };
    /**
     * Sets the managed_service property value. Contains the necessary attributes to support role-based authentication on AWS.
     * @param value Value to set for the managed_service property.
     */
    public set managed_service(value: ManagedService | undefined) {
        this._managed_service = value;
    };
    /**
     * Gets the multi_az property value. Flag indicating if the cluster should be created with nodes indifferent availability zones or all the nodes in a single onerandomly selected.
     * @returns a boolean
     */
    public get multi_az() {
        return this._multi_az;
    };
    /**
     * Sets the multi_az property value. Flag indicating if the cluster should be created with nodes indifferent availability zones or all the nodes in a single onerandomly selected.
     * @param value Value to set for the multi_az property.
     */
    public set multi_az(value: boolean | undefined) {
        this._multi_az = value;
    };
    /**
     * Gets the name property value. Name of the cluster. This name is assigned by the user when thecluster is created.
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. Name of the cluster. This name is assigned by the user when thecluster is created.
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Gets the network property value. Network configuration of a cluster.
     * @returns a Network
     */
    public get network() {
        return this._network;
    };
    /**
     * Sets the network property value. Network configuration of a cluster.
     * @param value Value to set for the network property.
     */
    public set network(value: Network | undefined) {
        this._network = value;
    };
    /**
     * Gets the node_drain_grace_period property value. Numeric value and the unit used to measure it.Units are not mandatory, and they're not specified for some resources. Forresources that use bytes, the accepted units are:- 1 B = 1 byte- 1 KB = 10^3 bytes- 1 MB = 10^6 bytes- 1 GB = 10^9 bytes- 1 TB = 10^12 bytes- 1 PB = 10^15 bytes- 1 B = 1 byte- 1 KiB = 2^10 bytes- 1 MiB = 2^20 bytes- 1 GiB = 2^30 bytes- 1 TiB = 2^40 bytes- 1 PiB = 2^50 bytes
     * @returns a Value
     */
    public get node_drain_grace_period() {
        return this._node_drain_grace_period;
    };
    /**
     * Sets the node_drain_grace_period property value. Numeric value and the unit used to measure it.Units are not mandatory, and they're not specified for some resources. Forresources that use bytes, the accepted units are:- 1 B = 1 byte- 1 KB = 10^3 bytes- 1 MB = 10^6 bytes- 1 GB = 10^9 bytes- 1 TB = 10^12 bytes- 1 PB = 10^15 bytes- 1 B = 1 byte- 1 KiB = 2^10 bytes- 1 MiB = 2^20 bytes- 1 GiB = 2^30 bytes- 1 TiB = 2^40 bytes- 1 PiB = 2^50 bytes
     * @param value Value to set for the node_drain_grace_period property.
     */
    public set node_drain_grace_period(value: Value | undefined) {
        this._node_drain_grace_period = value;
    };
    /**
     * Gets the node_pools property value. List of node pools on this cluster.NodePool is a scalable set of worker nodes attached to a hosted cluster.
     * @returns a NodePool
     */
    public get node_pools() {
        return this._node_pools;
    };
    /**
     * Sets the node_pools property value. List of node pools on this cluster.NodePool is a scalable set of worker nodes attached to a hosted cluster.
     * @param value Value to set for the node_pools property.
     */
    public set node_pools(value: NodePool[] | undefined) {
        this._node_pools = value;
    };
    /**
     * Gets the nodes property value. Counts of different classes of nodes inside a cluster.
     * @returns a ClusterNodes
     */
    public get nodes() {
        return this._nodes;
    };
    /**
     * Sets the nodes property value. Counts of different classes of nodes inside a cluster.
     * @param value Value to set for the nodes property.
     */
    public set nodes(value: ClusterNodes | undefined) {
        this._nodes = value;
    };
    /**
     * Gets the openshift_version property value. Version of _OpenShift_ installed in the cluster, for example `4.0.0-0.2`.When retrieving a cluster this will always be reported.When provisioning a cluster this will be ignored, as the version todeploy will be determined internally.
     * @returns a string
     */
    public get openshift_version() {
        return this._openshift_version;
    };
    /**
     * Sets the openshift_version property value. Version of _OpenShift_ installed in the cluster, for example `4.0.0-0.2`.When retrieving a cluster this will always be reported.When provisioning a cluster this will be ignored, as the version todeploy will be determined internally.
     * @param value Value to set for the openshift_version property.
     */
    public set openshift_version(value: string | undefined) {
        this._openshift_version = value;
    };
    /**
     * Gets the product property value. Representation of an product that can be selected as a cluster type.
     * @returns a Product
     */
    public get product() {
        return this._product;
    };
    /**
     * Sets the product property value. Representation of an product that can be selected as a cluster type.
     * @param value Value to set for the product property.
     */
    public set product(value: Product | undefined) {
        this._product = value;
    };
    /**
     * Gets the properties property value. User defined properties for tagging and querying.
     * @returns a Cluster_properties
     */
    public get properties() {
        return this._properties;
    };
    /**
     * Sets the properties property value. User defined properties for tagging and querying.
     * @param value Value to set for the properties property.
     */
    public set properties(value: Cluster_properties | undefined) {
        this._properties = value;
    };
    /**
     * Gets the provision_shard property value. Contains the properties of the provision shard, including AWS and GCP related configurations
     * @returns a ProvisionShard
     */
    public get provision_shard() {
        return this._provision_shard;
    };
    /**
     * Sets the provision_shard property value. Contains the properties of the provision shard, including AWS and GCP related configurations
     * @param value Value to set for the provision_shard property.
     */
    public set provision_shard(value: ProvisionShard | undefined) {
        this._provision_shard = value;
    };
    /**
     * Gets the proxy property value. Proxy configuration of a cluster.
     * @returns a Proxy
     */
    public get proxy() {
        return this._proxy;
    };
    /**
     * Sets the proxy property value. Proxy configuration of a cluster.
     * @param value Value to set for the proxy property.
     */
    public set proxy(value: Proxy | undefined) {
        this._proxy = value;
    };
    /**
     * Gets the region property value. Description of a region of a cloud provider.
     * @returns a CloudRegion
     */
    public get region() {
        return this._region;
    };
    /**
     * Sets the region property value. Description of a region of a cloud provider.
     * @param value Value to set for the region property.
     */
    public set region(value: CloudRegion | undefined) {
        this._region = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("additional_trust_bundle", this.additional_trust_bundle);
        writer.writeCollectionOfObjectValues<AddOnInstallation>("addons", this.addons);
        writer.writeObjectValue<ClusterAPI>("api", this.api);
        writer.writeObjectValue<AWS>("aws", this.aws);
        writer.writeCollectionOfObjectValues<AWSInfrastructureAccessRoleGrant>("aws_infrastructure_access_role_grants", this.aws_infrastructure_access_role_grants);
        writer.writeEnumValue<BillingModel>("billing_model", this.billing_model);
        writer.writeObjectValue<ByoOidc>("byo_oidc", this.byo_oidc);
        writer.writeObjectValue<CCS>("ccs", this.ccs);
        writer.writeObjectValue<CloudProvider>("cloud_provider", this.cloud_provider);
        writer.writeObjectValue<ClusterConsole>("console", this.console);
        writer.writeDateValue("creation_timestamp", this.creation_timestamp);
        writer.writeBooleanValue("disable_user_workload_monitoring", this.disable_user_workload_monitoring);
        writer.writeObjectValue<DNS>("dns", this.dns);
        writer.writeBooleanValue("etcd_encryption", this.etcd_encryption);
        writer.writeDateValue("expiration_timestamp", this.expiration_timestamp);
        writer.writeObjectValue<ExternalConfiguration>("external_configuration", this.external_configuration);
        writer.writeStringValue("external_id", this.external_id);
        writer.writeBooleanValue("fips", this.fips);
        writer.writeObjectValue<Flavour>("flavour", this.flavour);
        writer.writeObjectValue<GCP>("gcp", this.gcp);
        writer.writeObjectValue<GCPEncryptionKey>("gcp_encryption_key", this.gcp_encryption_key);
        writer.writeObjectValue<GCPNetwork>("gcp_network", this.gcp_network);
        writer.writeCollectionOfObjectValues<Group>("groups", this.groups);
        writer.writeEnumValue<ClusterHealthState>("health_state", this.health_state);
        writer.writeStringValue("href", this.href);
        writer.writeObjectValue<Hypershift>("hypershift", this.hypershift);
        writer.writeStringValue("id", this.id);
        writer.writeCollectionOfObjectValues<IdentityProvider>("identity_providers", this.identity_providers);
        writer.writeCollectionOfObjectValues<InflightCheck>("inflight_checks", this.inflight_checks);
        writer.writeStringValue("infra_id", this.infra_id);
        writer.writeCollectionOfObjectValues<Ingress>("ingresses", this.ingresses);
        writer.writeStringValue("kind", this.kind);
        writer.writeNumberValue("load_balancer_quota", this.load_balancer_quota);
        writer.writeCollectionOfObjectValues<MachinePool>("machine_pools", this.machine_pools);
        writer.writeBooleanValue("managed", this.managed);
        writer.writeObjectValue<ManagedService>("managed_service", this.managed_service);
        writer.writeBooleanValue("multi_az", this.multi_az);
        writer.writeStringValue("name", this.name);
        writer.writeObjectValue<Network>("network", this.network);
        writer.writeObjectValue<ClusterNodes>("nodes", this.nodes);
        writer.writeObjectValue<Value>("node_drain_grace_period", this.node_drain_grace_period);
        writer.writeCollectionOfObjectValues<NodePool>("node_pools", this.node_pools);
        writer.writeStringValue("openshift_version", this.openshift_version);
        writer.writeObjectValue<Product>("product", this.product);
        writer.writeObjectValue<Cluster_properties>("properties", this.properties);
        writer.writeObjectValue<ProvisionShard>("provision_shard", this.provision_shard);
        writer.writeObjectValue<Proxy>("proxy", this.proxy);
        writer.writeObjectValue<CloudRegion>("region", this.region);
        writer.writeEnumValue<ClusterState>("state", this.state);
        writer.writeObjectValue<ClusterStatus>("status", this.status);
        writer.writeObjectValue<Value>("storage_quota", this.storage_quota);
        writer.writeObjectValue<Subscription>("subscription", this.subscription);
        writer.writeObjectValue<Version>("version", this.version);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the state property value. Overall state of a cluster.
     * @returns a ClusterState
     */
    public get state() {
        return this._state;
    };
    /**
     * Sets the state property value. Overall state of a cluster.
     * @param value Value to set for the state property.
     */
    public set state(value: ClusterState | undefined) {
        this._state = value;
    };
    /**
     * Gets the status property value. Detailed status of a cluster.
     * @returns a ClusterStatus
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. Detailed status of a cluster.
     * @param value Value to set for the status property.
     */
    public set status(value: ClusterStatus | undefined) {
        this._status = value;
    };
    /**
     * Gets the storage_quota property value. Numeric value and the unit used to measure it.Units are not mandatory, and they're not specified for some resources. Forresources that use bytes, the accepted units are:- 1 B = 1 byte- 1 KB = 10^3 bytes- 1 MB = 10^6 bytes- 1 GB = 10^9 bytes- 1 TB = 10^12 bytes- 1 PB = 10^15 bytes- 1 B = 1 byte- 1 KiB = 2^10 bytes- 1 MiB = 2^20 bytes- 1 GiB = 2^30 bytes- 1 TiB = 2^40 bytes- 1 PiB = 2^50 bytes
     * @returns a Value
     */
    public get storage_quota() {
        return this._storage_quota;
    };
    /**
     * Sets the storage_quota property value. Numeric value and the unit used to measure it.Units are not mandatory, and they're not specified for some resources. Forresources that use bytes, the accepted units are:- 1 B = 1 byte- 1 KB = 10^3 bytes- 1 MB = 10^6 bytes- 1 GB = 10^9 bytes- 1 TB = 10^12 bytes- 1 PB = 10^15 bytes- 1 B = 1 byte- 1 KiB = 2^10 bytes- 1 MiB = 2^20 bytes- 1 GiB = 2^30 bytes- 1 TiB = 2^40 bytes- 1 PiB = 2^50 bytes
     * @param value Value to set for the storage_quota property.
     */
    public set storage_quota(value: Value | undefined) {
        this._storage_quota = value;
    };
    /**
     * Gets the subscription property value. Definition of a subscription.
     * @returns a Subscription
     */
    public get subscription() {
        return this._subscription;
    };
    /**
     * Sets the subscription property value. Definition of a subscription.
     * @param value Value to set for the subscription property.
     */
    public set subscription(value: Subscription | undefined) {
        this._subscription = value;
    };
    /**
     * Gets the version property value. Representation of an _OpenShift_ version.
     * @returns a Version
     */
    public get version() {
        return this._version;
    };
    /**
     * Sets the version property value. Representation of an _OpenShift_ version.
     * @param value Value to set for the version property.
     */
    public set version(value: Version | undefined) {
        this._version = value;
    };
}
