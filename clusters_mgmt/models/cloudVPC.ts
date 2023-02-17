import {createSubnetworkFromDiscriminatorValue} from './createSubnetworkFromDiscriminatorValue';
import {Subnetwork} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Description of a cloud provider virtual private cloud.
 */
export class CloudVPC implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** List of subnetworks */
    private _aws_subnets?: Subnetwork[] | undefined;
    /** ID of virtual private cloud */
    private _id?: string | undefined;
    /** Name of virtual private cloud according to its `Name` tag on AWS */
    private _name?: string | undefined;
    /** List of subnets used by the virtual private cloud. */
    private _subnets?: string[] | undefined;
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
     * Gets the aws_subnets property value. List of subnetworks
     * @returns a Subnetwork
     */
    public get aws_subnets() {
        return this._aws_subnets;
    };
    /**
     * Sets the aws_subnets property value. List of subnetworks
     * @param value Value to set for the aws_subnets property.
     */
    public set aws_subnets(value: Subnetwork[] | undefined) {
        this._aws_subnets = value;
    };
    /**
     * Instantiates a new CloudVPC and sets the default values.
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
            "aws_subnets": n => { this.aws_subnets = n.getCollectionOfObjectValues<Subnetwork>(createSubnetworkFromDiscriminatorValue); },
            "id": n => { this.id = n.getStringValue(); },
            "name": n => { this.name = n.getStringValue(); },
            "subnets": n => { this.subnets = n.getCollectionOfPrimitiveValues<string>(); },
        };
    };
    /**
     * Gets the id property value. ID of virtual private cloud
     * @returns a string
     */
    public get id() {
        return this._id;
    };
    /**
     * Sets the id property value. ID of virtual private cloud
     * @param value Value to set for the id property.
     */
    public set id(value: string | undefined) {
        this._id = value;
    };
    /**
     * Gets the name property value. Name of virtual private cloud according to its `Name` tag on AWS
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. Name of virtual private cloud according to its `Name` tag on AWS
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
        writer.writeCollectionOfObjectValues<Subnetwork>("aws_subnets", this.aws_subnets);
        writer.writeStringValue("id", this.id);
        writer.writeStringValue("name", this.name);
        writer.writeCollectionOfPrimitiveValues<string>("subnets", this.subnets);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the subnets property value. List of subnets used by the virtual private cloud.
     * @returns a string
     */
    public get subnets() {
        return this._subnets;
    };
    /**
     * Sets the subnets property value. List of subnets used by the virtual private cloud.
     * @param value Value to set for the subnets property.
     */
    public set subnets(value: string[] | undefined) {
        this._subnets = value;
    };
}
