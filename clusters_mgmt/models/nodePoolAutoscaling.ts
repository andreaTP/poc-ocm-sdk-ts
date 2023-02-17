import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Representation of a autoscaling in a node pool.
 */
export class NodePoolAutoscaling implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Self link. */
    private _href?: string | undefined;
    /** Unique identifier of the object. */
    private _id?: string | undefined;
    /** Indicates the type of this object. Will be 'NodePoolAutoscaling' if this is a complete object or 'NodePoolAutoscalingLink' if it is just a link. */
    private _kind?: string | undefined;
    /** The maximum number of replicas for the node pool. */
    private _max_replica?: number | undefined;
    /** The minimum number of replicas for the node pool. */
    private _min_replica?: number | undefined;
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
     * Instantiates a new NodePoolAutoscaling and sets the default values.
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
            "href": n => { this.href = n.getStringValue(); },
            "id": n => { this.id = n.getStringValue(); },
            "kind": n => { this.kind = n.getStringValue(); },
            "max_replica": n => { this.max_replica = n.getNumberValue(); },
            "min_replica": n => { this.min_replica = n.getNumberValue(); },
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
     * Gets the kind property value. Indicates the type of this object. Will be 'NodePoolAutoscaling' if this is a complete object or 'NodePoolAutoscalingLink' if it is just a link.
     * @returns a string
     */
    public get kind() {
        return this._kind;
    };
    /**
     * Sets the kind property value. Indicates the type of this object. Will be 'NodePoolAutoscaling' if this is a complete object or 'NodePoolAutoscalingLink' if it is just a link.
     * @param value Value to set for the kind property.
     */
    public set kind(value: string | undefined) {
        this._kind = value;
    };
    /**
     * Gets the max_replica property value. The maximum number of replicas for the node pool.
     * @returns a integer
     */
    public get max_replica() {
        return this._max_replica;
    };
    /**
     * Sets the max_replica property value. The maximum number of replicas for the node pool.
     * @param value Value to set for the max_replica property.
     */
    public set max_replica(value: number | undefined) {
        this._max_replica = value;
    };
    /**
     * Gets the min_replica property value. The minimum number of replicas for the node pool.
     * @returns a integer
     */
    public get min_replica() {
        return this._min_replica;
    };
    /**
     * Sets the min_replica property value. The minimum number of replicas for the node pool.
     * @param value Value to set for the min_replica property.
     */
    public set min_replica(value: number | undefined) {
        this._min_replica = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("href", this.href);
        writer.writeStringValue("id", this.id);
        writer.writeStringValue("kind", this.kind);
        writer.writeNumberValue("max_replica", this.max_replica);
        writer.writeNumberValue("min_replica", this.min_replica);
        writer.writeAdditionalData(this.additionalData);
    };
}
