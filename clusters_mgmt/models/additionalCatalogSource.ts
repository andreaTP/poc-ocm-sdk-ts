import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Representation of an addon catalog source object used by addon versions.
 */
export class AdditionalCatalogSource implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Indicates is this additional catalog source is enabled for the addon */
    private _enabled?: boolean | undefined;
    /** ID of the additional catalog source */
    private _id?: string | undefined;
    /** Image of the additional catalog source. */
    private _image?: string | undefined;
    /** Name of the additional catalog source. */
    private _name?: string | undefined;
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
     * Instantiates a new AdditionalCatalogSource and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the enabled property value. Indicates is this additional catalog source is enabled for the addon
     * @returns a boolean
     */
    public get enabled() {
        return this._enabled;
    };
    /**
     * Sets the enabled property value. Indicates is this additional catalog source is enabled for the addon
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
            "enabled": n => { this.enabled = n.getBooleanValue(); },
            "id": n => { this.id = n.getStringValue(); },
            "image": n => { this.image = n.getStringValue(); },
            "name": n => { this.name = n.getStringValue(); },
        };
    };
    /**
     * Gets the id property value. ID of the additional catalog source
     * @returns a string
     */
    public get id() {
        return this._id;
    };
    /**
     * Sets the id property value. ID of the additional catalog source
     * @param value Value to set for the id property.
     */
    public set id(value: string | undefined) {
        this._id = value;
    };
    /**
     * Gets the image property value. Image of the additional catalog source.
     * @returns a string
     */
    public get image() {
        return this._image;
    };
    /**
     * Sets the image property value. Image of the additional catalog source.
     * @param value Value to set for the image property.
     */
    public set image(value: string | undefined) {
        this._image = value;
    };
    /**
     * Gets the name property value. Name of the additional catalog source.
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. Name of the additional catalog source.
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
        writer.writeBooleanValue("enabled", this.enabled);
        writer.writeStringValue("id", this.id);
        writer.writeStringValue("image", this.image);
        writer.writeStringValue("name", this.name);
        writer.writeAdditionalData(this.additionalData);
    };
}
