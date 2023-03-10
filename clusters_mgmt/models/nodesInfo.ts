import {createNodeInfoFromDiscriminatorValue} from './createNodeInfoFromDiscriminatorValue';
import {NodeInfo} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Provides information about the nodes in the cluster.
 */
export class NodesInfo implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The nodes property */
    private _nodes?: NodeInfo[] | undefined;
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
     * Instantiates a new NodesInfo and sets the default values.
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
            "nodes": n => { this.nodes = n.getCollectionOfObjectValues<NodeInfo>(createNodeInfoFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the nodes property value. The nodes property
     * @returns a NodeInfo
     */
    public get nodes() {
        return this._nodes;
    };
    /**
     * Sets the nodes property value. The nodes property
     * @param value Value to set for the nodes property.
     */
    public set nodes(value: NodeInfo[] | undefined) {
        this._nodes = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfObjectValues<NodeInfo>("nodes", this.nodes);
        writer.writeAdditionalData(this.additionalData);
    };
}
