import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ServiceClusterRequestPayload implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The cloud_provider property */
    private _cloud_provider?: string | undefined;
    /** The region property */
    private _region?: string | undefined;
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
     * Gets the cloud_provider property value. The cloud_provider property
     * @returns a string
     */
    public get cloud_provider() {
        return this._cloud_provider;
    };
    /**
     * Sets the cloud_provider property value. The cloud_provider property
     * @param value Value to set for the cloud_provider property.
     */
    public set cloud_provider(value: string | undefined) {
        this._cloud_provider = value;
    };
    /**
     * Instantiates a new ServiceClusterRequestPayload and sets the default values.
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
            "cloud_provider": n => { this.cloud_provider = n.getStringValue(); },
            "region": n => { this.region = n.getStringValue(); },
        };
    };
    /**
     * Gets the region property value. The region property
     * @returns a string
     */
    public get region() {
        return this._region;
    };
    /**
     * Sets the region property value. The region property
     * @param value Value to set for the region property.
     */
    public set region(value: string | undefined) {
        this._region = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("cloud_provider", this.cloud_provider);
        writer.writeStringValue("region", this.region);
        writer.writeAdditionalData(this.additionalData);
    };
}
