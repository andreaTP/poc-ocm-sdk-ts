import {ClusterOperatorState} from './clusterOperatorState';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ClusterOperatorInfo implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Overall state of a cluster operator. */
    private _condition?: ClusterOperatorState | undefined;
    /** Name of the operator. */
    private _name?: string | undefined;
    /** Extra detail on condition, if available.  Empty string if unknown. */
    private _reason?: string | undefined;
    /** Time when the sample was obtained, in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) format. */
    private _time?: Date | undefined;
    /** Current version of the operator.  Empty string if unknown. */
    private _version?: string | undefined;
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
     * Gets the condition property value. Overall state of a cluster operator.
     * @returns a ClusterOperatorState
     */
    public get condition() {
        return this._condition;
    };
    /**
     * Sets the condition property value. Overall state of a cluster operator.
     * @param value Value to set for the condition property.
     */
    public set condition(value: ClusterOperatorState | undefined) {
        this._condition = value;
    };
    /**
     * Instantiates a new ClusterOperatorInfo and sets the default values.
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
            "condition": n => { this.condition = n.getEnumValue<ClusterOperatorState>(ClusterOperatorState); },
            "name": n => { this.name = n.getStringValue(); },
            "reason": n => { this.reason = n.getStringValue(); },
            "time": n => { this.time = n.getDateValue(); },
            "version": n => { this.version = n.getStringValue(); },
        };
    };
    /**
     * Gets the name property value. Name of the operator.
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. Name of the operator.
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Gets the reason property value. Extra detail on condition, if available.  Empty string if unknown.
     * @returns a string
     */
    public get reason() {
        return this._reason;
    };
    /**
     * Sets the reason property value. Extra detail on condition, if available.  Empty string if unknown.
     * @param value Value to set for the reason property.
     */
    public set reason(value: string | undefined) {
        this._reason = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeEnumValue<ClusterOperatorState>("condition", this.condition);
        writer.writeStringValue("name", this.name);
        writer.writeStringValue("reason", this.reason);
        writer.writeDateValue("time", this.time);
        writer.writeStringValue("version", this.version);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the time property value. Time when the sample was obtained, in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) format.
     * @returns a Date
     */
    public get time() {
        return this._time;
    };
    /**
     * Sets the time property value. Time when the sample was obtained, in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) format.
     * @param value Value to set for the time property.
     */
    public set time(value: Date | undefined) {
        this._time = value;
    };
    /**
     * Gets the version property value. Current version of the operator.  Empty string if unknown.
     * @returns a string
     */
    public get version() {
        return this._version;
    };
    /**
     * Sets the version property value. Current version of the operator.  Empty string if unknown.
     * @param value Value to set for the version property.
     */
    public set version(value: string | undefined) {
        this._version = value;
    };
}
