import {createAddonStatusConditionFromDiscriminatorValue} from './createAddonStatusConditionFromDiscriminatorValue';
import {AddonStatusCondition} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Representation of an addon status.
 */
export class AddonStatus implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** ID of the addon whose status belongs to. */
    private _addon_id?: string | undefined;
    /** Identifier for co-relating current AddonCR revision and reported status. */
    private _correlation_id?: string | undefined;
    /** Self link. */
    private _href?: string | undefined;
    /** Unique identifier of the object. */
    private _id?: string | undefined;
    /** Indicates the type of this object. Will be 'AddonStatus' if this is a complete object or 'AddonStatusLink' if it is just a link. */
    private _kind?: string | undefined;
    /** List of reported addon status conditions */
    private _status_conditions?: AddonStatusCondition[] | undefined;
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
     * Gets the addon_id property value. ID of the addon whose status belongs to.
     * @returns a string
     */
    public get addon_id() {
        return this._addon_id;
    };
    /**
     * Sets the addon_id property value. ID of the addon whose status belongs to.
     * @param value Value to set for the addon_id property.
     */
    public set addon_id(value: string | undefined) {
        this._addon_id = value;
    };
    /**
     * Instantiates a new AddonStatus and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the correlation_id property value. Identifier for co-relating current AddonCR revision and reported status.
     * @returns a string
     */
    public get correlation_id() {
        return this._correlation_id;
    };
    /**
     * Sets the correlation_id property value. Identifier for co-relating current AddonCR revision and reported status.
     * @param value Value to set for the correlation_id property.
     */
    public set correlation_id(value: string | undefined) {
        this._correlation_id = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "addon_id": n => { this.addon_id = n.getStringValue(); },
            "correlation_id": n => { this.correlation_id = n.getStringValue(); },
            "href": n => { this.href = n.getStringValue(); },
            "id": n => { this.id = n.getStringValue(); },
            "kind": n => { this.kind = n.getStringValue(); },
            "status_conditions": n => { this.status_conditions = n.getCollectionOfObjectValues<AddonStatusCondition>(createAddonStatusConditionFromDiscriminatorValue); },
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
     * Gets the kind property value. Indicates the type of this object. Will be 'AddonStatus' if this is a complete object or 'AddonStatusLink' if it is just a link.
     * @returns a string
     */
    public get kind() {
        return this._kind;
    };
    /**
     * Sets the kind property value. Indicates the type of this object. Will be 'AddonStatus' if this is a complete object or 'AddonStatusLink' if it is just a link.
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
        writer.writeStringValue("addon_id", this.addon_id);
        writer.writeStringValue("correlation_id", this.correlation_id);
        writer.writeStringValue("href", this.href);
        writer.writeStringValue("id", this.id);
        writer.writeStringValue("kind", this.kind);
        writer.writeCollectionOfObjectValues<AddonStatusCondition>("status_conditions", this.status_conditions);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the status_conditions property value. List of reported addon status conditions
     * @returns a AddonStatusCondition
     */
    public get status_conditions() {
        return this._status_conditions;
    };
    /**
     * Sets the status_conditions property value. List of reported addon status conditions
     * @param value Value to set for the status_conditions property.
     */
    public set status_conditions(value: AddonStatusCondition[] | undefined) {
        this._status_conditions = value;
    };
}
