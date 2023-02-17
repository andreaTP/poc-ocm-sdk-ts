import {createSTSOperatorFromDiscriminatorValue} from './createSTSOperatorFromDiscriminatorValue';
import {STSOperator} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Representation of an credRequest
 */
export class STSCredentialRequest implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Name of CredRequest */
    private _name?: string | undefined;
    /** Representation of an sts operator */
    private _operator?: STSOperator | undefined;
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
     * Instantiates a new STSCredentialRequest and sets the default values.
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
            "operator": n => { this.operator = n.getObjectValue<STSOperator>(createSTSOperatorFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the name property value. Name of CredRequest
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. Name of CredRequest
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Gets the operator property value. Representation of an sts operator
     * @returns a STSOperator
     */
    public get operator() {
        return this._operator;
    };
    /**
     * Sets the operator property value. Representation of an sts operator
     * @param value Value to set for the operator property.
     */
    public set operator(value: STSOperator | undefined) {
        this._operator = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("name", this.name);
        writer.writeObjectValue<STSOperator>("operator", this.operator);
        writer.writeAdditionalData(this.additionalData);
    };
}
