import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Representation of an addon secret propagation
 */
export class AddOnSecretPropagation implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** DestinationSecret is location of the secret to be added */
    private _destination_secret?: string | undefined;
    /** Indicates is this secret propagation is enabled for the addon */
    private _enabled?: boolean | undefined;
    /** ID of the secret propagation */
    private _id?: string | undefined;
    /** SourceSecret is location of the source secret */
    private _source_secret?: string | undefined;
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
     * Instantiates a new AddOnSecretPropagation and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the destination_secret property value. DestinationSecret is location of the secret to be added
     * @returns a string
     */
    public get destination_secret() {
        return this._destination_secret;
    };
    /**
     * Sets the destination_secret property value. DestinationSecret is location of the secret to be added
     * @param value Value to set for the destination_secret property.
     */
    public set destination_secret(value: string | undefined) {
        this._destination_secret = value;
    };
    /**
     * Gets the enabled property value. Indicates is this secret propagation is enabled for the addon
     * @returns a boolean
     */
    public get enabled() {
        return this._enabled;
    };
    /**
     * Sets the enabled property value. Indicates is this secret propagation is enabled for the addon
     * @param value Value to set for the enabled property.
     */
    public set enabled(value: boolean | undefined) {
        this._enabled = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "destination_secret": n => { this.destination_secret = n.getStringValue(); },
            "enabled": n => { this.enabled = n.getBooleanValue(); },
            "id": n => { this.id = n.getStringValue(); },
            "source_secret": n => { this.source_secret = n.getStringValue(); },
        };
    };
    /**
     * Gets the id property value. ID of the secret propagation
     * @returns a string
     */
    public get id() {
        return this._id;
    };
    /**
     * Sets the id property value. ID of the secret propagation
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
        writer.writeStringValue("destination_secret", this.destination_secret);
        writer.writeBooleanValue("enabled", this.enabled);
        writer.writeStringValue("id", this.id);
        writer.writeStringValue("source_secret", this.source_secret);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the source_secret property value. SourceSecret is location of the source secret
     * @returns a string
     */
    public get source_secret() {
        return this._source_secret;
    };
    /**
     * Sets the source_secret property value. SourceSecret is location of the source secret
     * @param value Value to set for the source_secret property.
     */
    public set source_secret(value: string | undefined) {
        this._source_secret = value;
    };
}
