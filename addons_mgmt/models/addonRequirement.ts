import {AddonRequirementResource} from './addonRequirementResource';
import {createAddonRequirement_dataFromDiscriminatorValue} from './createAddonRequirement_dataFromDiscriminatorValue';
import {createAddonRequirementStatusFromDiscriminatorValue} from './createAddonRequirementStatusFromDiscriminatorValue';
import {AddonRequirement_data, AddonRequirementStatus} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Representation of an addon requirement.
 */
export class AddonRequirement implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Data for the addon requirement. */
    private _data?: AddonRequirement_data | undefined;
    /** Indicates if this requirement is enabled for the addon. */
    private _enabled?: boolean | undefined;
    /** ID of the addon requirement. */
    private _id?: string | undefined;
    /** Addon requirement resource type */
    private _resource?: AddonRequirementResource | undefined;
    /** Representation of an addon requirement status. */
    private _status?: AddonRequirementStatus | undefined;
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
     * Instantiates a new AddonRequirement and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the data property value. Data for the addon requirement.
     * @returns a AddonRequirement_data
     */
    public get data() {
        return this._data;
    };
    /**
     * Sets the data property value. Data for the addon requirement.
     * @param value Value to set for the data property.
     */
    public set data(value: AddonRequirement_data | undefined) {
        this._data = value;
    };
    /**
     * Gets the enabled property value. Indicates if this requirement is enabled for the addon.
     * @returns a boolean
     */
    public get enabled() {
        return this._enabled;
    };
    /**
     * Sets the enabled property value. Indicates if this requirement is enabled for the addon.
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
            "data": n => { this.data = n.getObjectValue<AddonRequirement_data>(createAddonRequirement_dataFromDiscriminatorValue); },
            "enabled": n => { this.enabled = n.getBooleanValue(); },
            "id": n => { this.id = n.getStringValue(); },
            "resource": n => { this.resource = n.getEnumValue<AddonRequirementResource>(AddonRequirementResource); },
            "status": n => { this.status = n.getObjectValue<AddonRequirementStatus>(createAddonRequirementStatusFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the id property value. ID of the addon requirement.
     * @returns a string
     */
    public get id() {
        return this._id;
    };
    /**
     * Sets the id property value. ID of the addon requirement.
     * @param value Value to set for the id property.
     */
    public set id(value: string | undefined) {
        this._id = value;
    };
    /**
     * Gets the resource property value. Addon requirement resource type
     * @returns a AddonRequirementResource
     */
    public get resource() {
        return this._resource;
    };
    /**
     * Sets the resource property value. Addon requirement resource type
     * @param value Value to set for the resource property.
     */
    public set resource(value: AddonRequirementResource | undefined) {
        this._resource = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<AddonRequirement_data>("data", this.data);
        writer.writeBooleanValue("enabled", this.enabled);
        writer.writeStringValue("id", this.id);
        writer.writeEnumValue<AddonRequirementResource>("resource", this.resource);
        writer.writeObjectValue<AddonRequirementStatus>("status", this.status);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the status property value. Representation of an addon requirement status.
     * @returns a AddonRequirementStatus
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. Representation of an addon requirement status.
     * @param value Value to set for the status property.
     */
    public set status(value: AddonRequirementStatus | undefined) {
        this._status = value;
    };
}
