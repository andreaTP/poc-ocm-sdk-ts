import {NodeType} from './nodeType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Provides information about a node from specific type in the cluster.
 */
export class NodeInfo implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The amount of the nodes from this type. */
    private _amount?: number | undefined;
    /** Type of node received via telemetry. */
    private _type?: NodeType | undefined;
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
     * Gets the amount property value. The amount of the nodes from this type.
     * @returns a integer
     */
    public get amount() {
        return this._amount;
    };
    /**
     * Sets the amount property value. The amount of the nodes from this type.
     * @param value Value to set for the amount property.
     */
    public set amount(value: number | undefined) {
        this._amount = value;
    };
    /**
     * Instantiates a new NodeInfo and sets the default values.
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
            "amount": n => { this.amount = n.getNumberValue(); },
            "type": n => { this.type = n.getEnumValue<NodeType>(NodeType); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeNumberValue("amount", this.amount);
        writer.writeEnumValue<NodeType>("type", this.type);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the type property value. Type of node received via telemetry.
     * @returns a NodeType
     */
    public get type() {
        return this._type;
    };
    /**
     * Sets the type property value. Type of node received via telemetry.
     * @param value Value to set for the type property.
     */
    public set type(value: NodeType | undefined) {
        this._type = value;
    };
}
