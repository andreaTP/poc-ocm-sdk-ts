import {createAddonRequirementFromDiscriminatorValue} from './createAddonRequirementFromDiscriminatorValue';
import {AddonRequirement} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Representation of an addon parameter option.
 */
export class AddonParameterOption implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Name of the addon parameter option. */
    private _name?: string | undefined;
    /** Rank of option to be used in cases where editable direction should be restricted. */
    private _rank?: number | undefined;
    /** List of addon requirements for this parameter option. */
    private _requirements?: AddonRequirement[] | undefined;
    /** Value of the addon parameter option. */
    private _value?: string | undefined;
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
     * Instantiates a new AddonParameterOption and sets the default values.
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
            "rank": n => { this.rank = n.getNumberValue(); },
            "requirements": n => { this.requirements = n.getCollectionOfObjectValues<AddonRequirement>(createAddonRequirementFromDiscriminatorValue); },
            "value": n => { this.value = n.getStringValue(); },
        };
    };
    /**
     * Gets the name property value. Name of the addon parameter option.
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. Name of the addon parameter option.
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Gets the rank property value. Rank of option to be used in cases where editable direction should be restricted.
     * @returns a integer
     */
    public get rank() {
        return this._rank;
    };
    /**
     * Sets the rank property value. Rank of option to be used in cases where editable direction should be restricted.
     * @param value Value to set for the rank property.
     */
    public set rank(value: number | undefined) {
        this._rank = value;
    };
    /**
     * Gets the requirements property value. List of addon requirements for this parameter option.
     * @returns a AddonRequirement
     */
    public get requirements() {
        return this._requirements;
    };
    /**
     * Sets the requirements property value. List of addon requirements for this parameter option.
     * @param value Value to set for the requirements property.
     */
    public set requirements(value: AddonRequirement[] | undefined) {
        this._requirements = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("name", this.name);
        writer.writeNumberValue("rank", this.rank);
        writer.writeCollectionOfObjectValues<AddonRequirement>("requirements", this.requirements);
        writer.writeStringValue("value", this.value);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the value property value. Value of the addon parameter option.
     * @returns a string
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. Value of the addon parameter option.
     * @param value Value to set for the value property.
     */
    public set value(value: string | undefined) {
        this._value = value;
    };
}
