import {AlertSeverity} from './alertSeverity';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Provides information about a single alert firing on the cluster.
 */
export class AlertInfo implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The alert name. Multiple alerts with same name are possible. */
    private _name?: string | undefined;
    /** Severity of a cluster alert received via telemetry. */
    private _severity?: AlertSeverity | undefined;
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
     * Instantiates a new AlertInfo and sets the default values.
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
            "name": n => { this.name = n.getStringValue(); },
            "severity": n => { this.severity = n.getEnumValue<AlertSeverity>(AlertSeverity); },
        };
    };
    /**
     * Gets the name property value. The alert name. Multiple alerts with same name are possible.
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. The alert name. Multiple alerts with same name are possible.
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
        writer.writeStringValue("name", this.name);
        writer.writeEnumValue<AlertSeverity>("severity", this.severity);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the severity property value. Severity of a cluster alert received via telemetry.
     * @returns a AlertSeverity
     */
    public get severity() {
        return this._severity;
    };
    /**
     * Sets the severity property value. Severity of a cluster alert received via telemetry.
     * @param value Value to set for the severity property.
     */
    public set severity(value: AlertSeverity | undefined) {
        this._severity = value;
    };
}
