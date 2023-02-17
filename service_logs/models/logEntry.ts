import {LogType} from './logType';
import {Severity} from './severity';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class LogEntry implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Internal cluster ID. */
    private _cluster_id?: string | undefined;
    /** External cluster ID. */
    private _cluster_uuid?: string | undefined;
    /** Full description of the log entry content (supports Markdown format as well). */
    private _description?: string | undefined;
    /** Log custom event id for a simple search of related cluster logs. */
    private _event_stream_id?: string | undefined;
    /** Self link. */
    private _href?: string | undefined;
    /** Unique identifier of the object. */
    private _id?: string | undefined;
    /** A flag that indicates whether the log entry should be internal/private only. */
    private _internal_only?: boolean | undefined;
    /** Indicates the type of this object. Will be 'LogEntry' if this is a complete object or 'LogEntryLink' if it is just a link. */
    private _kind?: string | undefined;
    /** Representation of the log type field used in cluster log type model. */
    private _log_type?: LogType | undefined;
    /** The name of the service who created the log. */
    private _service_name?: string | undefined;
    /** The severity property */
    private _severity?: Severity | undefined;
    /** The related subscription id of the cluster. */
    private _subscription_id?: string | undefined;
    /** Title of the log entry. */
    private _summary?: string | undefined;
    /** The timestamp property */
    private _timestamp?: Date | undefined;
    /** The username that triggered the event (if available). */
    private _username?: string | undefined;
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
     * Gets the cluster_id property value. Internal cluster ID.
     * @returns a string
     */
    public get cluster_id() {
        return this._cluster_id;
    };
    /**
     * Sets the cluster_id property value. Internal cluster ID.
     * @param value Value to set for the cluster_id property.
     */
    public set cluster_id(value: string | undefined) {
        this._cluster_id = value;
    };
    /**
     * Gets the cluster_uuid property value. External cluster ID.
     * @returns a string
     */
    public get cluster_uuid() {
        return this._cluster_uuid;
    };
    /**
     * Sets the cluster_uuid property value. External cluster ID.
     * @param value Value to set for the cluster_uuid property.
     */
    public set cluster_uuid(value: string | undefined) {
        this._cluster_uuid = value;
    };
    /**
     * Instantiates a new LogEntry and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the description property value. Full description of the log entry content (supports Markdown format as well).
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. Full description of the log entry content (supports Markdown format as well).
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Gets the event_stream_id property value. Log custom event id for a simple search of related cluster logs.
     * @returns a string
     */
    public get event_stream_id() {
        return this._event_stream_id;
    };
    /**
     * Sets the event_stream_id property value. Log custom event id for a simple search of related cluster logs.
     * @param value Value to set for the event_stream_id property.
     */
    public set event_stream_id(value: string | undefined) {
        this._event_stream_id = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "cluster_id": n => { this.cluster_id = n.getStringValue(); },
            "cluster_uuid": n => { this.cluster_uuid = n.getStringValue(); },
            "description": n => { this.description = n.getStringValue(); },
            "event_stream_id": n => { this.event_stream_id = n.getStringValue(); },
            "href": n => { this.href = n.getStringValue(); },
            "id": n => { this.id = n.getStringValue(); },
            "internal_only": n => { this.internal_only = n.getBooleanValue(); },
            "kind": n => { this.kind = n.getStringValue(); },
            "log_type": n => { this.log_type = n.getEnumValue<LogType>(LogType); },
            "service_name": n => { this.service_name = n.getStringValue(); },
            "severity": n => { this.severity = n.getEnumValue<Severity>(Severity); },
            "subscription_id": n => { this.subscription_id = n.getStringValue(); },
            "summary": n => { this.summary = n.getStringValue(); },
            "timestamp": n => { this.timestamp = n.getDateValue(); },
            "username": n => { this.username = n.getStringValue(); },
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
     * Gets the internal_only property value. A flag that indicates whether the log entry should be internal/private only.
     * @returns a boolean
     */
    public get internal_only() {
        return this._internal_only;
    };
    /**
     * Sets the internal_only property value. A flag that indicates whether the log entry should be internal/private only.
     * @param value Value to set for the internal_only property.
     */
    public set internal_only(value: boolean | undefined) {
        this._internal_only = value;
    };
    /**
     * Gets the kind property value. Indicates the type of this object. Will be 'LogEntry' if this is a complete object or 'LogEntryLink' if it is just a link.
     * @returns a string
     */
    public get kind() {
        return this._kind;
    };
    /**
     * Sets the kind property value. Indicates the type of this object. Will be 'LogEntry' if this is a complete object or 'LogEntryLink' if it is just a link.
     * @param value Value to set for the kind property.
     */
    public set kind(value: string | undefined) {
        this._kind = value;
    };
    /**
     * Gets the log_type property value. Representation of the log type field used in cluster log type model.
     * @returns a LogType
     */
    public get log_type() {
        return this._log_type;
    };
    /**
     * Sets the log_type property value. Representation of the log type field used in cluster log type model.
     * @param value Value to set for the log_type property.
     */
    public set log_type(value: LogType | undefined) {
        this._log_type = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("cluster_id", this.cluster_id);
        writer.writeStringValue("cluster_uuid", this.cluster_uuid);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("event_stream_id", this.event_stream_id);
        writer.writeStringValue("href", this.href);
        writer.writeStringValue("id", this.id);
        writer.writeBooleanValue("internal_only", this.internal_only);
        writer.writeStringValue("kind", this.kind);
        writer.writeEnumValue<LogType>("log_type", this.log_type);
        writer.writeStringValue("service_name", this.service_name);
        writer.writeEnumValue<Severity>("severity", this.severity);
        writer.writeStringValue("subscription_id", this.subscription_id);
        writer.writeStringValue("summary", this.summary);
        writer.writeDateValue("timestamp", this.timestamp);
        writer.writeStringValue("username", this.username);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the service_name property value. The name of the service who created the log.
     * @returns a string
     */
    public get service_name() {
        return this._service_name;
    };
    /**
     * Sets the service_name property value. The name of the service who created the log.
     * @param value Value to set for the service_name property.
     */
    public set service_name(value: string | undefined) {
        this._service_name = value;
    };
    /**
     * Gets the severity property value. The severity property
     * @returns a Severity
     */
    public get severity() {
        return this._severity;
    };
    /**
     * Sets the severity property value. The severity property
     * @param value Value to set for the severity property.
     */
    public set severity(value: Severity | undefined) {
        this._severity = value;
    };
    /**
     * Gets the subscription_id property value. The related subscription id of the cluster.
     * @returns a string
     */
    public get subscription_id() {
        return this._subscription_id;
    };
    /**
     * Sets the subscription_id property value. The related subscription id of the cluster.
     * @param value Value to set for the subscription_id property.
     */
    public set subscription_id(value: string | undefined) {
        this._subscription_id = value;
    };
    /**
     * Gets the summary property value. Title of the log entry.
     * @returns a string
     */
    public get summary() {
        return this._summary;
    };
    /**
     * Sets the summary property value. Title of the log entry.
     * @param value Value to set for the summary property.
     */
    public set summary(value: string | undefined) {
        this._summary = value;
    };
    /**
     * Gets the timestamp property value. The timestamp property
     * @returns a Date
     */
    public get timestamp() {
        return this._timestamp;
    };
    /**
     * Sets the timestamp property value. The timestamp property
     * @param value Value to set for the timestamp property.
     */
    public set timestamp(value: Date | undefined) {
        this._timestamp = value;
    };
    /**
     * Gets the username property value. The username that triggered the event (if available).
     * @returns a string
     */
    public get username() {
        return this._username;
    };
    /**
     * Sets the username property value. The username that triggered the event (if available).
     * @param value Value to set for the username property.
     */
    public set username(value: string | undefined) {
        this._username = value;
    };
}
