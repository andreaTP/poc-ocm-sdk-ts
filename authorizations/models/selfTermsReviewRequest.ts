import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Representation of Red Hat's Terms and Conditions for using OpenShift Dedicated and Amazon Red Hat OpenShift [Terms]review requests.
 */
export class SelfTermsReviewRequest implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Defines the event code of the terms being checked */
    private _event_code?: string | undefined;
    /** Defines the site code of the terms being checked */
    private _site_code?: string | undefined;
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
     * Instantiates a new SelfTermsReviewRequest and sets the default values.
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
