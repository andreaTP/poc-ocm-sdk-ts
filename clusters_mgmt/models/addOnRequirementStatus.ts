import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Representation of an add-on requirement status.
 */
export class AddOnRequirementStatus implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Error messages detailing reasons for unfulfilled requirements. */
    private _error_msgs?: string[] | undefined;
    /** Indicates if this requirement is fulfilled. */
    private _fulfilled?: boolean | undefined;
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
     * Instantiates a new AddOnRequirementStatus and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the error_msgs property value. Error messages detailing reasons for unfulfilled requirements.
     * @returns a string
     */
    public get error_msgs() {
        return this._error_msgs;
    };
    /**
     * Sets the error_msgs property value. Error messages detailing reasons for unfulfilled requirements.
     * @param value Value to set for the error_msgs property.
     */
    public set error_msgs(value: string[] | undefined) {
        this._error_msgs = value;
    };
    /**
     * Gets the fulfilled property value. Indicates if this requirement is fulfilled.
     * @returns a boolean
     */
    public get fulfilled() {
        return this._fulfilled;
    };
    /**
     * Sets the fulfilled property value. Indicates if this requirement is fulfilled.
     * @param value Value to set for the fulfilled property.
     */
    public set fulfilled(value: boolean | undefined) {
        this._fulfilled = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "error_msgs": n => { this.error_msgs = n.getCollectionOfPrimitiveValues<string>(); },
            "fulfilled": n => { this.fulfilled = n.getBooleanValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfPrimitiveValues<string>("error_msgs", this.error_msgs);
        writer.writeBooleanValue("fulfilled", this.fulfilled);
        writer.writeAdditionalData(this.additionalData);
    };
}
