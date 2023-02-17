import {createGithubIdentityProviderFromDiscriminatorValue} from './createGithubIdentityProviderFromDiscriminatorValue';
import {createGitlabIdentityProviderFromDiscriminatorValue} from './createGitlabIdentityProviderFromDiscriminatorValue';
import {createGoogleIdentityProviderFromDiscriminatorValue} from './createGoogleIdentityProviderFromDiscriminatorValue';
import {createHTPasswdIdentityProviderFromDiscriminatorValue} from './createHTPasswdIdentityProviderFromDiscriminatorValue';
import {createLDAPIdentityProviderFromDiscriminatorValue} from './createLDAPIdentityProviderFromDiscriminatorValue';
import {createOpenIDIdentityProviderFromDiscriminatorValue} from './createOpenIDIdentityProviderFromDiscriminatorValue';
import {IdentityProviderMappingMethod} from './identityProviderMappingMethod';
import {IdentityProviderType} from './identityProviderType';
import {GithubIdentityProvider, GitlabIdentityProvider, GoogleIdentityProvider, HTPasswdIdentityProvider, LDAPIdentityProvider, OpenIDIdentityProvider} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Representation of an identity provider.
 */
export class IdentityProvider implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** When `true` unauthenticated token requests from non-web clients (like the CLI) are sent a`WWW-Authenticate` challenge header for this provider. */
    private _challenge?: boolean | undefined;
    /** Details for `github` identity providers. */
    private _github?: GithubIdentityProvider | undefined;
    /** Details for `gitlab` identity providers. */
    private _gitlab?: GitlabIdentityProvider | undefined;
    /** Details for `google` identity providers. */
    private _google?: GoogleIdentityProvider | undefined;
    /** Self link. */
    private _href?: string | undefined;
    /** Details for `htpasswd` identity providers. */
    private _htpasswd?: HTPasswdIdentityProvider | undefined;
    /** Unique identifier of the object. */
    private _id?: string | undefined;
    /** Indicates the type of this object. Will be 'IdentityProvider' if this is a complete object or 'IdentityProviderLink' if it is just a link. */
    private _kind?: string | undefined;
    /** Details for `ldap` identity providers. */
    private _ldap?: LDAPIdentityProvider | undefined;
    /** When `true` unauthenticated token requests from web clients (like the web console) areredirected to the authorize URL to log in. */
    private _login?: boolean | undefined;
    /** Controls how mappings are established between provider identities and user objects. */
    private _mapping_method?: IdentityProviderMappingMethod | undefined;
    /** The name of the identity provider. */
    private _name?: string | undefined;
    /** Details for `openid` identity providers. */
    private _open_id?: OpenIDIdentityProvider | undefined;
    /** Type of identity provider. */
    private _type?: IdentityProviderType | undefined;
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
     * Gets the challenge property value. When `true` unauthenticated token requests from non-web clients (like the CLI) are sent a`WWW-Authenticate` challenge header for this provider.
     * @returns a boolean
     */
    public get challenge() {
        return this._challenge;
    };
    /**
     * Sets the challenge property value. When `true` unauthenticated token requests from non-web clients (like the CLI) are sent a`WWW-Authenticate` challenge header for this provider.
     * @param value Value to set for the challenge property.
     */
    public set challenge(value: boolean | undefined) {
        this._challenge = value;
    };
    /**
     * Instantiates a new IdentityProvider and sets the default values.
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
            "challenge": n => { this.challenge = n.getBooleanValue(); },
            "github": n => { this.github = n.getObjectValue<GithubIdentityProvider>(createGithubIdentityProviderFromDiscriminatorValue); },
            "gitlab": n => { this.gitlab = n.getObjectValue<GitlabIdentityProvider>(createGitlabIdentityProviderFromDiscriminatorValue); },
            "google": n => { this.google = n.getObjectValue<GoogleIdentityProvider>(createGoogleIdentityProviderFromDiscriminatorValue); },
            "href": n => { this.href = n.getStringValue(); },
            "htpasswd": n => { this.htpasswd = n.getObjectValue<HTPasswdIdentityProvider>(createHTPasswdIdentityProviderFromDiscriminatorValue); },
            "id": n => { this.id = n.getStringValue(); },
            "kind": n => { this.kind = n.getStringValue(); },
            "ldap": n => { this.ldap = n.getObjectValue<LDAPIdentityProvider>(createLDAPIdentityProviderFromDiscriminatorValue); },
            "login": n => { this.login = n.getBooleanValue(); },
            "mapping_method": n => { this.mapping_method = n.getEnumValue<IdentityProviderMappingMethod>(IdentityProviderMappingMethod); },
            "name": n => { this.name = n.getStringValue(); },
            "open_id": n => { this.open_id = n.getObjectValue<OpenIDIdentityProvider>(createOpenIDIdentityProviderFromDiscriminatorValue); },
            "type": n => { this.type = n.getEnumValue<IdentityProviderType>(IdentityProviderType); },
        };
    };
    /**
     * Gets the github property value. Details for `github` identity providers.
     * @returns a GithubIdentityProvider
     */
    public get github() {
        return this._github;
    };
    /**
     * Sets the github property value. Details for `github` identity providers.
     * @param value Value to set for the github property.
     */
    public set github(value: GithubIdentityProvider | undefined) {
        this._github = value;
    };
    /**
     * Gets the gitlab property value. Details for `gitlab` identity providers.
     * @returns a GitlabIdentityProvider
     */
    public get gitlab() {
        return this._gitlab;
    };
    /**
     * Sets the gitlab property value. Details for `gitlab` identity providers.
     * @param value Value to set for the gitlab property.
     */
    public set gitlab(value: GitlabIdentityProvider | undefined) {
        this._gitlab = value;
    };
    /**
     * Gets the google property value. Details for `google` identity providers.
     * @returns a GoogleIdentityProvider
     */
    public get google() {
        return this._google;
    };
    /**
     * Sets the google property value. Details for `google` identity providers.
     * @param value Value to set for the google property.
     */
    public set google(value: GoogleIdentityProvider | undefined) {
        this._google = value;
    };
    /**
     * Gets the href property value. Self link.
     * @returns a string
     */
    public get href() {
        return this._href;
    };
    /**
     * Sets the href property value. Self link.
     * @param value Value to set for the href property.
     */
    public set href(value: string | undefined) {
        this._href = value;
    };
    /**
     * Gets the htpasswd property value. Details for `htpasswd` identity providers.
     * @returns a HTPasswdIdentityProvider
     */
    public get htpasswd() {
        return this._htpasswd;
    };
    /**
     * Sets the htpasswd property value. Details for `htpasswd` identity providers.
     * @param value Value to set for the htpasswd property.
     */
    public set htpasswd(value: HTPasswdIdentityProvider | undefined) {
        this._htpasswd = value;
    };
    /**
     * Gets the id property value. Unique identifier of the object.
     * @returns a string
     */
    public get id() {
        return this._id;
    };
    /**
     * Sets the id property value. Unique identifier of the object.
     * @param value Value to set for the id property.
     */
    public set id(value: string | undefined) {
        this._id = value;
    };
    /**
     * Gets the kind property value. Indicates the type of this object. Will be 'IdentityProvider' if this is a complete object or 'IdentityProviderLink' if it is just a link.
     * @returns a string
     */
    public get kind() {
        return this._kind;
    };
    /**
     * Sets the kind property value. Indicates the type of this object. Will be 'IdentityProvider' if this is a complete object or 'IdentityProviderLink' if it is just a link.
     * @param value Value to set for the kind property.
     */
    public set kind(value: string | undefined) {
        this._kind = value;
    };
    /**
     * Gets the ldap property value. Details for `ldap` identity providers.
     * @returns a LDAPIdentityProvider
     */
    public get ldap() {
        return this._ldap;
    };
    /**
     * Sets the ldap property value. Details for `ldap` identity providers.
     * @param value Value to set for the ldap property.
     */
    public set ldap(value: LDAPIdentityProvider | undefined) {
        this._ldap = value;
    };
    /**
     * Gets the login property value. When `true` unauthenticated token requests from web clients (like the web console) areredirected to the authorize URL to log in.
     * @returns a boolean
     */
    public get login() {
        return this._login;
    };
    /**
     * Sets the login property value. When `true` unauthenticated token requests from web clients (like the web console) areredirected to the authorize URL to log in.
     * @param value Value to set for the login property.
     */
    public set login(value: boolean | undefined) {
        this._login = value;
    };
    /**
     * Gets the mapping_method property value. Controls how mappings are established between provider identities and user objects.
     * @returns a IdentityProviderMappingMethod
     */
    public get mapping_method() {
        return this._mapping_method;
    };
    /**
     * Sets the mapping_method property value. Controls how mappings are established between provider identities and user objects.
     * @param value Value to set for the mapping_method property.
     */
    public set mapping_method(value: IdentityProviderMappingMethod | undefined) {
        this._mapping_method = value;
    };
    /**
     * Gets the name property value. The name of the identity provider.
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. The name of the identity provider.
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Gets the open_id property value. Details for `openid` identity providers.
     * @returns a OpenIDIdentityProvider
     */
    public get open_id() {
        return this._open_id;
    };
    /**
     * Sets the open_id property value. Details for `openid` identity providers.
     * @param value Value to set for the open_id property.
     */
    public set open_id(value: OpenIDIdentityProvider | undefined) {
        this._open_id = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeBooleanValue("challenge", this.challenge);
        writer.writeObjectValue<GithubIdentityProvider>("github", this.github);
        writer.writeObjectValue<GitlabIdentityProvider>("gitlab", this.gitlab);
        writer.writeObjectValue<GoogleIdentityProvider>("google", this.google);
        writer.writeStringValue("href", this.href);
        writer.writeObjectValue<HTPasswdIdentityProvider>("htpasswd", this.htpasswd);
        writer.writeStringValue("id", this.id);
        writer.writeStringValue("kind", this.kind);
        writer.writeObjectValue<LDAPIdentityProvider>("ldap", this.ldap);
        writer.writeBooleanValue("login", this.login);
        writer.writeEnumValue<IdentityProviderMappingMethod>("mapping_method", this.mapping_method);
        writer.writeStringValue("name", this.name);
        writer.writeObjectValue<OpenIDIdentityProvider>("open_id", this.open_id);
        writer.writeEnumValue<IdentityProviderType>("type", this.type);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the type property value. Type of identity provider.
     * @returns a IdentityProviderType
     */
    public get type() {
        return this._type;
    };
    /**
     * Sets the type property value. Type of identity provider.
     * @param value Value to set for the type property.
     */
    public set type(value: IdentityProviderType | undefined) {
        this._type = value;
    };
}
