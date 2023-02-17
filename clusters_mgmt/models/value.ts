import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Numeric value and the unit used to measure it.Units are not mandatory, and they're not specified for some resources. Forresources that use bytes, the accepted units are:- 1 B = 1 byte- 1 KB = 10^3 bytes- 1 MB = 10^6 bytes- 1 GB = 10^9 bytes- 1 TB = 10^12 bytes- 1 PB = 10^15 bytes- 1 B = 1 byte- 1 KiB = 2^10 bytes- 1 MiB = 2^20 bytes- 1 GiB = 2^30 bytes- 1 TiB = 2^40 bytes- 1 PiB = 2^50 bytes
 */
export class Value implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Name of the unit used to measure the value. */
    private _unit?: string | undefined;
    /** Numeric value. */
    private _value?: number | undefined;
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
     * Instantiates a new Value and sets the default values.
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
            "unit": n => { this.unit = n.getStringValue(); },
            "value": n => { this.value = n.getNumberValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("unit", this.unit);
        writer.writeNumberValue("value", this.value);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the unit property value. Name of the unit used to measure the value.
     * @returns a string
     */
    public get unit() {
        return this._unit;
    };
    /**
     * Sets the unit property value. Name of the unit used to measure the value.
     * @param value Value to set for the unit property.
     */
    public set unit(value: string | undefined) {
        this._unit = value;
    };
    /**
     * Gets the value property value. Numeric value.
     * @returns a float
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. Numeric value.
     * @param value Value to set for the value property.
     */
    public set value(value: number | undefined) {
        this._value = value;
    };
}
