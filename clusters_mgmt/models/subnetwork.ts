import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * AWS subnetwork object to be used while installing a cluster
 */
export class Subnetwork implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The availability zone to which the subnet is related */
    private _availability_zone?: string | undefined;
    /** Name of the subnet according to its `Name` tag on AWS */
    private _name?: string | undefined;
    /** Whether it is a public subnet */
    private _public?: boolean | undefined;
    /** The subnet id to be used while installing a cluster */
    private _subnet_id?: string | undefined;
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
     * Gets the availability_zone property value. The availability zone to which the subnet is related
     * @returns a string
     */
    public get availability_zone() {
        return this._availability_zone;
    };
    /**
     * Sets the availability_zone property value. The availability zone to which the subnet is related
     * @param value Value to set for the availability_zone property.
     */
    public set availability_zone(value: string | undefined) {
        this._availability_zone = value;
    };
    /**
     * Instantiates a new Subnetwork and sets the default values.
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
            "availability_zone": n => { this.availability_zone = n.getStringValue(); },
            "name": n => { this.name = n.getStringValue(); },
            "public": n => { this.public = n.getBooleanValue(); },
            "subnet_id": n => { this.subnet_id = n.getStringValue(); },
        };
    };
    /**
     * Gets the name property value. Name of the subnet according to its `Name` tag on AWS
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. Name of the subnet according to its `Name` tag on AWS
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Gets the public property value. Whether it is a public subnet
     * @returns a boolean
     */
    public get public() {
        return this._public;
    };
    /**
     * Sets the public property value. Whether it is a public subnet
     * @param value Value to set for the public property.
     */
    public set public(value: boolean | undefined) {
        this._public = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("availability_zone", this.availability_zone);
        writer.writeStringValue("name", this.name);
        writer.writeBooleanValue("public", this.public);
        writer.writeStringValue("subnet_id", this.subnet_id);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the subnet_id property value. The subnet id to be used while installing a cluster
     * @returns a string
     */
    public get subnet_id() {
        return this._subnet_id;
    };
    /**
     * Sets the subnet_id property value. The subnet id to be used while installing a cluster
     * @param value Value to set for the subnet_id property.
     */
    public set subnet_id(value: string | undefined) {
        this._subnet_id = value;
    };
}
