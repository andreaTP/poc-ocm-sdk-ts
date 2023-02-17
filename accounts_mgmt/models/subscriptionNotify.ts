import {createTemplateParameterFromDiscriminatorValue} from './createTemplateParameterFromDiscriminatorValue';
import {TemplateParameter} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * This struct is a request to send a templated email to a user related to thissubscription.
 */
export class SubscriptionNotify implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The BCC address to be included on the email that is sent */
    private _bcc_address?: string | undefined;
    /** Indicates which Cluster (internal id) the resource type belongs to */
    private _cluster_id?: string | undefined;
    /** Indicates which Cluster (external id) the resource type belongs to */
    private _cluster_uuid?: string | undefined;
    /** Indicates whether to include red hat associates in the email notification */
    private _include_red_hat_associates?: boolean | undefined;
    /** Indicates whether the service log is internal only to RH */
    private _internal_only?: boolean | undefined;
    /** The email subject */
    private _subject?: string | undefined;
    /** Indicates which Subscription the resource type belongs to */
    private _subscription_id?: string | undefined;
    /** The name of the template used to construct the email contents */
    private _template_name?: string | undefined;
    /** The values which will be substituted into the templated email */
    private _template_parameters?: TemplateParameter[] | undefined;
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
     * Gets the bcc_address property value. The BCC address to be included on the email that is sent
     * @returns a string
     */
    public get bcc_address() {
        return this._bcc_address;
    };
    /**
     * Sets the bcc_address property value. The BCC address to be included on the email that is sent
     * @param value Value to set for the bcc_address property.
     */
    public set bcc_address(value: string | undefined) {
        this._bcc_address = value;
    };
    /**
     * Gets the cluster_id property value. Indicates which Cluster (internal id) the resource type belongs to
     * @returns a string
     */
    public get cluster_id() {
        return this._cluster_id;
    };
    /**
     * Sets the cluster_id property value. Indicates which Cluster (internal id) the resource type belongs to
     * @param value Value to set for the cluster_id property.
     */
    public set cluster_id(value: string | undefined) {
        this._cluster_id = value;
    };
    /**
     * Gets the cluster_uuid property value. Indicates which Cluster (external id) the resource type belongs to
     * @returns a string
     */
    public get cluster_uuid() {
        return this._cluster_uuid;
    };
    /**
     * Sets the cluster_uuid property value. Indicates which Cluster (external id) the resource type belongs to
     * @param value Value to set for the cluster_uuid property.
     */
    public set cluster_uuid(value: string | undefined) {
        this._cluster_uuid = value;
    };
    /**
     * Instantiates a new SubscriptionNotify and sets the default values.
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
            "bcc_address": n => { this.bcc_address = n.getStringValue(); },
            "cluster_id": n => { this.cluster_id = n.getStringValue(); },
            "cluster_uuid": n => { this.cluster_uuid = n.getStringValue(); },
            "include_red_hat_associates": n => { this.include_red_hat_associates = n.getBooleanValue(); },
            "internal_only": n => { this.internal_only = n.getBooleanValue(); },
            "subject": n => { this.subject = n.getStringValue(); },
            "subscription_id": n => { this.subscription_id = n.getStringValue(); },
            "template_name": n => { this.template_name = n.getStringValue(); },
            "template_parameters": n => { this.template_parameters = n.getCollectionOfObjectValues<TemplateParameter>(createTemplateParameterFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the include_red_hat_associates property value. Indicates whether to include red hat associates in the email notification
     * @returns a boolean
     */
    public get include_red_hat_associates() {
        return this._include_red_hat_associates;
    };
    /**
     * Sets the include_red_hat_associates property value. Indicates whether to include red hat associates in the email notification
     * @param value Value to set for the include_red_hat_associates property.
     */
    public set include_red_hat_associates(value: boolean | undefined) {
        this._include_red_hat_associates = value;
    };
    /**
     * Gets the internal_only property value. Indicates whether the service log is internal only to RH
     * @returns a boolean
     */
    public get internal_only() {
        return this._internal_only;
    };
    /**
     * Sets the internal_only property value. Indicates whether the service log is internal only to RH
     * @param value Value to set for the internal_only property.
     */
    public set internal_only(value: boolean | undefined) {
        this._internal_only = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("bcc_address", this.bcc_address);
        writer.writeStringValue("cluster_id", this.cluster_id);
        writer.writeStringValue("cluster_uuid", this.cluster_uuid);
        writer.writeBooleanValue("include_red_hat_associates", this.include_red_hat_associates);
        writer.writeBooleanValue("internal_only", this.internal_only);
        writer.writeStringValue("subject", this.subject);
        writer.writeStringValue("subscription_id", this.subscription_id);
        writer.writeStringValue("template_name", this.template_name);
        writer.writeCollectionOfObjectValues<TemplateParameter>("template_parameters", this.template_parameters);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the subject property value. The email subject
     * @returns a string
     */
    public get subject() {
        return this._subject;
    };
    /**
     * Sets the subject property value. The email subject
     * @param value Value to set for the subject property.
     */
    public set subject(value: string | undefined) {
        this._subject = value;
    };
    /**
     * Gets the subscription_id property value. Indicates which Subscription the resource type belongs to
     * @returns a string
     */
    public get subscription_id() {
        return this._subscription_id;
    };
    /**
     * Sets the subscription_id property value. Indicates which Subscription the resource type belongs to
     * @param value Value to set for the subscription_id property.
     */
    public set subscription_id(value: string | undefined) {
        this._subscription_id = value;
    };
    /**
     * Gets the template_name property value. The name of the template used to construct the email contents
     * @returns a string
     */
    public get template_name() {
        return this._template_name;
    };
    /**
     * Sets the template_name property value. The name of the template used to construct the email contents
     * @param value Value to set for the template_name property.
     */
    public set template_name(value: string | undefined) {
        this._template_name = value;
    };
    /**
     * Gets the template_parameters property value. The values which will be substituted into the templated email
     * @returns a TemplateParameter
     */
    public get template_parameters() {
        return this._template_parameters;
    };
    /**
     * Sets the template_parameters property value. The values which will be substituted into the templated email
     * @param value Value to set for the template_parameters property.
     */
    public set template_parameters(value: TemplateParameter[] | undefined) {
        this._template_parameters = value;
    };
}
