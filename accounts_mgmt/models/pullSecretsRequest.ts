import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PullSecretsRequest implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The external_resource_id property */
    private _external_resource_id?: string | undefined;
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
     * Instantiates a new PullSecretsRequest and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the external_resource_id property value. The external_resource_id property
     * @returns a string
     */
    public get external_resource_id() {
        return this._external_resource_id;
    };
    /**
     * Sets the external_resource_id property value. The external_resource_id property
     * @param value Value to set for the external_resource_id property.
     */
    public set external_resource_id(value: string | undefined) {
        this._external_resource_id = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "external_resource_id": n => { this.external_resource_id = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("external_resource_id", this.external_resource_id);
        writer.writeAdditionalData(this.additionalData);
    };
}
