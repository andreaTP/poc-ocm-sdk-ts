import {createInflightCheck_detailsFromDiscriminatorValue} from './createInflightCheck_detailsFromDiscriminatorValue';
import {InflightCheck_details} from './index';
import {InflightCheckState} from './inflightCheckState';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Representation of check running before the cluster is provisioned.
 */
export class InflightCheck implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Details regarding the state of the inflight check. */
    private _details?: InflightCheck_details | undefined;
    /** The time the check finished running. */
    private _ended_at?: Date | undefined;
    /** Self link. */
    private _href?: string | undefined;
    /** Unique identifier of the object. */
    private _id?: string | undefined;
    /** Indicates the type of this object. Will be 'InflightCheck' if this is a complete object or 'InflightCheckLink' if it is just a link. */
    private _kind?: string | undefined;
    /** The name of the inflight check. */
    private _name?: string | undefined;
    /** The number of times the inflight check restarted. */
    private _restarts?: number | undefined;
    /** The time the check started running. */
    private _started_at?: Date | undefined;
    /** State of an inflight check. */
    private _state?: InflightCheckState | undefined;
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
     * Instantiates a new InflightCheck and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the details property value. Details regarding the state of the inflight check.
     * @returns a InflightCheck_details
     */
    public get details() {
        return this._details;
    };
    /**
     * Sets the details property value. Details regarding the state of the inflight check.
     * @param value Value to set for the details property.
     */
    public set details(value: InflightCheck_details | undefined) {
        this._details = value;
    };
    /**
     * Gets the ended_at property value. The time the check finished running.
     * @returns a Date
     */
    public get ended_at() {
        return this._ended_at;
    };
    /**
     * Sets the ended_at property value. The time the check finished running.
     * @param value Value to set for the ended_at property.
     */
    public set ended_at(value: Date | undefined) {
        this._ended_at = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "details": n => { this.details = n.getObjectValue<InflightCheck_details>(createInflightCheck_detailsFromDiscriminatorValue); },
            "ended_at": n => { this.ended_at = n.getDateValue(); },
            "href": n => { this.href = n.getStringValue(); },
            "id": n => { this.id = n.getStringValue(); },
            "kind": n => { this.kind = n.getStringValue(); },
            "name": n => { this.name = n.getStringValue(); },
            "restarts": n => { this.restarts = n.getNumberValue(); },
            "started_at": n => { this.started_at = n.getDateValue(); },
            "state": n => { this.state = n.getEnumValue<InflightCheckState>(InflightCheckState); },
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
     * Gets the kind property value. Indicates the type of this object. Will be 'InflightCheck' if this is a complete object or 'InflightCheckLink' if it is just a link.
     * @returns a string
     */
    public get kind() {
        return this._kind;
    };
    /**
     * Sets the kind property value. Indicates the type of this object. Will be 'InflightCheck' if this is a complete object or 'InflightCheckLink' if it is just a link.
     * @param value Value to set for the kind property.
     */
    public set kind(value: string | undefined) {
        this._kind = value;
    };
    /**
     * Gets the name property value. The name of the inflight check.
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. The name of the inflight check.
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Gets the restarts property value. The number of times the inflight check restarted.
     * @returns a integer
     */
    public get restarts() {
        return this._restarts;
    };
    /**
     * Sets the restarts property value. The number of times the inflight check restarted.
     * @param value Value to set for the restarts property.
     */
    public set restarts(value: number | undefined) {
        this._restarts = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<InflightCheck_details>("details", this.details);
        writer.writeDateValue("ended_at", this.ended_at);
        writer.writeStringValue("href", this.href);
        writer.writeStringValue("id", this.id);
        writer.writeStringValue("kind", this.kind);
        writer.writeStringValue("name", this.name);
        writer.writeNumberValue("restarts", this.restarts);
        writer.writeDateValue("started_at", this.started_at);
        writer.writeEnumValue<InflightCheckState>("state", this.state);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the started_at property value. The time the check started running.
     * @returns a Date
     */
    public get started_at() {
        return this._started_at;
    };
    /**
     * Sets the started_at property value. The time the check started running.
     * @param value Value to set for the started_at property.
     */
    public set started_at(value: Date | undefined) {
        this._started_at = value;
    };
    /**
     * Gets the state property value. State of an inflight check.
     * @returns a InflightCheckState
     */
    public get state() {
        return this._state;
    };
    /**
     * Sets the state property value. State of an inflight check.
     * @param value Value to set for the state property.
     */
    public set state(value: InflightCheckState | undefined) {
        this._state = value;
    };
}
