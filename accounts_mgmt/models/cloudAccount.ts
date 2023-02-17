import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CloudAccount implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The cloud_account_id property */
    private _cloud_account_id?: string | undefined;
    /** The cloud_provider_id property */
    private _cloud_provider_id?: string | undefined;
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
     * Gets the cloud_account_id property value. The cloud_account_id property
     * @returns a string
     */
    public get cloud_account_id() {
        return this._cloud_account_id;
    };
    /**
     * Sets the cloud_account_id property value. The cloud_account_id property
     * @param value Value to set for the cloud_account_id property.
     */
    public set cloud_account_id(value: string | undefined) {
        this._cloud_account_id = value;
    };
    /**
     * Gets the cloud_provider_id property value. The cloud_provider_id property
     * @returns a string
     */
    public get cloud_provider_id() {
        return this._cloud_provider_id;
    };
    /**
     * Sets the cloud_provider_id property value. The cloud_provider_id property
     * @param value Value to set for the cloud_provider_id property.
     */
    public set cloud_provider_id(value: string | undefined) {
        this._cloud_provider_id = value;
    };
    /**
     * Instantiates a new CloudAccount and sets the default values.
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
            "cloud_account_id": n => { this.cloud_account_id = n.getStringValue(); },
            "cloud_provider_id": n => { this.cloud_provider_id = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("cloud_account_id", this.cloud_account_id);
        writer.writeStringValue("cloud_provider_id", this.cloud_provider_id);
        writer.writeAdditionalData(this.additionalData);
    };
}
