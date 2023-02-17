import {SubscriptionStatus} from './subscriptionStatus';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Request to perform a resource access review.
 */
export class ResourceReviewRequest implements AdditionalDataHolder, Parsable {
    /** Name of the account that is trying to access the resource. */
    private _account_username?: string | undefined;
    /** Action that will be performed on the resource. */
    private _action?: string | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Subscriptions with these statuses will be excluded from results. */
    private _exclude_subscription_statuses?: SubscriptionStatus[] | undefined;
    /** If true, in the case when all subscriptions in organization are permitted, response will *not* includethese subscriptions' ID, but organization only. */
    private _reduce_cluster_list?: boolean | undefined;
    /** Type of resource. */
    private _resource_type?: string | undefined;
    /**
     * Gets the account_username property value. Name of the account that is trying to access the resource.
     * @returns a string
     */
    public get account_username() {
        return this._account_username;
    };
    /**
     * Sets the account_username property value. Name of the account that is trying to access the resource.
     * @param value Value to set for the account_username property.
     */
    public set account_username(value: string | undefined) {
        this._account_username = value;
    };
    /**
     * Gets the action property value. Action that will be performed on the resource.
     * @returns a string
     */
    public get action() {
        return this._action;
    };
    /**
     * Sets the action property value. Action that will be performed on the resource.
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
     * Instantiates a new ResourceReviewRequest and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the exclude_subscription_statuses property value. Subscriptions with these statuses will be excluded from results.
     * @returns a SubscriptionStatus
     */
    public get exclude_subscription_statuses() {
        return this._exclude_subscription_statuses;
    };
    /**
     * Sets the exclude_subscription_statuses property value. Subscriptions with these statuses will be excluded from results.
     * @param value Value to set for the exclude_subscription_statuses property.
     */
    public set exclude_subscription_statuses(value: SubscriptionStatus[] | undefined) {
        this._exclude_subscription_statuses = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "account_username": n => { this.account_username = n.getStringValue(); },
            "action": n => { this.action = n.getStringValue(); },
            "exclude_subscription_statuses": n => { this.exclude_subscription_statuses = n.getEnumValues<SubscriptionStatus>(SubscriptionStatus); },
            "reduce_cluster_list": n => { this.reduce_cluster_list = n.getBooleanValue(); },
            "resource_type": n => { this.resource_type = n.getStringValue(); },
        };
    };
    /**
     * Gets the reduce_cluster_list property value. If true, in the case when all subscriptions in organization are permitted, response will *not* includethese subscriptions' ID, but organization only.
     * @returns a boolean
     */
    public get reduce_cluster_list() {
        return this._reduce_cluster_list;
    };
    /**
     * Sets the reduce_cluster_list property value. If true, in the case when all subscriptions in organization are permitted, response will *not* includethese subscriptions' ID, but organization only.
     * @param value Value to set for the reduce_cluster_list property.
     */
    public set reduce_cluster_list(value: boolean | undefined) {
        this._reduce_cluster_list = value;
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
        this.exclude_subscription_statuses && writer.writeEnumValue<SubscriptionStatus>("exclude_subscription_statuses", ...this.exclude_subscription_statuses);
        writer.writeBooleanValue("reduce_cluster_list", this.reduce_cluster_list);
        writer.writeStringValue("resource_type", this.resource_type);
        writer.writeAdditionalData(this.additionalData);
    };
}
