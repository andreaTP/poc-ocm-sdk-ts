import {ClusterConfigurationMode} from './clusterConfigurationMode';
import {ClusterState} from './clusterState';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Detailed status of a cluster.
 */
export class ClusterStatus implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Configuration mode of a cluster. */
    private _configuration_mode?: ClusterConfigurationMode | undefined;
    /** Current Replicas available for a Hosted Cluster */
    private _current_compute?: number | undefined;
    /** Detailed description of the cluster status. */
    private _description?: string | undefined;
    /** DNSReady from Provisioner */
    private _dns_ready?: boolean | undefined;
    /** Self link. */
    private _href?: string | undefined;
    /** Unique identifier of the object. */
    private _id?: string | undefined;
    /** Indicates the type of this object. Will be 'ClusterStatus' if this is a complete object or 'ClusterStatusLink' if it is just a link. */
    private _kind?: string | undefined;
    /** Limited Support Reason Count */
    private _limited_support_reason_count?: number | undefined;
    /** OIDCReady from user configuration. */
    private _oidc_ready?: boolean | undefined;
    /** Provisioning Error Code */
    private _provision_error_code?: string | undefined;
    /** Provisioning Error Message */
    private _provision_error_message?: string | undefined;
    /** Overall state of a cluster. */
    private _state?: ClusterState | undefined;
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
     * Gets the configuration_mode property value. Configuration mode of a cluster.
     * @returns a ClusterConfigurationMode
     */
    public get configuration_mode() {
        return this._configuration_mode;
    };
    /**
     * Sets the configuration_mode property value. Configuration mode of a cluster.
     * @param value Value to set for the configuration_mode property.
     */
    public set configuration_mode(value: ClusterConfigurationMode | undefined) {
        this._configuration_mode = value;
    };
    /**
     * Instantiates a new ClusterStatus and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the current_compute property value. Current Replicas available for a Hosted Cluster
     * @returns a integer
     */
    public get current_compute() {
        return this._current_compute;
    };
    /**
     * Sets the current_compute property value. Current Replicas available for a Hosted Cluster
     * @param value Value to set for the current_compute property.
     */
    public set current_compute(value: number | undefined) {
        this._current_compute = value;
    };
    /**
     * Gets the description property value. Detailed description of the cluster status.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. Detailed description of the cluster status.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Gets the dns_ready property value. DNSReady from Provisioner
     * @returns a boolean
     */
    public get dns_ready() {
        return this._dns_ready;
    };
    /**
     * Sets the dns_ready property value. DNSReady from Provisioner
     * @param value Value to set for the dns_ready property.
     */
    public set dns_ready(value: boolean | undefined) {
        this._dns_ready = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "configuration_mode": n => { this.configuration_mode = n.getEnumValue<ClusterConfigurationMode>(ClusterConfigurationMode); },
            "current_compute": n => { this.current_compute = n.getNumberValue(); },
            "description": n => { this.description = n.getStringValue(); },
            "dns_ready": n => { this.dns_ready = n.getBooleanValue(); },
            "href": n => { this.href = n.getStringValue(); },
            "id": n => { this.id = n.getStringValue(); },
            "kind": n => { this.kind = n.getStringValue(); },
            "limited_support_reason_count": n => { this.limited_support_reason_count = n.getNumberValue(); },
            "oidc_ready": n => { this.oidc_ready = n.getBooleanValue(); },
            "provision_error_code": n => { this.provision_error_code = n.getStringValue(); },
            "provision_error_message": n => { this.provision_error_message = n.getStringValue(); },
            "state": n => { this.state = n.getEnumValue<ClusterState>(ClusterState); },
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
     * Gets the kind property value. Indicates the type of this object. Will be 'ClusterStatus' if this is a complete object or 'ClusterStatusLink' if it is just a link.
     * @returns a string
     */
    public get kind() {
        return this._kind;
    };
    /**
     * Sets the kind property value. Indicates the type of this object. Will be 'ClusterStatus' if this is a complete object or 'ClusterStatusLink' if it is just a link.
     * @param value Value to set for the kind property.
     */
    public set kind(value: string | undefined) {
        this._kind = value;
    };
    /**
     * Gets the limited_support_reason_count property value. Limited Support Reason Count
     * @returns a integer
     */
    public get limited_support_reason_count() {
        return this._limited_support_reason_count;
    };
    /**
     * Sets the limited_support_reason_count property value. Limited Support Reason Count
     * @param value Value to set for the limited_support_reason_count property.
     */
    public set limited_support_reason_count(value: number | undefined) {
        this._limited_support_reason_count = value;
    };
    /**
     * Gets the oidc_ready property value. OIDCReady from user configuration.
     * @returns a boolean
     */
    public get oidc_ready() {
        return this._oidc_ready;
    };
    /**
     * Sets the oidc_ready property value. OIDCReady from user configuration.
     * @param value Value to set for the oidc_ready property.
     */
    public set oidc_ready(value: boolean | undefined) {
        this._oidc_ready = value;
    };
    /**
     * Gets the provision_error_code property value. Provisioning Error Code
     * @returns a string
     */
    public get provision_error_code() {
        return this._provision_error_code;
    };
    /**
     * Sets the provision_error_code property value. Provisioning Error Code
     * @param value Value to set for the provision_error_code property.
     */
    public set provision_error_code(value: string | undefined) {
        this._provision_error_code = value;
    };
    /**
     * Gets the provision_error_message property value. Provisioning Error Message
     * @returns a string
     */
    public get provision_error_message() {
        return this._provision_error_message;
    };
    /**
     * Sets the provision_error_message property value. Provisioning Error Message
     * @param value Value to set for the provision_error_message property.
     */
    public set provision_error_message(value: string | undefined) {
        this._provision_error_message = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeEnumValue<ClusterConfigurationMode>("configuration_mode", this.configuration_mode);
        writer.writeNumberValue("current_compute", this.current_compute);
        writer.writeStringValue("description", this.description);
        writer.writeBooleanValue("dns_ready", this.dns_ready);
        writer.writeStringValue("href", this.href);
        writer.writeStringValue("id", this.id);
        writer.writeStringValue("kind", this.kind);
        writer.writeNumberValue("limited_support_reason_count", this.limited_support_reason_count);
        writer.writeBooleanValue("oidc_ready", this.oidc_ready);
        writer.writeStringValue("provision_error_code", this.provision_error_code);
        writer.writeStringValue("provision_error_message", this.provision_error_message);
        writer.writeEnumValue<ClusterState>("state", this.state);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the state property value. Overall state of a cluster.
     * @returns a ClusterState
     */
    public get state() {
        return this._state;
    };
    /**
     * Sets the state property value. Overall state of a cluster.
     * @param value Value to set for the state property.
     */
    public set state(value: ClusterState | undefined) {
        this._state = value;
    };
}
