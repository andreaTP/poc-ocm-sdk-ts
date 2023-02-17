import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Representation of an sts policies for rosa cluster
 */
export class AWSSTSPolicy implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The ARN of the managed policy */
    private _arn?: string | undefined;
    /** Policy Details */
    private _details?: string | undefined;
    /** Policy ID */
    private _id?: string | undefined;
    /** Type of policy operator/account role */
    private _type?: string | undefined;
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
     * Gets the arn property value. The ARN of the managed policy
     * @returns a string
     */
    public get arn() {
        return this._arn;
    };
    /**
     * Sets the arn property value. The ARN of the managed policy
     * @param value Value to set for the arn property.
     */
    public set arn(value: string | undefined) {
        this._arn = value;
    };
    /**
     * Instantiates a new AWSSTSPolicy and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the details property value. Policy Details
     * @returns a string
     */
    public get details() {
        return this._details;
    };
    /**
     * Sets the details property value. Policy Details
     * @param value Value to set for the details property.
     */
    public set details(value: string | undefined) {
        this._details = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "arn": n => { this.arn = n.getStringValue(); },
            "details": n => { this.details = n.getStringValue(); },
            "id": n => { this.id = n.getStringValue(); },
            "type": n => { this.type = n.getStringValue(); },
        };
    };
    /**
     * Gets the id property value. Policy ID
     * @returns a string
     */
    public get id() {
        return this._id;
    };
    /**
     * Sets the id property value. Policy ID
     * @param value Value to set for the id property.
     */
    public set id(value: string | undefined) {
        this._id = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("arn", this.arn);
        writer.writeStringValue("details", this.details);
        writer.writeStringValue("id", this.id);
        writer.writeStringValue("type", this.type);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the type property value. Type of policy operator/account role
     * @returns a string
     */
    public get type() {
        return this._type;
    };
    /**
     * Sets the type property value. Type of policy operator/account role
     * @param value Value to set for the type property.
     */
    public set type(value: string | undefined) {
        this._type = value;
    };
}
