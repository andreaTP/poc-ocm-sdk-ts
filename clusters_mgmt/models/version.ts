import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Representation of an _OpenShift_ version.
 */
export class Version implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** AvailableUpgrades is the list of versions this version can be upgraded to. */
    private _available_upgrades?: string[] | undefined;
    /** ChannelGroup is the name of the group where this image belongs.ChannelGroup is a mechanism to partition the images to different groups,each image belongs to only a single group. */
    private _channel_group?: string | undefined;
    /** Indicates if this should be selected as the default version when a cluster is createdwithout specifying explicitly the version. */
    private _defaultEscaped?: boolean | undefined;
    /** Indicates if this version can be used to create clusters. */
    private _enabled?: boolean | undefined;
    /** EndOfLifeTimestamp is the date and time when the version will get to End of Life, using theformat defined in https://www.ietf.org/rfc/rfc3339.txt[RC3339]. */
    private _end_of_life_timestamp?: Date | undefined;
    /** Self link. */
    private _href?: string | undefined;
    /** Unique identifier of the object. */
    private _id?: string | undefined;
    /** Indicates the type of this object. Will be 'Version' if this is a complete object or 'VersionLink' if it is just a link. */
    private _kind?: string | undefined;
    /** RawID is the id of the version - without channel group and prefix. */
    private _raw_id?: string | undefined;
    /** ReleaseImage contains the URI of Openshift release image */
    private _release_image?: string | undefined;
    /** ROSAEnabled indicates whether this version can be used to create ROSA clusters. */
    private _rosa_enabled?: boolean | undefined;
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
     * Gets the available_upgrades property value. AvailableUpgrades is the list of versions this version can be upgraded to.
     * @returns a string
     */
    public get available_upgrades() {
        return this._available_upgrades;
    };
    /**
     * Sets the available_upgrades property value. AvailableUpgrades is the list of versions this version can be upgraded to.
     * @param value Value to set for the available_upgrades property.
     */
    public set available_upgrades(value: string[] | undefined) {
        this._available_upgrades = value;
    };
    /**
     * Gets the channel_group property value. ChannelGroup is the name of the group where this image belongs.ChannelGroup is a mechanism to partition the images to different groups,each image belongs to only a single group.
     * @returns a string
     */
    public get channel_group() {
        return this._channel_group;
    };
    /**
     * Sets the channel_group property value. ChannelGroup is the name of the group where this image belongs.ChannelGroup is a mechanism to partition the images to different groups,each image belongs to only a single group.
     * @param value Value to set for the channel_group property.
     */
    public set channel_group(value: string | undefined) {
        this._channel_group = value;
    };
    /**
     * Instantiates a new Version and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the default property value. Indicates if this should be selected as the default version when a cluster is createdwithout specifying explicitly the version.
     * @returns a boolean
     */
    public get defaultEscaped() {
        return this._defaultEscaped;
    };
    /**
     * Sets the default property value. Indicates if this should be selected as the default version when a cluster is createdwithout specifying explicitly the version.
     * @param value Value to set for the defaultEscaped property.
     */
    public set defaultEscaped(value: boolean | undefined) {
        this._defaultEscaped = value;
    };
    /**
     * Gets the enabled property value. Indicates if this version can be used to create clusters.
     * @returns a boolean
     */
    public get enabled() {
        return this._enabled;
    };
    /**
     * Sets the enabled property value. Indicates if this version can be used to create clusters.
     * @param value Value to set for the enabled property.
     */
    public set enabled(value: boolean | undefined) {
        this._enabled = value;
    };
    /**
     * Gets the end_of_life_timestamp property value. EndOfLifeTimestamp is the date and time when the version will get to End of Life, using theformat defined in https://www.ietf.org/rfc/rfc3339.txt[RC3339].
     * @returns a Date
     */
    public get end_of_life_timestamp() {
        return this._end_of_life_timestamp;
    };
    /**
     * Sets the end_of_life_timestamp property value. EndOfLifeTimestamp is the date and time when the version will get to End of Life, using theformat defined in https://www.ietf.org/rfc/rfc3339.txt[RC3339].
     * @param value Value to set for the end_of_life_timestamp property.
     */
    public set end_of_life_timestamp(value: Date | undefined) {
        this._end_of_life_timestamp = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "available_upgrades": n => { this.available_upgrades = n.getCollectionOfPrimitiveValues<string>(); },
            "channel_group": n => { this.channel_group = n.getStringValue(); },
            "default": n => { this.defaultEscaped = n.getBooleanValue(); },
            "enabled": n => { this.enabled = n.getBooleanValue(); },
            "end_of_life_timestamp": n => { this.end_of_life_timestamp = n.getDateValue(); },
            "href": n => { this.href = n.getStringValue(); },
            "id": n => { this.id = n.getStringValue(); },
            "kind": n => { this.kind = n.getStringValue(); },
            "raw_id": n => { this.raw_id = n.getStringValue(); },
            "release_image": n => { this.release_image = n.getStringValue(); },
            "rosa_enabled": n => { this.rosa_enabled = n.getBooleanValue(); },
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
     * Gets the kind property value. Indicates the type of this object. Will be 'Version' if this is a complete object or 'VersionLink' if it is just a link.
     * @returns a string
     */
    public get kind() {
        return this._kind;
    };
    /**
     * Sets the kind property value. Indicates the type of this object. Will be 'Version' if this is a complete object or 'VersionLink' if it is just a link.
     * @param value Value to set for the kind property.
     */
    public set kind(value: string | undefined) {
        this._kind = value;
    };
    /**
     * Gets the raw_id property value. RawID is the id of the version - without channel group and prefix.
     * @returns a string
     */
    public get raw_id() {
        return this._raw_id;
    };
    /**
     * Sets the raw_id property value. RawID is the id of the version - without channel group and prefix.
     * @param value Value to set for the raw_id property.
     */
    public set raw_id(value: string | undefined) {
        this._raw_id = value;
    };
    /**
     * Gets the release_image property value. ReleaseImage contains the URI of Openshift release image
     * @returns a string
     */
    public get release_image() {
        return this._release_image;
    };
    /**
     * Sets the release_image property value. ReleaseImage contains the URI of Openshift release image
     * @param value Value to set for the release_image property.
     */
    public set release_image(value: string | undefined) {
        this._release_image = value;
    };
    /**
     * Gets the rosa_enabled property value. ROSAEnabled indicates whether this version can be used to create ROSA clusters.
     * @returns a boolean
     */
    public get rosa_enabled() {
        return this._rosa_enabled;
    };
    /**
     * Sets the rosa_enabled property value. ROSAEnabled indicates whether this version can be used to create ROSA clusters.
     * @param value Value to set for the rosa_enabled property.
     */
    public set rosa_enabled(value: boolean | undefined) {
        this._rosa_enabled = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfPrimitiveValues<string>("available_upgrades", this.available_upgrades);
        writer.writeStringValue("channel_group", this.channel_group);
        writer.writeBooleanValue("default", this.defaultEscaped);
        writer.writeBooleanValue("enabled", this.enabled);
        writer.writeDateValue("end_of_life_timestamp", this.end_of_life_timestamp);
        writer.writeStringValue("href", this.href);
        writer.writeStringValue("id", this.id);
        writer.writeStringValue("kind", this.kind);
        writer.writeStringValue("raw_id", this.raw_id);
        writer.writeStringValue("release_image", this.release_image);
        writer.writeBooleanValue("rosa_enabled", this.rosa_enabled);
        writer.writeAdditionalData(this.additionalData);
    };
}
