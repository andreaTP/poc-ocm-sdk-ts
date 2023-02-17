import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ValueUnit implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The unit property */
    private _unit?: string | undefined;
    /** The value property */
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
     * Instantiates a new ValueUnit and sets the default values.
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
     * Gets the unit property value. The unit property
     * @returns a string
     */
    public get unit() {
        return this._unit;
    };
    /**
     * Sets the unit property value. The unit property
     * @param value Value to set for the unit property.
     */
    public set unit(value: string | undefined) {
        this._unit = value;
    };
    /**
     * Gets the value property value. The value property
     * @returns a float
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. The value property
     * @param value Value to set for the value property.
     */
    public set value(value: number | undefined) {
        this._value = value;
    };
}
