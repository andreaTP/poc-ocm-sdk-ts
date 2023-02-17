import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Google cloud platform settings of a cluster.
 */
export class GCP implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** GCP Authentication provider x509 certificate url */
    private _auth_provider_x509_cert_url?: string | undefined;
    /** GCP authentication uri */
    private _auth_uri?: string | undefined;
    /** GCP client email */
    private _client_email?: string | undefined;
    /** GCP client identifier */
    private _client_id?: string | undefined;
    /** GCP client x509 certificate url */
    private _client_x509_cert_url?: string | undefined;
    /** GCP private key */
    private _private_key?: string | undefined;
    /** GCP private key identifier */
    private _private_key_id?: string | undefined;
    /** GCP project identifier. */
    private _project_id?: string | undefined;
    /** GCP token uri */
    private _token_uri?: string | undefined;
    /** GCP the type of the service the key belongs to */
    private _type?: string | undefined;
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
     * Gets the auth_provider_x509_cert_url property value. GCP Authentication provider x509 certificate url
     * @returns a string
     */
    public get auth_provider_x509_cert_url() {
        return this._auth_provider_x509_cert_url;
    };
    /**
     * Sets the auth_provider_x509_cert_url property value. GCP Authentication provider x509 certificate url
     * @param value Value to set for the auth_provider_x509_cert_url property.
     */
    public set auth_provider_x509_cert_url(value: string | undefined) {
        this._auth_provider_x509_cert_url = value;
    };
    /**
     * Gets the auth_uri property value. GCP authentication uri
     * @returns a string
     */
    public get auth_uri() {
        return this._auth_uri;
    };
    /**
     * Sets the auth_uri property value. GCP authentication uri
     * @param value Value to set for the auth_uri property.
     */
    public set auth_uri(value: string | undefined) {
        this._auth_uri = value;
    };
    /**
     * Gets the client_email property value. GCP client email
     * @returns a string
     */
    public get client_email() {
        return this._client_email;
    };
    /**
     * Sets the client_email property value. GCP client email
     * @param value Value to set for the client_email property.
     */
    public set client_email(value: string | undefined) {
        this._client_email = value;
    };
    /**
     * Gets the client_id property value. GCP client identifier
     * @returns a string
     */
    public get client_id() {
        return this._client_id;
    };
    /**
     * Sets the client_id property value. GCP client identifier
     * @param value Value to set for the client_id property.
     */
    public set client_id(value: string | undefined) {
        this._client_id = value;
    };
    /**
     * Gets the client_x509_cert_url property value. GCP client x509 certificate url
     * @returns a string
     */
    public get client_x509_cert_url() {
        return this._client_x509_cert_url;
    };
    /**
     * Sets the client_x509_cert_url property value. GCP client x509 certificate url
     * @param value Value to set for the client_x509_cert_url property.
     */
    public set client_x509_cert_url(value: string | undefined) {
        this._client_x509_cert_url = value;
    };
    /**
     * Instantiates a new GCP and sets the default values.
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
            "auth_provider_x509_cert_url": n => { this.auth_provider_x509_cert_url = n.getStringValue(); },
            "auth_uri": n => { this.auth_uri = n.getStringValue(); },
            "client_email": n => { this.client_email = n.getStringValue(); },
            "client_id": n => { this.client_id = n.getStringValue(); },
            "client_x509_cert_url": n => { this.client_x509_cert_url = n.getStringValue(); },
            "private_key": n => { this.private_key = n.getStringValue(); },
            "private_key_id": n => { this.private_key_id = n.getStringValue(); },
            "project_id": n => { this.project_id = n.getStringValue(); },
            "token_uri": n => { this.token_uri = n.getStringValue(); },
            "type": n => { this.type = n.getStringValue(); },
        };
    };
    /**
     * Gets the private_key property value. GCP private key
     * @returns a string
     */
    public get private_key() {
        return this._private_key;
    };
    /**
     * Sets the private_key property value. GCP private key
     * @param value Value to set for the private_key property.
     */
    public set private_key(value: string | undefined) {
        this._private_key = value;
    };
    /**
     * Gets the private_key_id property value. GCP private key identifier
     * @returns a string
     */
    public get private_key_id() {
        return this._private_key_id;
    };
    /**
     * Sets the private_key_id property value. GCP private key identifier
     * @param value Value to set for the private_key_id property.
     */
    public set private_key_id(value: string | undefined) {
        this._private_key_id = value;
    };
    /**
     * Gets the project_id property value. GCP project identifier.
     * @returns a string
     */
    public get project_id() {
        return this._project_id;
    };
    /**
     * Sets the project_id property value. GCP project identifier.
     * @param value Value to set for the project_id property.
     */
    public set project_id(value: string | undefined) {
        this._project_id = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("auth_provider_x509_cert_url", this.auth_provider_x509_cert_url);
        writer.writeStringValue("auth_uri", this.auth_uri);
        writer.writeStringValue("client_email", this.client_email);
        writer.writeStringValue("client_id", this.client_id);
        writer.writeStringValue("client_x509_cert_url", this.client_x509_cert_url);
        writer.writeStringValue("private_key", this.private_key);
        writer.writeStringValue("private_key_id", this.private_key_id);
        writer.writeStringValue("project_id", this.project_id);
        writer.writeStringValue("token_uri", this.token_uri);
        writer.writeStringValue("type", this.type);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the token_uri property value. GCP token uri
     * @returns a string
     */
    public get token_uri() {
        return this._token_uri;
    };
    /**
     * Sets the token_uri property value. GCP token uri
     * @param value Value to set for the token_uri property.
     */
    public set token_uri(value: string | undefined) {
        this._token_uri = value;
    };
    /**
     * Gets the type property value. GCP the type of the service the key belongs to
     * @returns a string
     */
    public get type() {
        return this._type;
    };
    /**
     * Sets the type property value. GCP the type of the service the key belongs to
     * @param value Value to set for the type property.
     */
    public set type(value: string | undefined) {
        this._type = value;
    };
}
