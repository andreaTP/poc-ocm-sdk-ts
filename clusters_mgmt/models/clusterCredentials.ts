import {createAdminCredentialsFromDiscriminatorValue} from './createAdminCredentialsFromDiscriminatorValue';
import {createSSHCredentialsFromDiscriminatorValue} from './createSSHCredentialsFromDiscriminatorValue';
import {AdminCredentials, SSHCredentials} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Credentials of the a cluster.
 */
export class ClusterCredentials implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Temporary administrator credentials generated during the installation of thecluster. */
    private _admin?: AdminCredentials | undefined;
    /** Self link. */
    private _href?: string | undefined;
    /** Unique identifier of the object. */
    private _id?: string | undefined;
    /** Indicates the type of this object. Will be 'ClusterCredentials' if this is a complete object or 'ClusterCredentialsLink' if it is just a link. */
    private _kind?: string | undefined;
    /** Administrator _kubeconfig_ file for the cluster. */
    private _kubeconfig?: string | undefined;
    /** SSH key pair of a cluster. */
    private _ssh?: SSHCredentials | undefined;
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
     * Gets the admin property value. Temporary administrator credentials generated during the installation of thecluster.
     * @returns a AdminCredentials
     */
    public get admin() {
        return this._admin;
    };
    /**
     * Sets the admin property value. Temporary administrator credentials generated during the installation of thecluster.
     * @param value Value to set for the admin property.
     */
    public set admin(value: AdminCredentials | undefined) {
        this._admin = value;
    };
    /**
     * Instantiates a new ClusterCredentials and sets the default values.
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
            "admin": n => { this.admin = n.getObjectValue<AdminCredentials>(createAdminCredentialsFromDiscriminatorValue); },
            "href": n => { this.href = n.getStringValue(); },
            "id": n => { this.id = n.getStringValue(); },
            "kind": n => { this.kind = n.getStringValue(); },
            "kubeconfig": n => { this.kubeconfig = n.getStringValue(); },
            "ssh": n => { this.ssh = n.getObjectValue<SSHCredentials>(createSSHCredentialsFromDiscriminatorValue); },
        };
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
     * Gets the kind property value. Indicates the type of this object. Will be 'ClusterCredentials' if this is a complete object or 'ClusterCredentialsLink' if it is just a link.
     * @returns a string
     */
    public get kind() {
        return this._kind;
    };
    /**
     * Sets the kind property value. Indicates the type of this object. Will be 'ClusterCredentials' if this is a complete object or 'ClusterCredentialsLink' if it is just a link.
     * @param value Value to set for the kind property.
     */
    public set kind(value: string | undefined) {
        this._kind = value;
    };
    /**
     * Gets the kubeconfig property value. Administrator _kubeconfig_ file for the cluster.
     * @returns a string
     */
    public get kubeconfig() {
        return this._kubeconfig;
    };
    /**
     * Sets the kubeconfig property value. Administrator _kubeconfig_ file for the cluster.
     * @param value Value to set for the kubeconfig property.
     */
    public set kubeconfig(value: string | undefined) {
        this._kubeconfig = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<AdminCredentials>("admin", this.admin);
        writer.writeStringValue("href", this.href);
        writer.writeStringValue("id", this.id);
        writer.writeStringValue("kind", this.kind);
        writer.writeStringValue("kubeconfig", this.kubeconfig);
        writer.writeObjectValue<SSHCredentials>("ssh", this.ssh);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the ssh property value. SSH key pair of a cluster.
     * @returns a SSHCredentials
     */
    public get ssh() {
        return this._ssh;
    };
    /**
     * Sets the ssh property value. SSH key pair of a cluster.
     * @param value Value to set for the ssh property.
     */
    public set ssh(value: SSHCredentials | undefined) {
        this._ssh = value;
    };
}
