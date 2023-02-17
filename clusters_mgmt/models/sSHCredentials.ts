import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * SSH key pair of a cluster.
 */
export class SSHCredentials implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** SSH private key of the cluster. */
    private _private_key?: string | undefined;
    /** SSH public key of the cluster. */
    private _public_key?: string | undefined;
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
     * Instantiates a new SSHCredentials and sets the default values.
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
            "private_key": n => { this.private_key = n.getStringValue(); },
            "public_key": n => { this.public_key = n.getStringValue(); },
        };
    };
    /**
     * Gets the private_key property value. SSH private key of the cluster.
     * @returns a string
     */
    public get private_key() {
        return this._private_key;
    };
    /**
     * Sets the private_key property value. SSH private key of the cluster.
     * @param value Value to set for the private_key property.
     */
    public set private_key(value: string | undefined) {
        this._private_key = value;
    };
    /**
     * Gets the public_key property value. SSH public key of the cluster.
     * @returns a string
     */
    public get public_key() {
        return this._public_key;
    };
    /**
     * Sets the public_key property value. SSH public key of the cluster.
     * @param value Value to set for the public_key property.
     */
    public set public_key(value: string | undefined) {
        this._public_key = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("private_key", this.private_key);
        writer.writeStringValue("public_key", this.public_key);
        writer.writeAdditionalData(this.additionalData);
    };
}
