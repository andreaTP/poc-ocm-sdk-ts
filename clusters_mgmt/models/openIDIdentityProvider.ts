import {createOpenIDClaimsFromDiscriminatorValue} from './createOpenIDClaimsFromDiscriminatorValue';
import {createOpenIDIdentityProvider_extra_authorize_parametersFromDiscriminatorValue} from './createOpenIDIdentityProvider_extra_authorize_parametersFromDiscriminatorValue';
import {OpenIDClaims, OpenIDIdentityProvider_extra_authorize_parameters} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Details for `openid` identity providers.
 */
export class OpenIDIdentityProvider implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Certificate bunde to use to validate server certificates for the configured URL. */
    private _ca?: string | undefined;
    /** _OpenID_ identity provider claims. */
    private _claims?: OpenIDClaims | undefined;
    /** Identifier of a client registered with the _OpenID_ provider. */
    private _client_id?: string | undefined;
    /** Client secret. */
    private _client_secret?: string | undefined;
    /** Optional map of extra parameters to add to the authorization token request. */
    private _extra_authorize_parameters?: OpenIDIdentityProvider_extra_authorize_parameters | undefined;
    /** Optional list of scopes to request, in addition to the `openid` scope, during theauthorization token request. */
    private _extra_scopes?: string[] | undefined;
    /** The URL that the OpenID Provider asserts as the Issuer Identifier */
    private _issuer?: string | undefined;
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
     * Gets the ca property value. Certificate bunde to use to validate server certificates for the configured URL.
     * @returns a string
     */
    public get ca() {
        return this._ca;
    };
    /**
     * Sets the ca property value. Certificate bunde to use to validate server certificates for the configured URL.
     * @param value Value to set for the ca property.
     */
    public set ca(value: string | undefined) {
        this._ca = value;
    };
    /**
     * Gets the claims property value. _OpenID_ identity provider claims.
     * @returns a OpenIDClaims
     */
    public get claims() {
        return this._claims;
    };
    /**
     * Sets the claims property value. _OpenID_ identity provider claims.
     * @param value Value to set for the claims property.
     */
    public set claims(value: OpenIDClaims | undefined) {
        this._claims = value;
    };
    /**
     * Gets the client_id property value. Identifier of a client registered with the _OpenID_ provider.
     * @returns a string
     */
    public get client_id() {
        return this._client_id;
    };
    /**
     * Sets the client_id property value. Identifier of a client registered with the _OpenID_ provider.
     * @param value Value to set for the client_id property.
     */
    public set client_id(value: string | undefined) {
        this._client_id = value;
    };
    /**
     * Gets the client_secret property value. Client secret.
     * @returns a string
     */
    public get client_secret() {
        return this._client_secret;
    };
    /**
     * Sets the client_secret property value. Client secret.
     * @param value Value to set for the client_secret property.
     */
    public set client_secret(value: string | undefined) {
        this._client_secret = value;
    };
    /**
     * Instantiates a new OpenIDIdentityProvider and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the extra_authorize_parameters property value. Optional map of extra parameters to add to the authorization token request.
     * @returns a OpenIDIdentityProvider_extra_authorize_parameters
     */
    public get extra_authorize_parameters() {
        return this._extra_authorize_parameters;
    };
    /**
     * Sets the extra_authorize_parameters property value. Optional map of extra parameters to add to the authorization token request.
     * @param value Value to set for the extra_authorize_parameters property.
     */
    public set extra_authorize_parameters(value: OpenIDIdentityProvider_extra_authorize_parameters | undefined) {
        this._extra_authorize_parameters = value;
    };
    /**
     * Gets the extra_scopes property value. Optional list of scopes to request, in addition to the `openid` scope, during theauthorization token request.
     * @returns a string
     */
    public get extra_scopes() {
        return this._extra_scopes;
    };
    /**
     * Sets the extra_scopes property value. Optional list of scopes to request, in addition to the `openid` scope, during theauthorization token request.
     * @param value Value to set for the extra_scopes property.
     */
    public set extra_scopes(value: string[] | undefined) {
        this._extra_scopes = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "ca": n => { this.ca = n.getStringValue(); },
            "claims": n => { this.claims = n.getObjectValue<OpenIDClaims>(createOpenIDClaimsFromDiscriminatorValue); },
            "client_id": n => { this.client_id = n.getStringValue(); },
            "client_secret": n => { this.client_secret = n.getStringValue(); },
            "extra_authorize_parameters": n => { this.extra_authorize_parameters = n.getObjectValue<OpenIDIdentityProvider_extra_authorize_parameters>(createOpenIDIdentityProvider_extra_authorize_parametersFromDiscriminatorValue); },
            "extra_scopes": n => { this.extra_scopes = n.getCollectionOfPrimitiveValues<string>(); },
            "issuer": n => { this.issuer = n.getStringValue(); },
        };
    };
    /**
     * Gets the issuer property value. The URL that the OpenID Provider asserts as the Issuer Identifier
     * @returns a string
     */
    public get issuer() {
        return this._issuer;
    };
    /**
     * Sets the issuer property value. The URL that the OpenID Provider asserts as the Issuer Identifier
     * @param value Value to set for the issuer property.
     */
    public set issuer(value: string | undefined) {
        this._issuer = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("ca", this.ca);
        writer.writeObjectValue<OpenIDClaims>("claims", this.claims);
        writer.writeStringValue("client_id", this.client_id);
        writer.writeStringValue("client_secret", this.client_secret);
        writer.writeObjectValue<OpenIDIdentityProvider_extra_authorize_parameters>("extra_authorize_parameters", this.extra_authorize_parameters);
        writer.writeCollectionOfPrimitiveValues<string>("extra_scopes", this.extra_scopes);
        writer.writeStringValue("issuer", this.issuer);
        writer.writeAdditionalData(this.additionalData);
    };
}
