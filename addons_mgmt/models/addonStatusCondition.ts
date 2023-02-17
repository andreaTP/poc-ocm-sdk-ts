import {AddonStatusConditionType} from './addonStatusConditionType';
import {AddonStatusConditionValue} from './addonStatusConditionValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Representation of an addon status condition type.
 */
export class AddonStatusCondition implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Reason for the condition */
    private _reason?: string | undefined;
    /** Representation of an addon status condition type field. */
    private _status_type?: AddonStatusConditionType | undefined;
    /** Representation of an addon status condition value field. */
    private _status_value?: AddonStatusConditionValue | undefined;
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
     * Instantiates a new AddonStatusCondition and sets the default values.
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
            "reason": n => { this.reason = n.getStringValue(); },
            "status_type": n => { this.status_type = n.getEnumValue<AddonStatusConditionType>(AddonStatusConditionType); },
            "status_value": n => { this.status_value = n.getEnumValue<AddonStatusConditionValue>(AddonStatusConditionValue); },
        };
    };
    /**
     * Gets the reason property value. Reason for the condition
     * @returns a string
     */
    public get reason() {
        return this._reason;
    };
    /**
     * Sets the reason property value. Reason for the condition
     * @param value Value to set for the reason property.
     */
    public set reason(value: string | undefined) {
        this._reason = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("reason", this.reason);
        writer.writeEnumValue<AddonStatusConditionType>("status_type", this.status_type);
        writer.writeEnumValue<AddonStatusConditionValue>("status_value", this.status_value);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the status_type property value. Representation of an addon status condition type field.
     * @returns a AddonStatusConditionType
     */
    public get status_type() {
        return this._status_type;
    };
    /**
     * Sets the status_type property value. Representation of an addon status condition type field.
     * @param value Value to set for the status_type property.
     */
    public set status_type(value: AddonStatusConditionType | undefined) {
        this._status_type = value;
    };
    /**
     * Gets the status_value property value. Representation of an addon status condition value field.
     * @returns a AddonStatusConditionValue
     */
    public get status_value() {
        return this._status_value;
    };
    /**
     * Sets the status_value property value. Representation of an addon status condition value field.
     * @param value Value to set for the status_value property.
     */
    public set status_value(value: AddonStatusConditionValue | undefined) {
        this._status_value = value;
    };
}
