import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ClusterRegistrationResponse implements AdditionalDataHolder, Parsable {
    /** The account_id property */
    private _account_id?: string | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The authorization_token property */
    private _authorization_token?: string | undefined;
    /** The cluster_id property */
    private _cluster_id?: string | undefined;
    /** Cluster registration expiration. */
    private _expires_at?: string | undefined;
    /**
     * Gets the account_id property value. The account_id property
     * @returns a string
     */
    public get account_id() {
        return this._account_id;
    };
    /**
     * Sets the account_id property value. The account_id property
     * @param value Value to set for the account_id property.
     */
    public set account_id(value: string | undefined) {
        this._account_id = value;
    };
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
     * Instantiates a new ClusterRegistrationResponse and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the expires_at property value. Cluster registration expiration.
     * @returns a string
     */
    public get expires_at() {
        return this._expires_at;
    };
    /**
     * Sets the expires_at property value. Cluster registration expiration.
     * @param value Value to set for the expires_at property.
     */
    public set expires_at(value: string | undefined) {
        this._expires_at = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "account_id": n => { this.account_id = n.getStringValue(); },
            "authorization_token": n => { this.authorization_token = n.getStringValue(); },
            "cluster_id": n => { this.cluster_id = n.getStringValue(); },
            "expires_at": n => { this.expires_at = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("account_id", this.account_id);
        writer.writeStringValue("authorization_token", this.authorization_token);
        writer.writeStringValue("cluster_id", this.cluster_id);
        writer.writeStringValue("expires_at", this.expires_at);
        writer.writeAdditionalData(this.additionalData);
    };
}
