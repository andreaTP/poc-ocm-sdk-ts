import {createVersionGateFromDiscriminatorValue} from './createVersionGateFromDiscriminatorValue';
import {VersionGate} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * VersionGateAgreement represents a version gate that the user agreed to for a specific cluster.
 */
export class VersionGateAgreement implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The time the user agreed to the version gate */
    private _agreed_timestamp?: Date | undefined;
    /** Self link. */
    private _href?: string | undefined;
    /** Unique identifier of the object. */
    private _id?: string | undefined;
    /** Indicates the type of this object. Will be 'VersionGateAgreement' if this is a complete object or 'VersionGateAgreementLink' if it is just a link. */
    private _kind?: string | undefined;
    /** Representation of an _OpenShift_ version gate. */
    private _version_gate?: VersionGate | undefined;
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
     * Gets the agreed_timestamp property value. The time the user agreed to the version gate
     * @returns a Date
     */
    public get agreed_timestamp() {
        return this._agreed_timestamp;
    };
    /**
     * Sets the agreed_timestamp property value. The time the user agreed to the version gate
     * @param value Value to set for the agreed_timestamp property.
     */
    public set agreed_timestamp(value: Date | undefined) {
        this._agreed_timestamp = value;
    };
    /**
     * Instantiates a new VersionGateAgreement and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "agreed_timestamp": n => { this.agreed_timestamp = n.getDateValue(); },
            "href": n => { this.href = n.getStringValue(); },
            "id": n => { this.id = n.getStringValue(); },
            "kind": n => { this.kind = n.getStringValue(); },
            "version_gate": n => { this.version_gate = n.getObjectValue<VersionGate>(createVersionGateFromDiscriminatorValue); },
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
     * Gets the kind property value. Indicates the type of this object. Will be 'VersionGateAgreement' if this is a complete object or 'VersionGateAgreementLink' if it is just a link.
     * @returns a string
     */
    public get kind() {
        return this._kind;
    };
    /**
     * Sets the kind property value. Indicates the type of this object. Will be 'VersionGateAgreement' if this is a complete object or 'VersionGateAgreementLink' if it is just a link.
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
        writer.writeDateValue("agreed_timestamp", this.agreed_timestamp);
        writer.writeStringValue("href", this.href);
        writer.writeStringValue("id", this.id);
        writer.writeStringValue("kind", this.kind);
        writer.writeObjectValue<VersionGate>("version_gate", this.version_gate);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the version_gate property value. Representation of an _OpenShift_ version gate.
     * @returns a VersionGate
     */
    public get version_gate() {
        return this._version_gate;
    };
    /**
     * Sets the version_gate property value. Representation of an _OpenShift_ version gate.
     * @param value Value to set for the version_gate property.
     */
    public set version_gate(value: VersionGate | undefined) {
        this._version_gate = value;
    };
}
