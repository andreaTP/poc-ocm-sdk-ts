import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SupportCaseResponse implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Support case number. */
    private _case_number?: string | undefined;
    /** (optional) cluster id of the cluster on which we created the support case for. */
    private _cluster_id?: string | undefined;
    /** (optional) cluster uuid of the cluster on which we created the support case for. */
    private _cluster_uuid?: string | undefined;
    /** Support case desciption. */
    private _description?: string | undefined;
    /** Self link. */
    private _href?: string | undefined;
    /** Unique identifier of the object. */
    private _id?: string | undefined;
    /** Indicates the type of this object. Will be 'SupportCaseResponse' if this is a complete object or 'SupportCaseResponseLink' if it is just a link. */
    private _kind?: string | undefined;
    /** Support case severity. */
    private _severity?: string | undefined;
    /** Support case status. */
    private _status?: string | undefined;
    /** (optional) subscription id of the subscription on which we created the support case for. */
    private _subscription_id?: string | undefined;
    /** Support case title. */
    private _summary?: string | undefined;
    /** Support case uri. */
    private _uri?: string | undefined;
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
     * Gets the case_number property value. Support case number.
     * @returns a string
     */
    public get case_number() {
        return this._case_number;
    };
    /**
     * Sets the case_number property value. Support case number.
     * @param value Value to set for the case_number property.
     */
    public set case_number(value: string | undefined) {
        this._case_number = value;
    };
    /**
     * Gets the cluster_id property value. (optional) cluster id of the cluster on which we created the support case for.
     * @returns a string
     */
    public get cluster_id() {
        return this._cluster_id;
    };
    /**
     * Sets the cluster_id property value. (optional) cluster id of the cluster on which we created the support case for.
     * @param value Value to set for the cluster_id property.
     */
    public set cluster_id(value: string | undefined) {
        this._cluster_id = value;
    };
    /**
     * Gets the cluster_uuid property value. (optional) cluster uuid of the cluster on which we created the support case for.
     * @returns a string
     */
    public get cluster_uuid() {
        return this._cluster_uuid;
    };
    /**
     * Sets the cluster_uuid property value. (optional) cluster uuid of the cluster on which we created the support case for.
     * @param value Value to set for the cluster_uuid property.
     */
    public set cluster_uuid(value: string | undefined) {
        this._cluster_uuid = value;
    };
    /**
     * Instantiates a new SupportCaseResponse and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the description property value. Support case desciption.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. Support case desciption.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "case_number": n => { this.case_number = n.getStringValue(); },
            "cluster_id": n => { this.cluster_id = n.getStringValue(); },
            "cluster_uuid": n => { this.cluster_uuid = n.getStringValue(); },
            "description": n => { this.description = n.getStringValue(); },
            "href": n => { this.href = n.getStringValue(); },
            "id": n => { this.id = n.getStringValue(); },
            "kind": n => { this.kind = n.getStringValue(); },
            "severity": n => { this.severity = n.getStringValue(); },
            "status": n => { this.status = n.getStringValue(); },
            "subscription_id": n => { this.subscription_id = n.getStringValue(); },
            "summary": n => { this.summary = n.getStringValue(); },
            "uri": n => { this.uri = n.getStringValue(); },
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
     * Gets the kind property value. Indicates the type of this object. Will be 'SupportCaseResponse' if this is a complete object or 'SupportCaseResponseLink' if it is just a link.
     * @returns a string
     */
    public get kind() {
        return this._kind;
    };
    /**
     * Sets the kind property value. Indicates the type of this object. Will be 'SupportCaseResponse' if this is a complete object or 'SupportCaseResponseLink' if it is just a link.
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
        writer.writeStringValue("case_number", this.case_number);
        writer.writeStringValue("cluster_id", this.cluster_id);
        writer.writeStringValue("cluster_uuid", this.cluster_uuid);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("href", this.href);
        writer.writeStringValue("id", this.id);
        writer.writeStringValue("kind", this.kind);
        writer.writeStringValue("severity", this.severity);
        writer.writeStringValue("status", this.status);
        writer.writeStringValue("subscription_id", this.subscription_id);
        writer.writeStringValue("summary", this.summary);
        writer.writeStringValue("uri", this.uri);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the severity property value. Support case severity.
     * @returns a string
     */
    public get severity() {
        return this._severity;
    };
    /**
     * Sets the severity property value. Support case severity.
     * @param value Value to set for the severity property.
     */
    public set severity(value: string | undefined) {
        this._severity = value;
    };
    /**
     * Gets the status property value. Support case status.
     * @returns a string
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. Support case status.
     * @param value Value to set for the status property.
     */
    public set status(value: string | undefined) {
        this._status = value;
    };
    /**
     * Gets the subscription_id property value. (optional) subscription id of the subscription on which we created the support case for.
     * @returns a string
     */
    public get subscription_id() {
        return this._subscription_id;
    };
    /**
     * Sets the subscription_id property value. (optional) subscription id of the subscription on which we created the support case for.
     * @param value Value to set for the subscription_id property.
     */
    public set subscription_id(value: string | undefined) {
        this._subscription_id = value;
    };
    /**
     * Gets the summary property value. Support case title.
     * @returns a string
     */
    public get summary() {
        return this._summary;
    };
    /**
     * Sets the summary property value. Support case title.
     * @param value Value to set for the summary property.
     */
    public set summary(value: string | undefined) {
        this._summary = value;
    };
    /**
     * Gets the uri property value. Support case uri.
     * @returns a string
     */
    public get uri() {
        return this._uri;
    };
    /**
     * Sets the uri property value. Support case uri.
     * @param value Value to set for the uri property.
     */
    public set uri(value: string | undefined) {
        this._uri = value;
    };
}
