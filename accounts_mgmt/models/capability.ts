import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Capability model that represents internal labels with a key that matches a set list defined in AMS (defined in pkg/api/capability_types.go).
 */
export class Capability implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Dynamic attribute of the capability that tells us that this capability was inherited from the subscription's organization.  */
    private _inherited?: boolean | undefined;
    /** Name of the capability label. */
    private _name?: string | undefined;
    /** Value that can be assigned to the capability (eg. "true", "false" etc). */
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
     * Instantiates a new Capability and sets the default values.
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
            "inherited": n => { this.inherited = n.getBooleanValue(); },
            "name": n => { this.name = n.getStringValue(); },
            "value": n => { this.value = n.getStringValue(); },
        };
    };
    /**
     * Gets the inherited property value. Dynamic attribute of the capability that tells us that this capability was inherited from the subscription's organization. 
     * @returns a boolean
     */
    public get inherited() {
        return this._inherited;
    };
    /**
     * Sets the inherited property value. Dynamic attribute of the capability that tells us that this capability was inherited from the subscription's organization. 
     * @param value Value to set for the inherited property.
     */
    public set inherited(value: boolean | undefined) {
        this._inherited = value;
    };
    /**
     * Gets the name property value. Name of the capability label.
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. Name of the capability label.
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeBooleanValue("inherited", this.inherited);
        writer.writeStringValue("name", this.name);
        writer.writeStringValue("value", this.value);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the value property value. Value that can be assigned to the capability (eg. "true", "false" etc).
     * @returns a string
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. Value that can be assigned to the capability (eg. "true", "false" etc).
     * @param value Value to set for the value property.
     */
    public set value(value: string | undefined) {
        this._value = value;
    };
}
