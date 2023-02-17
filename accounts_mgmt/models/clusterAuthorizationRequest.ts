import {createReservedResourceFromDiscriminatorValue} from './createReservedResourceFromDiscriminatorValue';
import {ReservedResource} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ClusterAuthorizationRequest implements AdditionalDataHolder, Parsable {
    /** The account_username property */
    private _account_username?: string | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The availability_zone property */
    private _availability_zone?: string | undefined;
    /** The byoc property */
    private _byoc?: boolean | undefined;
    /** The cloud_account_id property */
    private _cloud_account_id?: string | undefined;
    /** The cloud_provider_id property */
    private _cloud_provider_id?: string | undefined;
    /** The cluster_id property */
    private _cluster_id?: string | undefined;
    /** The disconnected property */
    private _disconnected?: boolean | undefined;
    /** The display_name property */
    private _display_name?: string | undefined;
    /** The external_cluster_id property */
    private _external_cluster_id?: string | undefined;
    /** The managed property */
    private _managed?: boolean | undefined;
    /** The product_category property */
    private _product_category?: string | undefined;
    /** The product_id property */
    private _product_id?: string | undefined;
    /** The quota_version property */
    private _quota_version?: string | undefined;
    /** The reserve property */
    private _reserve?: boolean | undefined;
    /** The resources property */
    private _resources?: ReservedResource[] | undefined;
    /**
     * Gets the account_username property value. The account_username property
     * @returns a string
     */
    public get account_username() {
        return this._account_username;
    };
    /**
     * Sets the account_username property value. The account_username property
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
     * Gets the availability_zone property value. The availability_zone property
     * @returns a string
     */
    public get availability_zone() {
        return this._availability_zone;
    };
    /**
     * Sets the availability_zone property value. The availability_zone property
     * @param value Value to set for the availability_zone property.
     */
    public set availability_zone(value: string | undefined) {
        this._availability_zone = value;
    };
    /**
     * Gets the byoc property value. The byoc property
     * @returns a boolean
     */
    public get byoc() {
        return this._byoc;
    };
    /**
     * Sets the byoc property value. The byoc property
     * @param value Value to set for the byoc property.
     */
    public set byoc(value: boolean | undefined) {
        this._byoc = value;
    };
    /**
     * Gets the cloud_account_id property value. The cloud_account_id property
     * @returns a string
     */
    public get cloud_account_id() {
        return this._cloud_account_id;
    };
    /**
     * Sets the cloud_account_id property value. The cloud_account_id property
     * @param value Value to set for the cloud_account_id property.
     */
    public set cloud_account_id(value: string | undefined) {
        this._cloud_account_id = value;
    };
    /**
     * Gets the cloud_provider_id property value. The cloud_provider_id property
     * @returns a string
     */
    public get cloud_provider_id() {
        return this._cloud_provider_id;
    };
    /**
     * Sets the cloud_provider_id property value. The cloud_provider_id property
     * @param value Value to set for the cloud_provider_id property.
     */
    public set cloud_provider_id(value: string | undefined) {
        this._cloud_provider_id = value;
    };
    /**
     * Gets the cluster_id property value. The cluster_id property
     * @returns a string
     */
    public get cluster_id() {
        return this._cluster_id;
    };
    /**
     * Sets the cluster_id property value. The cluster_id property
     * @param value Value to set for the cluster_id property.
     */
    public set cluster_id(value: string | undefined) {
        this._cluster_id = value;
    };
    /**
     * Instantiates a new ClusterAuthorizationRequest and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the disconnected property value. The disconnected property
     * @returns a boolean
     */
    public get disconnected() {
        return this._disconnected;
    };
    /**
     * Sets the disconnected property value. The disconnected property
     * @param value Value to set for the disconnected property.
     */
    public set disconnected(value: boolean | undefined) {
        this._disconnected = value;
    };
    /**
     * Gets the display_name property value. The display_name property
     * @returns a string
     */
    public get display_name() {
        return this._display_name;
    };
    /**
     * Sets the display_name property value. The display_name property
     * @param value Value to set for the display_name property.
     */
    public set display_name(value: string | undefined) {
        this._display_name = value;
    };
    /**
     * Gets the external_cluster_id property value. The external_cluster_id property
     * @returns a string
     */
    public get external_cluster_id() {
        return this._external_cluster_id;
    };
    /**
     * Sets the external_cluster_id property value. The external_cluster_id property
     * @param value Value to set for the external_cluster_id property.
     */
    public set external_cluster_id(value: string | undefined) {
        this._external_cluster_id = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "account_username": n => { this.account_username = n.getStringValue(); },
            "availability_zone": n => { this.availability_zone = n.getStringValue(); },
            "byoc": n => { this.byoc = n.getBooleanValue(); },
            "cloud_account_id": n => { this.cloud_account_id = n.getStringValue(); },
            "cloud_provider_id": n => { this.cloud_provider_id = n.getStringValue(); },
            "cluster_id": n => { this.cluster_id = n.getStringValue(); },
            "disconnected": n => { this.disconnected = n.getBooleanValue(); },
            "display_name": n => { this.display_name = n.getStringValue(); },
            "external_cluster_id": n => { this.external_cluster_id = n.getStringValue(); },
            "managed": n => { this.managed = n.getBooleanValue(); },
            "product_category": n => { this.product_category = n.getStringValue(); },
            "product_id": n => { this.product_id = n.getStringValue(); },
            "quota_version": n => { this.quota_version = n.getStringValue(); },
            "reserve": n => { this.reserve = n.getBooleanValue(); },
            "resources": n => { this.resources = n.getCollectionOfObjectValues<ReservedResource>(createReservedResourceFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the managed property value. The managed property
     * @returns a boolean
     */
    public get managed() {
        return this._managed;
    };
    /**
     * Sets the managed property value. The managed property
     * @param value Value to set for the managed property.
     */
    public set managed(value: boolean | undefined) {
        this._managed = value;
    };
    /**
     * Gets the product_category property value. The product_category property
     * @returns a string
     */
    public get product_category() {
        return this._product_category;
    };
    /**
     * Sets the product_category property value. The product_category property
     * @param value Value to set for the product_category property.
     */
    public set product_category(value: string | undefined) {
        this._product_category = value;
    };
    /**
     * Gets the product_id property value. The product_id property
     * @returns a string
     */
    public get product_id() {
        return this._product_id;
    };
    /**
     * Sets the product_id property value. The product_id property
     * @param value Value to set for the product_id property.
     */
    public set product_id(value: string | undefined) {
        this._product_id = value;
    };
    /**
     * Gets the quota_version property value. The quota_version property
     * @returns a string
     */
    public get quota_version() {
        return this._quota_version;
    };
    /**
     * Sets the quota_version property value. The quota_version property
     * @param value Value to set for the quota_version property.
     */
    public set quota_version(value: string | undefined) {
        this._quota_version = value;
    };
    /**
     * Gets the reserve property value. The reserve property
     * @returns a boolean
     */
    public get reserve() {
        return this._reserve;
    };
    /**
     * Sets the reserve property value. The reserve property
     * @param value Value to set for the reserve property.
     */
    public set reserve(value: boolean | undefined) {
        this._reserve = value;
    };
    /**
     * Gets the resources property value. The resources property
     * @returns a ReservedResource
     */
    public get resources() {
        return this._resources;
    };
    /**
     * Sets the resources property value. The resources property
     * @param value Value to set for the resources property.
     */
    public set resources(value: ReservedResource[] | undefined) {
        this._resources = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("account_username", this.account_username);
        writer.writeStringValue("availability_zone", this.availability_zone);
        writer.writeBooleanValue("byoc", this.byoc);
        writer.writeStringValue("cloud_account_id", this.cloud_account_id);
        writer.writeStringValue("cloud_provider_id", this.cloud_provider_id);
        writer.writeStringValue("cluster_id", this.cluster_id);
        writer.writeBooleanValue("disconnected", this.disconnected);
        writer.writeStringValue("display_name", this.display_name);
        writer.writeStringValue("external_cluster_id", this.external_cluster_id);
        writer.writeBooleanValue("managed", this.managed);
        writer.writeStringValue("product_category", this.product_category);
        writer.writeStringValue("product_id", this.product_id);
        writer.writeStringValue("quota_version", this.quota_version);
        writer.writeBooleanValue("reserve", this.reserve);
        writer.writeCollectionOfObjectValues<ReservedResource>("resources", this.resources);
        writer.writeAdditionalData(this.additionalData);
    };
}
