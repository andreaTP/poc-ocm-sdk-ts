import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Representation of a capability review.
 */
export class CapabilityReviewRequest implements AdditionalDataHolder, Parsable {
    /** Defines the username of the account of which capability is being reviewed. */
    private _account_username?: string | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Capability to review [manage_cluster_admin]. */
    private _capability?: string | undefined;
    /** Indicates which Cluster (internal id) the resource type belongs to. */
    private _cluster_id?: string | undefined;
    /** Indicates which Organization the resource type belongs to. */
    private _organization_id?: string | undefined;
    /** Indicates the type of the resource.See uhc-account-manager/openapi/openapi.yaml for a list of possible values. */
    private _resource_type?: string | undefined;
    /** Indicates which Subscription the resource type belongs to. */
    private _subscription_id?: string | undefined;
    /** Type of capability [Cluster]. */
    private _type?: string | undefined;
    /**
     * Gets the account_username property value. Defines the username of the account of which capability is being reviewed.
     * @returns a string
     */
    public get account_username() {
        return this._account_username;
    };
    /**
     * Sets the account_username property value. Defines the username of the account of which capability is being reviewed.
     * @param value Value to set for the account_username property.
     */
    public set account_username(value: string | undefined) {
        this._account_username = value;
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
     * Gets the capability property value. Capability to review [manage_cluster_admin].
     * @returns a string
     */
    public get capability() {
        return this._capability;
    };
    /**
     * Sets the capability property value. Capability to review [manage_cluster_admin].
     * @param value Value to set for the capability property.
     */
    public set capability(value: string | undefined) {
        this._capability = value;
    };
    /**
     * Gets the cluster_id property value. Indicates which Cluster (internal id) the resource type belongs to.
     * @returns a string
     */
    public get cluster_id() {
        return this._cluster_id;
    };
    /**
     * Sets the cluster_id property value. Indicates which Cluster (internal id) the resource type belongs to.
     * @param value Value to set for the cluster_id property.
     */
    public set cluster_id(value: string | undefined) {
        this._cluster_id = value;
    };
    /**
     * Instantiates a new CapabilityReviewRequest and sets the default values.
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
            "account_username": n => { this.account_username = n.getStringValue(); },
            "capability": n => { this.capability = n.getStringValue(); },
            "cluster_id": n => { this.cluster_id = n.getStringValue(); },
            "organization_id": n => { this.organization_id = n.getStringValue(); },
            "resource_type": n => { this.resource_type = n.getStringValue(); },
            "subscription_id": n => { this.subscription_id = n.getStringValue(); },
            "type": n => { this.type = n.getStringValue(); },
        };
    };
    /**
     * Gets the organization_id property value. Indicates which Organization the resource type belongs to.
     * @returns a string
     */
    public get organization_id() {
        return this._organization_id;
    };
    /**
     * Sets the organization_id property value. Indicates which Organization the resource type belongs to.
     * @param value Value to set for the organization_id property.
     */
    public set organization_id(value: string | undefined) {
        this._organization_id = value;
    };
    /**
     * Gets the resource_type property value. Indicates the type of the resource.See uhc-account-manager/openapi/openapi.yaml for a list of possible values.
     * @returns a string
     */
    public get resource_type() {
        return this._resource_type;
    };
    /**
     * Sets the resource_type property value. Indicates the type of the resource.See uhc-account-manager/openapi/openapi.yaml for a list of possible values.
     * @param value Value to set for the resource_type property.
     */
    public set resource_type(value: string | undefined) {
        this._resource_type = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("account_username", this.account_username);
        writer.writeStringValue("capability", this.capability);
        writer.writeStringValue("cluster_id", this.cluster_id);
        writer.writeStringValue("organization_id", this.organization_id);
        writer.writeStringValue("resource_type", this.resource_type);
        writer.writeStringValue("subscription_id", this.subscription_id);
        writer.writeStringValue("type", this.type);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the subscription_id property value. Indicates which Subscription the resource type belongs to.
     * @returns a string
     */
    public get subscription_id() {
        return this._subscription_id;
    };
    /**
     * Sets the subscription_id property value. Indicates which Subscription the resource type belongs to.
     * @param value Value to set for the subscription_id property.
     */
    public set subscription_id(value: string | undefined) {
        this._subscription_id = value;
    };
    /**
     * Gets the type property value. Type of capability [Cluster].
     * @returns a string
     */
    public get type() {
        return this._type;
    };
    /**
     * Sets the type property value. Type of capability [Cluster].
     * @param value Value to set for the type property.
     */
    public set type(value: string | undefined) {
        this._type = value;
    };
}
