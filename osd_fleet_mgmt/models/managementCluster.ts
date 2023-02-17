import {createClusterManagementReferenceFromDiscriminatorValue} from './createClusterManagementReferenceFromDiscriminatorValue';
import {createDNSFromDiscriminatorValue} from './createDNSFromDiscriminatorValue';
import {createManagementClusterParentFromDiscriminatorValue} from './createManagementClusterParentFromDiscriminatorValue';
import {ClusterManagementReference, DNS, ManagementClusterParent} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Definition of an _OpenShift_ cluster.The `cloud_provider` attribute is a reference to the cloud provider. When acluster is retrieved it will be a link to the cloud provider, containing onlythe kind, id and href attributes:```json{  "cloud_provider": {    "kind": "CloudProviderLink",    "id": "123",    "href": "/api/clusters_mgmt/v1/cloud_providers/123"  }}```When a cluster is created this is optional, and if used it should contain theidentifier of the cloud provider to use:```json{  "cloud_provider": {    "id": "123",  }}```If not included, then the cluster will be created using the default cloudprovider, which is currently Amazon Web Services.The region attribute is mandatory when a cluster is created.The `aws.access_key_id`, `aws.secret_access_key` and `dns.base_domain`attributes are mandatory when creation a cluster with your own Amazon WebServices account.
 */
export class ManagementCluster implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Cloud provider where the cluster is installed. */
    private _cloud_provider?: string | undefined;
    /** Cluster Mgmt reference settings of the cluster. */
    private _cluster_management_reference?: ClusterManagementReference | undefined;
    /** DNS settings of the cluster. */
    private _dns?: DNS | undefined;
    /** Self link. */
    private _href?: string | undefined;
    /** Unique identifier of the object. */
    private _id?: string | undefined;
    /** Indicates the type of this object. Will be 'ManagementCluster' if this is a complete object or 'ManagementClusterLink' if it is just a link. */
    private _kind?: string | undefined;
    /** ManagementClusterParent reference settings of the cluster. */
    private _parent?: ManagementClusterParent | undefined;
    /** Cloud provider region where the cluster is installed. */
    private _region?: string | undefined;
    /** Status of cluster */
    private _status?: string | undefined;
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
     * Gets the cloud_provider property value. Cloud provider where the cluster is installed.
     * @returns a string
     */
    public get cloud_provider() {
        return this._cloud_provider;
    };
    /**
     * Sets the cloud_provider property value. Cloud provider where the cluster is installed.
     * @param value Value to set for the cloud_provider property.
     */
    public set cloud_provider(value: string | undefined) {
        this._cloud_provider = value;
    };
    /**
     * Gets the cluster_management_reference property value. Cluster Mgmt reference settings of the cluster.
     * @returns a ClusterManagementReference
     */
    public get cluster_management_reference() {
        return this._cluster_management_reference;
    };
    /**
     * Sets the cluster_management_reference property value. Cluster Mgmt reference settings of the cluster.
     * @param value Value to set for the cluster_management_reference property.
     */
    public set cluster_management_reference(value: ClusterManagementReference | undefined) {
        this._cluster_management_reference = value;
    };
    /**
     * Instantiates a new ManagementCluster and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
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
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "cloud_provider": n => { this.cloud_provider = n.getStringValue(); },
            "cluster_management_reference": n => { this.cluster_management_reference = n.getObjectValue<ClusterManagementReference>(createClusterManagementReferenceFromDiscriminatorValue); },
            "dns": n => { this.dns = n.getObjectValue<DNS>(createDNSFromDiscriminatorValue); },
            "href": n => { this.href = n.getStringValue(); },
            "id": n => { this.id = n.getStringValue(); },
            "kind": n => { this.kind = n.getStringValue(); },
            "parent": n => { this.parent = n.getObjectValue<ManagementClusterParent>(createManagementClusterParentFromDiscriminatorValue); },
            "region": n => { this.region = n.getStringValue(); },
            "status": n => { this.status = n.getStringValue(); },
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
     * Gets the kind property value. Indicates the type of this object. Will be 'ManagementCluster' if this is a complete object or 'ManagementClusterLink' if it is just a link.
     * @returns a string
     */
    public get kind() {
        return this._kind;
    };
    /**
     * Sets the kind property value. Indicates the type of this object. Will be 'ManagementCluster' if this is a complete object or 'ManagementClusterLink' if it is just a link.
     * @param value Value to set for the kind property.
     */
    public set kind(value: string | undefined) {
        this._kind = value;
    };
    /**
     * Gets the parent property value. ManagementClusterParent reference settings of the cluster.
     * @returns a ManagementClusterParent
     */
    public get parent() {
        return this._parent;
    };
    /**
     * Sets the parent property value. ManagementClusterParent reference settings of the cluster.
     * @param value Value to set for the parent property.
     */
    public set parent(value: ManagementClusterParent | undefined) {
        this._parent = value;
    };
    /**
     * Gets the region property value. Cloud provider region where the cluster is installed.
     * @returns a string
     */
    public get region() {
        return this._region;
    };
    /**
     * Sets the region property value. Cloud provider region where the cluster is installed.
     * @param value Value to set for the region property.
     */
    public set region(value: string | undefined) {
        this._region = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("cloud_provider", this.cloud_provider);
        writer.writeObjectValue<ClusterManagementReference>("cluster_management_reference", this.cluster_management_reference);
        writer.writeObjectValue<DNS>("dns", this.dns);
        writer.writeStringValue("href", this.href);
        writer.writeStringValue("id", this.id);
        writer.writeStringValue("kind", this.kind);
        writer.writeObjectValue<ManagementClusterParent>("parent", this.parent);
        writer.writeStringValue("region", this.region);
        writer.writeStringValue("status", this.status);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the status property value. Status of cluster
     * @returns a string
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. Status of cluster
     * @param value Value to set for the status property.
     */
    public set status(value: string | undefined) {
        this._status = value;
    };
}
