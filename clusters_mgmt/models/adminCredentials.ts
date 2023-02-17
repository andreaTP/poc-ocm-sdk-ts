import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Temporary administrator credentials generated during the installation of thecluster.
 */
export class AdminCredentials implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Cluster administrator password. */
    private _password?: string | undefined;
    /** Cluster administrator user name. */
    private _user?: string | undefined;
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
     * Instantiates a new AdminCredentials and sets the default values.
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
            "user": n => { this.user = n.getStringValue(); },
        };
    };
    /**
     * Gets the password property value. Cluster administrator password.
     * @returns a string
     */
    public get password() {
        return this._password;
    };
    /**
     * Sets the password property value. Cluster administrator password.
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
        writer.writeStringValue("user", this.user);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the user property value. Cluster administrator user name.
     * @returns a string
     */
    public get user() {
        return this._user;
    };
    /**
     * Sets the user property value. Cluster administrator user name.
     * @param value Value to set for the user property.
     */
    public set user(value: string | undefined) {
        this._user = value;
    };
}
