import {createCloudAccountFromDiscriminatorValue} from './createCloudAccountFromDiscriminatorValue';
import {createRelatedResourceFromDiscriminatorValue} from './createRelatedResourceFromDiscriminatorValue';
import {CloudAccount, RelatedResource} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class QuotaCost implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The allowed property */
    private _allowed?: number | undefined;
    /** The cloud_accounts property */
    private _cloud_accounts?: CloudAccount[] | undefined;
    /** The consumed property */
    private _consumed?: number | undefined;
    /** The organization_id property */
    private _organization_id?: string | undefined;
    /** The quota_id property */
    private _quota_id?: string | undefined;
    /** The related_resources property */
    private _related_resources?: RelatedResource[] | undefined;
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
     * Gets the allowed property value. The allowed property
     * @returns a integer
     */
    public get allowed() {
        return this._allowed;
    };
    /**
     * Sets the allowed property value. The allowed property
     * @param value Value to set for the allowed property.
     */
    public set allowed(value: number | undefined) {
        this._allowed = value;
    };
    /**
     * Gets the cloud_accounts property value. The cloud_accounts property
     * @returns a CloudAccount
     */
    public get cloud_accounts() {
        return this._cloud_accounts;
    };
    /**
     * Sets the cloud_accounts property value. The cloud_accounts property
     * @param value Value to set for the cloud_accounts property.
     */
    public set cloud_accounts(value: CloudAccount[] | undefined) {
        this._cloud_accounts = value;
    };
    /**
     * Instantiates a new QuotaCost and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the consumed property value. The consumed property
     * @returns a integer
     */
    public get consumed() {
        return this._consumed;
    };
    /**
     * Sets the consumed property value. The consumed property
     * @param value Value to set for the consumed property.
     */
    public set consumed(value: number | undefined) {
        this._consumed = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "allowed": n => { this.allowed = n.getNumberValue(); },
            "cloud_accounts": n => { this.cloud_accounts = n.getCollectionOfObjectValues<CloudAccount>(createCloudAccountFromDiscriminatorValue); },
            "consumed": n => { this.consumed = n.getNumberValue(); },
            "organization_id": n => { this.organization_id = n.getStringValue(); },
            "quota_id": n => { this.quota_id = n.getStringValue(); },
            "related_resources": n => { this.related_resources = n.getCollectionOfObjectValues<RelatedResource>(createRelatedResourceFromDiscriminatorValue); },
        };
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
     * Gets the quota_id property value. The quota_id property
     * @returns a string
     */
    public get quota_id() {
        return this._quota_id;
    };
    /**
     * Sets the quota_id property value. The quota_id property
     * @param value Value to set for the quota_id property.
     */
    public set quota_id(value: string | undefined) {
        this._quota_id = value;
    };
    /**
     * Gets the related_resources property value. The related_resources property
     * @returns a RelatedResource
     */
    public get related_resources() {
        return this._related_resources;
    };
    /**
     * Sets the related_resources property value. The related_resources property
     * @param value Value to set for the related_resources property.
     */
    public set related_resources(value: RelatedResource[] | undefined) {
        this._related_resources = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeNumberValue("allowed", this.allowed);
        writer.writeCollectionOfObjectValues<CloudAccount>("cloud_accounts", this.cloud_accounts);
        writer.writeNumberValue("consumed", this.consumed);
        writer.writeStringValue("organization_id", this.organization_id);
        writer.writeStringValue("quota_id", this.quota_id);
        writer.writeCollectionOfObjectValues<RelatedResource>("related_resources", this.related_resources);
        writer.writeAdditionalData(this.additionalData);
    };
}
