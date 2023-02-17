import {createCloudProviderFromDiscriminatorValue} from './createCloudProviderFromDiscriminatorValue';
import {createValueFromDiscriminatorValue} from './createValueFromDiscriminatorValue';
import {CloudProvider, Value} from './index';
import {MachineTypeCategory} from './machineTypeCategory';
import {MachineTypeSize} from './machineTypeSize';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Machine type.
 */
export class MachineType implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Machine type category. */
    private _category?: MachineTypeCategory | undefined;
    /** 'true' if the instance type is supported only for CCS clusters, 'false' otherwise. */
    private _ccs_only?: boolean | undefined;
    /** Cloud provider. */
    private _cloud_provider?: CloudProvider | undefined;
    /** Numeric value and the unit used to measure it.Units are not mandatory, and they're not specified for some resources. Forresources that use bytes, the accepted units are:- 1 B = 1 byte- 1 KB = 10^3 bytes- 1 MB = 10^6 bytes- 1 GB = 10^9 bytes- 1 TB = 10^12 bytes- 1 PB = 10^15 bytes- 1 B = 1 byte- 1 KiB = 2^10 bytes- 1 MiB = 2^20 bytes- 1 GiB = 2^30 bytes- 1 TiB = 2^40 bytes- 1 PiB = 2^50 bytes */
    private _cpu?: Value | undefined;
    /** Generic name for quota purposes, for example `highmem-4`.Cloud provider agnostic - many values are shared between "similar"machine types on different providers.Corresponds to `resource_name` values in "compute.node"  quota cost data. */
    private _generic_name?: string | undefined;
    /** Self link. */
    private _href?: string | undefined;
    /** Unique identifier of the object. */
    private _id?: string | undefined;
    /** Indicates the type of this object. Will be 'MachineType' if this is a complete object or 'MachineTypeLink' if it is just a link. */
    private _kind?: string | undefined;
    /** Numeric value and the unit used to measure it.Units are not mandatory, and they're not specified for some resources. Forresources that use bytes, the accepted units are:- 1 B = 1 byte- 1 KB = 10^3 bytes- 1 MB = 10^6 bytes- 1 GB = 10^9 bytes- 1 TB = 10^12 bytes- 1 PB = 10^15 bytes- 1 B = 1 byte- 1 KiB = 2^10 bytes- 1 MiB = 2^20 bytes- 1 GiB = 2^30 bytes- 1 TiB = 2^40 bytes- 1 PiB = 2^50 bytes */
    private _memory?: Value | undefined;
    /** Human friendly identifier of the machine type, for example `r5.xlarge - Memory Optimized`. */
    private _name?: string | undefined;
    /** Machine type size. */
    private _size?: MachineTypeSize | undefined;
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
     * Gets the category property value. Machine type category.
     * @returns a MachineTypeCategory
     */
    public get category() {
        return this._category;
    };
    /**
     * Sets the category property value. Machine type category.
     * @param value Value to set for the category property.
     */
    public set category(value: MachineTypeCategory | undefined) {
        this._category = value;
    };
    /**
     * Gets the ccs_only property value. 'true' if the instance type is supported only for CCS clusters, 'false' otherwise.
     * @returns a boolean
     */
    public get ccs_only() {
        return this._ccs_only;
    };
    /**
     * Sets the ccs_only property value. 'true' if the instance type is supported only for CCS clusters, 'false' otherwise.
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
     * Instantiates a new MachineType and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the cpu property value. Numeric value and the unit used to measure it.Units are not mandatory, and they're not specified for some resources. Forresources that use bytes, the accepted units are:- 1 B = 1 byte- 1 KB = 10^3 bytes- 1 MB = 10^6 bytes- 1 GB = 10^9 bytes- 1 TB = 10^12 bytes- 1 PB = 10^15 bytes- 1 B = 1 byte- 1 KiB = 2^10 bytes- 1 MiB = 2^20 bytes- 1 GiB = 2^30 bytes- 1 TiB = 2^40 bytes- 1 PiB = 2^50 bytes
     * @returns a Value
     */
    public get cpu() {
        return this._cpu;
    };
    /**
     * Sets the cpu property value. Numeric value and the unit used to measure it.Units are not mandatory, and they're not specified for some resources. Forresources that use bytes, the accepted units are:- 1 B = 1 byte- 1 KB = 10^3 bytes- 1 MB = 10^6 bytes- 1 GB = 10^9 bytes- 1 TB = 10^12 bytes- 1 PB = 10^15 bytes- 1 B = 1 byte- 1 KiB = 2^10 bytes- 1 MiB = 2^20 bytes- 1 GiB = 2^30 bytes- 1 TiB = 2^40 bytes- 1 PiB = 2^50 bytes
     * @param value Value to set for the cpu property.
     */
    public set cpu(value: Value | undefined) {
        this._cpu = value;
    };
    /**
     * Gets the generic_name property value. Generic name for quota purposes, for example `highmem-4`.Cloud provider agnostic - many values are shared between "similar"machine types on different providers.Corresponds to `resource_name` values in "compute.node"  quota cost data.
     * @returns a string
     */
    public get generic_name() {
        return this._generic_name;
    };
    /**
     * Sets the generic_name property value. Generic name for quota purposes, for example `highmem-4`.Cloud provider agnostic - many values are shared between "similar"machine types on different providers.Corresponds to `resource_name` values in "compute.node"  quota cost data.
     * @param value Value to set for the generic_name property.
     */
    public set generic_name(value: string | undefined) {
        this._generic_name = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "category": n => { this.category = n.getEnumValue<MachineTypeCategory>(MachineTypeCategory); },
            "ccs_only": n => { this.ccs_only = n.getBooleanValue(); },
            "cloud_provider": n => { this.cloud_provider = n.getObjectValue<CloudProvider>(createCloudProviderFromDiscriminatorValue); },
            "cpu": n => { this.cpu = n.getObjectValue<Value>(createValueFromDiscriminatorValue); },
            "generic_name": n => { this.generic_name = n.getStringValue(); },
            "href": n => { this.href = n.getStringValue(); },
            "id": n => { this.id = n.getStringValue(); },
            "kind": n => { this.kind = n.getStringValue(); },
            "memory": n => { this.memory = n.getObjectValue<Value>(createValueFromDiscriminatorValue); },
            "name": n => { this.name = n.getStringValue(); },
            "size": n => { this.size = n.getEnumValue<MachineTypeSize>(MachineTypeSize); },
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
     * Gets the kind property value. Indicates the type of this object. Will be 'MachineType' if this is a complete object or 'MachineTypeLink' if it is just a link.
     * @returns a string
     */
    public get kind() {
        return this._kind;
    };
    /**
     * Sets the kind property value. Indicates the type of this object. Will be 'MachineType' if this is a complete object or 'MachineTypeLink' if it is just a link.
     * @param value Value to set for the kind property.
     */
    public set kind(value: string | undefined) {
        this._kind = value;
    };
    /**
     * Gets the memory property value. Numeric value and the unit used to measure it.Units are not mandatory, and they're not specified for some resources. Forresources that use bytes, the accepted units are:- 1 B = 1 byte- 1 KB = 10^3 bytes- 1 MB = 10^6 bytes- 1 GB = 10^9 bytes- 1 TB = 10^12 bytes- 1 PB = 10^15 bytes- 1 B = 1 byte- 1 KiB = 2^10 bytes- 1 MiB = 2^20 bytes- 1 GiB = 2^30 bytes- 1 TiB = 2^40 bytes- 1 PiB = 2^50 bytes
     * @returns a Value
     */
    public get memory() {
        return this._memory;
    };
    /**
     * Sets the memory property value. Numeric value and the unit used to measure it.Units are not mandatory, and they're not specified for some resources. Forresources that use bytes, the accepted units are:- 1 B = 1 byte- 1 KB = 10^3 bytes- 1 MB = 10^6 bytes- 1 GB = 10^9 bytes- 1 TB = 10^12 bytes- 1 PB = 10^15 bytes- 1 B = 1 byte- 1 KiB = 2^10 bytes- 1 MiB = 2^20 bytes- 1 GiB = 2^30 bytes- 1 TiB = 2^40 bytes- 1 PiB = 2^50 bytes
     * @param value Value to set for the memory property.
     */
    public set memory(value: Value | undefined) {
        this._memory = value;
    };
    /**
     * Gets the name property value. Human friendly identifier of the machine type, for example `r5.xlarge - Memory Optimized`.
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. Human friendly identifier of the machine type, for example `r5.xlarge - Memory Optimized`.
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
        writer.writeEnumValue<MachineTypeCategory>("category", this.category);
        writer.writeBooleanValue("ccs_only", this.ccs_only);
        writer.writeObjectValue<CloudProvider>("cloud_provider", this.cloud_provider);
        writer.writeObjectValue<Value>("cpu", this.cpu);
        writer.writeStringValue("generic_name", this.generic_name);
        writer.writeStringValue("href", this.href);
        writer.writeStringValue("id", this.id);
        writer.writeStringValue("kind", this.kind);
        writer.writeObjectValue<Value>("memory", this.memory);
        writer.writeStringValue("name", this.name);
        writer.writeEnumValue<MachineTypeSize>("size", this.size);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the size property value. Machine type size.
     * @returns a MachineTypeSize
     */
    public get size() {
        return this._size;
    };
    /**
     * Sets the size property value. Machine type size.
     * @param value Value to set for the size property.
     */
    public set size(value: MachineTypeSize | undefined) {
        this._size = value;
    };
}
