import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Representation of a autoscaling in a machine pool.
 */
export class MachinePoolAutoscaling implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Self link. */
    private _href?: string | undefined;
    /** Unique identifier of the object. */
    private _id?: string | undefined;
    /** Indicates the type of this object. Will be 'MachinePoolAutoscaling' if this is a complete object or 'MachinePoolAutoscalingLink' if it is just a link. */
    private _kind?: string | undefined;
    /** The maximum number of replicas for the machine pool. */
    private _max_replicas?: number | undefined;
    /** The minimum number of replicas for the machine pool. */
    private _min_replicas?: number | undefined;
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
     * Instantiates a new MachinePoolAutoscaling and sets the default values.
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
            "max_replicas": n => { this.max_replicas = n.getNumberValue(); },
            "min_replicas": n => { this.min_replicas = n.getNumberValue(); },
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
     * Gets the kind property value. Indicates the type of this object. Will be 'MachinePoolAutoscaling' if this is a complete object or 'MachinePoolAutoscalingLink' if it is just a link.
     * @returns a string
     */
    public get kind() {
        return this._kind;
    };
    /**
     * Sets the kind property value. Indicates the type of this object. Will be 'MachinePoolAutoscaling' if this is a complete object or 'MachinePoolAutoscalingLink' if it is just a link.
     * @param value Value to set for the kind property.
     */
    public set kind(value: string | undefined) {
        this._kind = value;
    };
    /**
     * Gets the max_replicas property value. The maximum number of replicas for the machine pool.
     * @returns a integer
     */
    public get max_replicas() {
        return this._max_replicas;
    };
    /**
     * Sets the max_replicas property value. The maximum number of replicas for the machine pool.
     * @param value Value to set for the max_replicas property.
     */
    public set max_replicas(value: number | undefined) {
        this._max_replicas = value;
    };
    /**
     * Gets the min_replicas property value. The minimum number of replicas for the machine pool.
     * @returns a integer
     */
    public get min_replicas() {
        return this._min_replicas;
    };
    /**
     * Sets the min_replicas property value. The minimum number of replicas for the machine pool.
     * @param value Value to set for the min_replicas property.
     */
    public set min_replicas(value: number | undefined) {
        this._min_replicas = value;
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
        writer.writeNumberValue("max_replicas", this.max_replicas);
        writer.writeNumberValue("min_replicas", this.min_replicas);
        writer.writeAdditionalData(this.additionalData);
    };
}
