import {createAWSVolumeFromDiscriminatorValue} from './createAWSVolumeFromDiscriminatorValue';
import {AWSVolume} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Specification for different classes of nodes inside a flavour.
 */
export class AWSFlavour implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** AWS default instance type for the worker volume.User can be overridden specifying in the cluster itself a type for compute node. */
    private _compute_instance_type?: string | undefined;
    /** AWS default instance type for the infra volume. */
    private _infra_instance_type?: string | undefined;
    /** Holds settings for an AWS storage volume. */
    private _infra_volume?: AWSVolume | undefined;
    /** AWS default instance type for the master volume. */
    private _master_instance_type?: string | undefined;
    /** Holds settings for an AWS storage volume. */
    private _master_volume?: AWSVolume | undefined;
    /** Holds settings for an AWS storage volume. */
    private _worker_volume?: AWSVolume | undefined;
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
     * Gets the compute_instance_type property value. AWS default instance type for the worker volume.User can be overridden specifying in the cluster itself a type for compute node.
     * @returns a string
     */
    public get compute_instance_type() {
        return this._compute_instance_type;
    };
    /**
     * Sets the compute_instance_type property value. AWS default instance type for the worker volume.User can be overridden specifying in the cluster itself a type for compute node.
     * @param value Value to set for the compute_instance_type property.
     */
    public set compute_instance_type(value: string | undefined) {
        this._compute_instance_type = value;
    };
    /**
     * Instantiates a new AWSFlavour and sets the default values.
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
            "compute_instance_type": n => { this.compute_instance_type = n.getStringValue(); },
            "infra_instance_type": n => { this.infra_instance_type = n.getStringValue(); },
            "infra_volume": n => { this.infra_volume = n.getObjectValue<AWSVolume>(createAWSVolumeFromDiscriminatorValue); },
            "master_instance_type": n => { this.master_instance_type = n.getStringValue(); },
            "master_volume": n => { this.master_volume = n.getObjectValue<AWSVolume>(createAWSVolumeFromDiscriminatorValue); },
            "worker_volume": n => { this.worker_volume = n.getObjectValue<AWSVolume>(createAWSVolumeFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the infra_instance_type property value. AWS default instance type for the infra volume.
     * @returns a string
     */
    public get infra_instance_type() {
        return this._infra_instance_type;
    };
    /**
     * Sets the infra_instance_type property value. AWS default instance type for the infra volume.
     * @param value Value to set for the infra_instance_type property.
     */
    public set infra_instance_type(value: string | undefined) {
        this._infra_instance_type = value;
    };
    /**
     * Gets the infra_volume property value. Holds settings for an AWS storage volume.
     * @returns a AWSVolume
     */
    public get infra_volume() {
        return this._infra_volume;
    };
    /**
     * Sets the infra_volume property value. Holds settings for an AWS storage volume.
     * @param value Value to set for the infra_volume property.
     */
    public set infra_volume(value: AWSVolume | undefined) {
        this._infra_volume = value;
    };
    /**
     * Gets the master_instance_type property value. AWS default instance type for the master volume.
     * @returns a string
     */
    public get master_instance_type() {
        return this._master_instance_type;
    };
    /**
     * Sets the master_instance_type property value. AWS default instance type for the master volume.
     * @param value Value to set for the master_instance_type property.
     */
    public set master_instance_type(value: string | undefined) {
        this._master_instance_type = value;
    };
    /**
     * Gets the master_volume property value. Holds settings for an AWS storage volume.
     * @returns a AWSVolume
     */
    public get master_volume() {
        return this._master_volume;
    };
    /**
     * Sets the master_volume property value. Holds settings for an AWS storage volume.
     * @param value Value to set for the master_volume property.
     */
    public set master_volume(value: AWSVolume | undefined) {
        this._master_volume = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("compute_instance_type", this.compute_instance_type);
        writer.writeStringValue("infra_instance_type", this.infra_instance_type);
        writer.writeObjectValue<AWSVolume>("infra_volume", this.infra_volume);
        writer.writeStringValue("master_instance_type", this.master_instance_type);
        writer.writeObjectValue<AWSVolume>("master_volume", this.master_volume);
        writer.writeObjectValue<AWSVolume>("worker_volume", this.worker_volume);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the worker_volume property value. Holds settings for an AWS storage volume.
     * @returns a AWSVolume
     */
    public get worker_volume() {
        return this._worker_volume;
    };
    /**
     * Sets the worker_volume property value. Holds settings for an AWS storage volume.
     * @param value Value to set for the worker_volume property.
     */
    public set worker_volume(value: AWSVolume | undefined) {
        this._worker_volume = value;
    };
}
