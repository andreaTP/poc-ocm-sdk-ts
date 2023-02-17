import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Details for `gitlab` identity providers.
 */
export class GitlabIdentityProvider implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Optional trusted certificate authority bundle to use when making requests tot he server. */
    private _ca?: string | undefined;
    /** Client identifier of a registered _GitLab_ OAuth application. */
    private _client_id?: string | undefined;
    /** Client secret issued by _GitLab_. */
    private _client_secret?: string | undefined;
    /** URL of the _GitLab_ instance. */
    private _url?: string | undefined;
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
     * Gets the client_id property value. Client identifier of a registered _GitLab_ OAuth application.
     * @returns a string
     */
    public get client_id() {
        return this._client_id;
    };
    /**
     * Sets the client_id property value. Client identifier of a registered _GitLab_ OAuth application.
     * @param value Value to set for the client_id property.
     */
    public set client_id(value: string | undefined) {
        this._client_id = value;
    };
    /**
     * Gets the client_secret property value. Client secret issued by _GitLab_.
     * @returns a string
     */
    public get client_secret() {
        return this._client_secret;
    };
    /**
     * Sets the client_secret property value. Client secret issued by _GitLab_.
     * @param value Value to set for the client_secret property.
     */
    public set client_secret(value: string | undefined) {
        this._client_secret = value;
    };
    /**
     * Instantiates a new GitlabIdentityProvider and sets the default values.
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
            "url": n => { this.url = n.getStringValue(); },
        };
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
        writer.writeStringValue("url", this.url);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the url property value. URL of the _GitLab_ instance.
     * @returns a string
     */
    public get url() {
        return this._url;
    };
    /**
     * Sets the url property value. URL of the _GitLab_ instance.
     * @param value Value to set for the url property.
     */
    public set url(value: string | undefined) {
        this._url = value;
    };
}
