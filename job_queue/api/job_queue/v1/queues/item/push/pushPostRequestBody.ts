import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PushPostRequestBody implements AdditionalDataHolder, Parsable {
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
     * Instantiates a new pushPostRequestBody and sets the default values.
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
        };
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
        writer.writeAdditionalData(this.additionalData);
    };
}
