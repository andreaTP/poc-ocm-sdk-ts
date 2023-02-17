import {BillingModel} from './billingModel';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ReservedResource implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The availability_zone_type property */
    private _availability_zone_type?: string | undefined;
    /** The billing_marketplace_account property */
    private _billing_marketplace_account?: string | undefined;
    /** Billing model for subscripiton and reserved_resource resources. */
    private _billing_model?: BillingModel | undefined;
    /** The byoc property */
    private _byoc?: boolean | undefined;
    /** The count property */
    private _count?: number | undefined;
    /** The created_at property */
    private _created_at?: Date | undefined;
    /** The resource_name property */
    private _resource_name?: string | undefined;
    /** The resource_type property */
    private _resource_type?: string | undefined;
    /** The updated_at property */
    private _updated_at?: Date | undefined;
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
     * Gets the availability_zone_type property value. The availability_zone_type property
     * @returns a string
     */
    public get availability_zone_type() {
        return this._availability_zone_type;
    };
    /**
     * Sets the availability_zone_type property value. The availability_zone_type property
     * @param value Value to set for the availability_zone_type property.
     */
    public set availability_zone_type(value: string | undefined) {
        this._availability_zone_type = value;
    };
    /**
     * Gets the billing_marketplace_account property value. The billing_marketplace_account property
     * @returns a string
     */
    public get billing_marketplace_account() {
        return this._billing_marketplace_account;
    };
    /**
     * Sets the billing_marketplace_account property value. The billing_marketplace_account property
     * @param value Value to set for the billing_marketplace_account property.
     */
    public set billing_marketplace_account(value: string | undefined) {
        this._billing_marketplace_account = value;
    };
    /**
     * Gets the billing_model property value. Billing model for subscripiton and reserved_resource resources.
     * @returns a BillingModel
     */
    public get billing_model() {
        return this._billing_model;
    };
    /**
     * Sets the billing_model property value. Billing model for subscripiton and reserved_resource resources.
     * @param value Value to set for the billing_model property.
     */
    public set billing_model(value: BillingModel | undefined) {
        this._billing_model = value;
    };
    /**
     * Gets the byoc property value. The byoc property
     * @returns a boolean
     */
    public get byoc() {
        return this._byoc;
    };
    /**
     * Sets the byoc property value. The byoc property
     * @param value Value to set for the byoc property.
     */
    public set byoc(value: boolean | undefined) {
        this._byoc = value;
    };
    /**
     * Instantiates a new ReservedResource and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the count property value. The count property
     * @returns a integer
     */
    public get count() {
        return this._count;
    };
    /**
     * Sets the count property value. The count property
     * @param value Value to set for the count property.
     */
    public set count(value: number | undefined) {
        this._count = value;
    };
    /**
     * Gets the created_at property value. The created_at property
     * @returns a Date
     */
    public get created_at() {
        return this._created_at;
    };
    /**
     * Sets the created_at property value. The created_at property
     * @param value Value to set for the created_at property.
     */
    public set created_at(value: Date | undefined) {
        this._created_at = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "availability_zone_type": n => { this.availability_zone_type = n.getStringValue(); },
            "billing_marketplace_account": n => { this.billing_marketplace_account = n.getStringValue(); },
            "billing_model": n => { this.billing_model = n.getEnumValue<BillingModel>(BillingModel); },
            "byoc": n => { this.byoc = n.getBooleanValue(); },
            "count": n => { this.count = n.getNumberValue(); },
            "created_at": n => { this.created_at = n.getDateValue(); },
            "resource_name": n => { this.resource_name = n.getStringValue(); },
            "resource_type": n => { this.resource_type = n.getStringValue(); },
            "updated_at": n => { this.updated_at = n.getDateValue(); },
        };
    };
    /**
     * Gets the resource_name property value. The resource_name property
     * @returns a string
     */
    public get resource_name() {
        return this._resource_name;
    };
    /**
     * Sets the resource_name property value. The resource_name property
     * @param value Value to set for the resource_name property.
     */
    public set resource_name(value: string | undefined) {
        this._resource_name = value;
    };
    /**
     * Gets the resource_type property value. The resource_type property
     * @returns a string
     */
    public get resource_type() {
        return this._resource_type;
    };
    /**
     * Sets the resource_type property value. The resource_type property
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
        writer.writeStringValue("availability_zone_type", this.availability_zone_type);
        writer.writeStringValue("billing_marketplace_account", this.billing_marketplace_account);
        writer.writeEnumValue<BillingModel>("billing_model", this.billing_model);
        writer.writeBooleanValue("byoc", this.byoc);
        writer.writeNumberValue("count", this.count);
        writer.writeDateValue("created_at", this.created_at);
        writer.writeStringValue("resource_name", this.resource_name);
        writer.writeStringValue("resource_type", this.resource_type);
        writer.writeDateValue("updated_at", this.updated_at);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the updated_at property value. The updated_at property
     * @returns a Date
     */
    public get updated_at() {
        return this._updated_at;
    };
    /**
     * Sets the updated_at property value. The updated_at property
     * @param value Value to set for the updated_at property.
     */
    public set updated_at(value: Date | undefined) {
        this._updated_at = value;
    };
}
