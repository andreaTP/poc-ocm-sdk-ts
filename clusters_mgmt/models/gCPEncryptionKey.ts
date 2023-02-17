import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * GCP Encryption Key for CCS clusters.
 */
export class GCPEncryptionKey implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Location of the encryption key ring */
    private _key_location?: string | undefined;
    /** Name of the encryption key */
    private _key_name?: string | undefined;
    /** Name of the key ring the encryption key is located on */
    private _key_ring?: string | undefined;
    /** Service account used to access the KMS key */
    private _kms_key_service_account?: string | undefined;
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
     * Instantiates a new GCPEncryptionKey and sets the default values.
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
            "key_location": n => { this.key_location = n.getStringValue(); },
            "key_name": n => { this.key_name = n.getStringValue(); },
            "key_ring": n => { this.key_ring = n.getStringValue(); },
            "kms_key_service_account": n => { this.kms_key_service_account = n.getStringValue(); },
        };
    };
    /**
     * Gets the key_location property value. Location of the encryption key ring
     * @returns a string
     */
    public get key_location() {
        return this._key_location;
    };
    /**
     * Sets the key_location property value. Location of the encryption key ring
     * @param value Value to set for the key_location property.
     */
    public set key_location(value: string | undefined) {
        this._key_location = value;
    };
    /**
     * Gets the key_name property value. Name of the encryption key
     * @returns a string
     */
    public get key_name() {
        return this._key_name;
    };
    /**
     * Sets the key_name property value. Name of the encryption key
     * @param value Value to set for the key_name property.
     */
    public set key_name(value: string | undefined) {
        this._key_name = value;
    };
    /**
     * Gets the key_ring property value. Name of the key ring the encryption key is located on
     * @returns a string
     */
    public get key_ring() {
        return this._key_ring;
    };
    /**
     * Sets the key_ring property value. Name of the key ring the encryption key is located on
     * @param value Value to set for the key_ring property.
     */
    public set key_ring(value: string | undefined) {
        this._key_ring = value;
    };
    /**
     * Gets the kms_key_service_account property value. Service account used to access the KMS key
     * @returns a string
     */
    public get kms_key_service_account() {
        return this._kms_key_service_account;
    };
    /**
     * Sets the kms_key_service_account property value. Service account used to access the KMS key
     * @param value Value to set for the kms_key_service_account property.
     */
    public set kms_key_service_account(value: string | undefined) {
        this._kms_key_service_account = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("key_location", this.key_location);
        writer.writeStringValue("key_name", this.key_name);
        writer.writeStringValue("key_ring", this.key_ring);
        writer.writeStringValue("kms_key_service_account", this.kms_key_service_account);
        writer.writeAdditionalData(this.additionalData);
    };
}
