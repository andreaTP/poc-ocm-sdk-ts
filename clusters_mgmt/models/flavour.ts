import {createAWSFlavourFromDiscriminatorValue} from './createAWSFlavourFromDiscriminatorValue';
import {createFlavourNodesFromDiscriminatorValue} from './createFlavourNodesFromDiscriminatorValue';
import {createGCPFlavourFromDiscriminatorValue} from './createGCPFlavourFromDiscriminatorValue';
import {createNetworkFromDiscriminatorValue} from './createNetworkFromDiscriminatorValue';
import {AWSFlavour, FlavourNodes, GCPFlavour, Network} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Set of predefined properties of a cluster. For example, a _huge_ flavour can be a clusterwith 10 infra nodes and 1000 compute nodes.
 */
export class Flavour implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Specification for different classes of nodes inside a flavour. */
    private _aws?: AWSFlavour | undefined;
    /** Specification for different classes of nodes inside a flavour. */
    private _gcp?: GCPFlavour | undefined;
    /** Self link. */
    private _href?: string | undefined;
    /** Unique identifier of the object. */
    private _id?: string | undefined;
    /** Indicates the type of this object. Will be 'Flavour' if this is a complete object or 'FlavourLink' if it is just a link. */
    private _kind?: string | undefined;
    /** Human friendly identifier of the cluster, for example `4`.NOTE: Currently for all flavours the `id` and `name` attributes have exactly thesame values. */
    private _name?: string | undefined;
    /** Network configuration of a cluster. */
    private _network?: Network | undefined;
    /** Counts of different classes of nodes inside a flavour. */
    private _nodes?: FlavourNodes | undefined;
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
     * Gets the aws property value. Specification for different classes of nodes inside a flavour.
     * @returns a AWSFlavour
     */
    public get aws() {
        return this._aws;
    };
    /**
     * Sets the aws property value. Specification for different classes of nodes inside a flavour.
     * @param value Value to set for the aws property.
     */
    public set aws(value: AWSFlavour | undefined) {
        this._aws = value;
    };
    /**
     * Instantiates a new Flavour and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the gcp property value. Specification for different classes of nodes inside a flavour.
     * @returns a GCPFlavour
     */
    public get gcp() {
        return this._gcp;
    };
    /**
     * Sets the gcp property value. Specification for different classes of nodes inside a flavour.
     * @param value Value to set for the gcp property.
     */
    public set gcp(value: GCPFlavour | undefined) {
        this._gcp = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "aws": n => { this.aws = n.getObjectValue<AWSFlavour>(createAWSFlavourFromDiscriminatorValue); },
            "gcp": n => { this.gcp = n.getObjectValue<GCPFlavour>(createGCPFlavourFromDiscriminatorValue); },
            "href": n => { this.href = n.getStringValue(); },
            "id": n => { this.id = n.getStringValue(); },
            "kind": n => { this.kind = n.getStringValue(); },
            "name": n => { this.name = n.getStringValue(); },
            "network": n => { this.network = n.getObjectValue<Network>(createNetworkFromDiscriminatorValue); },
            "nodes": n => { this.nodes = n.getObjectValue<FlavourNodes>(createFlavourNodesFromDiscriminatorValue); },
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
     * Gets the kind property value. Indicates the type of this object. Will be 'Flavour' if this is a complete object or 'FlavourLink' if it is just a link.
     * @returns a string
     */
    public get kind() {
        return this._kind;
    };
    /**
     * Sets the kind property value. Indicates the type of this object. Will be 'Flavour' if this is a complete object or 'FlavourLink' if it is just a link.
     * @param value Value to set for the kind property.
     */
    public set kind(value: string | undefined) {
        this._kind = value;
    };
    /**
     * Gets the name property value. Human friendly identifier of the cluster, for example `4`.NOTE: Currently for all flavours the `id` and `name` attributes have exactly thesame values.
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. Human friendly identifier of the cluster, for example `4`.NOTE: Currently for all flavours the `id` and `name` attributes have exactly thesame values.
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
     * Gets the nodes property value. Counts of different classes of nodes inside a flavour.
     * @returns a FlavourNodes
     */
    public get nodes() {
        return this._nodes;
    };
    /**
     * Sets the nodes property value. Counts of different classes of nodes inside a flavour.
     * @param value Value to set for the nodes property.
     */
    public set nodes(value: FlavourNodes | undefined) {
        this._nodes = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<AWSFlavour>("aws", this.aws);
        writer.writeObjectValue<GCPFlavour>("gcp", this.gcp);
        writer.writeStringValue("href", this.href);
        writer.writeStringValue("id", this.id);
        writer.writeStringValue("kind", this.kind);
        writer.writeStringValue("name", this.name);
        writer.writeObjectValue<Network>("network", this.network);
        writer.writeObjectValue<FlavourNodes>("nodes", this.nodes);
        writer.writeAdditionalData(this.additionalData);
    };
}
