import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Representation of a feature review response
 */
export class FeatureReviewResponse implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Defines whether the feature can be toggled */
    private _enabled?: boolean | undefined;
    /** Defines the feature id which can be toggled */
    private _feature_id?: string | undefined;
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
     * Instantiates a new FeatureReviewResponse and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the enabled property value. Defines whether the feature can be toggled
     * @returns a boolean
     */
    public get enabled() {
        return this._enabled;
    };
    /**
     * Sets the enabled property value. Defines whether the feature can be toggled
     * @param value Value to set for the enabled property.
     */
    public set enabled(value: boolean | undefined) {
        this._enabled = value;
    };
    /**
     * Gets the feature_id property value. Defines the feature id which can be toggled
     * @returns a string
     */
    public get feature_id() {
        return this._feature_id;
    };
    /**
     * Sets the feature_id property value. Defines the feature id which can be toggled
     * @param value Value to set for the feature_id property.
     */
    public set feature_id(value: string | undefined) {
        this._feature_id = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "enabled": n => { this.enabled = n.getBooleanValue(); },
            "feature_id": n => { this.feature_id = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeBooleanValue("enabled", this.enabled);
        writer.writeStringValue("feature_id", this.feature_id);
        writer.writeAdditionalData(this.additionalData);
    };
}
