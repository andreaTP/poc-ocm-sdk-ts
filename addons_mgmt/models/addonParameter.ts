import {AddonParameterValueType} from './addonParameterValueType';
import {createAddonParameterOptionFromDiscriminatorValue} from './createAddonParameterOptionFromDiscriminatorValue';
import {createAddonRequirementFromDiscriminatorValue} from './createAddonRequirementFromDiscriminatorValue';
import {AddonParameterOption, AddonRequirement} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Representation of an addon parameter.
 */
export class AddonParameter implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Conditions in which this parameter is valid for */
    private _conditions?: AddonRequirement[] | undefined;
    /** Indicates the value default for the addon parameter. */
    private _default_value?: string | undefined;
    /** Description of the addon parameter. */
    private _description?: string | undefined;
    /** Indicates if this parameter can be edited after creation. */
    private _editable?: boolean | undefined;
    /** Restricts if the parameter can be upscaled/downscaledExpected values are "up", "down", or "" (no restriction). */
    private _editable_direction?: string | undefined;
    /** Indicates if this parameter is enabled for the addon. */
    private _enabled?: boolean | undefined;
    /** ID for this addon parameter */
    private _id?: string | undefined;
    /** Name of the addon parameter. */
    private _name?: string | undefined;
    /** List of options for the addon parameter value. */
    private _options?: AddonParameterOption[] | undefined;
    /** Indicates if this parameter is required by the addon. */
    private _required?: boolean | undefined;
    /** Validation rule for the addon parameter. */
    private _validation?: string | undefined;
    /** Error message to return should the parameter be invalid. */
    private _validation_err_msg?: string | undefined;
    /** Representation of the value type for this specific addon parameter */
    private _value_type?: AddonParameterValueType | undefined;
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
     * Gets the conditions property value. Conditions in which this parameter is valid for
     * @returns a AddonRequirement
     */
    public get conditions() {
        return this._conditions;
    };
    /**
     * Sets the conditions property value. Conditions in which this parameter is valid for
     * @param value Value to set for the conditions property.
     */
    public set conditions(value: AddonRequirement[] | undefined) {
        this._conditions = value;
    };
    /**
     * Instantiates a new AddonParameter and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the default_value property value. Indicates the value default for the addon parameter.
     * @returns a string
     */
    public get default_value() {
        return this._default_value;
    };
    /**
     * Sets the default_value property value. Indicates the value default for the addon parameter.
     * @param value Value to set for the default_value property.
     */
    public set default_value(value: string | undefined) {
        this._default_value = value;
    };
    /**
     * Gets the description property value. Description of the addon parameter.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. Description of the addon parameter.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Gets the editable property value. Indicates if this parameter can be edited after creation.
     * @returns a boolean
     */
    public get editable() {
        return this._editable;
    };
    /**
     * Sets the editable property value. Indicates if this parameter can be edited after creation.
     * @param value Value to set for the editable property.
     */
    public set editable(value: boolean | undefined) {
        this._editable = value;
    };
    /**
     * Gets the editable_direction property value. Restricts if the parameter can be upscaled/downscaledExpected values are "up", "down", or "" (no restriction).
     * @returns a string
     */
    public get editable_direction() {
        return this._editable_direction;
    };
    /**
     * Sets the editable_direction property value. Restricts if the parameter can be upscaled/downscaledExpected values are "up", "down", or "" (no restriction).
     * @param value Value to set for the editable_direction property.
     */
    public set editable_direction(value: string | undefined) {
        this._editable_direction = value;
    };
    /**
     * Gets the enabled property value. Indicates if this parameter is enabled for the addon.
     * @returns a boolean
     */
    public get enabled() {
        return this._enabled;
    };
    /**
     * Sets the enabled property value. Indicates if this parameter is enabled for the addon.
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
            "conditions": n => { this.conditions = n.getCollectionOfObjectValues<AddonRequirement>(createAddonRequirementFromDiscriminatorValue); },
            "default_value": n => { this.default_value = n.getStringValue(); },
            "description": n => { this.description = n.getStringValue(); },
            "editable": n => { this.editable = n.getBooleanValue(); },
            "editable_direction": n => { this.editable_direction = n.getStringValue(); },
            "enabled": n => { this.enabled = n.getBooleanValue(); },
            "id": n => { this.id = n.getStringValue(); },
            "name": n => { this.name = n.getStringValue(); },
            "options": n => { this.options = n.getCollectionOfObjectValues<AddonParameterOption>(createAddonParameterOptionFromDiscriminatorValue); },
            "required": n => { this.required = n.getBooleanValue(); },
            "validation": n => { this.validation = n.getStringValue(); },
            "validation_err_msg": n => { this.validation_err_msg = n.getStringValue(); },
            "value_type": n => { this.value_type = n.getEnumValue<AddonParameterValueType>(AddonParameterValueType); },
        };
    };
    /**
     * Gets the id property value. ID for this addon parameter
     * @returns a string
     */
    public get id() {
        return this._id;
    };
    /**
     * Sets the id property value. ID for this addon parameter
     * @param value Value to set for the id property.
     */
    public set id(value: string | undefined) {
        this._id = value;
    };
    /**
     * Gets the name property value. Name of the addon parameter.
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. Name of the addon parameter.
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Gets the options property value. List of options for the addon parameter value.
     * @returns a AddonParameterOption
     */
    public get options() {
        return this._options;
    };
    /**
     * Sets the options property value. List of options for the addon parameter value.
     * @param value Value to set for the options property.
     */
    public set options(value: AddonParameterOption[] | undefined) {
        this._options = value;
    };
    /**
     * Gets the required property value. Indicates if this parameter is required by the addon.
     * @returns a boolean
     */
    public get required() {
        return this._required;
    };
    /**
     * Sets the required property value. Indicates if this parameter is required by the addon.
     * @param value Value to set for the required property.
     */
    public set required(value: boolean | undefined) {
        this._required = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfObjectValues<AddonRequirement>("conditions", this.conditions);
        writer.writeStringValue("default_value", this.default_value);
        writer.writeStringValue("description", this.description);
        writer.writeBooleanValue("editable", this.editable);
        writer.writeStringValue("editable_direction", this.editable_direction);
        writer.writeBooleanValue("enabled", this.enabled);
        writer.writeStringValue("id", this.id);
        writer.writeStringValue("name", this.name);
        writer.writeCollectionOfObjectValues<AddonParameterOption>("options", this.options);
        writer.writeBooleanValue("required", this.required);
        writer.writeStringValue("validation", this.validation);
        writer.writeStringValue("validation_err_msg", this.validation_err_msg);
        writer.writeEnumValue<AddonParameterValueType>("value_type", this.value_type);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the validation property value. Validation rule for the addon parameter.
     * @returns a string
     */
    public get validation() {
        return this._validation;
    };
    /**
     * Sets the validation property value. Validation rule for the addon parameter.
     * @param value Value to set for the validation property.
     */
    public set validation(value: string | undefined) {
        this._validation = value;
    };
    /**
     * Gets the validation_err_msg property value. Error message to return should the parameter be invalid.
     * @returns a string
     */
    public get validation_err_msg() {
        return this._validation_err_msg;
    };
    /**
     * Sets the validation_err_msg property value. Error message to return should the parameter be invalid.
     * @param value Value to set for the validation_err_msg property.
     */
    public set validation_err_msg(value: string | undefined) {
        this._validation_err_msg = value;
    };
    /**
     * Gets the value_type property value. Representation of the value type for this specific addon parameter
     * @returns a AddonParameterValueType
     */
    public get value_type() {
        return this._value_type;
    };
    /**
     * Sets the value_type property value. Representation of the value type for this specific addon parameter
     * @param value Value to set for the value_type property.
     */
    public set value_type(value: AddonParameterValueType | undefined) {
        this._value_type = value;
    };
}
