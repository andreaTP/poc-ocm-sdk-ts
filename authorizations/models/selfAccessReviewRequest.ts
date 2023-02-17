import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Representation of an access review performed against oneself
 */
export class SelfAccessReviewRequest implements AdditionalDataHolder, Parsable {
    /** Indicates the action, one of: [get,list,create,delete,update] */
    private _action?: string | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Indicates which Cluster (internal id) the resource type belongs to */
    private _cluster_id?: string | undefined;
    /** Indicates which Cluster (external id) the resource type belongs to */
    private _cluster_uuid?: string | undefined;
    /** Indicates which Organization the resource type belongs to */
    private _organization_id?: string | undefined;
    /** Indicates the type of the resource an action would be taken on.See uhc-account-manager/openapi/openapi.yaml for a list of possible values */
    private _resource_type?: string | undefined;
    /** Indicates which Subscription the resource type belongs to */
    private _subscription_id?: string | undefined;
    /**
     * Gets the action property value. Indicates the action, one of: [get,list,create,delete,update]
     * @returns a string
     */
    public get action() {
        return this._action;
    };
    /**
     * Sets the action property value. Indicates the action, one of: [get,list,create,delete,update]
     * @param value Value to set for the action property.
     */
    public set action(value: string | undefined) {
        this._action = value;
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
     * Gets the cluster_id property value. Indicates which Cluster (internal id) the resource type belongs to
     * @returns a string
     */
    public get cluster_id() {
        return this._cluster_id;
    };
    /**
     * Sets the cluster_id property value. Indicates which Cluster (internal id) the resource type belongs to
     * @param value Value to set for the cluster_id property.
     */
    public set cluster_id(value: string | undefined) {
        this._cluster_id = value;
    };
    /**
     * Gets the cluster_uuid property value. Indicates which Cluster (external id) the resource type belongs to
     * @returns a string
     */
    public get cluster_uuid() {
        return this._cluster_uuid;
    };
    /**
     * Sets the cluster_uuid property value. Indicates which Cluster (external id) the resource type belongs to
     * @param value Value to set for the cluster_uuid property.
     */
    public set cluster_uuid(value: string | undefined) {
        this._cluster_uuid = value;
    };
    /**
     * Instantiates a new SelfAccessReviewRequest and sets the default values.
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
            "action": n => { this.action = n.getStringValue(); },
            "cluster_id": n => { this.cluster_id = n.getStringValue(); },
            "cluster_uuid": n => { this.cluster_uuid = n.getStringValue(); },
            "organization_id": n => { this.organization_id = n.getStringValue(); },
            "resource_type": n => { this.resource_type = n.getStringValue(); },
            "subscription_id": n => { this.subscription_id = n.getStringValue(); },
        };
    };
    /**
     * Gets the organization_id property value. Indicates which Organization the resource type belongs to
     * @returns a string
     */
    public get organization_id() {
        return this._organization_id;
    };
    /**
     * Sets the organization_id property value. Indicates which Organization the resource type belongs to
     * @param value Value to set for the organization_id property.
     */
    public set organization_id(value: string | undefined) {
        this._organization_id = value;
    };
    /**
     * Gets the resource_type property value. Indicates the type of the resource an action would be taken on.See uhc-account-manager/openapi/openapi.yaml for a list of possible values
     * @returns a string
     */
    public get resource_type() {
        return this._resource_type;
    };
    /**
     * Sets the resource_type property value. Indicates the type of the resource an action would be taken on.See uhc-account-manager/openapi/openapi.yaml for a list of possible values
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
        writer.writeStringValue("action", this.action);
        writer.writeStringValue("cluster_id", this.cluster_id);
        writer.writeStringValue("cluster_uuid", this.cluster_uuid);
        writer.writeStringValue("organization_id", this.organization_id);
        writer.writeStringValue("resource_type", this.resource_type);
        writer.writeStringValue("subscription_id", this.subscription_id);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the subscription_id property value. Indicates which Subscription the resource type belongs to
     * @returns a string
     */
    public get subscription_id() {
        return this._subscription_id;
    };
    /**
     * Sets the subscription_id property value. Indicates which Subscription the resource type belongs to
     * @param value Value to set for the subscription_id property.
     */
    public set subscription_id(value: string | undefined) {
        this._subscription_id = value;
    };
}
