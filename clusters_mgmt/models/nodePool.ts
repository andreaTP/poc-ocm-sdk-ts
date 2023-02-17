import {createAWSNodePoolFromDiscriminatorValue} from './createAWSNodePoolFromDiscriminatorValue';
import {createClusterFromDiscriminatorValue} from './createClusterFromDiscriminatorValue';
import {createNodePool_labelsFromDiscriminatorValue} from './createNodePool_labelsFromDiscriminatorValue';
import {createNodePoolAutoscalingFromDiscriminatorValue} from './createNodePoolAutoscalingFromDiscriminatorValue';
import {createNodePoolStatusFromDiscriminatorValue} from './createNodePoolStatusFromDiscriminatorValue';
import {createTaintFromDiscriminatorValue} from './createTaintFromDiscriminatorValue';
import {createVersionFromDiscriminatorValue} from './createVersionFromDiscriminatorValue';
import {AWSNodePool, Cluster, NodePool_labels, NodePoolAutoscaling, NodePoolStatus, Taint, Version} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Representation of a node pool in a cluster.
 */
export class NodePool implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Specifies whether health checks should be enabled for machines in the NodePool. */
    private _auto_repair?: boolean | undefined;
    /** Representation of a autoscaling in a node pool. */
    private _autoscaling?: NodePoolAutoscaling | undefined;
    /** The availability zone upon which the node is created. */
    private _availability_zone?: string | undefined;
    /** Representation of aws node pool specific parameters. */
    private _aws_node_pool?: AWSNodePool | undefined;
    /** Definition of an _OpenShift_ cluster.The `cloud_provider` attribute is a reference to the cloud provider. When acluster is retrieved it will be a link to the cloud provider, containing onlythe kind, id and href attributes:```json{  "cloud_provider": {    "kind": "CloudProviderLink",    "id": "123",    "href": "/api/clusters_mgmt/v1/cloud_providers/123"  }}```When a cluster is created this is optional, and if used it should contain theidentifier of the cloud provider to use:```json{  "cloud_provider": {    "id": "123",  }}```If not included, then the cluster will be created using the default cloudprovider, which is currently Amazon Web Services.The region attribute is mandatory when a cluster is created.The `aws.access_key_id`, `aws.secret_access_key` and `dns.base_domain`attributes are mandatory when creation a cluster with your own Amazon WebServices account. */
    private _cluster?: Cluster | undefined;
    /** Self link. */
    private _href?: string | undefined;
    /** Unique identifier of the object. */
    private _id?: string | undefined;
    /** Indicates the type of this object. Will be 'NodePool' if this is a complete object or 'NodePoolLink' if it is just a link. */
    private _kind?: string | undefined;
    /** The labels set on the Nodes created. */
    private _labels?: NodePool_labels | undefined;
    /** The number of Machines (and Nodes) to create.Replicas and autoscaling cannot be used together. */
    private _replicas?: number | undefined;
    /** Representation of the status of a node pool. */
    private _status?: NodePoolStatus | undefined;
    /** The subnet upon which the nodes are created. */
    private _subnet?: string | undefined;
    /** The taints set on the Nodes created. */
    private _taints?: Taint[] | undefined;
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
     * Gets the auto_repair property value. Specifies whether health checks should be enabled for machines in the NodePool.
     * @returns a boolean
     */
    public get auto_repair() {
        return this._auto_repair;
    };
    /**
     * Sets the auto_repair property value. Specifies whether health checks should be enabled for machines in the NodePool.
     * @param value Value to set for the auto_repair property.
     */
    public set auto_repair(value: boolean | undefined) {
        this._auto_repair = value;
    };
    /**
     * Gets the autoscaling property value. Representation of a autoscaling in a node pool.
     * @returns a NodePoolAutoscaling
     */
    public get autoscaling() {
        return this._autoscaling;
    };
    /**
     * Sets the autoscaling property value. Representation of a autoscaling in a node pool.
     * @param value Value to set for the autoscaling property.
     */
    public set autoscaling(value: NodePoolAutoscaling | undefined) {
        this._autoscaling = value;
    };
    /**
     * Gets the availability_zone property value. The availability zone upon which the node is created.
     * @returns a string
     */
    public get availability_zone() {
        return this._availability_zone;
    };
    /**
     * Sets the availability_zone property value. The availability zone upon which the node is created.
     * @param value Value to set for the availability_zone property.
     */
    public set availability_zone(value: string | undefined) {
        this._availability_zone = value;
    };
    /**
     * Gets the aws_node_pool property value. Representation of aws node pool specific parameters.
     * @returns a AWSNodePool
     */
    public get aws_node_pool() {
        return this._aws_node_pool;
    };
    /**
     * Sets the aws_node_pool property value. Representation of aws node pool specific parameters.
     * @param value Value to set for the aws_node_pool property.
     */
    public set aws_node_pool(value: AWSNodePool | undefined) {
        this._aws_node_pool = value;
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
     * Instantiates a new NodePool and sets the default values.
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
            "autoscaling": n => { this.autoscaling = n.getObjectValue<NodePoolAutoscaling>(createNodePoolAutoscalingFromDiscriminatorValue); },
            "auto_repair": n => { this.auto_repair = n.getBooleanValue(); },
            "availability_zone": n => { this.availability_zone = n.getStringValue(); },
            "aws_node_pool": n => { this.aws_node_pool = n.getObjectValue<AWSNodePool>(createAWSNodePoolFromDiscriminatorValue); },
            "cluster": n => { this.cluster = n.getObjectValue<Cluster>(createClusterFromDiscriminatorValue); },
            "href": n => { this.href = n.getStringValue(); },
            "id": n => { this.id = n.getStringValue(); },
            "kind": n => { this.kind = n.getStringValue(); },
            "labels": n => { this.labels = n.getObjectValue<NodePool_labels>(createNodePool_labelsFromDiscriminatorValue); },
            "replicas": n => { this.replicas = n.getNumberValue(); },
            "status": n => { this.status = n.getObjectValue<NodePoolStatus>(createNodePoolStatusFromDiscriminatorValue); },
            "subnet": n => { this.subnet = n.getStringValue(); },
            "taints": n => { this.taints = n.getCollectionOfObjectValues<Taint>(createTaintFromDiscriminatorValue); },
            "version": n => { this.version = n.getObjectValue<Version>(createVersionFromDiscriminatorValue); },
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
     * Gets the kind property value. Indicates the type of this object. Will be 'NodePool' if this is a complete object or 'NodePoolLink' if it is just a link.
     * @returns a string
     */
    public get kind() {
        return this._kind;
    };
    /**
     * Sets the kind property value. Indicates the type of this object. Will be 'NodePool' if this is a complete object or 'NodePoolLink' if it is just a link.
     * @param value Value to set for the kind property.
     */
    public set kind(value: string | undefined) {
        this._kind = value;
    };
    /**
     * Gets the labels property value. The labels set on the Nodes created.
     * @returns a NodePool_labels
     */
    public get labels() {
        return this._labels;
    };
    /**
     * Sets the labels property value. The labels set on the Nodes created.
     * @param value Value to set for the labels property.
     */
    public set labels(value: NodePool_labels | undefined) {
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<NodePoolAutoscaling>("autoscaling", this.autoscaling);
        writer.writeBooleanValue("auto_repair", this.auto_repair);
        writer.writeStringValue("availability_zone", this.availability_zone);
        writer.writeObjectValue<AWSNodePool>("aws_node_pool", this.aws_node_pool);
        writer.writeObjectValue<Cluster>("cluster", this.cluster);
        writer.writeStringValue("href", this.href);
        writer.writeStringValue("id", this.id);
        writer.writeStringValue("kind", this.kind);
        writer.writeObjectValue<NodePool_labels>("labels", this.labels);
        writer.writeNumberValue("replicas", this.replicas);
        writer.writeObjectValue<NodePoolStatus>("status", this.status);
        writer.writeStringValue("subnet", this.subnet);
        writer.writeCollectionOfObjectValues<Taint>("taints", this.taints);
        writer.writeObjectValue<Version>("version", this.version);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the status property value. Representation of the status of a node pool.
     * @returns a NodePoolStatus
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. Representation of the status of a node pool.
     * @param value Value to set for the status property.
     */
    public set status(value: NodePoolStatus | undefined) {
        this._status = value;
    };
    /**
     * Gets the subnet property value. The subnet upon which the nodes are created.
     * @returns a string
     */
    public get subnet() {
        return this._subnet;
    };
    /**
     * Sets the subnet property value. The subnet upon which the nodes are created.
     * @param value Value to set for the subnet property.
     */
    public set subnet(value: string | undefined) {
        this._subnet = value;
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
