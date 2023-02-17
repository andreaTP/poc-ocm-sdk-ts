import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Representation of Red Hat's Terms and Conditions for using OpenShift Dedicated and Amazon Red Hat OpenShift [Terms]review response.
 */
export class TermsReviewResponse implements AdditionalDataHolder, Parsable {
    /** Account ID of requesting user. */
    private _account_id?: string | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Indicates which Organization the user belongs to. */
    private _organization_id?: string | undefined;
    /** Optional URL to Red Hat's Terms and Conditions Application if the user has either required or available Termsneeds to acknowledge. */
    private _redirect_url?: string | undefined;
    /** Defines whether Terms are available. */
    private _terms_available?: boolean | undefined;
    /** Defines whether user is required to accept Terms before using OpenShift Dedicated and Amazon Red Hat OpenShift. */
    private _terms_required?: boolean | undefined;
    /**
     * Gets the account_id property value. Account ID of requesting user.
     * @returns a string
     */
    public get account_id() {
        return this._account_id;
    };
    /**
     * Sets the account_id property value. Account ID of requesting user.
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
     * Instantiates a new TermsReviewResponse and sets the default values.
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
            "account_id": n => { this.account_id = n.getStringValue(); },
            "organization_id": n => { this.organization_id = n.getStringValue(); },
            "redirect_url": n => { this.redirect_url = n.getStringValue(); },
            "terms_available": n => { this.terms_available = n.getBooleanValue(); },
            "terms_required": n => { this.terms_required = n.getBooleanValue(); },
        };
    };
    /**
     * Gets the organization_id property value. Indicates which Organization the user belongs to.
     * @returns a string
     */
    public get organization_id() {
        return this._organization_id;
    };
    /**
     * Sets the organization_id property value. Indicates which Organization the user belongs to.
     * @param value Value to set for the organization_id property.
     */
    public set organization_id(value: string | undefined) {
        this._organization_id = value;
    };
    /**
     * Gets the redirect_url property value. Optional URL to Red Hat's Terms and Conditions Application if the user has either required or available Termsneeds to acknowledge.
     * @returns a string
     */
    public get redirect_url() {
        return this._redirect_url;
    };
    /**
     * Sets the redirect_url property value. Optional URL to Red Hat's Terms and Conditions Application if the user has either required or available Termsneeds to acknowledge.
     * @param value Value to set for the redirect_url property.
     */
    public set redirect_url(value: string | undefined) {
        this._redirect_url = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("account_id", this.account_id);
        writer.writeStringValue("organization_id", this.organization_id);
        writer.writeStringValue("redirect_url", this.redirect_url);
        writer.writeBooleanValue("terms_available", this.terms_available);
        writer.writeBooleanValue("terms_required", this.terms_required);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the terms_available property value. Defines whether Terms are available.
     * @returns a boolean
     */
    public get terms_available() {
        return this._terms_available;
    };
    /**
     * Sets the terms_available property value. Defines whether Terms are available.
     * @param value Value to set for the terms_available property.
     */
    public set terms_available(value: boolean | undefined) {
        this._terms_available = value;
    };
    /**
     * Gets the terms_required property value. Defines whether user is required to accept Terms before using OpenShift Dedicated and Amazon Red Hat OpenShift.
     * @returns a boolean
     */
    public get terms_required() {
        return this._terms_required;
    };
    /**
     * Sets the terms_required property value. Defines whether user is required to accept Terms before using OpenShift Dedicated and Amazon Red Hat OpenShift.
     * @param value Value to set for the terms_required property.
     */
    public set terms_required(value: boolean | undefined) {
        this._terms_required = value;
    };
}
