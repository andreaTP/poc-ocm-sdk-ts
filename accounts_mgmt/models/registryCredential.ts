import {createAccountFromDiscriminatorValue} from './createAccountFromDiscriminatorValue';
import {createRegistryFromDiscriminatorValue} from './createRegistryFromDiscriminatorValue';
import {Account, Registry} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RegistryCredential implements AdditionalDataHolder, Parsable {
    /** The account property */
    private _account?: Account | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The created_at property */
    private _created_at?: Date | undefined;
    /** The external_resource_id property */
    private _external_resource_id?: string | undefined;
    /** Self link. */
    private _href?: string | undefined;
    /** Unique identifier of the object. */
    private _id?: string | undefined;
    /** Indicates the type of this object. Will be 'RegistryCredential' if this is a complete object or 'RegistryCredentialLink' if it is just a link. */
    private _kind?: string | undefined;
    /** The registry property */
    private _registry?: Registry | undefined;
    /** The token property */
    private _token?: string | undefined;
    /** The updated_at property */
    private _updated_at?: Date | undefined;
    /** The username property */
    private _username?: string | undefined;
    /**
     * Gets the account property value. The account property
     * @returns a Account
     */
    public get account() {
        return this._account;
    };
    /**
     * Sets the account property value. The account property
     * @param value Value to set for the account property.
     */
    public set account(value: Account | undefined) {
        this._account = value;
    };
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
     * Instantiates a new RegistryCredential and sets the default values.
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
     * Gets the external_resource_id property value. The external_resource_id property
     * @returns a string
     */
    public get external_resource_id() {
        return this._external_resource_id;
    };
    /**
     * Sets the external_resource_id property value. The external_resource_id property
     * @param value Value to set for the external_resource_id property.
     */
    public set external_resource_id(value: string | undefined) {
        this._external_resource_id = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "account": n => { this.account = n.getObjectValue<Account>(createAccountFromDiscriminatorValue); },
            "created_at": n => { this.created_at = n.getDateValue(); },
            "external_resource_id": n => { this.external_resource_id = n.getStringValue(); },
            "href": n => { this.href = n.getStringValue(); },
            "id": n => { this.id = n.getStringValue(); },
            "kind": n => { this.kind = n.getStringValue(); },
            "registry": n => { this.registry = n.getObjectValue<Registry>(createRegistryFromDiscriminatorValue); },
            "token": n => { this.token = n.getStringValue(); },
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
     * Gets the kind property value. Indicates the type of this object. Will be 'RegistryCredential' if this is a complete object or 'RegistryCredentialLink' if it is just a link.
     * @returns a string
     */
    public get kind() {
        return this._kind;
    };
    /**
     * Sets the kind property value. Indicates the type of this object. Will be 'RegistryCredential' if this is a complete object or 'RegistryCredentialLink' if it is just a link.
     * @param value Value to set for the kind property.
     */
    public set kind(value: string | undefined) {
        this._kind = value;
    };
    /**
     * Gets the registry property value. The registry property
     * @returns a Registry
     */
    public get registry() {
        return this._registry;
    };
    /**
     * Sets the registry property value. The registry property
     * @param value Value to set for the registry property.
     */
    public set registry(value: Registry | undefined) {
        this._registry = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Account>("account", this.account);
        writer.writeDateValue("created_at", this.created_at);
        writer.writeStringValue("external_resource_id", this.external_resource_id);
        writer.writeStringValue("href", this.href);
        writer.writeStringValue("id", this.id);
        writer.writeStringValue("kind", this.kind);
        writer.writeObjectValue<Registry>("registry", this.registry);
        writer.writeStringValue("token", this.token);
        writer.writeDateValue("updated_at", this.updated_at);
        writer.writeStringValue("username", this.username);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the token property value. The token property
     * @returns a string
     */
    public get token() {
        return this._token;
    };
    /**
     * Sets the token property value. The token property
     * @param value Value to set for the token property.
     */
    public set token(value: string | undefined) {
        this._token = value;
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
