import {AddOnInstallationState} from './addOnInstallationState';
import {createAddOnFromDiscriminatorValue} from './createAddOnFromDiscriminatorValue';
import {createAddOnInstallationBillingFromDiscriminatorValue} from './createAddOnInstallationBillingFromDiscriminatorValue';
import {createAddOnInstallationParameterFromDiscriminatorValue} from './createAddOnInstallationParameterFromDiscriminatorValue';
import {createAddOnVersionFromDiscriminatorValue} from './createAddOnVersionFromDiscriminatorValue';
import {createClusterFromDiscriminatorValue} from './createClusterFromDiscriminatorValue';
import {AddOn, AddOnInstallationBilling, AddOnInstallationParameter, AddOnVersion, Cluster} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Representation of an add-on installation in a cluster.
 */
export class AddOnInstallation implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Representation of an add-on that can be installed in a cluster. */
    private _addon?: AddOn | undefined;
    /** Representation of an add-on version. */
    private _addon_version?: AddOnVersion | undefined;
    /** Representation of an add-on installation billing. */
    private _billing?: AddOnInstallationBilling | undefined;
    /** Definition of an _OpenShift_ cluster.The `cloud_provider` attribute is a reference to the cloud provider. When acluster is retrieved it will be a link to the cloud provider, containing onlythe kind, id and href attributes:```json{  "cloud_provider": {    "kind": "CloudProviderLink",    "id": "123",    "href": "/api/clusters_mgmt/v1/cloud_providers/123"  }}```When a cluster is created this is optional, and if used it should contain theidentifier of the cloud provider to use:```json{  "cloud_provider": {    "id": "123",  }}```If not included, then the cluster will be created using the default cloudprovider, which is currently Amazon Web Services.The region attribute is mandatory when a cluster is created.The `aws.access_key_id`, `aws.secret_access_key` and `dns.base_domain`attributes are mandatory when creation a cluster with your own Amazon WebServices account. */
    private _cluster?: Cluster | undefined;
    /** Date and time when the add-on was initially installed in the cluster. */
    private _creation_timestamp?: Date | undefined;
    /** Self link. */
    private _href?: string | undefined;
    /** Unique identifier of the object. */
    private _id?: string | undefined;
    /** Indicates the type of this object. Will be 'AddOnInstallation' if this is a complete object or 'AddOnInstallationLink' if it is just a link. */
    private _kind?: string | undefined;
    /** Version of the operator installed by the add-on. */
    private _operator_version?: string | undefined;
    /** List of add-on parameters for this add-on installation. */
    private _parameters?: AddOnInstallationParameter[] | undefined;
    /** Representation of an add-on installation State field. */
    private _state?: AddOnInstallationState | undefined;
    /** Reason for the current State. */
    private _state_description?: string | undefined;
    /** Date and time when the add-on installation information was last updated. */
    private _updated_timestamp?: Date | undefined;
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
     * Gets the addon property value. Representation of an add-on that can be installed in a cluster.
     * @returns a AddOn
     */
    public get addon() {
        return this._addon;
    };
    /**
     * Sets the addon property value. Representation of an add-on that can be installed in a cluster.
     * @param value Value to set for the addon property.
     */
    public set addon(value: AddOn | undefined) {
        this._addon = value;
    };
    /**
     * Gets the addon_version property value. Representation of an add-on version.
     * @returns a AddOnVersion
     */
    public get addon_version() {
        return this._addon_version;
    };
    /**
     * Sets the addon_version property value. Representation of an add-on version.
     * @param value Value to set for the addon_version property.
     */
    public set addon_version(value: AddOnVersion | undefined) {
        this._addon_version = value;
    };
    /**
     * Gets the billing property value. Representation of an add-on installation billing.
     * @returns a AddOnInstallationBilling
     */
    public get billing() {
        return this._billing;
    };
    /**
     * Sets the billing property value. Representation of an add-on installation billing.
     * @param value Value to set for the billing property.
     */
    public set billing(value: AddOnInstallationBilling | undefined) {
        this._billing = value;
    };
    /**
     * Gets the cluster property value. Definition of an _OpenShift_ cluster.The `cloud_provider` attribute is a reference to the cloud provider. When acluster is retrieved it will be a link to the cloud provider, containing onlythe kind, id and href attributes:```json{  "cloud_provider": {    "kind": "CloudProviderLink",    "id": "123",    "href": "/api/clusters_mgmt/v1/cloud_providers/123"  }}```When a cluster is created this is optional, and if used it should contain theidentifier of the cloud provider to use:```json{  "cloud_provider": {    "id": "123",  }}```If not included, then the cluster will be created using the default cloudprovider, which is currently Amazon Web Services.The region attribute is mandatory when a cluster is created.The `aws.access_key_id`, `aws.secret_access_key` and `dns.base_domain`attributes are mandatory when creation a cluster with your own Amazon WebServices account.
     * @returns a Cluster
     */
    public get cluster() {
        return this._cluster;
    };
    /**
     * Sets the cluster property value. Definition of an _OpenShift_ cluster.The `cloud_provider` attribute is a reference to the cloud provider. When acluster is retrieved it will be a link to the cloud provider, containing onlythe kind, id and href attributes:```json{  "cloud_provider": {    "kind": "CloudProviderLink",    "id": "123",    "href": "/api/clusters_mgmt/v1/cloud_providers/123"  }}```When a cluster is created this is optional, and if used it should contain theidentifier of the cloud provider to use:```json{  "cloud_provider": {    "id": "123",  }}```If not included, then the cluster will be created using the default cloudprovider, which is currently Amazon Web Services.The region attribute is mandatory when a cluster is created.The `aws.access_key_id`, `aws.secret_access_key` and `dns.base_domain`attributes are mandatory when creation a cluster with your own Amazon WebServices account.
     * @param value Value to set for the cluster property.
     */
    public set cluster(value: Cluster | undefined) {
        this._cluster = value;
    };
    /**
     * Instantiates a new AddOnInstallation and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the creation_timestamp property value. Date and time when the add-on was initially installed in the cluster.
     * @returns a Date
     */
    public get creation_timestamp() {
        return this._creation_timestamp;
    };
    /**
     * Sets the creation_timestamp property value. Date and time when the add-on was initially installed in the cluster.
     * @param value Value to set for the creation_timestamp property.
     */
    public set creation_timestamp(value: Date | undefined) {
        this._creation_timestamp = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "addon": n => { this.addon = n.getObjectValue<AddOn>(createAddOnFromDiscriminatorValue); },
            "addon_version": n => { this.addon_version = n.getObjectValue<AddOnVersion>(createAddOnVersionFromDiscriminatorValue); },
            "billing": n => { this.billing = n.getObjectValue<AddOnInstallationBilling>(createAddOnInstallationBillingFromDiscriminatorValue); },
            "cluster": n => { this.cluster = n.getObjectValue<Cluster>(createClusterFromDiscriminatorValue); },
            "creation_timestamp": n => { this.creation_timestamp = n.getDateValue(); },
            "href": n => { this.href = n.getStringValue(); },
            "id": n => { this.id = n.getStringValue(); },
            "kind": n => { this.kind = n.getStringValue(); },
            "operator_version": n => { this.operator_version = n.getStringValue(); },
            "parameters": n => { this.parameters = n.getCollectionOfObjectValues<AddOnInstallationParameter>(createAddOnInstallationParameterFromDiscriminatorValue); },
            "state": n => { this.state = n.getEnumValue<AddOnInstallationState>(AddOnInstallationState); },
            "state_description": n => { this.state_description = n.getStringValue(); },
            "updated_timestamp": n => { this.updated_timestamp = n.getDateValue(); },
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
     * Gets the kind property value. Indicates the type of this object. Will be 'AddOnInstallation' if this is a complete object or 'AddOnInstallationLink' if it is just a link.
     * @returns a string
     */
    public get kind() {
        return this._kind;
    };
    /**
     * Sets the kind property value. Indicates the type of this object. Will be 'AddOnInstallation' if this is a complete object or 'AddOnInstallationLink' if it is just a link.
     * @param value Value to set for the kind property.
     */
    public set kind(value: string | undefined) {
        this._kind = value;
    };
    /**
     * Gets the operator_version property value. Version of the operator installed by the add-on.
     * @returns a string
     */
    public get operator_version() {
        return this._operator_version;
    };
    /**
     * Sets the operator_version property value. Version of the operator installed by the add-on.
     * @param value Value to set for the operator_version property.
     */
    public set operator_version(value: string | undefined) {
        this._operator_version = value;
    };
    /**
     * Gets the parameters property value. List of add-on parameters for this add-on installation.
     * @returns a AddOnInstallationParameter
     */
    public get parameters() {
        return this._parameters;
    };
    /**
     * Sets the parameters property value. List of add-on parameters for this add-on installation.
     * @param value Value to set for the parameters property.
     */
    public set parameters(value: AddOnInstallationParameter[] | undefined) {
        this._parameters = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<AddOn>("addon", this.addon);
        writer.writeObjectValue<AddOnVersion>("addon_version", this.addon_version);
        writer.writeObjectValue<AddOnInstallationBilling>("billing", this.billing);
        writer.writeObjectValue<Cluster>("cluster", this.cluster);
        writer.writeDateValue("creation_timestamp", this.creation_timestamp);
        writer.writeStringValue("href", this.href);
        writer.writeStringValue("id", this.id);
        writer.writeStringValue("kind", this.kind);
        writer.writeStringValue("operator_version", this.operator_version);
        writer.writeCollectionOfObjectValues<AddOnInstallationParameter>("parameters", this.parameters);
        writer.writeEnumValue<AddOnInstallationState>("state", this.state);
        writer.writeStringValue("state_description", this.state_description);
        writer.writeDateValue("updated_timestamp", this.updated_timestamp);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the state property value. Representation of an add-on installation State field.
     * @returns a AddOnInstallationState
     */
    public get state() {
        return this._state;
    };
    /**
     * Sets the state property value. Representation of an add-on installation State field.
     * @param value Value to set for the state property.
     */
    public set state(value: AddOnInstallationState | undefined) {
        this._state = value;
    };
    /**
     * Gets the state_description property value. Reason for the current State.
     * @returns a string
     */
    public get state_description() {
        return this._state_description;
    };
    /**
     * Sets the state_description property value. Reason for the current State.
     * @param value Value to set for the state_description property.
     */
    public set state_description(value: string | undefined) {
        this._state_description = value;
    };
    /**
     * Gets the updated_timestamp property value. Date and time when the add-on installation information was last updated.
     * @returns a Date
     */
    public get updated_timestamp() {
        return this._updated_timestamp;
    };
    /**
     * Sets the updated_timestamp property value. Date and time when the add-on installation information was last updated.
     * @param value Value to set for the updated_timestamp property.
     */
    public set updated_timestamp(value: Date | undefined) {
        this._updated_timestamp = value;
    };
}
