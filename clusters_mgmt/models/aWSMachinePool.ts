import {createAWSSpotMarketOptionsFromDiscriminatorValue} from './createAWSSpotMarketOptionsFromDiscriminatorValue';
import {AWSSpotMarketOptions} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Representation of aws machine pool specific parameters.
 */
export class AWSMachinePool implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Self link. */
    private _href?: string | undefined;
    /** Unique identifier of the object. */
    private _id?: string | undefined;
    /** Indicates the type of this object. Will be 'AWSMachinePool' if this is a complete object or 'AWSMachinePoolLink' if it is just a link. */
    private _kind?: string | undefined;
    /** Spot market options for AWS machine pool. */
    private _spot_market_options?: AWSSpotMarketOptions | undefined;
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
     * Instantiates a new AWSMachinePool and sets the default values.
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
            "href": n => { this.href = n.getStringValue(); },
            "id": n => { this.id = n.getStringValue(); },
            "kind": n => { this.kind = n.getStringValue(); },
            "spot_market_options": n => { this.spot_market_options = n.getObjectValue<AWSSpotMarketOptions>(createAWSSpotMarketOptionsFromDiscriminatorValue); },
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
     * Gets the kind property value. Indicates the type of this object. Will be 'AWSMachinePool' if this is a complete object or 'AWSMachinePoolLink' if it is just a link.
     * @returns a string
     */
    public get kind() {
        return this._kind;
    };
    /**
     * Sets the kind property value. Indicates the type of this object. Will be 'AWSMachinePool' if this is a complete object or 'AWSMachinePoolLink' if it is just a link.
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
        writer.writeStringValue("href", this.href);
        writer.writeStringValue("id", this.id);
        writer.writeStringValue("kind", this.kind);
        writer.writeObjectValue<AWSSpotMarketOptions>("spot_market_options", this.spot_market_options);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the spot_market_options property value. Spot market options for AWS machine pool.
     * @returns a AWSSpotMarketOptions
     */
    public get spot_market_options() {
        return this._spot_market_options;
    };
    /**
     * Sets the spot_market_options property value. Spot market options for AWS machine pool.
     * @param value Value to set for the spot_market_options property.
     */
    public set spot_market_options(value: AWSSpotMarketOptions | undefined) {
        this._spot_market_options = value;
    };
}
