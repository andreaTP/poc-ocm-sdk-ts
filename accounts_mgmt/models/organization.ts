import {createCapabilityFromDiscriminatorValue} from './createCapabilityFromDiscriminatorValue';
import {createLabelFromDiscriminatorValue} from './createLabelFromDiscriminatorValue';
import {Capability, Label} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Organization implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The capabilities property */
    private _capabilities?: Capability[] | undefined;
    /** The created_at property */
    private _created_at?: Date | undefined;
    /** The ebs_account_id property */
    private _ebs_account_id?: string | undefined;
    /** The external_id property */
    private _external_id?: string | undefined;
    /** Self link. */
    private _href?: string | undefined;
    /** Unique identifier of the object. */
    private _id?: string | undefined;
    /** Indicates the type of this object. Will be 'Organization' if this is a complete object or 'OrganizationLink' if it is just a link. */
    private _kind?: string | undefined;
    /** The labels property */
    private _labels?: Label[] | undefined;
    /** The name property */
    private _name?: string | undefined;
    /** The updated_at property */
    private _updated_at?: Date | undefined;
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
     * Gets the capabilities property value. The capabilities property
     * @returns a Capability
     */
    public get capabilities() {
        return this._capabilities;
    };
    /**
     * Sets the capabilities property value. The capabilities property
     * @param value Value to set for the capabilities property.
     */
    public set capabilities(value: Capability[] | undefined) {
        this._capabilities = value;
    };
    /**
     * Instantiates a new Organization and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the created_at property value. The created_at property
     * @returns a Date
     */
    public get created_at() {
        return this._created_at;
    };
    /**
     * Sets the created_at property value. The created_at property
     * @param value Value to set for the created_at property.
     */
    public set created_at(value: Date | undefined) {
        this._created_at = value;
    };
    /**
     * Gets the ebs_account_id property value. The ebs_account_id property
     * @returns a string
     */
    public get ebs_account_id() {
        return this._ebs_account_id;
    };
    /**
     * Sets the ebs_account_id property value. The ebs_account_id property
     * @param value Value to set for the ebs_account_id property.
     */
    public set ebs_account_id(value: string | undefined) {
        this._ebs_account_id = value;
    };
    /**
     * Gets the external_id property value. The external_id property
     * @returns a string
     */
    public get external_id() {
        return this._external_id;
    };
    /**
     * Sets the external_id property value. The external_id property
     * @param value Value to set for the external_id property.
     */
    public set external_id(value: string | undefined) {
        this._external_id = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "capabilities": n => { this.capabilities = n.getCollectionOfObjectValues<Capability>(createCapabilityFromDiscriminatorValue); },
            "created_at": n => { this.created_at = n.getDateValue(); },
            "ebs_account_id": n => { this.ebs_account_id = n.getStringValue(); },
            "external_id": n => { this.external_id = n.getStringValue(); },
            "href": n => { this.href = n.getStringValue(); },
            "id": n => { this.id = n.getStringValue(); },
            "kind": n => { this.kind = n.getStringValue(); },
            "labels": n => { this.labels = n.getCollectionOfObjectValues<Label>(createLabelFromDiscriminatorValue); },
            "name": n => { this.name = n.getStringValue(); },
            "updated_at": n => { this.updated_at = n.getDateValue(); },
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
     * Gets the kind property value. Indicates the type of this object. Will be 'Organization' if this is a complete object or 'OrganizationLink' if it is just a link.
     * @returns a string
     */
    public get kind() {
        return this._kind;
    };
    /**
     * Sets the kind property value. Indicates the type of this object. Will be 'Organization' if this is a complete object or 'OrganizationLink' if it is just a link.
     * @param value Value to set for the kind property.
     */
    public set kind(value: string | undefined) {
        this._kind = value;
    };
    /**
     * Gets the labels property value. The labels property
     * @returns a Label
     */
    public get labels() {
        return this._labels;
    };
    /**
     * Sets the labels property value. The labels property
     * @param value Value to set for the labels property.
     */
    public set labels(value: Label[] | undefined) {
        this._labels = value;
    };
    /**
     * Gets the name property value. The name property
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. The name property
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
        writer.writeCollectionOfObjectValues<Capability>("capabilities", this.capabilities);
        writer.writeDateValue("created_at", this.created_at);
        writer.writeStringValue("ebs_account_id", this.ebs_account_id);
        writer.writeStringValue("external_id", this.external_id);
        writer.writeStringValue("href", this.href);
        writer.writeStringValue("id", this.id);
        writer.writeStringValue("kind", this.kind);
        writer.writeCollectionOfObjectValues<Label>("labels", this.labels);
        writer.writeStringValue("name", this.name);
        writer.writeDateValue("updated_at", this.updated_at);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the updated_at property value. The updated_at property
     * @returns a Date
     */
    public get updated_at() {
        return this._updated_at;
    };
    /**
     * Sets the updated_at property value. The updated_at property
     * @param value Value to set for the updated_at property.
     */
    public set updated_at(value: Date | undefined) {
        this._updated_at = value;
    };
}
