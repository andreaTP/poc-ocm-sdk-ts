import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Hypershift configuration.
 */
export class HypershiftConfig implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Boolean flag indicating if the cluster should be creating using _Hypershift_.By default this is `false`.To enable it the cluster needs to be ROSA cluster and the organization of the user needsto have the `hypershift` capability enabled. */
    private _enabled?: boolean | undefined;
    /** Contains the name of the current management cluster for this Hypershift cluster.Empty for non Hypershift clusters. */
    private _management_cluster?: string | undefined;
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
     * Instantiates a new HypershiftConfig and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the enabled property value. Boolean flag indicating if the cluster should be creating using _Hypershift_.By default this is `false`.To enable it the cluster needs to be ROSA cluster and the organization of the user needsto have the `hypershift` capability enabled.
     * @returns a boolean
     */
    public get enabled() {
        return this._enabled;
    };
    /**
     * Sets the enabled property value. Boolean flag indicating if the cluster should be creating using _Hypershift_.By default this is `false`.To enable it the cluster needs to be ROSA cluster and the organization of the user needsto have the `hypershift` capability enabled.
     * @param value Value to set for the enabled property.
     */
    public set enabled(value: boolean | undefined) {
        this._enabled = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "enabled": n => { this.enabled = n.getBooleanValue(); },
            "management_cluster": n => { this.management_cluster = n.getStringValue(); },
        };
    };
    /**
     * Gets the management_cluster property value. Contains the name of the current management cluster for this Hypershift cluster.Empty for non Hypershift clusters.
     * @returns a string
     */
    public get management_cluster() {
        return this._management_cluster;
    };
    /**
     * Sets the management_cluster property value. Contains the name of the current management cluster for this Hypershift cluster.Empty for non Hypershift clusters.
     * @param value Value to set for the management_cluster property.
     */
    public set management_cluster(value: string | undefined) {
        this._management_cluster = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeBooleanValue("enabled", this.enabled);
        writer.writeStringValue("management_cluster", this.management_cluster);
        writer.writeAdditionalData(this.additionalData);
    };
}
