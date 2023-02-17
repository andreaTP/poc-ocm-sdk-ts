import {createAWSMachinePoolFromDiscriminatorValue} from './createAWSMachinePoolFromDiscriminatorValue';
import {createClusterFromDiscriminatorValue} from './createClusterFromDiscriminatorValue';
import {createMachinePool_labelsFromDiscriminatorValue} from './createMachinePool_labelsFromDiscriminatorValue';
import {createMachinePoolAutoscalingFromDiscriminatorValue} from './createMachinePoolAutoscalingFromDiscriminatorValue';
import {createMachinePoolSecurityGroupFilterFromDiscriminatorValue} from './createMachinePoolSecurityGroupFilterFromDiscriminatorValue';
import {createTaintFromDiscriminatorValue} from './createTaintFromDiscriminatorValue';
import {AWSMachinePool, Cluster, MachinePool_labels, MachinePoolAutoscaling, MachinePoolSecurityGroupFilter, Taint} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Representation of a machine pool in a cluster.
 */
export class MachinePool implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Representation of a autoscaling in a machine pool. */
    private _autoscaling?: MachinePoolAutoscaling | undefined;
    /** The availability zones upon which the nodes are created. */
    private _availability_zones?: string[] | undefined;
    /** Representation of aws machine pool specific parameters. */
    private _aws?: AWSMachinePool | undefined;
    /** Definition of an _OpenShift_ cluster.The `cloud_provider` attribute is a reference to the cloud provider. When acluster is retrieved it will be a link to the cloud provider, containing onlythe kind, id and href attributes:```json{  "cloud_provider": {    "kind": "CloudProviderLink",    "id": "123",    "href": "/api/clusters_mgmt/v1/cloud_providers/123"  }}```When a cluster is created this is optional, and if used it should contain theidentifier of the cloud provider to use:```json{  "cloud_provider": {    "id": "123",  }}```If not included, then the cluster will be created using the default cloudprovider, which is currently Amazon Web Services.The region attribute is mandatory when a cluster is created.The `aws.access_key_id`, `aws.secret_access_key` and `dns.base_domain`attributes are mandatory when creation a cluster with your own Amazon WebServices account. */
    private _cluster?: Cluster | undefined;
    /** Self link. */
    private _href?: string | undefined;
    /** Unique identifier of the object. */
    private _id?: string | undefined;
    /** The instance type of Nodes to create. */
    private _instance_type?: string | undefined;
    /** Indicates the type of this object. Will be 'MachinePool' if this is a complete object or 'MachinePoolLink' if it is just a link. */
    private _kind?: string | undefined;
    /** The labels set on the Nodes created. */
    private _labels?: MachinePool_labels | undefined;
    /** The number of Machines (and Nodes) to create.Replicas and autoscaling cannot be used together.     */
    private _replicas?: number | undefined;
    /** List of security groups to be applied to MachinePool (Optional) */
    private _security_group_filters?: MachinePoolSecurityGroupFilter[] | undefined;
    /** The subnets upon which the nodes are created. */
    private _subnets?: string[] | undefined;
    /** The taints set on the Nodes created. */
    private _taints?: Taint[] | undefined;
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
     * Gets the autoscaling property value. Representation of a autoscaling in a machine pool.
     * @returns a MachinePoolAutoscaling
     */
    public get autoscaling() {
        return this._autoscaling;
    };
    /**
     * Sets the autoscaling property value. Representation of a autoscaling in a machine pool.
     * @param value Value to set for the autoscaling property.
     */
    public set autoscaling(value: MachinePoolAutoscaling | undefined) {
        this._autoscaling = value;
    };
    /**
     * Gets the availability_zones property value. The availability zones upon which the nodes are created.
     * @returns a string
     */
    public get availability_zones() {
        return this._availability_zones;
    };
    /**
     * Sets the availability_zones property value. The availability zones upon which the nodes are created.
     * @param value Value to set for the availability_zones property.
     */
    public set availability_zones(value: string[] | undefined) {
        this._availability_zones = value;
    };
    /**
     * Gets the aws property value. Representation of aws machine pool specific parameters.
     * @returns a AWSMachinePool
     */
    public get aws() {
        return this._aws;
    };
    /**
     * Sets the aws property value. Representation of aws machine pool specific parameters.
     * @param value Value to set for the aws property.
     */
    public set aws(value: AWSMachinePool | undefined) {
        this._aws = value;
    };
    /**
     * Gets the cluster property value. Definition of an _OpenShift_ cluster.The `cloud_provider` attribute is a reference to the cloud provider. When acluster is retrieved it will be a link to the cloud provider, containing onlythe kind, id and href attributes:```json{  "cloud_provider": {    "kind": "CloudProviderLink",    "id": "123",    "href": "/api/clusters_mgmt/v1/cloud_providers/123"  }}```When a cluster is created this is optional, and if used it should contain theidentifier of the cloud provider to use:```json{  "cloud_provider": {    "id": "123",  }}```If not included, then the cluster will be created using the default cloudprovider, which is currently Amazon Web Services.The region attribute is mandatory when a cluster is created.The `aws.access_key_id`, `aws.secret_access_key` and `dns.base_domain`attributes are mandatory when creation a cluster with your own Amazon WebServices account.
     * @returns a Cluster
     */
    public get cluster() {
        return this._cluster;
    };
    /**
     * Sets the cluster property value. Definition of an _OpenShift_ cluster.The `cloud_provider` attribute is a reference to the cloud provider. When acluster is retrieved it will be a link to the cloud provider, containing onlythe kind, id and href attributes:```json{  "cloud_provider": {    "kind": "CloudProviderLink",    "id": "123",    "href": "/api/clusters_mgmt/v1/cloud_providers/123"  }}```When a cluster is created this is optional, and if used it should contain theidentifier of the cloud provider to use:```json{  "cloud_provider": {    "id": "123",  }}```If not included, then the cluster will be created using the default cloudprovider, which is currently Amazon Web Services.The region attribute is mandatory when a cluster is created.The `aws.access_key_id`, `aws.secret_access_key` and `dns.base_domain`attributes are mandatory when creation a cluster with your own Amazon WebServices account.
     * @param value Value to set for the cluster property.
     */
    public set cluster(value: Cluster | undefined) {
        this._cluster = value;
    };
    /**
     * Instantiates a new MachinePool and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "autoscaling": n => { this.autoscaling = n.getObjectValue<MachinePoolAutoscaling>(createMachinePoolAutoscalingFromDiscriminatorValue); },
            "availability_zones": n => { this.availability_zones = n.getCollectionOfPrimitiveValues<string>(); },
            "aws": n => { this.aws = n.getObjectValue<AWSMachinePool>(createAWSMachinePoolFromDiscriminatorValue); },
            "cluster": n => { this.cluster = n.getObjectValue<Cluster>(createClusterFromDiscriminatorValue); },
            "href": n => { this.href = n.getStringValue(); },
            "id": n => { this.id = n.getStringValue(); },
            "instance_type": n => { this.instance_type = n.getStringValue(); },
            "kind": n => { this.kind = n.getStringValue(); },
            "labels": n => { this.labels = n.getObjectValue<MachinePool_labels>(createMachinePool_labelsFromDiscriminatorValue); },
            "replicas": n => { this.replicas = n.getNumberValue(); },
            "security_group_filters": n => { this.security_group_filters = n.getCollectionOfObjectValues<MachinePoolSecurityGroupFilter>(createMachinePoolSecurityGroupFilterFromDiscriminatorValue); },
            "subnets": n => { this.subnets = n.getCollectionOfPrimitiveValues<string>(); },
            "taints": n => { this.taints = n.getCollectionOfObjectValues<Taint>(createTaintFromDiscriminatorValue); },
        };
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
     * Gets the instance_type property value. The instance type of Nodes to create.
     * @returns a string
     */
    public get instance_type() {
        return this._instance_type;
    };
    /**
     * Sets the instance_type property value. The instance type of Nodes to create.
     * @param value Value to set for the instance_type property.
     */
    public set instance_type(value: string | undefined) {
        this._instance_type = value;
    };
    /**
     * Gets the kind property value. Indicates the type of this object. Will be 'MachinePool' if this is a complete object or 'MachinePoolLink' if it is just a link.
     * @returns a string
     */
    public get kind() {
        return this._kind;
    };
    /**
     * Sets the kind property value. Indicates the type of this object. Will be 'MachinePool' if this is a complete object or 'MachinePoolLink' if it is just a link.
     * @param value Value to set for the kind property.
     */
    public set kind(value: string | undefined) {
        this._kind = value;
    };
    /**
     * Gets the labels property value. The labels set on the Nodes created.
     * @returns a MachinePool_labels
     */
    public get labels() {
        return this._labels;
    };
    /**
     * Sets the labels property value. The labels set on the Nodes created.
     * @param value Value to set for the labels property.
     */
    public set labels(value: MachinePool_labels | undefined) {
        this._labels = value;
    };
    /**
     * Gets the replicas property value. The number of Machines (and Nodes) to create.Replicas and autoscaling cannot be used together.    
     * @returns a integer
     */
    public get replicas() {
        return this._replicas;
    };
    /**
     * Sets the replicas property value. The number of Machines (and Nodes) to create.Replicas and autoscaling cannot be used together.    
     * @param value Value to set for the replicas property.
     */
    public set replicas(value: number | undefined) {
        this._replicas = value;
    };
    /**
     * Gets the security_group_filters property value. List of security groups to be applied to MachinePool (Optional)
     * @returns a MachinePoolSecurityGroupFilter
     */
    public get security_group_filters() {
        return this._security_group_filters;
    };
    /**
     * Sets the security_group_filters property value. List of security groups to be applied to MachinePool (Optional)
     * @param value Value to set for the security_group_filters property.
     */
    public set security_group_filters(value: MachinePoolSecurityGroupFilter[] | undefined) {
        this._security_group_filters = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<MachinePoolAutoscaling>("autoscaling", this.autoscaling);
        writer.writeCollectionOfPrimitiveValues<string>("availability_zones", this.availability_zones);
        writer.writeObjectValue<AWSMachinePool>("aws", this.aws);
        writer.writeObjectValue<Cluster>("cluster", this.cluster);
        writer.writeStringValue("href", this.href);
        writer.writeStringValue("id", this.id);
        writer.writeStringValue("instance_type", this.instance_type);
        writer.writeStringValue("kind", this.kind);
        writer.writeObjectValue<MachinePool_labels>("labels", this.labels);
        writer.writeNumberValue("replicas", this.replicas);
        writer.writeCollectionOfObjectValues<MachinePoolSecurityGroupFilter>("security_group_filters", this.security_group_filters);
        writer.writeCollectionOfPrimitiveValues<string>("subnets", this.subnets);
        writer.writeCollectionOfObjectValues<Taint>("taints", this.taints);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the subnets property value. The subnets upon which the nodes are created.
     * @returns a string
     */
    public get subnets() {
        return this._subnets;
    };
    /**
     * Sets the subnets property value. The subnets upon which the nodes are created.
     * @param value Value to set for the subnets property.
     */
    public set subnets(value: string[] | undefined) {
        this._subnets = value;
    };
    /**
     * Gets the taints property value. The taints set on the Nodes created.
     * @returns a Taint
     */
    public get taints() {
        return this._taints;
    };
    /**
     * Sets the taints property value. The taints set on the Nodes created.
     * @param value Value to set for the taints property.
     */
    public set taints(value: Taint[] | undefined) {
        this._taints = value;
    };
}
