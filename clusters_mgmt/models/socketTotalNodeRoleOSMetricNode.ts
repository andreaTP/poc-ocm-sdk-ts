import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Representation of information from telemetry about a the socket capacityby node role and OS.
 */
export class SocketTotalNodeRoleOSMetricNode implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Representation of the node role for a cluster. */
    private _node_roles?: string[] | undefined;
    /** The operating system. */
    private _operating_system?: string | undefined;
    /** The total socket capacity of nodes with this set of roles and operating system. */
    private _socket_total?: number | undefined;
    /** The time property */
    private _time?: Date | undefined;
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
     * Instantiates a new SocketTotalNodeRoleOSMetricNode and sets the default values.
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
            "node_roles": n => { this.node_roles = n.getCollectionOfPrimitiveValues<string>(); },
            "operating_system": n => { this.operating_system = n.getStringValue(); },
            "socket_total": n => { this.socket_total = n.getNumberValue(); },
            "time": n => { this.time = n.getDateValue(); },
        };
    };
    /**
     * Gets the node_roles property value. Representation of the node role for a cluster.
     * @returns a string
     */
    public get node_roles() {
        return this._node_roles;
    };
    /**
     * Sets the node_roles property value. Representation of the node role for a cluster.
     * @param value Value to set for the node_roles property.
     */
    public set node_roles(value: string[] | undefined) {
        this._node_roles = value;
    };
    /**
     * Gets the operating_system property value. The operating system.
     * @returns a string
     */
    public get operating_system() {
        return this._operating_system;
    };
    /**
     * Sets the operating_system property value. The operating system.
     * @param value Value to set for the operating_system property.
     */
    public set operating_system(value: string | undefined) {
        this._operating_system = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfPrimitiveValues<string>("node_roles", this.node_roles);
        writer.writeStringValue("operating_system", this.operating_system);
        writer.writeNumberValue("socket_total", this.socket_total);
        writer.writeDateValue("time", this.time);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the socket_total property value. The total socket capacity of nodes with this set of roles and operating system.
     * @returns a float
     */
    public get socket_total() {
        return this._socket_total;
    };
    /**
     * Sets the socket_total property value. The total socket capacity of nodes with this set of roles and operating system.
     * @param value Value to set for the socket_total property.
     */
    public set socket_total(value: number | undefined) {
        this._socket_total = value;
    };
    /**
     * Gets the time property value. The time property
     * @returns a Date
     */
    public get time() {
        return this._time;
    };
    /**
     * Sets the time property value. The time property
     * @param value Value to set for the time property.
     */
    public set time(value: Date | undefined) {
        this._time = value;
    };
}
