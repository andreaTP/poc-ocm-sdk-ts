import {createCloudProviderFromDiscriminatorValue} from './createCloudProviderFromDiscriminatorValue';
import {createCloudRegionFromDiscriminatorValue} from './createCloudRegionFromDiscriminatorValue';
import {createServerConfigFromDiscriminatorValue} from './createServerConfigFromDiscriminatorValue';
import {CloudProvider, CloudRegion, ServerConfig} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Contains the properties of the provision shard, including AWS and GCP related configurations
 */
export class ProvisionShard implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Representation of a server config */
    private _aws_account_operator_config?: ServerConfig | undefined;
    /** Contains the AWS base domain. */
    private _aws_base_domain?: string | undefined;
    /** Cloud provider. */
    private _cloud_provider?: CloudProvider | undefined;
    /** Date and time when the provision shard was initially created, using theformat defined in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt). */
    private _creation_timestamp?: Date | undefined;
    /** Contains the GCP base domain. */
    private _gcp_base_domain?: string | undefined;
    /** Representation of a server config */
    private _gcp_project_operator?: ServerConfig | undefined;
    /** Representation of a server config */
    private _hive_config?: ServerConfig | undefined;
    /** Self link. */
    private _href?: string | undefined;
    /** Representation of a server config */
    private _hypershift_config?: ServerConfig | undefined;
    /** Unique identifier of the object. */
    private _id?: string | undefined;
    /** Indicates the type of this object. Will be 'ProvisionShard' if this is a complete object or 'ProvisionShardLink' if it is just a link. */
    private _kind?: string | undefined;
    /** Date and time when the provision shard was last updated, using theformat defined in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt). */
    private _last_update_timestamp?: Date | undefined;
    /** Contains the name of the management cluster for Hypershift clusters that are assigned to this shard.This field is populated by OCM, and must not be overwritten via API. */
    private _management_cluster?: string | undefined;
    /** Description of a region of a cloud provider. */
    private _region?: CloudRegion | undefined;
    /** Status of the provision shard. Possible values: active/maintenance/offline. */
    private _status?: string | undefined;
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
     * Gets the aws_account_operator_config property value. Representation of a server config
     * @returns a ServerConfig
     */
    public get aws_account_operator_config() {
        return this._aws_account_operator_config;
    };
    /**
     * Sets the aws_account_operator_config property value. Representation of a server config
     * @param value Value to set for the aws_account_operator_config property.
     */
    public set aws_account_operator_config(value: ServerConfig | undefined) {
        this._aws_account_operator_config = value;
    };
    /**
     * Gets the aws_base_domain property value. Contains the AWS base domain.
     * @returns a string
     */
    public get aws_base_domain() {
        return this._aws_base_domain;
    };
    /**
     * Sets the aws_base_domain property value. Contains the AWS base domain.
     * @param value Value to set for the aws_base_domain property.
     */
    public set aws_base_domain(value: string | undefined) {
        this._aws_base_domain = value;
    };
    /**
     * Gets the cloud_provider property value. Cloud provider.
     * @returns a CloudProvider
     */
    public get cloud_provider() {
        return this._cloud_provider;
    };
    /**
     * Sets the cloud_provider property value. Cloud provider.
     * @param value Value to set for the cloud_provider property.
     */
    public set cloud_provider(value: CloudProvider | undefined) {
        this._cloud_provider = value;
    };
    /**
     * Instantiates a new ProvisionShard and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the creation_timestamp property value. Date and time when the provision shard was initially created, using theformat defined in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt).
     * @returns a Date
     */
    public get creation_timestamp() {
        return this._creation_timestamp;
    };
    /**
     * Sets the creation_timestamp property value. Date and time when the provision shard was initially created, using theformat defined in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt).
     * @param value Value to set for the creation_timestamp property.
     */
    public set creation_timestamp(value: Date | undefined) {
        this._creation_timestamp = value;
    };
    /**
     * Gets the gcp_base_domain property value. Contains the GCP base domain.
     * @returns a string
     */
    public get gcp_base_domain() {
        return this._gcp_base_domain;
    };
    /**
     * Sets the gcp_base_domain property value. Contains the GCP base domain.
     * @param value Value to set for the gcp_base_domain property.
     */
    public set gcp_base_domain(value: string | undefined) {
        this._gcp_base_domain = value;
    };
    /**
     * Gets the gcp_project_operator property value. Representation of a server config
     * @returns a ServerConfig
     */
    public get gcp_project_operator() {
        return this._gcp_project_operator;
    };
    /**
     * Sets the gcp_project_operator property value. Representation of a server config
     * @param value Value to set for the gcp_project_operator property.
     */
    public set gcp_project_operator(value: ServerConfig | undefined) {
        this._gcp_project_operator = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "aws_account_operator_config": n => { this.aws_account_operator_config = n.getObjectValue<ServerConfig>(createServerConfigFromDiscriminatorValue); },
            "aws_base_domain": n => { this.aws_base_domain = n.getStringValue(); },
            "cloud_provider": n => { this.cloud_provider = n.getObjectValue<CloudProvider>(createCloudProviderFromDiscriminatorValue); },
            "creation_timestamp": n => { this.creation_timestamp = n.getDateValue(); },
            "gcp_base_domain": n => { this.gcp_base_domain = n.getStringValue(); },
            "gcp_project_operator": n => { this.gcp_project_operator = n.getObjectValue<ServerConfig>(createServerConfigFromDiscriminatorValue); },
            "hive_config": n => { this.hive_config = n.getObjectValue<ServerConfig>(createServerConfigFromDiscriminatorValue); },
            "href": n => { this.href = n.getStringValue(); },
            "hypershift_config": n => { this.hypershift_config = n.getObjectValue<ServerConfig>(createServerConfigFromDiscriminatorValue); },
            "id": n => { this.id = n.getStringValue(); },
            "kind": n => { this.kind = n.getStringValue(); },
            "last_update_timestamp": n => { this.last_update_timestamp = n.getDateValue(); },
            "management_cluster": n => { this.management_cluster = n.getStringValue(); },
            "region": n => { this.region = n.getObjectValue<CloudRegion>(createCloudRegionFromDiscriminatorValue); },
            "status": n => { this.status = n.getStringValue(); },
        };
    };
    /**
     * Gets the hive_config property value. Representation of a server config
     * @returns a ServerConfig
     */
    public get hive_config() {
        return this._hive_config;
    };
    /**
     * Sets the hive_config property value. Representation of a server config
     * @param value Value to set for the hive_config property.
     */
    public set hive_config(value: ServerConfig | undefined) {
        this._hive_config = value;
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
     * Gets the hypershift_config property value. Representation of a server config
     * @returns a ServerConfig
     */
    public get hypershift_config() {
        return this._hypershift_config;
    };
    /**
     * Sets the hypershift_config property value. Representation of a server config
     * @param value Value to set for the hypershift_config property.
     */
    public set hypershift_config(value: ServerConfig | undefined) {
        this._hypershift_config = value;
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
     * Gets the kind property value. Indicates the type of this object. Will be 'ProvisionShard' if this is a complete object or 'ProvisionShardLink' if it is just a link.
     * @returns a string
     */
    public get kind() {
        return this._kind;
    };
    /**
     * Sets the kind property value. Indicates the type of this object. Will be 'ProvisionShard' if this is a complete object or 'ProvisionShardLink' if it is just a link.
     * @param value Value to set for the kind property.
     */
    public set kind(value: string | undefined) {
        this._kind = value;
    };
    /**
     * Gets the last_update_timestamp property value. Date and time when the provision shard was last updated, using theformat defined in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt).
     * @returns a Date
     */
    public get last_update_timestamp() {
        return this._last_update_timestamp;
    };
    /**
     * Sets the last_update_timestamp property value. Date and time when the provision shard was last updated, using theformat defined in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt).
     * @param value Value to set for the last_update_timestamp property.
     */
    public set last_update_timestamp(value: Date | undefined) {
        this._last_update_timestamp = value;
    };
    /**
     * Gets the management_cluster property value. Contains the name of the management cluster for Hypershift clusters that are assigned to this shard.This field is populated by OCM, and must not be overwritten via API.
     * @returns a string
     */
    public get management_cluster() {
        return this._management_cluster;
    };
    /**
     * Sets the management_cluster property value. Contains the name of the management cluster for Hypershift clusters that are assigned to this shard.This field is populated by OCM, and must not be overwritten via API.
     * @param value Value to set for the management_cluster property.
     */
    public set management_cluster(value: string | undefined) {
        this._management_cluster = value;
    };
    /**
     * Gets the region property value. Description of a region of a cloud provider.
     * @returns a CloudRegion
     */
    public get region() {
        return this._region;
    };
    /**
     * Sets the region property value. Description of a region of a cloud provider.
     * @param value Value to set for the region property.
     */
    public set region(value: CloudRegion | undefined) {
        this._region = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<ServerConfig>("aws_account_operator_config", this.aws_account_operator_config);
        writer.writeStringValue("aws_base_domain", this.aws_base_domain);
        writer.writeObjectValue<CloudProvider>("cloud_provider", this.cloud_provider);
        writer.writeDateValue("creation_timestamp", this.creation_timestamp);
        writer.writeStringValue("gcp_base_domain", this.gcp_base_domain);
        writer.writeObjectValue<ServerConfig>("gcp_project_operator", this.gcp_project_operator);
        writer.writeObjectValue<ServerConfig>("hive_config", this.hive_config);
        writer.writeStringValue("href", this.href);
        writer.writeObjectValue<ServerConfig>("hypershift_config", this.hypershift_config);
        writer.writeStringValue("id", this.id);
        writer.writeStringValue("kind", this.kind);
        writer.writeDateValue("last_update_timestamp", this.last_update_timestamp);
        writer.writeStringValue("management_cluster", this.management_cluster);
        writer.writeObjectValue<CloudRegion>("region", this.region);
        writer.writeStringValue("status", this.status);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the status property value. Status of the provision shard. Possible values: active/maintenance/offline.
     * @returns a string
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. Status of the provision shard. Possible values: active/maintenance/offline.
     * @param value Value to set for the status property.
     */
    public set status(value: string | undefined) {
        this._status = value;
    };
}
