import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class FailurePostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The failure_reason property */
    private _failure_reason?: string | undefined;
    /** A unique ID of a pop'ed job */
    private _receipt_id?: string | undefined;
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
     * Instantiates a new failurePostRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the failure_reason property value. The failure_reason property
     * @returns a string
     */
    public get failure_reason() {
        return this._failure_reason;
    };
    /**
     * Sets the failure_reason property value. The failure_reason property
     * @param value Value to set for the failure_reason property.
     */
    public set failure_reason(value: string | undefined) {
        this._failure_reason = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "failure_reason": n => { this.failure_reason = n.getStringValue(); },
            "receipt_id": n => { this.receipt_id = n.getStringValue(); },
        };
    };
    /**
     * Gets the receipt_id property value. A unique ID of a pop'ed job
     * @returns a string
     */
    public get receipt_id() {
        return this._receipt_id;
    };
    /**
     * Sets the receipt_id property value. A unique ID of a pop'ed job
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
        writer.writeStringValue("failure_reason", this.failure_reason);
        writer.writeStringValue("receipt_id", this.receipt_id);
        writer.writeAdditionalData(this.additionalData);
    };
}
