import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PopResponse implements AdditionalDataHolder, Parsable {
    /** The abandoned_at property */
    private _abandoned_at?: Date | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The arguments property */
    private _arguments?: string | undefined;
    /** The attempts property */
    private _attempts?: number | undefined;
    /** The created_at property */
    private _created_at?: Date | undefined;
    /** The href property */
    private _href?: string | undefined;
    /** The id property */
    private _id?: string | undefined;
    /** The kind property */
    private _kind?: string | undefined;
    /** The receipt_id property */
    private _receipt_id?: string | undefined;
    /** The updated_at property */
    private _updated_at?: Date | undefined;
    /**
     * Gets the abandoned_at property value. The abandoned_at property
     * @returns a Date
     */
    public get abandoned_at() {
        return this._abandoned_at;
    };
    /**
     * Sets the abandoned_at property value. The abandoned_at property
     * @param value Value to set for the abandoned_at property.
     */
    public set abandoned_at(value: Date | undefined) {
        this._abandoned_at = value;
    };
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
     * Gets the arguments property value. The arguments property
     * @returns a string
     */
    public get arguments() {
        return this._arguments;
    };
    /**
     * Sets the arguments property value. The arguments property
     * @param value Value to set for the arguments property.
     */
    public set arguments(value: string | undefined) {
        this._arguments = value;
    };
    /**
     * Gets the attempts property value. The attempts property
     * @returns a integer
     */
    public get attempts() {
        return this._attempts;
    };
    /**
     * Sets the attempts property value. The attempts property
     * @param value Value to set for the attempts property.
     */
    public set attempts(value: number | undefined) {
        this._attempts = value;
    };
    /**
     * Instantiates a new popResponse and sets the default values.
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
            "abandoned_at": n => { this.abandoned_at = n.getDateValue(); },
            "arguments": n => { this.arguments = n.getStringValue(); },
            "attempts": n => { this.attempts = n.getNumberValue(); },
            "created_at": n => { this.created_at = n.getDateValue(); },
            "href": n => { this.href = n.getStringValue(); },
            "id": n => { this.id = n.getStringValue(); },
            "kind": n => { this.kind = n.getStringValue(); },
            "receipt_id": n => { this.receipt_id = n.getStringValue(); },
            "updated_at": n => { this.updated_at = n.getDateValue(); },
        };
    };
    /**
     * Gets the href property value. The href property
     * @returns a string
     */
    public get href() {
        return this._href;
    };
    /**
     * Sets the href property value. The href property
     * @param value Value to set for the href property.
     */
    public set href(value: string | undefined) {
        this._href = value;
    };
    /**
     * Gets the id property value. The id property
     * @returns a string
     */
    public get id() {
        return this._id;
    };
    /**
     * Sets the id property value. The id property
     * @param value Value to set for the id property.
     */
    public set id(value: string | undefined) {
        this._id = value;
    };
    /**
     * Gets the kind property value. The kind property
     * @returns a string
     */
    public get kind() {
        return this._kind;
    };
    /**
     * Sets the kind property value. The kind property
     * @param value Value to set for the kind property.
     */
    public set kind(value: string | undefined) {
        this._kind = value;
    };
    /**
     * Gets the receipt_id property value. The receipt_id property
     * @returns a string
     */
    public get receipt_id() {
        return this._receipt_id;
    };
    /**
     * Sets the receipt_id property value. The receipt_id property
     * @param value Value to set for the receipt_id property.
     */
    public set receipt_id(value: string | undefined) {
        this._receipt_id = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeDateValue("abandoned_at", this.abandoned_at);
        writer.writeStringValue("arguments", this.arguments);
        writer.writeNumberValue("attempts", this.attempts);
        writer.writeDateValue("created_at", this.created_at);
        writer.writeStringValue("href", this.href);
        writer.writeStringValue("id", this.id);
        writer.writeStringValue("kind", this.kind);
        writer.writeStringValue("receipt_id", this.receipt_id);
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
