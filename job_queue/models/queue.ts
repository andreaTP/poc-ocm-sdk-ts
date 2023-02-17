import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Queue implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The created_at property */
    private _created_at?: Date | undefined;
    /** Self link. */
    private _href?: string | undefined;
    /** Unique identifier of the object. */
    private _id?: string | undefined;
    /** Indicates the type of this object. Will be 'Queue' if this is a complete object or 'QueueLink' if it is just a link. */
    private _kind?: string | undefined;
    /** SQS Visibility Timeout */
    private _max_attempts?: number | undefined;
    /** The max_run_time property */
    private _max_run_time?: number | undefined;
    /** The name property */
    private _name?: string | undefined;
    /** The updated_at property */
    private _updated_at?: Date | undefined;
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
     * Instantiates a new Queue and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the created_at property value. The created_at property
     * @returns a Date
     */
    public get created_at() {
        return this._created_at;
    };
    /**
     * Sets the created_at property value. The created_at property
     * @param value Value to set for the created_at property.
     */
    public set created_at(value: Date | undefined) {
        this._created_at = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "created_at": n => { this.created_at = n.getDateValue(); },
            "href": n => { this.href = n.getStringValue(); },
            "id": n => { this.id = n.getStringValue(); },
            "kind": n => { this.kind = n.getStringValue(); },
            "max_attempts": n => { this.max_attempts = n.getNumberValue(); },
            "max_run_time": n => { this.max_run_time = n.getNumberValue(); },
            "name": n => { this.name = n.getStringValue(); },
            "updated_at": n => { this.updated_at = n.getDateValue(); },
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
     * Gets the kind property value. Indicates the type of this object. Will be 'Queue' if this is a complete object or 'QueueLink' if it is just a link.
     * @returns a string
     */
    public get kind() {
        return this._kind;
    };
    /**
     * Sets the kind property value. Indicates the type of this object. Will be 'Queue' if this is a complete object or 'QueueLink' if it is just a link.
     * @param value Value to set for the kind property.
     */
    public set kind(value: string | undefined) {
        this._kind = value;
    };
    /**
     * Gets the max_attempts property value. SQS Visibility Timeout
     * @returns a integer
     */
    public get max_attempts() {
        return this._max_attempts;
    };
    /**
     * Sets the max_attempts property value. SQS Visibility Timeout
     * @param value Value to set for the max_attempts property.
     */
    public set max_attempts(value: number | undefined) {
        this._max_attempts = value;
    };
    /**
     * Gets the max_run_time property value. The max_run_time property
     * @returns a integer
     */
    public get max_run_time() {
        return this._max_run_time;
    };
    /**
     * Sets the max_run_time property value. The max_run_time property
     * @param value Value to set for the max_run_time property.
     */
    public set max_run_time(value: number | undefined) {
        this._max_run_time = value;
    };
    /**
     * Gets the name property value. The name property
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. The name property
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeDateValue("created_at", this.created_at);
        writer.writeStringValue("href", this.href);
        writer.writeStringValue("id", this.id);
        writer.writeStringValue("kind", this.kind);
        writer.writeNumberValue("max_attempts", this.max_attempts);
        writer.writeNumberValue("max_run_time", this.max_run_time);
        writer.writeStringValue("name", this.name);
        writer.writeDateValue("updated_at", this.updated_at);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the updated_at property value. The updated_at property
     * @returns a Date
     */
    public get updated_at() {
        return this._updated_at;
    };
    /**
     * Sets the updated_at property value. The updated_at property
     * @param value Value to set for the updated_at property.
     */
    public set updated_at(value: Date | undefined) {
        this._updated_at = value;
    };
}
