import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Representation of an add-on sub operator. A sub operator is an operatorwho's life cycle is controlled by the add-on umbrella operator. 
 */
export class AddOnSubOperator implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Indicates if the sub operator is enabled for the add-on */
    private _enabled?: boolean | undefined;
    /** Name of the add-on sub operator */
    private _operator_name?: string | undefined;
    /** Namespace of the add-on sub operator */
    private _operator_namespace?: string | undefined;
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
     * Instantiates a new AddOnSubOperator and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the enabled property value. Indicates if the sub operator is enabled for the add-on
     * @returns a boolean
     */
    public get enabled() {
        return this._enabled;
    };
    /**
     * Sets the enabled property value. Indicates if the sub operator is enabled for the add-on
     * @param value Value to set for the enabled property.
     */
    public set enabled(value: boolean | undefined) {
        this._enabled = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "enabled": n => { this.enabled = n.getBooleanValue(); },
            "operator_name": n => { this.operator_name = n.getStringValue(); },
            "operator_namespace": n => { this.operator_namespace = n.getStringValue(); },
        };
    };
    /**
     * Gets the operator_name property value. Name of the add-on sub operator
     * @returns a string
     */
    public get operator_name() {
        return this._operator_name;
    };
    /**
     * Sets the operator_name property value. Name of the add-on sub operator
     * @param value Value to set for the operator_name property.
     */
    public set operator_name(value: string | undefined) {
        this._operator_name = value;
    };
    /**
     * Gets the operator_namespace property value. Namespace of the add-on sub operator
     * @returns a string
     */
    public get operator_namespace() {
        return this._operator_namespace;
    };
    /**
     * Sets the operator_namespace property value. Namespace of the add-on sub operator
     * @param value Value to set for the operator_namespace property.
     */
    public set operator_namespace(value: string | undefined) {
        this._operator_namespace = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeBooleanValue("enabled", this.enabled);
        writer.writeStringValue("operator_name", this.operator_name);
        writer.writeStringValue("operator_namespace", this.operator_namespace);
        writer.writeAdditionalData(this.additionalData);
    };
}
