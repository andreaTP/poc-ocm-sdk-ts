import {createHTPasswdUserFromDiscriminatorValue} from './createHTPasswdUserFromDiscriminatorValue';
import {HTPasswdUser} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Details for `htpasswd` identity providers.
 */
export class HTPasswdIdentityProvider implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Password to be used in the _HTPasswd_ data file. */
    private _password?: string | undefined;
    /** Username to be used in the _HTPasswd_ data file. */
    private _username?: string | undefined;
    /** Link to the collection of _HTPasswd_ users. */
    private _users?: HTPasswdUser[] | undefined;
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
     * Instantiates a new HTPasswdIdentityProvider and sets the default values.
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
            "password": n => { this.password = n.getStringValue(); },
            "username": n => { this.username = n.getStringValue(); },
            "users": n => { this.users = n.getCollectionOfObjectValues<HTPasswdUser>(createHTPasswdUserFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the password property value. Password to be used in the _HTPasswd_ data file.
     * @returns a string
     */
    public get password() {
        return this._password;
    };
    /**
     * Sets the password property value. Password to be used in the _HTPasswd_ data file.
     * @param value Value to set for the password property.
     */
    public set password(value: string | undefined) {
        this._password = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("password", this.password);
        writer.writeStringValue("username", this.username);
        writer.writeCollectionOfObjectValues<HTPasswdUser>("users", this.users);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the username property value. Username to be used in the _HTPasswd_ data file.
     * @returns a string
     */
    public get username() {
        return this._username;
    };
    /**
     * Sets the username property value. Username to be used in the _HTPasswd_ data file.
     * @param value Value to set for the username property.
     */
    public set username(value: string | undefined) {
        this._username = value;
    };
    /**
     * Gets the users property value. Link to the collection of _HTPasswd_ users.
     * @returns a HTPasswdUser
     */
    public get users() {
        return this._users;
    };
    /**
     * Sets the users property value. Link to the collection of _HTPasswd_ users.
     * @param value Value to set for the users property.
     */
    public set users(value: HTPasswdUser[] | undefined) {
        this._users = value;
    };
}
