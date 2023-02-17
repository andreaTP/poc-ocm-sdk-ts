import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Registry implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The cloud_alias property */
    private _cloud_alias?: boolean | undefined;
    /** The created_at property */
    private _created_at?: Date | undefined;
    /** Self link. */
    private _href?: string | undefined;
    /** Unique identifier of the object. */
    private _id?: string | undefined;
    /** Indicates the type of this object. Will be 'Registry' if this is a complete object or 'RegistryLink' if it is just a link. */
    private _kind?: string | undefined;
    /** The name property */
    private _name?: string | undefined;
    /** The org_name property */
    private _org_name?: string | undefined;
    /** The team_name property */
    private _team_name?: string | undefined;
    /** The type property */
    private _type?: string | undefined;
    /** The updated_at property */
    private _updated_at?: Date | undefined;
    /** The url property */
    private _url?: string | undefined;
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
     * Gets the cloud_alias property value. The cloud_alias property
     * @returns a boolean
     */
    public get cloud_alias() {
        return this._cloud_alias;
    };
    /**
     * Sets the cloud_alias property value. The cloud_alias property
     * @param value Value to set for the cloud_alias property.
     */
    public set cloud_alias(value: boolean | undefined) {
        this._cloud_alias = value;
    };
    /**
     * Instantiates a new Registry and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
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
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "cloud_alias": n => { this.cloud_alias = n.getBooleanValue(); },
            "created_at": n => { this.created_at = n.getDateValue(); },
            "href": n => { this.href = n.getStringValue(); },
            "id": n => { this.id = n.getStringValue(); },
            "kind": n => { this.kind = n.getStringValue(); },
            "name": n => { this.name = n.getStringValue(); },
            "org_name": n => { this.org_name = n.getStringValue(); },
            "team_name": n => { this.team_name = n.getStringValue(); },
            "type": n => { this.type = n.getStringValue(); },
            "updated_at": n => { this.updated_at = n.getDateValue(); },
            "url": n => { this.url = n.getStringValue(); },
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
     * Gets the kind property value. Indicates the type of this object. Will be 'Registry' if this is a complete object or 'RegistryLink' if it is just a link.
     * @returns a string
     */
    public get kind() {
        return this._kind;
    };
    /**
     * Sets the kind property value. Indicates the type of this object. Will be 'Registry' if this is a complete object or 'RegistryLink' if it is just a link.
     * @param value Value to set for the kind property.
     */
    public set kind(value: string | undefined) {
        this._kind = value;
    };
    /**
     * Gets the name property value. The name property
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. The name property
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Gets the org_name property value. The org_name property
     * @returns a string
     */
    public get org_name() {
        return this._org_name;
    };
    /**
     * Sets the org_name property value. The org_name property
     * @param value Value to set for the org_name property.
     */
    public set org_name(value: string | undefined) {
        this._org_name = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeBooleanValue("cloud_alias", this.cloud_alias);
        writer.writeDateValue("created_at", this.created_at);
        writer.writeStringValue("href", this.href);
        writer.writeStringValue("id", this.id);
        writer.writeStringValue("kind", this.kind);
        writer.writeStringValue("name", this.name);
        writer.writeStringValue("org_name", this.org_name);
        writer.writeStringValue("team_name", this.team_name);
        writer.writeStringValue("type", this.type);
        writer.writeDateValue("updated_at", this.updated_at);
        writer.writeStringValue("url", this.url);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the team_name property value. The team_name property
     * @returns a string
     */
    public get team_name() {
        return this._team_name;
    };
    /**
     * Sets the team_name property value. The team_name property
     * @param value Value to set for the team_name property.
     */
    public set team_name(value: string | undefined) {
        this._team_name = value;
    };
    /**
     * Gets the type property value. The type property
     * @returns a string
     */
    public get type() {
        return this._type;
    };
    /**
     * Sets the type property value. The type property
     * @param value Value to set for the type property.
     */
    public set type(value: string | undefined) {
        this._type = value;
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
    /**
     * Gets the url property value. The url property
     * @returns a string
     */
    public get url() {
        return this._url;
    };
    /**
     * Sets the url property value. The url property
     * @param value Value to set for the url property.
     */
    public set url(value: string | undefined) {
        this._url = value;
    };
}
