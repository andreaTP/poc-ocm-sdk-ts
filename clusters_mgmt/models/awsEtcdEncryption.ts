import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Contains the necessary attributes to support etcd encryption for AWS based clusters.
 */
export class AwsEtcdEncryption implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** ARN of the KMS to be used for the etcd encryption */
    private _kms_key_arn?: string | undefined;
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
     * Instantiates a new AwsEtcdEncryption and sets the default values.
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
            "kms_key_arn": n => { this.kms_key_arn = n.getStringValue(); },
        };
    };
    /**
     * Gets the kms_key_arn property value. ARN of the KMS to be used for the etcd encryption
     * @returns a string
     */
    public get kms_key_arn() {
        return this._kms_key_arn;
    };
    /**
     * Sets the kms_key_arn property value. ARN of the KMS to be used for the etcd encryption
     * @param value Value to set for the kms_key_arn property.
     */
    public set kms_key_arn(value: string | undefined) {
        this._kms_key_arn = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("kms_key_arn", this.kms_key_arn);
        writer.writeAdditionalData(this.additionalData);
    };
}
