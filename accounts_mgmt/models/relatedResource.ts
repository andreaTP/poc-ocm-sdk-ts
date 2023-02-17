import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Resource which can be provisioned using the allowed quota.
 */
export class RelatedResource implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The availability_zone_type property */
    private _availability_zone_type?: string | undefined;
    /** The billing_model property */
    private _billing_model?: string | undefined;
    /** The byoc property */
    private _byoc?: string | undefined;
    /** The cloud_provider property */
    private _cloud_provider?: string | undefined;
    /** The cost property */
    private _cost?: number | undefined;
    /** The product property */
    private _product?: string | undefined;
    /** The resource_name property */
    private _resource_name?: string | undefined;
    /** The resource_type property */
    private _resource_type?: string | undefined;
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
     * Gets the billing_model property value. The billing_model property
     * @returns a string
     */
    public get billing_model() {
        return this._billing_model;
    };
    /**
     * Sets the billing_model property value. The billing_model property
     * @param value Value to set for the billing_model property.
     */
    public set billing_model(value: string | undefined) {
        this._billing_model = value;
    };
    /**
     * Gets the byoc property value. The byoc property
     * @returns a string
     */
    public get byoc() {
        return this._byoc;
    };
    /**
     * Sets the byoc property value. The byoc property
     * @param value Value to set for the byoc property.
     */
    public set byoc(value: string | undefined) {
        this._byoc = value;
    };
    /**
     * Gets the cloud_provider property value. The cloud_provider property
     * @returns a string
     */
    public get cloud_provider() {
        return this._cloud_provider;
    };
    /**
     * Sets the cloud_provider property value. The cloud_provider property
     * @param value Value to set for the cloud_provider property.
     */
    public set cloud_provider(value: string | undefined) {
        this._cloud_provider = value;
    };
    /**
     * Instantiates a new RelatedResource and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the cost property value. The cost property
     * @returns a integer
     */
    public get cost() {
        return this._cost;
    };
    /**
     * Sets the cost property value. The cost property
     * @param value Value to set for the cost property.
     */
    public set cost(value: number | undefined) {
        this._cost = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "availability_zone_type": n => { this.availability_zone_type = n.getStringValue(); },
            "billing_model": n => { this.billing_model = n.getStringValue(); },
            "byoc": n => { this.byoc = n.getStringValue(); },
            "cloud_provider": n => { this.cloud_provider = n.getStringValue(); },
            "cost": n => { this.cost = n.getNumberValue(); },
            "product": n => { this.product = n.getStringValue(); },
            "resource_name": n => { this.resource_name = n.getStringValue(); },
            "resource_type": n => { this.resource_type = n.getStringValue(); },
        };
    };
    /**
     * Gets the product property value. The product property
     * @returns a string
     */
    public get product() {
        return this._product;
    };
    /**
     * Sets the product property value. The product property
     * @param value Value to set for the product property.
     */
    public set product(value: string | undefined) {
        this._product = value;
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
        writer.writeStringValue("billing_model", this.billing_model);
        writer.writeStringValue("byoc", this.byoc);
        writer.writeStringValue("cloud_provider", this.cloud_provider);
        writer.writeNumberValue("cost", this.cost);
        writer.writeStringValue("product", this.product);
        writer.writeStringValue("resource_name", this.resource_name);
        writer.writeStringValue("resource_type", this.resource_type);
        writer.writeAdditionalData(this.additionalData);
    };
}
