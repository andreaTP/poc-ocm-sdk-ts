import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Representation of an _OpenShift_ version gate.
 */
export class VersionGate implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** CreationTimestamp is the date and time when the version gate was created,format defined in https://www.ietf.org/rfc/rfc3339.txt[RC3339]. */
    private _creation_timestamp?: Date | undefined;
    /** Description of the version gate. */
    private _description?: string | undefined;
    /** DocumentationURL is the URL for the documentation of the version gate. */
    private _documentation_url?: string | undefined;
    /** Self link. */
    private _href?: string | undefined;
    /** Unique identifier of the object. */
    private _id?: string | undefined;
    /** Indicates the type of this object. Will be 'VersionGate' if this is a complete object or 'VersionGateLink' if it is just a link. */
    private _kind?: string | undefined;
    /** Label representing the version gate in OpenShift. */
    private _label?: string | undefined;
    /** STSOnly indicates if this version gate is for STS clusters only */
    private _sts_only?: boolean | undefined;
    /** Value represents the required value of the label. */
    private _value?: string | undefined;
    /** VersionRawIDPrefix represents the versions prefix that the gate applies to. */
    private _version_raw_id_prefix?: string | undefined;
    /** WarningMessage is a warning that will be displayed to the user before they acknowledge the gate */
    private _warning_message?: string | undefined;
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
     * Instantiates a new VersionGate and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the creation_timestamp property value. CreationTimestamp is the date and time when the version gate was created,format defined in https://www.ietf.org/rfc/rfc3339.txt[RC3339].
     * @returns a Date
     */
    public get creation_timestamp() {
        return this._creation_timestamp;
    };
    /**
     * Sets the creation_timestamp property value. CreationTimestamp is the date and time when the version gate was created,format defined in https://www.ietf.org/rfc/rfc3339.txt[RC3339].
     * @param value Value to set for the creation_timestamp property.
     */
    public set creation_timestamp(value: Date | undefined) {
        this._creation_timestamp = value;
    };
    /**
     * Gets the description property value. Description of the version gate.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. Description of the version gate.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Gets the documentation_url property value. DocumentationURL is the URL for the documentation of the version gate.
     * @returns a string
     */
    public get documentation_url() {
        return this._documentation_url;
    };
    /**
     * Sets the documentation_url property value. DocumentationURL is the URL for the documentation of the version gate.
     * @param value Value to set for the documentation_url property.
     */
    public set documentation_url(value: string | undefined) {
        this._documentation_url = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "creation_timestamp": n => { this.creation_timestamp = n.getDateValue(); },
            "description": n => { this.description = n.getStringValue(); },
            "documentation_url": n => { this.documentation_url = n.getStringValue(); },
            "href": n => { this.href = n.getStringValue(); },
            "id": n => { this.id = n.getStringValue(); },
            "kind": n => { this.kind = n.getStringValue(); },
            "label": n => { this.label = n.getStringValue(); },
            "sts_only": n => { this.sts_only = n.getBooleanValue(); },
            "value": n => { this.value = n.getStringValue(); },
            "version_raw_id_prefix": n => { this.version_raw_id_prefix = n.getStringValue(); },
            "warning_message": n => { this.warning_message = n.getStringValue(); },
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
     * Gets the kind property value. Indicates the type of this object. Will be 'VersionGate' if this is a complete object or 'VersionGateLink' if it is just a link.
     * @returns a string
     */
    public get kind() {
        return this._kind;
    };
    /**
     * Sets the kind property value. Indicates the type of this object. Will be 'VersionGate' if this is a complete object or 'VersionGateLink' if it is just a link.
     * @param value Value to set for the kind property.
     */
    public set kind(value: string | undefined) {
        this._kind = value;
    };
    /**
     * Gets the label property value. Label representing the version gate in OpenShift.
     * @returns a string
     */
    public get label() {
        return this._label;
    };
    /**
     * Sets the label property value. Label representing the version gate in OpenShift.
     * @param value Value to set for the label property.
     */
    public set label(value: string | undefined) {
        this._label = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeDateValue("creation_timestamp", this.creation_timestamp);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("documentation_url", this.documentation_url);
        writer.writeStringValue("href", this.href);
        writer.writeStringValue("id", this.id);
        writer.writeStringValue("kind", this.kind);
        writer.writeStringValue("label", this.label);
        writer.writeBooleanValue("sts_only", this.sts_only);
        writer.writeStringValue("value", this.value);
        writer.writeStringValue("version_raw_id_prefix", this.version_raw_id_prefix);
        writer.writeStringValue("warning_message", this.warning_message);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the sts_only property value. STSOnly indicates if this version gate is for STS clusters only
     * @returns a boolean
     */
    public get sts_only() {
        return this._sts_only;
    };
    /**
     * Sets the sts_only property value. STSOnly indicates if this version gate is for STS clusters only
     * @param value Value to set for the sts_only property.
     */
    public set sts_only(value: boolean | undefined) {
        this._sts_only = value;
    };
    /**
     * Gets the value property value. Value represents the required value of the label.
     * @returns a string
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. Value represents the required value of the label.
     * @param value Value to set for the value property.
     */
    public set value(value: string | undefined) {
        this._value = value;
    };
    /**
     * Gets the version_raw_id_prefix property value. VersionRawIDPrefix represents the versions prefix that the gate applies to.
     * @returns a string
     */
    public get version_raw_id_prefix() {
        return this._version_raw_id_prefix;
    };
    /**
     * Sets the version_raw_id_prefix property value. VersionRawIDPrefix represents the versions prefix that the gate applies to.
     * @param value Value to set for the version_raw_id_prefix property.
     */
    public set version_raw_id_prefix(value: string | undefined) {
        this._version_raw_id_prefix = value;
    };
    /**
     * Gets the warning_message property value. WarningMessage is a warning that will be displayed to the user before they acknowledge the gate
     * @returns a string
     */
    public get warning_message() {
        return this._warning_message;
    };
    /**
     * Sets the warning_message property value. WarningMessage is a warning that will be displayed to the user before they acknowledge the gate
     * @param value Value to set for the warning_message property.
     */
    public set warning_message(value: string | undefined) {
        this._warning_message = value;
    };
}
