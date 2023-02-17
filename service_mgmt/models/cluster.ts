import {createAWSFromDiscriminatorValue} from './createAWSFromDiscriminatorValue';
import {createCloudRegionFromDiscriminatorValue} from './createCloudRegionFromDiscriminatorValue';
import {createCluster_propertiesFromDiscriminatorValue} from './createCluster_propertiesFromDiscriminatorValue';
import {createClusterAPIFromDiscriminatorValue} from './createClusterAPIFromDiscriminatorValue';
import {createClusterNodesFromDiscriminatorValue} from './createClusterNodesFromDiscriminatorValue';
import {createNetworkFromDiscriminatorValue} from './createNetworkFromDiscriminatorValue';
import {AWS, CloudRegion, Cluster_properties, ClusterAPI, ClusterNodes, Network} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * This represents the parameters needed by Managed Service to create a cluster.
 */
export class Cluster implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Information about the API of a cluster. */
    private _api?: ClusterAPI | undefined;
    /** _Amazon Web Services_ specific settings of a cluster. */
    private _aws?: AWS | undefined;
    /** DisplayName is the name of the cluster for display purposes.It can contain spaces. */
    private _display_name?: string | undefined;
    /** The href property */
    private _href?: string | undefined;
    /** The id property */
    private _id?: string | undefined;
    /** Flag indicating if the cluster should be created with nodes indifferent availability zones or all the nodes in a single onerandomly selected. */
    private _multi_az?: boolean | undefined;
    /** The name property */
    private _name?: string | undefined;
    /** Network configuration of a cluster. */
    private _network?: Network | undefined;
    /** The nodes property */
    private _nodes?: ClusterNodes | undefined;
    /** The properties property */
    private _properties?: Cluster_properties | undefined;
    /** Description of a region of a cloud provider. */
    private _region?: CloudRegion | undefined;
    /** The state property */
    private _state?: string | undefined;
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
     * Gets the api property value. Information about the API of a cluster.
     * @returns a ClusterAPI
     */
    public get api() {
        return this._api;
    };
    /**
     * Sets the api property value. Information about the API of a cluster.
     * @param value Value to set for the api property.
     */
    public set api(value: ClusterAPI | undefined) {
        this._api = value;
    };
    /**
     * Gets the aws property value. _Amazon Web Services_ specific settings of a cluster.
     * @returns a AWS
     */
    public get aws() {
        return this._aws;
    };
    /**
     * Sets the aws property value. _Amazon Web Services_ specific settings of a cluster.
     * @param value Value to set for the aws property.
     */
    public set aws(value: AWS | undefined) {
        this._aws = value;
    };
    /**
     * Instantiates a new Cluster and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the display_name property value. DisplayName is the name of the cluster for display purposes.It can contain spaces.
     * @returns a string
     */
    public get display_name() {
        return this._display_name;
    };
    /**
     * Sets the display_name property value. DisplayName is the name of the cluster for display purposes.It can contain spaces.
     * @param value Value to set for the display_name property.
     */
    public set display_name(value: string | undefined) {
        this._display_name = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "api": n => { this.api = n.getObjectValue<ClusterAPI>(createClusterAPIFromDiscriminatorValue); },
            "aws": n => { this.aws = n.getObjectValue<AWS>(createAWSFromDiscriminatorValue); },
            "display_name": n => { this.display_name = n.getStringValue(); },
            "href": n => { this.href = n.getStringValue(); },
            "id": n => { this.id = n.getStringValue(); },
            "multi_az": n => { this.multi_az = n.getBooleanValue(); },
            "name": n => { this.name = n.getStringValue(); },
            "network": n => { this.network = n.getObjectValue<Network>(createNetworkFromDiscriminatorValue); },
            "nodes": n => { this.nodes = n.getObjectValue<ClusterNodes>(createClusterNodesFromDiscriminatorValue); },
            "properties": n => { this.properties = n.getObjectValue<Cluster_properties>(createCluster_propertiesFromDiscriminatorValue); },
            "region": n => { this.region = n.getObjectValue<CloudRegion>(createCloudRegionFromDiscriminatorValue); },
            "state": n => { this.state = n.getStringValue(); },
        };
    };
    /**
     * Gets the href property value. The href property
     * @returns a string
     */
    public get href() {
        return this._href;
    };
    /**
     * Sets the href property value. The href property
     * @param value Value to set for the href property.
     */
    public set href(value: string | undefined) {
        this._href = value;
    };
    /**
     * Gets the id property value. The id property
     * @returns a string
     */
    public get id() {
        return this._id;
    };
    /**
     * Sets the id property value. The id property
     * @param value Value to set for the id property.
     */
    public set id(value: string | undefined) {
        this._id = value;
    };
    /**
     * Gets the multi_az property value. Flag indicating if the cluster should be created with nodes indifferent availability zones or all the nodes in a single onerandomly selected.
     * @returns a boolean
     */
    public get multi_az() {
        return this._multi_az;
    };
    /**
     * Sets the multi_az property value. Flag indicating if the cluster should be created with nodes indifferent availability zones or all the nodes in a single onerandomly selected.
     * @param value Value to set for the multi_az property.
     */
    public set multi_az(value: boolean | undefined) {
        this._multi_az = value;
    };
    /**
     * Gets the name property value. The name property
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. The name property
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Gets the network property value. Network configuration of a cluster.
     * @returns a Network
     */
    public get network() {
        return this._network;
    };
    /**
     * Sets the network property value. Network configuration of a cluster.
     * @param value Value to set for the network property.
     */
    public set network(value: Network | undefined) {
        this._network = value;
    };
    /**
     * Gets the nodes property value. The nodes property
     * @returns a ClusterNodes
     */
    public get nodes() {
        return this._nodes;
    };
    /**
     * Sets the nodes property value. The nodes property
     * @param value Value to set for the nodes property.
     */
    public set nodes(value: ClusterNodes | undefined) {
        this._nodes = value;
    };
    /**
     * Gets the properties property value. The properties property
     * @returns a Cluster_properties
     */
    public get properties() {
        return this._properties;
    };
    /**
     * Sets the properties property value. The properties property
     * @param value Value to set for the properties property.
     */
    public set properties(value: Cluster_properties | undefined) {
        this._properties = value;
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
        writer.writeObjectValue<ClusterAPI>("api", this.api);
        writer.writeObjectValue<AWS>("aws", this.aws);
        writer.writeStringValue("display_name", this.display_name);
        writer.writeStringValue("href", this.href);
        writer.writeStringValue("id", this.id);
        writer.writeBooleanValue("multi_az", this.multi_az);
        writer.writeStringValue("name", this.name);
        writer.writeObjectValue<Network>("network", this.network);
        writer.writeObjectValue<ClusterNodes>("nodes", this.nodes);
        writer.writeObjectValue<Cluster_properties>("properties", this.properties);
        writer.writeObjectValue<CloudRegion>("region", this.region);
        writer.writeStringValue("state", this.state);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the state property value. The state property
     * @returns a string
     */
    public get state() {
        return this._state;
    };
    /**
     * Sets the state property value. The state property
     * @param value Value to set for the state property.
     */
    public set state(value: string | undefined) {
        this._state = value;
    };
}
