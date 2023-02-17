import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Cluster Mgmt reference settings of the cluster.
 */
export class ClusterManagementReference implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Cluster Mgmt ID  */
    private _cluster_id?: string | undefined;
    /** Reference link to external cluster_mgmt service based on ClusterId fieldClusterId is not the name of the field used by the external cluster_mgmt service */
    private _href?: string | undefined;
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
     * Gets the cluster_id property value. Cluster Mgmt ID 
     * @returns a string
     */
    public get cluster_id() {
        return this._cluster_id;
    };
    /**
     * Sets the cluster_id property value. Cluster Mgmt ID 
     * @param value Value to set for the cluster_id property.
     */
    public set cluster_id(value: string | undefined) {
        this._cluster_id = value;
    };
    /**
     * Instantiates a new ClusterManagementReference and sets the default values.
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
            "cluster_id": n => { this.cluster_id = n.getStringValue(); },
            "href": n => { this.href = n.getStringValue(); },
        };
    };
    /**
     * Gets the href property value. Reference link to external cluster_mgmt service based on ClusterId fieldClusterId is not the name of the field used by the external cluster_mgmt service
     * @returns a string
     */
    public get href() {
        return this._href;
    };
    /**
     * Sets the href property value. Reference link to external cluster_mgmt service based on ClusterId fieldClusterId is not the name of the field used by the external cluster_mgmt service
     * @param value Value to set for the href property.
     */
    public set href(value: string | undefined) {
        this._href = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("cluster_id", this.cluster_id);
        writer.writeStringValue("href", this.href);
        writer.writeAdditionalData(this.additionalData);
    };
}
