import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CloudResource implements AdditionalDataHolder, Parsable {
    /** The active property */
    private _active?: boolean | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The category property */
    private _category?: string | undefined;
    /** The category_pretty property */
    private _category_pretty?: string | undefined;
    /** The cloud_provider property */
    private _cloud_provider?: string | undefined;
    /** The cpu_cores property */
    private _cpu_cores?: number | undefined;
    /** The created_at property */
    private _created_at?: Date | undefined;
    /** The generic_name property */
    private _generic_name?: string | undefined;
    /** Self link. */
    private _href?: string | undefined;
    /** Unique identifier of the object. */
    private _id?: string | undefined;
    /** Indicates the type of this object. Will be 'CloudResource' if this is a complete object or 'CloudResourceLink' if it is just a link. */
    private _kind?: string | undefined;
    /** The memory property */
    private _memory?: number | undefined;
    /** The memory_pretty property */
    private _memory_pretty?: string | undefined;
    /** The name_pretty property */
    private _name_pretty?: string | undefined;
    /** The resource_type property */
    private _resource_type?: string | undefined;
    /** The size_pretty property */
    private _size_pretty?: string | undefined;
    /** The updated_at property */
    private _updated_at?: Date | undefined;
    /**
     * Gets the active property value. The active property
     * @returns a boolean
     */
    public get active() {
        return this._active;
    };
    /**
     * Sets the active property value. The active property
     * @param value Value to set for the active property.
     */
    public set active(value: boolean | undefined) {
        this._active = value;
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
     * Gets the category property value. The category property
     * @returns a string
     */
    public get category() {
        return this._category;
    };
    /**
     * Sets the category property value. The category property
     * @param value Value to set for the category property.
     */
    public set category(value: string | undefined) {
        this._category = value;
    };
    /**
     * Gets the category_pretty property value. The category_pretty property
     * @returns a string
     */
    public get category_pretty() {
        return this._category_pretty;
    };
    /**
     * Sets the category_pretty property value. The category_pretty property
     * @param value Value to set for the category_pretty property.
     */
    public set category_pretty(value: string | undefined) {
        this._category_pretty = value;
    };
    /**
     * Gets the cloud_provider property value. The cloud_provider property
     * @returns a string
     */
    public get cloud_provider() {
        return this._cloud_provider;
    };
    /**
     * Sets the cloud_provider property value. The cloud_provider property
     * @param value Value to set for the cloud_provider property.
     */
    public set cloud_provider(value: string | undefined) {
        this._cloud_provider = value;
    };
    /**
     * Instantiates a new CloudResource and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the cpu_cores property value. The cpu_cores property
     * @returns a integer
     */
    public get cpu_cores() {
        return this._cpu_cores;
    };
    /**
     * Sets the cpu_cores property value. The cpu_cores property
     * @param value Value to set for the cpu_cores property.
     */
    public set cpu_cores(value: number | undefined) {
        this._cpu_cores = value;
    };
    /**
     * Gets the created_at property value. The created_at property
     * @returns a Date
     */
    public get created_at() {
        return this._created_at;
    };
    /**
     * Sets the created_at property value. The created_at property
     * @param value Value to set for the created_at property.
     */
    public set created_at(value: Date | undefined) {
        this._created_at = value;
    };
    /**
     * Gets the generic_name property value. The generic_name property
     * @returns a string
     */
    public get generic_name() {
        return this._generic_name;
    };
    /**
     * Sets the generic_name property value. The generic_name property
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
            "active": n => { this.active = n.getBooleanValue(); },
            "category": n => { this.category = n.getStringValue(); },
            "category_pretty": n => { this.category_pretty = n.getStringValue(); },
            "cloud_provider": n => { this.cloud_provider = n.getStringValue(); },
            "cpu_cores": n => { this.cpu_cores = n.getNumberValue(); },
            "created_at": n => { this.created_at = n.getDateValue(); },
            "generic_name": n => { this.generic_name = n.getStringValue(); },
            "href": n => { this.href = n.getStringValue(); },
            "id": n => { this.id = n.getStringValue(); },
            "kind": n => { this.kind = n.getStringValue(); },
            "memory": n => { this.memory = n.getNumberValue(); },
            "memory_pretty": n => { this.memory_pretty = n.getStringValue(); },
            "name_pretty": n => { this.name_pretty = n.getStringValue(); },
            "resource_type": n => { this.resource_type = n.getStringValue(); },
            "size_pretty": n => { this.size_pretty = n.getStringValue(); },
            "updated_at": n => { this.updated_at = n.getDateValue(); },
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
     * Gets the kind property value. Indicates the type of this object. Will be 'CloudResource' if this is a complete object or 'CloudResourceLink' if it is just a link.
     * @returns a string
     */
    public get kind() {
        return this._kind;
    };
    /**
     * Sets the kind property value. Indicates the type of this object. Will be 'CloudResource' if this is a complete object or 'CloudResourceLink' if it is just a link.
     * @param value Value to set for the kind property.
     */
    public set kind(value: string | undefined) {
        this._kind = value;
    };
    /**
     * Gets the memory property value. The memory property
     * @returns a integer
     */
    public get memory() {
        return this._memory;
    };
    /**
     * Sets the memory property value. The memory property
     * @param value Value to set for the memory property.
     */
    public set memory(value: number | undefined) {
        this._memory = value;
    };
    /**
     * Gets the memory_pretty property value. The memory_pretty property
     * @returns a string
     */
    public get memory_pretty() {
        return this._memory_pretty;
    };
    /**
     * Sets the memory_pretty property value. The memory_pretty property
     * @param value Value to set for the memory_pretty property.
     */
    public set memory_pretty(value: string | undefined) {
        this._memory_pretty = value;
    };
    /**
     * Gets the name_pretty property value. The name_pretty property
     * @returns a string
     */
    public get name_pretty() {
        return this._name_pretty;
    };
    /**
     * Sets the name_pretty property value. The name_pretty property
     * @param value Value to set for the name_pretty property.
     */
    public set name_pretty(value: string | undefined) {
        this._name_pretty = value;
    };
    /**
     * Gets the resource_type property value. The resource_type property
     * @returns a string
     */
    public get resource_type() {
        return this._resource_type;
    };
    /**
     * Sets the resource_type property value. The resource_type property
     * @param value Value to set for the resource_type property.
     */
    public set resource_type(value: string | undefined) {
        this._resource_type = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeBooleanValue("active", this.active);
        writer.writeStringValue("category", this.category);
        writer.writeStringValue("category_pretty", this.category_pretty);
        writer.writeStringValue("cloud_provider", this.cloud_provider);
        writer.writeNumberValue("cpu_cores", this.cpu_cores);
        writer.writeDateValue("created_at", this.created_at);
        writer.writeStringValue("generic_name", this.generic_name);
        writer.writeStringValue("href", this.href);
        writer.writeStringValue("id", this.id);
        writer.writeStringValue("kind", this.kind);
        writer.writeNumberValue("memory", this.memory);
        writer.writeStringValue("memory_pretty", this.memory_pretty);
        writer.writeStringValue("name_pretty", this.name_pretty);
        writer.writeStringValue("resource_type", this.resource_type);
        writer.writeStringValue("size_pretty", this.size_pretty);
        writer.writeDateValue("updated_at", this.updated_at);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the size_pretty property value. The size_pretty property
     * @returns a string
     */
    public get size_pretty() {
        return this._size_pretty;
    };
    /**
     * Sets the size_pretty property value. The size_pretty property
     * @param value Value to set for the size_pretty property.
     */
    public set size_pretty(value: string | undefined) {
        this._size_pretty = value;
    };
    /**
     * Gets the updated_at property value. The updated_at property
     * @returns a Date
     */
    public get updated_at() {
        return this._updated_at;
    };
    /**
     * Sets the updated_at property value. The updated_at property
     * @param value Value to set for the updated_at property.
     */
    public set updated_at(value: Date | undefined) {
        this._updated_at = value;
    };
}
