import {UpgradePolicyStateValue} from './upgradePolicyStateValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Representation of an upgrade policy state that that is set for a cluster.
 */
export class UpgradePolicyState implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Description of the state. */
    private _description?: string | undefined;
    /** Self link. */
    private _href?: string | undefined;
    /** Unique identifier of the object. */
    private _id?: string | undefined;
    /** Indicates the type of this object. Will be 'UpgradePolicyState' if this is a complete object or 'UpgradePolicyStateLink' if it is just a link. */
    private _kind?: string | undefined;
    /** Overall state of a cluster upgrade policy. */
    private _value?: UpgradePolicyStateValue | undefined;
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
     * Instantiates a new UpgradePolicyState and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the description property value. Description of the state.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. Description of the state.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "description": n => { this.description = n.getStringValue(); },
            "href": n => { this.href = n.getStringValue(); },
            "id": n => { this.id = n.getStringValue(); },
            "kind": n => { this.kind = n.getStringValue(); },
            "value": n => { this.value = n.getEnumValue<UpgradePolicyStateValue>(UpgradePolicyStateValue); },
        };
    };
    /**
     * Gets the href property value. Self link.
     * @returns a string
     */
    public get href() {
        return this._href;
    };
    /**
     * Sets the href property value. Self link.
     * @param value Value to set for the href property.
     */
    public set href(value: string | undefined) {
        this._href = value;
    };
    /**
     * Gets the id property value. Unique identifier of the object.
     * @returns a string
     */
    public get id() {
        return this._id;
    };
    /**
     * Sets the id property value. Unique identifier of the object.
     * @param value Value to set for the id property.
     */
    public set id(value: string | undefined) {
        this._id = value;
    };
    /**
     * Gets the kind property value. Indicates the type of this object. Will be 'UpgradePolicyState' if this is a complete object or 'UpgradePolicyStateLink' if it is just a link.
     * @returns a string
     */
    public get kind() {
        return this._kind;
    };
    /**
     * Sets the kind property value. Indicates the type of this object. Will be 'UpgradePolicyState' if this is a complete object or 'UpgradePolicyStateLink' if it is just a link.
     * @param value Value to set for the kind property.
     */
    public set kind(value: string | undefined) {
        this._kind = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("href", this.href);
        writer.writeStringValue("id", this.id);
        writer.writeStringValue("kind", this.kind);
        writer.writeEnumValue<UpgradePolicyStateValue>("value", this.value);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the value property value. Overall state of a cluster upgrade policy.
     * @returns a UpgradePolicyStateValue
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. Overall state of a cluster upgrade policy.
     * @param value Value to set for the value property.
     */
    public set value(value: UpgradePolicyStateValue | undefined) {
        this._value = value;
    };
}
