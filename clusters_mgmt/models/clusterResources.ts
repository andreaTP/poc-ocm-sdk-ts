import {createClusterResources_resourcesFromDiscriminatorValue} from './createClusterResources_resourcesFromDiscriminatorValue';
import {ClusterResources_resources} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Cluster Resource which belongs to a cluster, example Cluster Deployment.
 */
export class ClusterResources implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Cluster ID for the fetched resources */
    private _cluster_id?: string | undefined;
    /** Date and time when the resources were fetched. */
    private _creation_timestamp?: Date | undefined;
    /** Self link. */
    private _href?: string | undefined;
    /** Unique identifier of the object. */
    private _id?: string | undefined;
    /** Indicates the type of this object. Will be 'ClusterResources' if this is a complete object or 'ClusterResourcesLink' if it is just a link. */
    private _kind?: string | undefined;
    /** Returned map of cluster resources fetched. */
    private _resources?: ClusterResources_resources | undefined;
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
     * Gets the cluster_id property value. Cluster ID for the fetched resources
     * @returns a string
     */
    public get cluster_id() {
        return this._cluster_id;
    };
    /**
     * Sets the cluster_id property value. Cluster ID for the fetched resources
     * @param value Value to set for the cluster_id property.
     */
    public set cluster_id(value: string | undefined) {
        this._cluster_id = value;
    };
    /**
     * Instantiates a new ClusterResources and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the creation_timestamp property value. Date and time when the resources were fetched.
     * @returns a Date
     */
    public get creation_timestamp() {
        return this._creation_timestamp;
    };
    /**
     * Sets the creation_timestamp property value. Date and time when the resources were fetched.
     * @param value Value to set for the creation_timestamp property.
     */
    public set creation_timestamp(value: Date | undefined) {
        this._creation_timestamp = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "cluster_id": n => { this.cluster_id = n.getStringValue(); },
            "creation_timestamp": n => { this.creation_timestamp = n.getDateValue(); },
            "href": n => { this.href = n.getStringValue(); },
            "id": n => { this.id = n.getStringValue(); },
            "kind": n => { this.kind = n.getStringValue(); },
            "resources": n => { this.resources = n.getObjectValue<ClusterResources_resources>(createClusterResources_resourcesFromDiscriminatorValue); },
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
     * Gets the kind property value. Indicates the type of this object. Will be 'ClusterResources' if this is a complete object or 'ClusterResourcesLink' if it is just a link.
     * @returns a string
     */
    public get kind() {
        return this._kind;
    };
    /**
     * Sets the kind property value. Indicates the type of this object. Will be 'ClusterResources' if this is a complete object or 'ClusterResourcesLink' if it is just a link.
     * @param value Value to set for the kind property.
     */
    public set kind(value: string | undefined) {
        this._kind = value;
    };
    /**
     * Gets the resources property value. Returned map of cluster resources fetched.
     * @returns a ClusterResources_resources
     */
    public get resources() {
        return this._resources;
    };
    /**
     * Sets the resources property value. Returned map of cluster resources fetched.
     * @param value Value to set for the resources property.
     */
    public set resources(value: ClusterResources_resources | undefined) {
        this._resources = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("cluster_id", this.cluster_id);
        writer.writeDateValue("creation_timestamp", this.creation_timestamp);
        writer.writeStringValue("href", this.href);
        writer.writeStringValue("id", this.id);
        writer.writeStringValue("kind", this.kind);
        writer.writeObjectValue<ClusterResources_resources>("resources", this.resources);
        writer.writeAdditionalData(this.additionalData);
    };
}
