import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Identifies sku rule
 */
export class SkuRule implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Specifies the allowed parameter for calculation */
    private _allowed?: number | undefined;
    /** Self link. */
    private _href?: string | undefined;
    /** Unique identifier of the object. */
    private _id?: string | undefined;
    /** Indicates the type of this object. Will be 'SkuRule' if this is a complete object or 'SkuRuleLink' if it is just a link. */
    private _kind?: string | undefined;
    /** Specifies the quota id */
    private _quota_id?: string | undefined;
    /** Specifies the sku, such as ""MW00504"" */
    private _sku?: string | undefined;
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
     * Gets the allowed property value. Specifies the allowed parameter for calculation
     * @returns a integer
     */
    public get allowed() {
        return this._allowed;
    };
    /**
     * Sets the allowed property value. Specifies the allowed parameter for calculation
     * @param value Value to set for the allowed property.
     */
    public set allowed(value: number | undefined) {
        this._allowed = value;
    };
    /**
     * Instantiates a new SkuRule and sets the default values.
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
            "allowed": n => { this.allowed = n.getNumberValue(); },
            "href": n => { this.href = n.getStringValue(); },
            "id": n => { this.id = n.getStringValue(); },
            "kind": n => { this.kind = n.getStringValue(); },
            "quota_id": n => { this.quota_id = n.getStringValue(); },
            "sku": n => { this.sku = n.getStringValue(); },
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
     * Gets the kind property value. Indicates the type of this object. Will be 'SkuRule' if this is a complete object or 'SkuRuleLink' if it is just a link.
     * @returns a string
     */
    public get kind() {
        return this._kind;
    };
    /**
     * Sets the kind property value. Indicates the type of this object. Will be 'SkuRule' if this is a complete object or 'SkuRuleLink' if it is just a link.
     * @param value Value to set for the kind property.
     */
    public set kind(value: string | undefined) {
        this._kind = value;
    };
    /**
     * Gets the quota_id property value. Specifies the quota id
     * @returns a string
     */
    public get quota_id() {
        return this._quota_id;
    };
    /**
     * Sets the quota_id property value. Specifies the quota id
     * @param value Value to set for the quota_id property.
     */
    public set quota_id(value: string | undefined) {
        this._quota_id = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeNumberValue("allowed", this.allowed);
        writer.writeStringValue("href", this.href);
        writer.writeStringValue("id", this.id);
        writer.writeStringValue("kind", this.kind);
        writer.writeStringValue("quota_id", this.quota_id);
        writer.writeStringValue("sku", this.sku);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the sku property value. Specifies the sku, such as ""MW00504""
     * @returns a string
     */
    public get sku() {
        return this._sku;
    };
    /**
     * Sets the sku property value. Specifies the sku, such as ""MW00504""
     * @param value Value to set for the sku property.
     */
    public set sku(value: string | undefined) {
        this._sku = value;
    };
}
