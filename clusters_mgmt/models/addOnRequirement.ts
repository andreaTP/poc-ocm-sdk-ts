import {createAddOnRequirement_dataFromDiscriminatorValue} from './createAddOnRequirement_dataFromDiscriminatorValue';
import {createAddOnRequirementStatusFromDiscriminatorValue} from './createAddOnRequirementStatusFromDiscriminatorValue';
import {AddOnRequirement_data, AddOnRequirementStatus} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Representation of an add-on requirement.
 */
export class AddOnRequirement implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Data for the add-on requirement. */
    private _data?: AddOnRequirement_data | undefined;
    /** Indicates if this requirement is enabled for the add-on. */
    private _enabled?: boolean | undefined;
    /** ID of the add-on requirement. */
    private _id?: string | undefined;
    /** Type of resource of the add-on requirement. */
    private _resource?: string | undefined;
    /** Representation of an add-on requirement status. */
    private _status?: AddOnRequirementStatus | undefined;
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
     * Instantiates a new AddOnRequirement and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the data property value. Data for the add-on requirement.
     * @returns a AddOnRequirement_data
     */
    public get data() {
        return this._data;
    };
    /**
     * Sets the data property value. Data for the add-on requirement.
     * @param value Value to set for the data property.
     */
    public set data(value: AddOnRequirement_data | undefined) {
        this._data = value;
    };
    /**
     * Gets the enabled property value. Indicates if this requirement is enabled for the add-on.
     * @returns a boolean
     */
    public get enabled() {
        return this._enabled;
    };
    /**
     * Sets the enabled property value. Indicates if this requirement is enabled for the add-on.
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
            "data": n => { this.data = n.getObjectValue<AddOnRequirement_data>(createAddOnRequirement_dataFromDiscriminatorValue); },
            "enabled": n => { this.enabled = n.getBooleanValue(); },
            "id": n => { this.id = n.getStringValue(); },
            "resource": n => { this.resource = n.getStringValue(); },
            "status": n => { this.status = n.getObjectValue<AddOnRequirementStatus>(createAddOnRequirementStatusFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the id property value. ID of the add-on requirement.
     * @returns a string
     */
    public get id() {
        return this._id;
    };
    /**
     * Sets the id property value. ID of the add-on requirement.
     * @param value Value to set for the id property.
     */
    public set id(value: string | undefined) {
        this._id = value;
    };
    /**
     * Gets the resource property value. Type of resource of the add-on requirement.
     * @returns a string
     */
    public get resource() {
        return this._resource;
    };
    /**
     * Sets the resource property value. Type of resource of the add-on requirement.
     * @param value Value to set for the resource property.
     */
    public set resource(value: string | undefined) {
        this._resource = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<AddOnRequirement_data>("data", this.data);
        writer.writeBooleanValue("enabled", this.enabled);
        writer.writeStringValue("id", this.id);
        writer.writeStringValue("resource", this.resource);
        writer.writeObjectValue<AddOnRequirementStatus>("status", this.status);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the status property value. Representation of an add-on requirement status.
     * @returns a AddOnRequirementStatus
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. Representation of an add-on requirement status.
     * @param value Value to set for the status property.
     */
    public set status(value: AddOnRequirementStatus | undefined) {
        this._status = value;
    };
}
