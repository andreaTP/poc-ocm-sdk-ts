import {createAWSFromDiscriminatorValue} from './createAWSFromDiscriminatorValue';
import {createCloudRegionFromDiscriminatorValue} from './createCloudRegionFromDiscriminatorValue';
import {createGCPFromDiscriminatorValue} from './createGCPFromDiscriminatorValue';
import {createVersionFromDiscriminatorValue} from './createVersionFromDiscriminatorValue';
import {AWS, CloudRegion, GCP, Version} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Description of a cloud provider data used for cloud provider inquiries.
 */
export class CloudProviderData implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Availability zone */
    private _availability_zones?: string[] | undefined;
    /** _Amazon Web Services_ specific settings of a cluster. */
    private _aws?: AWS | undefined;
    /** Google cloud platform settings of a cluster. */
    private _gcp?: GCP | undefined;
    /** Key location */
    private _key_location?: string | undefined;
    /** Key ring name */
    private _key_ring_name?: string | undefined;
    /** Description of a region of a cloud provider. */
    private _region?: CloudRegion | undefined;
    /** Representation of an _OpenShift_ version. */
    private _version?: Version | undefined;
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
     * Gets the availability_zones property value. Availability zone
     * @returns a string
     */
    public get availability_zones() {
        return this._availability_zones;
    };
    /**
     * Sets the availability_zones property value. Availability zone
     * @param value Value to set for the availability_zones property.
     */
    public set availability_zones(value: string[] | undefined) {
        this._availability_zones = value;
    };
    /**
     * Gets the aws property value. _Amazon Web Services_ specific settings of a cluster.
     * @returns a AWS
     */
    public get aws() {
        return this._aws;
    };
    /**
     * Sets the aws property value. _Amazon Web Services_ specific settings of a cluster.
     * @param value Value to set for the aws property.
     */
    public set aws(value: AWS | undefined) {
        this._aws = value;
    };
    /**
     * Instantiates a new CloudProviderData and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the gcp property value. Google cloud platform settings of a cluster.
     * @returns a GCP
     */
    public get gcp() {
        return this._gcp;
    };
    /**
     * Sets the gcp property value. Google cloud platform settings of a cluster.
     * @param value Value to set for the gcp property.
     */
    public set gcp(value: GCP | undefined) {
        this._gcp = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "availability_zones": n => { this.availability_zones = n.getCollectionOfPrimitiveValues<string>(); },
            "aws": n => { this.aws = n.getObjectValue<AWS>(createAWSFromDiscriminatorValue); },
            "gcp": n => { this.gcp = n.getObjectValue<GCP>(createGCPFromDiscriminatorValue); },
            "key_location": n => { this.key_location = n.getStringValue(); },
            "key_ring_name": n => { this.key_ring_name = n.getStringValue(); },
            "region": n => { this.region = n.getObjectValue<CloudRegion>(createCloudRegionFromDiscriminatorValue); },
            "version": n => { this.version = n.getObjectValue<Version>(createVersionFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the key_location property value. Key location
     * @returns a string
     */
    public get key_location() {
        return this._key_location;
    };
    /**
     * Sets the key_location property value. Key location
     * @param value Value to set for the key_location property.
     */
    public set key_location(value: string | undefined) {
        this._key_location = value;
    };
    /**
     * Gets the key_ring_name property value. Key ring name
     * @returns a string
     */
    public get key_ring_name() {
        return this._key_ring_name;
    };
    /**
     * Sets the key_ring_name property value. Key ring name
     * @param value Value to set for the key_ring_name property.
     */
    public set key_ring_name(value: string | undefined) {
        this._key_ring_name = value;
    };
    /**
     * Gets the region property value. Description of a region of a cloud provider.
     * @returns a CloudRegion
     */
    public get region() {
        return this._region;
    };
    /**
     * Sets the region property value. Description of a region of a cloud provider.
     * @param value Value to set for the region property.
     */
    public set region(value: CloudRegion | undefined) {
        this._region = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfPrimitiveValues<string>("availability_zones", this.availability_zones);
        writer.writeObjectValue<AWS>("aws", this.aws);
        writer.writeObjectValue<GCP>("gcp", this.gcp);
        writer.writeStringValue("key_location", this.key_location);
        writer.writeStringValue("key_ring_name", this.key_ring_name);
        writer.writeObjectValue<CloudRegion>("region", this.region);
        writer.writeObjectValue<Version>("version", this.version);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the version property value. Representation of an _OpenShift_ version.
     * @returns a Version
     */
    public get version() {
        return this._version;
    };
    /**
     * Sets the version property value. Representation of an _OpenShift_ version.
     * @param value Value to set for the version property.
     */
    public set version(value: Version | undefined) {
        this._version = value;
    };
}
