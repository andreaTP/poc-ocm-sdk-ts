import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ClusterUpgrade implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The available property */
    private _available?: boolean | undefined;
    /** The state property */
    private _state?: string | undefined;
    /** The updated_timestamp property */
    private _updated_timestamp?: Date | undefined;
    /** The version property */
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
     * Gets the available property value. The available property
     * @returns a boolean
     */
    public get available() {
        return this._available;
    };
    /**
     * Sets the available property value. The available property
     * @param value Value to set for the available property.
     */
    public set available(value: boolean | undefined) {
        this._available = value;
    };
    /**
     * Instantiates a new ClusterUpgrade and sets the default values.
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
            "available": n => { this.available = n.getBooleanValue(); },
            "state": n => { this.state = n.getStringValue(); },
            "updated_timestamp": n => { this.updated_timestamp = n.getDateValue(); },
            "version": n => { this.version = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeBooleanValue("available", this.available);
        writer.writeStringValue("state", this.state);
        writer.writeDateValue("updated_timestamp", this.updated_timestamp);
        writer.writeStringValue("version", this.version);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the state property value. The state property
     * @returns a string
     */
    public get state() {
        return this._state;
    };
    /**
     * Sets the state property value. The state property
     * @param value Value to set for the state property.
     */
    public set state(value: string | undefined) {
        this._state = value;
    };
    /**
     * Gets the updated_timestamp property value. The updated_timestamp property
     * @returns a Date
     */
    public get updated_timestamp() {
        return this._updated_timestamp;
    };
    /**
     * Sets the updated_timestamp property value. The updated_timestamp property
     * @param value Value to set for the updated_timestamp property.
     */
    public set updated_timestamp(value: Date | undefined) {
        this._updated_timestamp = value;
    };
    /**
     * Gets the version property value. The version property
     * @returns a string
     */
    public get version() {
        return this._version;
    };
    /**
     * Sets the version property value. The version property
     * @param value Value to set for the version property.
     */
    public set version(value: string | undefined) {
        this._version = value;
    };
}
