import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * GCP Network configuration of a cluster.
 */
export class GCPNetwork implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Compute subnet used by the cluster. */
    private _compute_subnet?: string | undefined;
    /** Control plane subnet used by the cluster. */
    private _control_plane_subnet?: string | undefined;
    /** VPC mame used by the cluster. */
    private _vpc_name?: string | undefined;
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
     * Gets the compute_subnet property value. Compute subnet used by the cluster.
     * @returns a string
     */
    public get compute_subnet() {
        return this._compute_subnet;
    };
    /**
     * Sets the compute_subnet property value. Compute subnet used by the cluster.
     * @param value Value to set for the compute_subnet property.
     */
    public set compute_subnet(value: string | undefined) {
        this._compute_subnet = value;
    };
    /**
     * Instantiates a new GCPNetwork and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the control_plane_subnet property value. Control plane subnet used by the cluster.
     * @returns a string
     */
    public get control_plane_subnet() {
        return this._control_plane_subnet;
    };
    /**
     * Sets the control_plane_subnet property value. Control plane subnet used by the cluster.
     * @param value Value to set for the control_plane_subnet property.
     */
    public set control_plane_subnet(value: string | undefined) {
        this._control_plane_subnet = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "compute_subnet": n => { this.compute_subnet = n.getStringValue(); },
            "control_plane_subnet": n => { this.control_plane_subnet = n.getStringValue(); },
            "vpc_name": n => { this.vpc_name = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("compute_subnet", this.compute_subnet);
        writer.writeStringValue("control_plane_subnet", this.control_plane_subnet);
        writer.writeStringValue("vpc_name", this.vpc_name);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the vpc_name property value. VPC mame used by the cluster.
     * @returns a string
     */
    public get vpc_name() {
        return this._vpc_name;
    };
    /**
     * Sets the vpc_name property value. VPC mame used by the cluster.
     * @param value Value to set for the vpc_name property.
     */
    public set vpc_name(value: string | undefined) {
        this._vpc_name = value;
    };
}
