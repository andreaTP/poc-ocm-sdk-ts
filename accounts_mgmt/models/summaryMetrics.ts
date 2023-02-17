import {createSummarySampleFromDiscriminatorValue} from './createSummarySampleFromDiscriminatorValue';
import {SummarySample} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SummaryMetrics implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The name property */
    private _name?: string | undefined;
    /** The vector property */
    private _vector?: SummarySample[] | undefined;
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
     * Instantiates a new SummaryMetrics and sets the default values.
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
            "vector": n => { this.vector = n.getCollectionOfObjectValues<SummarySample>(createSummarySampleFromDiscriminatorValue); },
        };
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("name", this.name);
        writer.writeCollectionOfObjectValues<SummarySample>("vector", this.vector);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the vector property value. The vector property
     * @returns a SummarySample
     */
    public get vector() {
        return this._vector;
    };
    /**
     * Sets the vector property value. The vector property
     * @param value Value to set for the vector property.
     */
    public set vector(value: SummarySample[] | undefined) {
        this._vector = value;
    };
}
