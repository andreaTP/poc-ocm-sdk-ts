import {createSocketTotalNodeRoleOSMetricNodeFromDiscriminatorValue} from './createSocketTotalNodeRoleOSMetricNodeFromDiscriminatorValue';
import {SocketTotalNodeRoleOSMetricNode} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Representation of information from telemetry about the socket capacity by noderole and OS of a cluster.
 */
export class SocketTotalsNodeRoleOSMetricNode implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The socket_totals property */
    private _socket_totals?: SocketTotalNodeRoleOSMetricNode[] | undefined;
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
     * Instantiates a new SocketTotalsNodeRoleOSMetricNode and sets the default values.
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
            "socket_totals": n => { this.socket_totals = n.getCollectionOfObjectValues<SocketTotalNodeRoleOSMetricNode>(createSocketTotalNodeRoleOSMetricNodeFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfObjectValues<SocketTotalNodeRoleOSMetricNode>("socket_totals", this.socket_totals);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the socket_totals property value. The socket_totals property
     * @returns a SocketTotalNodeRoleOSMetricNode
     */
    public get socket_totals() {
        return this._socket_totals;
    };
    /**
     * Sets the socket_totals property value. The socket_totals property
     * @param value Value to set for the socket_totals property.
     */
    public set socket_totals(value: SocketTotalNodeRoleOSMetricNode[] | undefined) {
        this._socket_totals = value;
    };
}
