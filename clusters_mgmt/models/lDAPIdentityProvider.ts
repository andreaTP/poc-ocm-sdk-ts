import {createLDAPAttributesFromDiscriminatorValue} from './createLDAPAttributesFromDiscriminatorValue';
import {LDAPAttributes} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Details for `ldap` identity providers.
 */
export class LDAPIdentityProvider implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** LDAP attributes used to configure the LDAP identity provider. */
    private _attributes?: LDAPAttributes | undefined;
    /** Optional distinguished name to use to bind during the search phase. */
    private _bind_dn?: string | undefined;
    /** Optional password to use to bind during the search phase. */
    private _bind_password?: string | undefined;
    /** Certificate bundle to use to validate server certificates for the configured URL. */
    private _ca?: string | undefined;
    /** When `true` no TLS connection is made to the server. When `false` `ldaps://...` URLsconnect using TLS and `ldap://...` are upgraded to TLS. */
    private _insecure?: boolean | undefined;
    /** An https://tools.ietf.org/html/rfc2255[RFC 2255] URL which specifies the LDAP host andsearch parameters to use. */
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
     * Gets the attributes property value. LDAP attributes used to configure the LDAP identity provider.
     * @returns a LDAPAttributes
     */
    public get attributes() {
        return this._attributes;
    };
    /**
     * Sets the attributes property value. LDAP attributes used to configure the LDAP identity provider.
     * @param value Value to set for the attributes property.
     */
    public set attributes(value: LDAPAttributes | undefined) {
        this._attributes = value;
    };
    /**
     * Gets the bind_dn property value. Optional distinguished name to use to bind during the search phase.
     * @returns a string
     */
    public get bind_dn() {
        return this._bind_dn;
    };
    /**
     * Sets the bind_dn property value. Optional distinguished name to use to bind during the search phase.
     * @param value Value to set for the bind_dn property.
     */
    public set bind_dn(value: string | undefined) {
        this._bind_dn = value;
    };
    /**
     * Gets the bind_password property value. Optional password to use to bind during the search phase.
     * @returns a string
     */
    public get bind_password() {
        return this._bind_password;
    };
    /**
     * Sets the bind_password property value. Optional password to use to bind during the search phase.
     * @param value Value to set for the bind_password property.
     */
    public set bind_password(value: string | undefined) {
        this._bind_password = value;
    };
    /**
     * Gets the ca property value. Certificate bundle to use to validate server certificates for the configured URL.
     * @returns a string
     */
    public get ca() {
        return this._ca;
    };
    /**
     * Sets the ca property value. Certificate bundle to use to validate server certificates for the configured URL.
     * @param value Value to set for the ca property.
     */
    public set ca(value: string | undefined) {
        this._ca = value;
    };
    /**
     * Instantiates a new LDAPIdentityProvider and sets the default values.
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
            "attributes": n => { this.attributes = n.getObjectValue<LDAPAttributes>(createLDAPAttributesFromDiscriminatorValue); },
            "bind_dn": n => { this.bind_dn = n.getStringValue(); },
            "bind_password": n => { this.bind_password = n.getStringValue(); },
            "ca": n => { this.ca = n.getStringValue(); },
            "insecure": n => { this.insecure = n.getBooleanValue(); },
            "url": n => { this.url = n.getStringValue(); },
        };
    };
    /**
     * Gets the insecure property value. When `true` no TLS connection is made to the server. When `false` `ldaps://...` URLsconnect using TLS and `ldap://...` are upgraded to TLS.
     * @returns a boolean
     */
    public get insecure() {
        return this._insecure;
    };
    /**
     * Sets the insecure property value. When `true` no TLS connection is made to the server. When `false` `ldaps://...` URLsconnect using TLS and `ldap://...` are upgraded to TLS.
     * @param value Value to set for the insecure property.
     */
    public set insecure(value: boolean | undefined) {
        this._insecure = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<LDAPAttributes>("attributes", this.attributes);
        writer.writeStringValue("bind_dn", this.bind_dn);
        writer.writeStringValue("bind_password", this.bind_password);
        writer.writeStringValue("ca", this.ca);
        writer.writeBooleanValue("insecure", this.insecure);
        writer.writeStringValue("url", this.url);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the url property value. An https://tools.ietf.org/html/rfc2255[RFC 2255] URL which specifies the LDAP host andsearch parameters to use.
     * @returns a string
     */
    public get url() {
        return this._url;
    };
    /**
     * Sets the url property value. An https://tools.ietf.org/html/rfc2255[RFC 2255] URL which specifies the LDAP host andsearch parameters to use.
     * @param value Value to set for the url property.
     */
    public set url(value: string | undefined) {
        this._url = value;
    };
}
