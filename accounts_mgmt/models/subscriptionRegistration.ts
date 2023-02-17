import {PlanID} from './planID';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Registration of a new subscription.
 */
export class SubscriptionRegistration implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** External cluster ID. */
    private _cluster_uuid?: string | undefined;
    /** Console URL of subscription (optional). */
    private _console_url?: string | undefined;
    /** Display name of subscription (optional). */
    private _display_name?: string | undefined;
    /** Plan ID of subscription. */
    private _plan_id?: PlanID | undefined;
    /** Status of subscription. */
    private _status?: string | undefined;
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
     * Gets the cluster_uuid property value. External cluster ID.
     * @returns a string
     */
    public get cluster_uuid() {
        return this._cluster_uuid;
    };
    /**
     * Sets the cluster_uuid property value. External cluster ID.
     * @param value Value to set for the cluster_uuid property.
     */
    public set cluster_uuid(value: string | undefined) {
        this._cluster_uuid = value;
    };
    /**
     * Gets the console_url property value. Console URL of subscription (optional).
     * @returns a string
     */
    public get console_url() {
        return this._console_url;
    };
    /**
     * Sets the console_url property value. Console URL of subscription (optional).
     * @param value Value to set for the console_url property.
     */
    public set console_url(value: string | undefined) {
        this._console_url = value;
    };
    /**
     * Instantiates a new SubscriptionRegistration and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the display_name property value. Display name of subscription (optional).
     * @returns a string
     */
    public get display_name() {
        return this._display_name;
    };
    /**
     * Sets the display_name property value. Display name of subscription (optional).
     * @param value Value to set for the display_name property.
     */
    public set display_name(value: string | undefined) {
        this._display_name = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "cluster_uuid": n => { this.cluster_uuid = n.getStringValue(); },
            "console_url": n => { this.console_url = n.getStringValue(); },
            "display_name": n => { this.display_name = n.getStringValue(); },
            "plan_id": n => { this.plan_id = n.getEnumValue<PlanID>(PlanID); },
            "status": n => { this.status = n.getStringValue(); },
        };
    };
    /**
     * Gets the plan_id property value. Plan ID of subscription.
     * @returns a PlanID
     */
    public get plan_id() {
        return this._plan_id;
    };
    /**
     * Sets the plan_id property value. Plan ID of subscription.
     * @param value Value to set for the plan_id property.
     */
    public set plan_id(value: PlanID | undefined) {
        this._plan_id = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("cluster_uuid", this.cluster_uuid);
        writer.writeStringValue("console_url", this.console_url);
        writer.writeStringValue("display_name", this.display_name);
        writer.writeEnumValue<PlanID>("plan_id", this.plan_id);
        writer.writeStringValue("status", this.status);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the status property value. Status of subscription.
     * @returns a string
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. Status of subscription.
     * @param value Value to set for the status property.
     */
    public set status(value: string | undefined) {
        this._status = value;
    };
}
