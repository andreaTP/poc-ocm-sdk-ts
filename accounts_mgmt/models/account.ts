import {createCapabilityFromDiscriminatorValue} from './createCapabilityFromDiscriminatorValue';
import {createLabelFromDiscriminatorValue} from './createLabelFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {Capability, Label, Organization} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Account implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The ban_code property */
    private _ban_code?: string | undefined;
    /** The ban_description property */
    private _ban_description?: string | undefined;
    /** The banned property */
    private _banned?: boolean | undefined;
    /** The capabilities property */
    private _capabilities?: Capability[] | undefined;
    /** The created_at property */
    private _created_at?: Date | undefined;
    /** The email property */
    private _email?: string | undefined;
    /** The first_name property */
    private _first_name?: string | undefined;
    /** Self link. */
    private _href?: string | undefined;
    /** Unique identifier of the object. */
    private _id?: string | undefined;
    /** Indicates the type of this object. Will be 'Account' if this is a complete object or 'AccountLink' if it is just a link. */
    private _kind?: string | undefined;
    /** The labels property */
    private _labels?: Label[] | undefined;
    /** The last_name property */
    private _last_name?: string | undefined;
    /** The organization property */
    private _organization?: Organization | undefined;
    /** RhitAccountID will be deprecated in favor of RhitWebUserId */
    private _rhit_account_id?: string | undefined;
    /** The rhit_web_user_id property */
    private _rhit_web_user_id?: string | undefined;
    /** The service_account property */
    private _service_account?: boolean | undefined;
    /** The updated_at property */
    private _updated_at?: Date | undefined;
    /** The username property */
    private _username?: string | undefined;
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
     * Gets the ban_code property value. The ban_code property
     * @returns a string
     */
    public get ban_code() {
        return this._ban_code;
    };
    /**
     * Sets the ban_code property value. The ban_code property
     * @param value Value to set for the ban_code property.
     */
    public set ban_code(value: string | undefined) {
        this._ban_code = value;
    };
    /**
     * Gets the ban_description property value. The ban_description property
     * @returns a string
     */
    public get ban_description() {
        return this._ban_description;
    };
    /**
     * Sets the ban_description property value. The ban_description property
     * @param value Value to set for the ban_description property.
     */
    public set ban_description(value: string | undefined) {
        this._ban_description = value;
    };
    /**
     * Gets the banned property value. The banned property
     * @returns a boolean
     */
    public get banned() {
        return this._banned;
    };
    /**
     * Sets the banned property value. The banned property
     * @param value Value to set for the banned property.
     */
    public set banned(value: boolean | undefined) {
        this._banned = value;
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
     * Instantiates a new Account and sets the default values.
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
     * Gets the email property value. The email property
     * @returns a string
     */
    public get email() {
        return this._email;
    };
    /**
     * Sets the email property value. The email property
     * @param value Value to set for the email property.
     */
    public set email(value: string | undefined) {
        this._email = value;
    };
    /**
     * Gets the first_name property value. The first_name property
     * @returns a string
     */
    public get first_name() {
        return this._first_name;
    };
    /**
     * Sets the first_name property value. The first_name property
     * @param value Value to set for the first_name property.
     */
    public set first_name(value: string | undefined) {
        this._first_name = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "banned": n => { this.banned = n.getBooleanValue(); },
            "ban_code": n => { this.ban_code = n.getStringValue(); },
            "ban_description": n => { this.ban_description = n.getStringValue(); },
            "capabilities": n => { this.capabilities = n.getCollectionOfObjectValues<Capability>(createCapabilityFromDiscriminatorValue); },
            "created_at": n => { this.created_at = n.getDateValue(); },
            "email": n => { this.email = n.getStringValue(); },
            "first_name": n => { this.first_name = n.getStringValue(); },
            "href": n => { this.href = n.getStringValue(); },
            "id": n => { this.id = n.getStringValue(); },
            "kind": n => { this.kind = n.getStringValue(); },
            "labels": n => { this.labels = n.getCollectionOfObjectValues<Label>(createLabelFromDiscriminatorValue); },
            "last_name": n => { this.last_name = n.getStringValue(); },
            "organization": n => { this.organization = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "rhit_account_id": n => { this.rhit_account_id = n.getStringValue(); },
            "rhit_web_user_id": n => { this.rhit_web_user_id = n.getStringValue(); },
            "service_account": n => { this.service_account = n.getBooleanValue(); },
            "updated_at": n => { this.updated_at = n.getDateValue(); },
            "username": n => { this.username = n.getStringValue(); },
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
     * Gets the kind property value. Indicates the type of this object. Will be 'Account' if this is a complete object or 'AccountLink' if it is just a link.
     * @returns a string
     */
    public get kind() {
        return this._kind;
    };
    /**
     * Sets the kind property value. Indicates the type of this object. Will be 'Account' if this is a complete object or 'AccountLink' if it is just a link.
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
     * Gets the last_name property value. The last_name property
     * @returns a string
     */
    public get last_name() {
        return this._last_name;
    };
    /**
     * Sets the last_name property value. The last_name property
     * @param value Value to set for the last_name property.
     */
    public set last_name(value: string | undefined) {
        this._last_name = value;
    };
    /**
     * Gets the organization property value. The organization property
     * @returns a Organization
     */
    public get organization() {
        return this._organization;
    };
    /**
     * Sets the organization property value. The organization property
     * @param value Value to set for the organization property.
     */
    public set organization(value: Organization | undefined) {
        this._organization = value;
    };
    /**
     * Gets the rhit_account_id property value. RhitAccountID will be deprecated in favor of RhitWebUserId
     * @returns a string
     */
    public get rhit_account_id() {
        return this._rhit_account_id;
    };
    /**
     * Sets the rhit_account_id property value. RhitAccountID will be deprecated in favor of RhitWebUserId
     * @param value Value to set for the rhit_account_id property.
     */
    public set rhit_account_id(value: string | undefined) {
        this._rhit_account_id = value;
    };
    /**
     * Gets the rhit_web_user_id property value. The rhit_web_user_id property
     * @returns a string
     */
    public get rhit_web_user_id() {
        return this._rhit_web_user_id;
    };
    /**
     * Sets the rhit_web_user_id property value. The rhit_web_user_id property
     * @param value Value to set for the rhit_web_user_id property.
     */
    public set rhit_web_user_id(value: string | undefined) {
        this._rhit_web_user_id = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeBooleanValue("banned", this.banned);
        writer.writeStringValue("ban_code", this.ban_code);
        writer.writeStringValue("ban_description", this.ban_description);
        writer.writeCollectionOfObjectValues<Capability>("capabilities", this.capabilities);
        writer.writeDateValue("created_at", this.created_at);
        writer.writeStringValue("email", this.email);
        writer.writeStringValue("first_name", this.first_name);
        writer.writeStringValue("href", this.href);
        writer.writeStringValue("id", this.id);
        writer.writeStringValue("kind", this.kind);
        writer.writeCollectionOfObjectValues<Label>("labels", this.labels);
        writer.writeStringValue("last_name", this.last_name);
        writer.writeObjectValue<Organization>("organization", this.organization);
        writer.writeStringValue("rhit_account_id", this.rhit_account_id);
        writer.writeStringValue("rhit_web_user_id", this.rhit_web_user_id);
        writer.writeBooleanValue("service_account", this.service_account);
        writer.writeDateValue("updated_at", this.updated_at);
        writer.writeStringValue("username", this.username);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the service_account property value. The service_account property
     * @returns a boolean
     */
    public get service_account() {
        return this._service_account;
    };
    /**
     * Sets the service_account property value. The service_account property
     * @param value Value to set for the service_account property.
     */
    public set service_account(value: boolean | undefined) {
        this._service_account = value;
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
    /**
     * Gets the username property value. The username property
     * @returns a string
     */
    public get username() {
        return this._username;
    };
    /**
     * Sets the username property value. The username property
     * @param value Value to set for the username property.
     */
    public set username(value: string | undefined) {
        this._username = value;
    };
}
