import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Details for `github` identity providers.
 */
export class GithubIdentityProvider implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Optional trusted certificate authority bundle to use when making requests tot he server. */
    private _ca?: string | undefined;
    /** Client identifier of a registered _GitHub_ OAuth application. */
    private _client_id?: string | undefined;
    /** Client secret of a registered _GitHub_ OAuth application. */
    private _client_secret?: string | undefined;
    /** For _GitHub Enterprise_ you must provide the host name of your instance, such as`example.com`. This value must match the _GitHub Enterprise_ host name value in the`/setup/settings` file and cannot include a port number.For plain _GitHub_ omit this parameter. */
    private _hostname?: string | undefined;
    /** Optional list of organizations. Cannot be used in combination with the Teams field. */
    private _organizations?: string[] | undefined;
    /** Optional list of teams. Cannot be used in combination with the Organizations field. */
    private _teams?: string[] | undefined;
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
     * Gets the ca property value. Optional trusted certificate authority bundle to use when making requests tot he server.
     * @returns a string
     */
    public get ca() {
        return this._ca;
    };
    /**
     * Sets the ca property value. Optional trusted certificate authority bundle to use when making requests tot he server.
     * @param value Value to set for the ca property.
     */
    public set ca(value: string | undefined) {
        this._ca = value;
    };
    /**
     * Gets the client_id property value. Client identifier of a registered _GitHub_ OAuth application.
     * @returns a string
     */
    public get client_id() {
        return this._client_id;
    };
    /**
     * Sets the client_id property value. Client identifier of a registered _GitHub_ OAuth application.
     * @param value Value to set for the client_id property.
     */
    public set client_id(value: string | undefined) {
        this._client_id = value;
    };
    /**
     * Gets the client_secret property value. Client secret of a registered _GitHub_ OAuth application.
     * @returns a string
     */
    public get client_secret() {
        return this._client_secret;
    };
    /**
     * Sets the client_secret property value. Client secret of a registered _GitHub_ OAuth application.
     * @param value Value to set for the client_secret property.
     */
    public set client_secret(value: string | undefined) {
        this._client_secret = value;
    };
    /**
     * Instantiates a new GithubIdentityProvider and sets the default values.
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
            "ca": n => { this.ca = n.getStringValue(); },
            "client_id": n => { this.client_id = n.getStringValue(); },
            "client_secret": n => { this.client_secret = n.getStringValue(); },
            "hostname": n => { this.hostname = n.getStringValue(); },
            "organizations": n => { this.organizations = n.getCollectionOfPrimitiveValues<string>(); },
            "teams": n => { this.teams = n.getCollectionOfPrimitiveValues<string>(); },
        };
    };
    /**
     * Gets the hostname property value. For _GitHub Enterprise_ you must provide the host name of your instance, such as`example.com`. This value must match the _GitHub Enterprise_ host name value in the`/setup/settings` file and cannot include a port number.For plain _GitHub_ omit this parameter.
     * @returns a string
     */
    public get hostname() {
        return this._hostname;
    };
    /**
     * Sets the hostname property value. For _GitHub Enterprise_ you must provide the host name of your instance, such as`example.com`. This value must match the _GitHub Enterprise_ host name value in the`/setup/settings` file and cannot include a port number.For plain _GitHub_ omit this parameter.
     * @param value Value to set for the hostname property.
     */
    public set hostname(value: string | undefined) {
        this._hostname = value;
    };
    /**
     * Gets the organizations property value. Optional list of organizations. Cannot be used in combination with the Teams field.
     * @returns a string
     */
    public get organizations() {
        return this._organizations;
    };
    /**
     * Sets the organizations property value. Optional list of organizations. Cannot be used in combination with the Teams field.
     * @param value Value to set for the organizations property.
     */
    public set organizations(value: string[] | undefined) {
        this._organizations = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("ca", this.ca);
        writer.writeStringValue("client_id", this.client_id);
        writer.writeStringValue("client_secret", this.client_secret);
        writer.writeStringValue("hostname", this.hostname);
        writer.writeCollectionOfPrimitiveValues<string>("organizations", this.organizations);
        writer.writeCollectionOfPrimitiveValues<string>("teams", this.teams);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the teams property value. Optional list of teams. Cannot be used in combination with the Organizations field.
     * @returns a string
     */
    public get teams() {
        return this._teams;
    };
    /**
     * Sets the teams property value. Optional list of teams. Cannot be used in combination with the Organizations field.
     * @param value Value to set for the teams property.
     */
    public set teams(value: string[] | undefined) {
        this._teams = value;
    };
}
