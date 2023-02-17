import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CCS implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Indicates if cloud permissions checks are disabled,when attempting installation of the cluster. */
    private _disable_scp_checks?: boolean | undefined;
    /** Indicates if Customer Cloud Subscription is enabled on the cluster. */
    private _enabled?: boolean | undefined;
    /** Self link. */
    private _href?: string | undefined;
    /** Unique identifier of the object. */
    private _id?: string | undefined;
    /** Indicates the type of this object. Will be 'CCS' if this is a complete object or 'CCSLink' if it is just a link. */
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
     * Instantiates a new CCS and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the disable_scp_checks property value. Indicates if cloud permissions checks are disabled,when attempting installation of the cluster.
     * @returns a boolean
     */
    public get disable_scp_checks() {
        return this._disable_scp_checks;
    };
    /**
     * Sets the disable_scp_checks property value. Indicates if cloud permissions checks are disabled,when attempting installation of the cluster.
     * @param value Value to set for the disable_scp_checks property.
     */
    public set disable_scp_checks(value: boolean | undefined) {
        this._disable_scp_checks = value;
    };
    /**
     * Gets the enabled property value. Indicates if Customer Cloud Subscription is enabled on the cluster.
     * @returns a boolean
     */
    public get enabled() {
        return this._enabled;
    };
    /**
     * Sets the enabled property value. Indicates if Customer Cloud Subscription is enabled on the cluster.
     * @param value Value to set for the enabled property.
     */
    public set enabled(value: boolean | undefined) {
        this._enabled = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "disable_scp_checks": n => { this.disable_scp_checks = n.getBooleanValue(); },
            "enabled": n => { this.enabled = n.getBooleanValue(); },
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
     * Gets the kind property value. Indicates the type of this object. Will be 'CCS' if this is a complete object or 'CCSLink' if it is just a link.
     * @returns a string
     */
    public get kind() {
        return this._kind;
    };
    /**
     * Sets the kind property value. Indicates the type of this object. Will be 'CCS' if this is a complete object or 'CCSLink' if it is just a link.
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
        writer.writeBooleanValue("disable_scp_checks", this.disable_scp_checks);
        writer.writeBooleanValue("enabled", this.enabled);
        writer.writeStringValue("href", this.href);
        writer.writeStringValue("id", this.id);
        writer.writeStringValue("kind", this.kind);
        writer.writeAdditionalData(this.additionalData);
    };
}
