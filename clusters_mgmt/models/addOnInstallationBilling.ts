import {BillingModel} from './billingModel';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Representation of an add-on installation billing.
 */
export class AddOnInstallationBilling implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Account ID for billing market place */
    private _billing_marketplace_account?: string | undefined;
    /** Billing model for cluster resources. */
    private _billing_model?: BillingModel | undefined;
    /** Self link. */
    private _href?: string | undefined;
    /** Unique identifier of the object. */
    private _id?: string | undefined;
    /** Indicates the type of this object. Will be 'AddOnInstallationBilling' if this is a complete object or 'AddOnInstallationBillingLink' if it is just a link. */
    private _kind?: string | undefined;
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
     * Gets the billing_marketplace_account property value. Account ID for billing market place
     * @returns a string
     */
    public get billing_marketplace_account() {
        return this._billing_marketplace_account;
    };
    /**
     * Sets the billing_marketplace_account property value. Account ID for billing market place
     * @param value Value to set for the billing_marketplace_account property.
     */
    public set billing_marketplace_account(value: string | undefined) {
        this._billing_marketplace_account = value;
    };
    /**
     * Gets the billing_model property value. Billing model for cluster resources.
     * @returns a BillingModel
     */
    public get billing_model() {
        return this._billing_model;
    };
    /**
     * Sets the billing_model property value. Billing model for cluster resources.
     * @param value Value to set for the billing_model property.
     */
    public set billing_model(value: BillingModel | undefined) {
        this._billing_model = value;
    };
    /**
     * Instantiates a new AddOnInstallationBilling and sets the default values.
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
            "billing_marketplace_account": n => { this.billing_marketplace_account = n.getStringValue(); },
            "billing_model": n => { this.billing_model = n.getEnumValue<BillingModel>(BillingModel); },
            "href": n => { this.href = n.getStringValue(); },
            "id": n => { this.id = n.getStringValue(); },
            "kind": n => { this.kind = n.getStringValue(); },
        };
    };
    /**
     * Gets the href property value. Self link.
     * @returns a string
     */
    public get href() {
        return this._href;
    };
    /**
     * Sets the href property value. Self link.
     * @param value Value to set for the href property.
     */
    public set href(value: string | undefined) {
        this._href = value;
    };
    /**
     * Gets the id property value. Unique identifier of the object.
     * @returns a string
     */
    public get id() {
        return this._id;
    };
    /**
     * Sets the id property value. Unique identifier of the object.
     * @param value Value to set for the id property.
     */
    public set id(value: string | undefined) {
        this._id = value;
    };
    /**
     * Gets the kind property value. Indicates the type of this object. Will be 'AddOnInstallationBilling' if this is a complete object or 'AddOnInstallationBillingLink' if it is just a link.
     * @returns a string
     */
    public get kind() {
        return this._kind;
    };
    /**
     * Sets the kind property value. Indicates the type of this object. Will be 'AddOnInstallationBilling' if this is a complete object or 'AddOnInstallationBillingLink' if it is just a link.
     * @param value Value to set for the kind property.
     */
    public set kind(value: string | undefined) {
        this._kind = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("billing_marketplace_account", this.billing_marketplace_account);
        writer.writeEnumValue<BillingModel>("billing_model", this.billing_model);
        writer.writeStringValue("href", this.href);
        writer.writeStringValue("id", this.id);
        writer.writeStringValue("kind", this.kind);
        writer.writeAdditionalData(this.additionalData);
    };
}
