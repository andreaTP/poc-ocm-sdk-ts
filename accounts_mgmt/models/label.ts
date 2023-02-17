import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Label implements AdditionalDataHolder, Parsable {
    /** The account_id property */
    private _account_id?: string | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The created_at property */
    private _created_at?: Date | undefined;
    /** Self link. */
    private _href?: string | undefined;
    /** Unique identifier of the object. */
    private _id?: string | undefined;
    /** The internal property */
    private _internal?: boolean | undefined;
    /** The key property */
    private _key?: string | undefined;
    /** Indicates the type of this object. Will be 'Label' if this is a complete object or 'LabelLink' if it is just a link. */
    private _kind?: string | undefined;
    /** The managed_by property */
    private _managed_by?: string | undefined;
    /** The organization_id property */
    private _organization_id?: string | undefined;
    /** The subscription_id property */
    private _subscription_id?: string | undefined;
    /** The type property */
    private _type?: string | undefined;
    /** The updated_at property */
    private _updated_at?: Date | undefined;
    /** The value property */
    private _value?: string | undefined;
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
     * Instantiates a new Label and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
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
            "account_id": n => { this.account_id = n.getStringValue(); },
            "created_at": n => { this.created_at = n.getDateValue(); },
            "href": n => { this.href = n.getStringValue(); },
            "id": n => { this.id = n.getStringValue(); },
            "internal": n => { this.internal = n.getBooleanValue(); },
            "key": n => { this.key = n.getStringValue(); },
            "kind": n => { this.kind = n.getStringValue(); },
            "managed_by": n => { this.managed_by = n.getStringValue(); },
            "organization_id": n => { this.organization_id = n.getStringValue(); },
            "subscription_id": n => { this.subscription_id = n.getStringValue(); },
            "type": n => { this.type = n.getStringValue(); },
            "updated_at": n => { this.updated_at = n.getDateValue(); },
            "value": n => { this.value = n.getStringValue(); },
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
     * Gets the internal property value. The internal property
     * @returns a boolean
     */
    public get internal() {
        return this._internal;
    };
    /**
     * Sets the internal property value. The internal property
     * @param value Value to set for the internal property.
     */
    public set internal(value: boolean | undefined) {
        this._internal = value;
    };
    /**
     * Gets the key property value. The key property
     * @returns a string
     */
    public get key() {
        return this._key;
    };
    /**
     * Sets the key property value. The key property
     * @param value Value to set for the key property.
     */
    public set key(value: string | undefined) {
        this._key = value;
    };
    /**
     * Gets the kind property value. Indicates the type of this object. Will be 'Label' if this is a complete object or 'LabelLink' if it is just a link.
     * @returns a string
     */
    public get kind() {
        return this._kind;
    };
    /**
     * Sets the kind property value. Indicates the type of this object. Will be 'Label' if this is a complete object or 'LabelLink' if it is just a link.
     * @param value Value to set for the kind property.
     */
    public set kind(value: string | undefined) {
        this._kind = value;
    };
    /**
     * Gets the managed_by property value. The managed_by property
     * @returns a string
     */
    public get managed_by() {
        return this._managed_by;
    };
    /**
     * Sets the managed_by property value. The managed_by property
     * @param value Value to set for the managed_by property.
     */
    public set managed_by(value: string | undefined) {
        this._managed_by = value;
    };
    /**
     * Gets the organization_id property value. The organization_id property
     * @returns a string
     */
    public get organization_id() {
        return this._organization_id;
    };
    /**
     * Sets the organization_id property value. The organization_id property
     * @param value Value to set for the organization_id property.
     */
    public set organization_id(value: string | undefined) {
        this._organization_id = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("account_id", this.account_id);
        writer.writeDateValue("created_at", this.created_at);
        writer.writeStringValue("href", this.href);
        writer.writeStringValue("id", this.id);
        writer.writeBooleanValue("internal", this.internal);
        writer.writeStringValue("key", this.key);
        writer.writeStringValue("kind", this.kind);
        writer.writeStringValue("managed_by", this.managed_by);
        writer.writeStringValue("organization_id", this.organization_id);
        writer.writeStringValue("subscription_id", this.subscription_id);
        writer.writeStringValue("type", this.type);
        writer.writeDateValue("updated_at", this.updated_at);
        writer.writeStringValue("value", this.value);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the subscription_id property value. The subscription_id property
     * @returns a string
     */
    public get subscription_id() {
        return this._subscription_id;
    };
    /**
     * Sets the subscription_id property value. The subscription_id property
     * @param value Value to set for the subscription_id property.
     */
    public set subscription_id(value: string | undefined) {
        this._subscription_id = value;
    };
    /**
     * Gets the type property value. The type property
     * @returns a string
     */
    public get type() {
        return this._type;
    };
    /**
     * Sets the type property value. The type property
     * @param value Value to set for the type property.
     */
    public set type(value: string | undefined) {
        this._type = value;
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
    /**
     * Gets the value property value. The value property
     * @returns a string
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. The value property
     * @param value Value to set for the value property.
     */
    public set value(value: string | undefined) {
        this._value = value;
    };
}
