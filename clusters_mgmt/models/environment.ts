import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Description of an environment
 */
export class Environment implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** last time that the worker checked for limited support clusters */
    private _last_limited_support_check?: Date | undefined;
    /** last time that the worker checked for available upgrades */
    private _last_upgrade_available_check?: Date | undefined;
    /** environment name */
    private _name?: string | undefined;
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
     * Instantiates a new Environment and sets the default values.
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
            "last_limited_support_check": n => { this.last_limited_support_check = n.getDateValue(); },
            "last_upgrade_available_check": n => { this.last_upgrade_available_check = n.getDateValue(); },
            "name": n => { this.name = n.getStringValue(); },
        };
    };
    /**
     * Gets the last_limited_support_check property value. last time that the worker checked for limited support clusters
     * @returns a Date
     */
    public get last_limited_support_check() {
        return this._last_limited_support_check;
    };
    /**
     * Sets the last_limited_support_check property value. last time that the worker checked for limited support clusters
     * @param value Value to set for the last_limited_support_check property.
     */
    public set last_limited_support_check(value: Date | undefined) {
        this._last_limited_support_check = value;
    };
    /**
     * Gets the last_upgrade_available_check property value. last time that the worker checked for available upgrades
     * @returns a Date
     */
    public get last_upgrade_available_check() {
        return this._last_upgrade_available_check;
    };
    /**
     * Sets the last_upgrade_available_check property value. last time that the worker checked for available upgrades
     * @param value Value to set for the last_upgrade_available_check property.
     */
    public set last_upgrade_available_check(value: Date | undefined) {
        this._last_upgrade_available_check = value;
    };
    /**
     * Gets the name property value. environment name
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. environment name
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
        writer.writeDateValue("last_limited_support_check", this.last_limited_support_check);
        writer.writeDateValue("last_upgrade_available_check", this.last_upgrade_available_check);
        writer.writeStringValue("name", this.name);
        writer.writeAdditionalData(this.additionalData);
    };
}
