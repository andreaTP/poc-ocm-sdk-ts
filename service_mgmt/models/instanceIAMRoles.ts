import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Contains the necessary attributes to support role-based authentication on AWS.
 */
export class InstanceIAMRoles implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The IAM role ARN that will be attached to master instances */
    private _master_role_arn?: string | undefined;
    /** The IAM role ARN that will be attached to worker instances */
    private _worker_role_arn?: string | undefined;
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
     * Instantiates a new InstanceIAMRoles and sets the default values.
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
            "master_role_arn": n => { this.master_role_arn = n.getStringValue(); },
            "worker_role_arn": n => { this.worker_role_arn = n.getStringValue(); },
        };
    };
    /**
     * Gets the master_role_arn property value. The IAM role ARN that will be attached to master instances
     * @returns a string
     */
    public get master_role_arn() {
        return this._master_role_arn;
    };
    /**
     * Sets the master_role_arn property value. The IAM role ARN that will be attached to master instances
     * @param value Value to set for the master_role_arn property.
     */
    public set master_role_arn(value: string | undefined) {
        this._master_role_arn = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("master_role_arn", this.master_role_arn);
        writer.writeStringValue("worker_role_arn", this.worker_role_arn);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the worker_role_arn property value. The IAM role ARN that will be attached to worker instances
     * @returns a string
     */
    public get worker_role_arn() {
        return this._worker_role_arn;
    };
    /**
     * Sets the worker_role_arn property value. The IAM role ARN that will be attached to worker instances
     * @param value Value to set for the worker_role_arn property.
     */
    public set worker_role_arn(value: string | undefined) {
        this._worker_role_arn = value;
    };
}
