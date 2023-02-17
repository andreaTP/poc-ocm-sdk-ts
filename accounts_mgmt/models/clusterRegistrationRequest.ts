import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ClusterRegistrationRequest implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The authorization_token property */
    private _authorization_token?: string | undefined;
    /** The cluster_id property */
    private _cluster_id?: string | undefined;
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
     * Gets the authorization_token property value. The authorization_token property
     * @returns a string
     */
    public get authorization_token() {
        return this._authorization_token;
    };
    /**
     * Sets the authorization_token property value. The authorization_token property
     * @param value Value to set for the authorization_token property.
     */
    public set authorization_token(value: string | undefined) {
        this._authorization_token = value;
    };
    /**
     * Gets the cluster_id property value. The cluster_id property
     * @returns a string
     */
    public get cluster_id() {
        return this._cluster_id;
    };
    /**
     * Sets the cluster_id property value. The cluster_id property
     * @param value Value to set for the cluster_id property.
     */
    public set cluster_id(value: string | undefined) {
        this._cluster_id = value;
    };
    /**
     * Instantiates a new ClusterRegistrationRequest and sets the default values.
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
            "authorization_token": n => { this.authorization_token = n.getStringValue(); },
            "cluster_id": n => { this.cluster_id = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("authorization_token", this.authorization_token);
        writer.writeStringValue("cluster_id", this.cluster_id);
        writer.writeAdditionalData(this.additionalData);
    };
}
