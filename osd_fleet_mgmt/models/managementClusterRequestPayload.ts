import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ManagementClusterRequestPayload implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The service_cluster_id_service_cluster_id_service_cluster_id_service_cluster_id_id property */
    private _service_cluster_id_service_cluster_id_service_cluster_id_service_cluster_id_id?: string | undefined;
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
     * Instantiates a new ManagementClusterRequestPayload and sets the default values.
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
            "service_cluster_id_service_cluster_id_service_cluster_id_service_cluster_id_id": n => { this.service_cluster_id_service_cluster_id_service_cluster_id_service_cluster_id_id = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("service_cluster_id_service_cluster_id_service_cluster_id_service_cluster_id_id", this.service_cluster_id_service_cluster_id_service_cluster_id_service_cluster_id_id);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the service_cluster_id_service_cluster_id_service_cluster_id_service_cluster_id_id property value. The service_cluster_id_service_cluster_id_service_cluster_id_service_cluster_id_id property
     * @returns a string
     */
    public get service_cluster_id_service_cluster_id_service_cluster_id_service_cluster_id_id() {
        return this._service_cluster_id_service_cluster_id_service_cluster_id_service_cluster_id_id;
    };
    /**
     * Sets the service_cluster_id_service_cluster_id_service_cluster_id_service_cluster_id_id property value. The service_cluster_id_service_cluster_id_service_cluster_id_service_cluster_id_id property
     * @param value Value to set for the service_cluster_id_service_cluster_id_service_cluster_id_service_cluster_id_id property.
     */
    public set service_cluster_id_service_cluster_id_service_cluster_id_service_cluster_id_id(value: string | undefined) {
        this._service_cluster_id_service_cluster_id_service_cluster_id_service_cluster_id_id = value;
    };
}
