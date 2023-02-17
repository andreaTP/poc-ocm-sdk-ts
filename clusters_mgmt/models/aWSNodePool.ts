import {createAWSNodePool_tagsFromDiscriminatorValue} from './createAWSNodePool_tagsFromDiscriminatorValue';
import {AWSNodePool_tags} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Representation of aws node pool specific parameters.
 */
export class AWSNodePool implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Self link. */
    private _href?: string | undefined;
    /** Unique identifier of the object. */
    private _id?: string | undefined;
    /** InstanceProfile is the AWS EC2 instance profile, which is a container for an IAM role that the EC2 instance uses. */
    private _instance_profile?: string | undefined;
    /** InstanceType is an ec2 instance type for node instances (e.g. m5.large). */
    private _instance_type?: string | undefined;
    /** Indicates the type of this object. Will be 'AWSNodePool' if this is a complete object or 'AWSNodePoolLink' if it is just a link. */
    private _kind?: string | undefined;
    /** Optional keys and values that the installer will add as tags to all AWS resources it creates */
    private _tags?: AWSNodePool_tags | undefined;
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
     * Instantiates a new AWSNodePool and sets the default values.
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
            "instance_profile": n => { this.instance_profile = n.getStringValue(); },
            "instance_type": n => { this.instance_type = n.getStringValue(); },
            "kind": n => { this.kind = n.getStringValue(); },
            "tags": n => { this.tags = n.getObjectValue<AWSNodePool_tags>(createAWSNodePool_tagsFromDiscriminatorValue); },
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
     * Gets the instance_profile property value. InstanceProfile is the AWS EC2 instance profile, which is a container for an IAM role that the EC2 instance uses.
     * @returns a string
     */
    public get instance_profile() {
        return this._instance_profile;
    };
    /**
     * Sets the instance_profile property value. InstanceProfile is the AWS EC2 instance profile, which is a container for an IAM role that the EC2 instance uses.
     * @param value Value to set for the instance_profile property.
     */
    public set instance_profile(value: string | undefined) {
        this._instance_profile = value;
    };
    /**
     * Gets the instance_type property value. InstanceType is an ec2 instance type for node instances (e.g. m5.large).
     * @returns a string
     */
    public get instance_type() {
        return this._instance_type;
    };
    /**
     * Sets the instance_type property value. InstanceType is an ec2 instance type for node instances (e.g. m5.large).
     * @param value Value to set for the instance_type property.
     */
    public set instance_type(value: string | undefined) {
        this._instance_type = value;
    };
    /**
     * Gets the kind property value. Indicates the type of this object. Will be 'AWSNodePool' if this is a complete object or 'AWSNodePoolLink' if it is just a link.
     * @returns a string
     */
    public get kind() {
        return this._kind;
    };
    /**
     * Sets the kind property value. Indicates the type of this object. Will be 'AWSNodePool' if this is a complete object or 'AWSNodePoolLink' if it is just a link.
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
        writer.writeStringValue("instance_profile", this.instance_profile);
        writer.writeStringValue("instance_type", this.instance_type);
        writer.writeStringValue("kind", this.kind);
        writer.writeObjectValue<AWSNodePool_tags>("tags", this.tags);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the tags property value. Optional keys and values that the installer will add as tags to all AWS resources it creates
     * @returns a AWSNodePool_tags
     */
    public get tags() {
        return this._tags;
    };
    /**
     * Sets the tags property value. Optional keys and values that the installer will add as tags to all AWS resources it creates
     * @param value Value to set for the tags property.
     */
    public set tags(value: AWSNodePool_tags | undefined) {
        this._tags = value;
    };
}
