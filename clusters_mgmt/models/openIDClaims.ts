import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * _OpenID_ identity provider claims.
 */
export class OpenIDClaims implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** List of claims to use as the mail address. */
    private _email?: string[] | undefined;
    /** List of claims to use as the group name. */
    private _groups?: string[] | undefined;
    /** List of claims to use as the display name. */
    private _name?: string[] | undefined;
    /** List of claims to use as the preferred user name when provisioning a user. */
    private _preferred_username?: string[] | undefined;
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
     * Instantiates a new OpenIDClaims and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the email property value. List of claims to use as the mail address.
     * @returns a string
     */
    public get email() {
        return this._email;
    };
    /**
     * Sets the email property value. List of claims to use as the mail address.
     * @param value Value to set for the email property.
     */
    public set email(value: string[] | undefined) {
        this._email = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "email": n => { this.email = n.getCollectionOfPrimitiveValues<string>(); },
            "groups": n => { this.groups = n.getCollectionOfPrimitiveValues<string>(); },
            "name": n => { this.name = n.getCollectionOfPrimitiveValues<string>(); },
            "preferred_username": n => { this.preferred_username = n.getCollectionOfPrimitiveValues<string>(); },
        };
    };
    /**
     * Gets the groups property value. List of claims to use as the group name.
     * @returns a string
     */
    public get groups() {
        return this._groups;
    };
    /**
     * Sets the groups property value. List of claims to use as the group name.
     * @param value Value to set for the groups property.
     */
    public set groups(value: string[] | undefined) {
        this._groups = value;
    };
    /**
     * Gets the name property value. List of claims to use as the display name.
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. List of claims to use as the display name.
     * @param value Value to set for the name property.
     */
    public set name(value: string[] | undefined) {
        this._name = value;
    };
    /**
     * Gets the preferred_username property value. List of claims to use as the preferred user name when provisioning a user.
     * @returns a string
     */
    public get preferred_username() {
        return this._preferred_username;
    };
    /**
     * Sets the preferred_username property value. List of claims to use as the preferred user name when provisioning a user.
     * @param value Value to set for the preferred_username property.
     */
    public set preferred_username(value: string[] | undefined) {
        this._preferred_username = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfPrimitiveValues<string>("email", this.email);
        writer.writeCollectionOfPrimitiveValues<string>("groups", this.groups);
        writer.writeCollectionOfPrimitiveValues<string>("name", this.name);
        writer.writeCollectionOfPrimitiveValues<string>("preferred_username", this.preferred_username);
        writer.writeAdditionalData(this.additionalData);
    };
}
