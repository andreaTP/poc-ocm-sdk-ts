import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Representation of Red Hat's Terms and Conditions for using OpenShift Dedicated and Amazon Red Hat OpenShift [Terms]review requests.
 */
export class TermsReviewRequest implements AdditionalDataHolder, Parsable {
    /** Defines the username of the account of which Terms is being reviewed. */
    private _account_username?: string | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** If false, only `terms_required` will be checked */
    private _check_optional_terms?: boolean | undefined;
    /** Defines the event code of the terms being checked */
    private _event_code?: string | undefined;
    /** Defines the site code of the terms being checked */
    private _site_code?: string | undefined;
    /**
     * Gets the account_username property value. Defines the username of the account of which Terms is being reviewed.
     * @returns a string
     */
    public get account_username() {
        return this._account_username;
    };
    /**
     * Sets the account_username property value. Defines the username of the account of which Terms is being reviewed.
     * @param value Value to set for the account_username property.
     */
    public set account_username(value: string | undefined) {
        this._account_username = value;
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
     * Gets the check_optional_terms property value. If false, only `terms_required` will be checked
     * @returns a boolean
     */
    public get check_optional_terms() {
        return this._check_optional_terms;
    };
    /**
     * Sets the check_optional_terms property value. If false, only `terms_required` will be checked
     * @param value Value to set for the check_optional_terms property.
     */
    public set check_optional_terms(value: boolean | undefined) {
        this._check_optional_terms = value;
    };
    /**
     * Instantiates a new TermsReviewRequest and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the event_code property value. Defines the event code of the terms being checked
     * @returns a string
     */
    public get event_code() {
        return this._event_code;
    };
    /**
     * Sets the event_code property value. Defines the event code of the terms being checked
     * @param value Value to set for the event_code property.
     */
    public set event_code(value: string | undefined) {
        this._event_code = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "account_username": n => { this.account_username = n.getStringValue(); },
            "check_optional_terms": n => { this.check_optional_terms = n.getBooleanValue(); },
            "event_code": n => { this.event_code = n.getStringValue(); },
            "site_code": n => { this.site_code = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("account_username", this.account_username);
        writer.writeBooleanValue("check_optional_terms", this.check_optional_terms);
        writer.writeStringValue("event_code", this.event_code);
        writer.writeStringValue("site_code", this.site_code);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the site_code property value. Defines the site code of the terms being checked
     * @returns a string
     */
    public get site_code() {
        return this._site_code;
    };
    /**
     * Sets the site_code property value. Defines the site code of the terms being checked
     * @param value Value to set for the site_code property.
     */
    public set site_code(value: string | undefined) {
        this._site_code = value;
    };
}
