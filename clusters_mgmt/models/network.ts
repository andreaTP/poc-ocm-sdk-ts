import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Network configuration of a cluster.
 */
export class Network implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Network host prefix which is defaulted to `23` if not specified. */
    private _host_prefix?: number | undefined;
    /** IP address block from which to assign machine IP addresses, for example `10.0.0.0/16`. */
    private _machine_cidr?: string | undefined;
    /** IP address block from which to assign pod IP addresses, for example `10.128.0.0/14`. */
    private _pod_cidr?: string | undefined;
    /** IP address block from which to assign service IP addresses, for example `172.30.0.0/16`. */
    private _service_cidr?: string | undefined;
    /** The main controller responsible for rendering the core networking components. */
    private _type?: string | undefined;
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
     * Instantiates a new Network and sets the default values.
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
            "host_prefix": n => { this.host_prefix = n.getNumberValue(); },
            "machine_cidr": n => { this.machine_cidr = n.getStringValue(); },
            "pod_cidr": n => { this.pod_cidr = n.getStringValue(); },
            "service_cidr": n => { this.service_cidr = n.getStringValue(); },
            "type": n => { this.type = n.getStringValue(); },
        };
    };
    /**
     * Gets the host_prefix property value. Network host prefix which is defaulted to `23` if not specified.
     * @returns a integer
     */
    public get host_prefix() {
        return this._host_prefix;
    };
    /**
     * Sets the host_prefix property value. Network host prefix which is defaulted to `23` if not specified.
     * @param value Value to set for the host_prefix property.
     */
    public set host_prefix(value: number | undefined) {
        this._host_prefix = value;
    };
    /**
     * Gets the machine_cidr property value. IP address block from which to assign machine IP addresses, for example `10.0.0.0/16`.
     * @returns a string
     */
    public get machine_cidr() {
        return this._machine_cidr;
    };
    /**
     * Sets the machine_cidr property value. IP address block from which to assign machine IP addresses, for example `10.0.0.0/16`.
     * @param value Value to set for the machine_cidr property.
     */
    public set machine_cidr(value: string | undefined) {
        this._machine_cidr = value;
    };
    /**
     * Gets the pod_cidr property value. IP address block from which to assign pod IP addresses, for example `10.128.0.0/14`.
     * @returns a string
     */
    public get pod_cidr() {
        return this._pod_cidr;
    };
    /**
     * Sets the pod_cidr property value. IP address block from which to assign pod IP addresses, for example `10.128.0.0/14`.
     * @param value Value to set for the pod_cidr property.
     */
    public set pod_cidr(value: string | undefined) {
        this._pod_cidr = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeNumberValue("host_prefix", this.host_prefix);
        writer.writeStringValue("machine_cidr", this.machine_cidr);
        writer.writeStringValue("pod_cidr", this.pod_cidr);
        writer.writeStringValue("service_cidr", this.service_cidr);
        writer.writeStringValue("type", this.type);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the service_cidr property value. IP address block from which to assign service IP addresses, for example `172.30.0.0/16`.
     * @returns a string
     */
    public get service_cidr() {
        return this._service_cidr;
    };
    /**
     * Sets the service_cidr property value. IP address block from which to assign service IP addresses, for example `172.30.0.0/16`.
     * @param value Value to set for the service_cidr property.
     */
    public set service_cidr(value: string | undefined) {
        this._service_cidr = value;
    };
    /**
     * Gets the type property value. The main controller responsible for rendering the core networking components.
     * @returns a string
     */
    public get type() {
        return this._type;
    };
    /**
     * Sets the type property value. The main controller responsible for rendering the core networking components.
     * @param value Value to set for the type property.
     */
    public set type(value: string | undefined) {
        this._type = value;
    };
}
