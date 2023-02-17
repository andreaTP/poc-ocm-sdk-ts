import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Contains the result of performing a resource access review.
 */
export class ResourceReview implements AdditionalDataHolder, Parsable {
    /** Name of the account that is trying to perform the access. */
    private _account_username?: string | undefined;
    /** Action that will the user is trying to perform. */
    private _action?: string | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Identifiers of the Clusters (internal ids) that the user has permission to perform the action upon. */
    private _cluster_ids?: string[] | undefined;
    /** Identifiers which Clusters (external ids) that the user has permission to perform the action upon. */
    private _cluster_uuids?: string[] | undefined;
    /** Identifiers of the organizations that the user has permissions to perform the actionupon. */
    private _organization_ids?: string[] | undefined;
    /** Type of resource. */
    private _resource_type?: string | undefined;
    /** Identifiers of the subscriptions that the user has permission to perform the action upon. */
    private _subscription_ids?: string[] | undefined;
    /**
     * Gets the account_username property value. Name of the account that is trying to perform the access.
     * @returns a string
     */
    public get account_username() {
        return this._account_username;
    };
    /**
     * Sets the account_username property value. Name of the account that is trying to perform the access.
     * @param value Value to set for the account_username property.
     */
    public set account_username(value: string | undefined) {
        this._account_username = value;
    };
    /**
     * Gets the action property value. Action that will the user is trying to perform.
     * @returns a string
     */
    public get action() {
        return this._action;
    };
    /**
     * Sets the action property value. Action that will the user is trying to perform.
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
     * Gets the cluster_ids property value. Identifiers of the Clusters (internal ids) that the user has permission to perform the action upon.
     * @returns a string
     */
    public get cluster_ids() {
        return this._cluster_ids;
    };
    /**
     * Sets the cluster_ids property value. Identifiers of the Clusters (internal ids) that the user has permission to perform the action upon.
     * @param value Value to set for the cluster_ids property.
     */
    public set cluster_ids(value: string[] | undefined) {
        this._cluster_ids = value;
    };
    /**
     * Gets the cluster_uuids property value. Identifiers which Clusters (external ids) that the user has permission to perform the action upon.
     * @returns a string
     */
    public get cluster_uuids() {
        return this._cluster_uuids;
    };
    /**
     * Sets the cluster_uuids property value. Identifiers which Clusters (external ids) that the user has permission to perform the action upon.
     * @param value Value to set for the cluster_uuids property.
     */
    public set cluster_uuids(value: string[] | undefined) {
        this._cluster_uuids = value;
    };
    /**
     * Instantiates a new ResourceReview and sets the default values.
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
            "action": n => { this.action = n.getStringValue(); },
            "cluster_ids": n => { this.cluster_ids = n.getCollectionOfPrimitiveValues<string>(); },
            "cluster_uuids": n => { this.cluster_uuids = n.getCollectionOfPrimitiveValues<string>(); },
            "organization_ids": n => { this.organization_ids = n.getCollectionOfPrimitiveValues<string>(); },
            "resource_type": n => { this.resource_type = n.getStringValue(); },
            "subscription_ids": n => { this.subscription_ids = n.getCollectionOfPrimitiveValues<string>(); },
        };
    };
    /**
     * Gets the organization_ids property value. Identifiers of the organizations that the user has permissions to perform the actionupon.
     * @returns a string
     */
    public get organization_ids() {
        return this._organization_ids;
    };
    /**
     * Sets the organization_ids property value. Identifiers of the organizations that the user has permissions to perform the actionupon.
     * @param value Value to set for the organization_ids property.
     */
    public set organization_ids(value: string[] | undefined) {
        this._organization_ids = value;
    };
    /**
     * Gets the resource_type property value. Type of resource.
     * @returns a string
     */
    public get resource_type() {
        return this._resource_type;
    };
    /**
     * Sets the resource_type property value. Type of resource.
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
        writer.writeStringValue("action", this.action);
        writer.writeCollectionOfPrimitiveValues<string>("cluster_ids", this.cluster_ids);
        writer.writeCollectionOfPrimitiveValues<string>("cluster_uuids", this.cluster_uuids);
        writer.writeCollectionOfPrimitiveValues<string>("organization_ids", this.organization_ids);
        writer.writeStringValue("resource_type", this.resource_type);
        writer.writeCollectionOfPrimitiveValues<string>("subscription_ids", this.subscription_ids);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the subscription_ids property value. Identifiers of the subscriptions that the user has permission to perform the action upon.
     * @returns a string
     */
    public get subscription_ids() {
        return this._subscription_ids;
    };
    /**
     * Sets the subscription_ids property value. Identifiers of the subscriptions that the user has permission to perform the action upon.
     * @param value Value to set for the subscription_ids property.
     */
    public set subscription_ids(value: string[] | undefined) {
        this._subscription_ids = value;
    };
}
