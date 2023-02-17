import {createValueUnitFromDiscriminatorValue} from './createValueUnitFromDiscriminatorValue';
import {ValueUnit} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ClusterResource implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The total property */
    private _total?: ValueUnit | undefined;
    /** The updated_timestamp property */
    private _updated_timestamp?: Date | undefined;
    /** The used property */
    private _used?: ValueUnit | undefined;
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
     * Instantiates a new ClusterResource and sets the default values.
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
            "total": n => { this.total = n.getObjectValue<ValueUnit>(createValueUnitFromDiscriminatorValue); },
            "updated_timestamp": n => { this.updated_timestamp = n.getDateValue(); },
            "used": n => { this.used = n.getObjectValue<ValueUnit>(createValueUnitFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<ValueUnit>("total", this.total);
        writer.writeDateValue("updated_timestamp", this.updated_timestamp);
        writer.writeObjectValue<ValueUnit>("used", this.used);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the total property value. The total property
     * @returns a ValueUnit
     */
    public get total() {
        return this._total;
    };
    /**
     * Sets the total property value. The total property
     * @param value Value to set for the total property.
     */
    public set total(value: ValueUnit | undefined) {
        this._total = value;
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
     * Gets the used property value. The used property
     * @returns a ValueUnit
     */
    public get used() {
        return this._used;
    };
    /**
     * Sets the used property value. The used property
     * @param value Value to set for the used property.
     */
    public set used(value: ValueUnit | undefined) {
        this._used = value;
    };
}
