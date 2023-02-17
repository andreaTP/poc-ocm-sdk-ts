import {createCloudProviderFromDiscriminatorValue} from './createCloudProviderFromDiscriminatorValue';
import {CloudProvider} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Description of a region of a cloud provider.
 */
export class CloudRegion implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** 'true' if the region is supported only for CCS clusters, 'false' otherwise. */
    private _ccs_only?: boolean | undefined;
    /** Cloud provider. */
    private _cloud_provider?: CloudProvider | undefined;
    /** Name of the region for display purposes, for example `N. Virginia`. */
    private _display_name?: string | undefined;
    /** Whether the region is enabled for deploying an OSD cluster. */
    private _enabled?: boolean | undefined;
    /** Self link. */
    private _href?: string | undefined;
    /** Unique identifier of the object. */
    private _id?: string | undefined;
    /** Indicates the type of this object. Will be 'CloudRegion' if this is a complete object or 'CloudRegionLink' if it is just a link. */
    private _kind?: string | undefined;
    /** Human friendly identifier of the region, for example `us-east-1`.NOTE: Currently for all cloud providers and all regions `id` and `name` have exactlythe same values. */
    private _name?: string | undefined;
    /** 'true' if the region is supported for Hypershift deployments, 'false' otherwise. */
    private _supports_hypershift?: boolean | undefined;
    /** Whether the region supports multiple availability zones. */
    private _supports_multi_az?: boolean | undefined;
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
     * Gets the ccs_only property value. 'true' if the region is supported only for CCS clusters, 'false' otherwise.
     * @returns a boolean
     */
    public get ccs_only() {
        return this._ccs_only;
    };
    /**
     * Sets the ccs_only property value. 'true' if the region is supported only for CCS clusters, 'false' otherwise.
     * @param value Value to set for the ccs_only property.
     */
    public set ccs_only(value: boolean | undefined) {
        this._ccs_only = value;
    };
    /**
     * Gets the cloud_provider property value. Cloud provider.
     * @returns a CloudProvider
     */
    public get cloud_provider() {
        return this._cloud_provider;
    };
    /**
     * Sets the cloud_provider property value. Cloud provider.
     * @param value Value to set for the cloud_provider property.
     */
    public set cloud_provider(value: CloudProvider | undefined) {
        this._cloud_provider = value;
    };
    /**
     * Instantiates a new CloudRegion and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the display_name property value. Name of the region for display purposes, for example `N. Virginia`.
     * @returns a string
     */
    public get display_name() {
        return this._display_name;
    };
    /**
     * Sets the display_name property value. Name of the region for display purposes, for example `N. Virginia`.
     * @param value Value to set for the display_name property.
     */
    public set display_name(value: string | undefined) {
        this._display_name = value;
    };
    /**
     * Gets the enabled property value. Whether the region is enabled for deploying an OSD cluster.
     * @returns a boolean
     */
    public get enabled() {
        return this._enabled;
    };
    /**
     * Sets the enabled property value. Whether the region is enabled for deploying an OSD cluster.
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
            "ccs_only": n => { this.ccs_only = n.getBooleanValue(); },
            "cloud_provider": n => { this.cloud_provider = n.getObjectValue<CloudProvider>(createCloudProviderFromDiscriminatorValue); },
            "display_name": n => { this.display_name = n.getStringValue(); },
            "enabled": n => { this.enabled = n.getBooleanValue(); },
            "href": n => { this.href = n.getStringValue(); },
            "id": n => { this.id = n.getStringValue(); },
            "kind": n => { this.kind = n.getStringValue(); },
            "name": n => { this.name = n.getStringValue(); },
            "supports_hypershift": n => { this.supports_hypershift = n.getBooleanValue(); },
            "supports_multi_az": n => { this.supports_multi_az = n.getBooleanValue(); },
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
     * Gets the kind property value. Indicates the type of this object. Will be 'CloudRegion' if this is a complete object or 'CloudRegionLink' if it is just a link.
     * @returns a string
     */
    public get kind() {
        return this._kind;
    };
    /**
     * Sets the kind property value. Indicates the type of this object. Will be 'CloudRegion' if this is a complete object or 'CloudRegionLink' if it is just a link.
     * @param value Value to set for the kind property.
     */
    public set kind(value: string | undefined) {
        this._kind = value;
    };
    /**
     * Gets the name property value. Human friendly identifier of the region, for example `us-east-1`.NOTE: Currently for all cloud providers and all regions `id` and `name` have exactlythe same values.
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. Human friendly identifier of the region, for example `us-east-1`.NOTE: Currently for all cloud providers and all regions `id` and `name` have exactlythe same values.
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeBooleanValue("ccs_only", this.ccs_only);
        writer.writeObjectValue<CloudProvider>("cloud_provider", this.cloud_provider);
        writer.writeStringValue("display_name", this.display_name);
        writer.writeBooleanValue("enabled", this.enabled);
        writer.writeStringValue("href", this.href);
        writer.writeStringValue("id", this.id);
        writer.writeStringValue("kind", this.kind);
        writer.writeStringValue("name", this.name);
        writer.writeBooleanValue("supports_hypershift", this.supports_hypershift);
        writer.writeBooleanValue("supports_multi_az", this.supports_multi_az);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the supports_hypershift property value. 'true' if the region is supported for Hypershift deployments, 'false' otherwise.
     * @returns a boolean
     */
    public get supports_hypershift() {
        return this._supports_hypershift;
    };
    /**
     * Sets the supports_hypershift property value. 'true' if the region is supported for Hypershift deployments, 'false' otherwise.
     * @param value Value to set for the supports_hypershift property.
     */
    public set supports_hypershift(value: boolean | undefined) {
        this._supports_hypershift = value;
    };
    /**
     * Gets the supports_multi_az property value. Whether the region supports multiple availability zones.
     * @returns a boolean
     */
    public get supports_multi_az() {
        return this._supports_multi_az;
    };
    /**
     * Sets the supports_multi_az property value. Whether the region supports multiple availability zones.
     * @param value Value to set for the supports_multi_az property.
     */
    public set supports_multi_az(value: boolean | undefined) {
        this._supports_multi_az = value;
    };
}
