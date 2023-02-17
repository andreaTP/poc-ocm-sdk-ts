import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class HTPasswdUser implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** ID for a secondary user in the _HTPasswd_ data file. */
    private _id?: string | undefined;
    /** Password for a secondary user in the _HTPasswd_ data file. */
    private _password?: string | undefined;
    /** Username for a secondary user in the _HTPasswd_ data file. */
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
     * Instantiates a new HTPasswdUser and sets the default values.
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
            "id": n => { this.id = n.getStringValue(); },
            "password": n => { this.password = n.getStringValue(); },
            "username": n => { this.username = n.getStringValue(); },
        };
    };
    /**
     * Gets the id property value. ID for a secondary user in the _HTPasswd_ data file.
     * @returns a string
     */
    public get id() {
        return this._id;
    };
    /**
     * Sets the id property value. ID for a secondary user in the _HTPasswd_ data file.
     * @param value Value to set for the id property.
     */
    public set id(value: string | undefined) {
        this._id = value;
    };
    /**
     * Gets the password property value. Password for a secondary user in the _HTPasswd_ data file.
     * @returns a string
     */
    public get password() {
        return this._password;
    };
    /**
     * Sets the password property value. Password for a secondary user in the _HTPasswd_ data file.
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
        writer.writeStringValue("id", this.id);
        writer.writeStringValue("password", this.password);
        writer.writeStringValue("username", this.username);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the username property value. Username for a secondary user in the _HTPasswd_ data file.
     * @returns a string
     */
    public get username() {
        return this._username;
    };
    /**
     * Sets the username property value. Username for a secondary user in the _HTPasswd_ data file.
     * @param value Value to set for the username property.
     */
    public set username(value: string | undefined) {
        this._username = value;
    };
}
