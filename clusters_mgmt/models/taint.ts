import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Representation of a Taint set on a MachinePool in a cluster.
 */
export class Taint implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The effect on the node for the pods matching the taint, i.e: NoSchedule, NoExecute, PreferNoSchedule. */
    private _effect?: string | undefined;
    /** The key for the taint */
    private _key?: string | undefined;
    /** The value for the taint. */
    private _value?: string | undefined;
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
     * Instantiates a new Taint and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the effect property value. The effect on the node for the pods matching the taint, i.e: NoSchedule, NoExecute, PreferNoSchedule.
     * @returns a string
     */
    public get effect() {
        return this._effect;
    };
    /**
     * Sets the effect property value. The effect on the node for the pods matching the taint, i.e: NoSchedule, NoExecute, PreferNoSchedule.
     * @param value Value to set for the effect property.
     */
    public set effect(value: string | undefined) {
        this._effect = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "effect": n => { this.effect = n.getStringValue(); },
            "key": n => { this.key = n.getStringValue(); },
            "value": n => { this.value = n.getStringValue(); },
        };
    };
    /**
     * Gets the key property value. The key for the taint
     * @returns a string
     */
    public get key() {
        return this._key;
    };
    /**
     * Sets the key property value. The key for the taint
     * @param value Value to set for the key property.
     */
    public set key(value: string | undefined) {
        this._key = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("effect", this.effect);
        writer.writeStringValue("key", this.key);
        writer.writeStringValue("value", this.value);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the value property value. The value for the taint.
     * @returns a string
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. The value for the taint.
     * @param value Value to set for the value property.
     */
    public set value(value: string | undefined) {
        this._value = value;
    };
}
