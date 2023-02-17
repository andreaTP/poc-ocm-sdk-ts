import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Details for `google` identity providers.
 */
export class GoogleIdentityProvider implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Client identifier of a registered _Google_ project. */
    private _client_id?: string | undefined;
    /** Client secret issued by _Google_. */
    private _client_secret?: string | undefined;
    /** Optional hosted domain to restrict sign-in accounts to. */
    private _hosted_domain?: string | undefined;
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
     * Gets the client_id property value. Client identifier of a registered _Google_ project.
     * @returns a string
     */
    public get client_id() {
        return this._client_id;
    };
    /**
     * Sets the client_id property value. Client identifier of a registered _Google_ project.
     * @param value Value to set for the client_id property.
     */
    public set client_id(value: string | undefined) {
        this._client_id = value;
    };
    /**
     * Gets the client_secret property value. Client secret issued by _Google_.
     * @returns a string
     */
    public get client_secret() {
        return this._client_secret;
    };
    /**
     * Sets the client_secret property value. Client secret issued by _Google_.
     * @param value Value to set for the client_secret property.
     */
    public set client_secret(value: string | undefined) {
        this._client_secret = value;
    };
    /**
     * Instantiates a new GoogleIdentityProvider and sets the default values.
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
            "client_id": n => { this.client_id = n.getStringValue(); },
            "client_secret": n => { this.client_secret = n.getStringValue(); },
            "hosted_domain": n => { this.hosted_domain = n.getStringValue(); },
        };
    };
    /**
     * Gets the hosted_domain property value. Optional hosted domain to restrict sign-in accounts to.
     * @returns a string
     */
    public get hosted_domain() {
        return this._hosted_domain;
    };
    /**
     * Sets the hosted_domain property value. Optional hosted domain to restrict sign-in accounts to.
     * @param value Value to set for the hosted_domain property.
     */
    public set hosted_domain(value: string | undefined) {
        this._hosted_domain = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("client_id", this.client_id);
        writer.writeStringValue("client_secret", this.client_secret);
        writer.writeStringValue("hosted_domain", this.hosted_domain);
        writer.writeAdditionalData(this.additionalData);
    };
}
