import {createAWS_tagsFromDiscriminatorValue} from './createAWS_tagsFromDiscriminatorValue';
import {createSTSFromDiscriminatorValue} from './createSTSFromDiscriminatorValue';
import {AWS_tags, STS} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * _Amazon Web Services_ specific settings of a cluster.
 */
export class AWS implements AdditionalDataHolder, Parsable {
    /** AWS access key identifier. */
    private _access_key_id?: string | undefined;
    /** AWS account identifier. */
    private _account_id?: string | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** For PrivateLink-enabled clusters */
    private _private_link?: boolean | undefined;
    /** AWS secret access key. */
    private _secret_access_key?: string | undefined;
    /** Contains the necessary attributes to support role-based authentication on AWS. */
    private _sts?: STS | undefined;
    /** The subnet ids to be used when installing the cluster. */
    private _subnet_ids?: string[] | undefined;
    /** Optional keys and values that the installer will add as tags to all AWS resources it creates */
    private _tags?: AWS_tags | undefined;
    /**
     * Gets the access_key_id property value. AWS access key identifier.
     * @returns a string
     */
    public get access_key_id() {
        return this._access_key_id;
    };
    /**
     * Sets the access_key_id property value. AWS access key identifier.
     * @param value Value to set for the access_key_id property.
     */
    public set access_key_id(value: string | undefined) {
        this._access_key_id = value;
    };
    /**
     * Gets the account_id property value. AWS account identifier.
     * @returns a string
     */
    public get account_id() {
        return this._account_id;
    };
    /**
     * Sets the account_id property value. AWS account identifier.
     * @param value Value to set for the account_id property.
     */
    public set account_id(value: string | undefined) {
        this._account_id = value;
    };
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
     * Instantiates a new AWS and sets the default values.
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
            "access_key_id": n => { this.access_key_id = n.getStringValue(); },
            "account_id": n => { this.account_id = n.getStringValue(); },
            "private_link": n => { this.private_link = n.getBooleanValue(); },
            "secret_access_key": n => { this.secret_access_key = n.getStringValue(); },
            "sts": n => { this.sts = n.getObjectValue<STS>(createSTSFromDiscriminatorValue); },
            "subnet_ids": n => { this.subnet_ids = n.getCollectionOfPrimitiveValues<string>(); },
            "tags": n => { this.tags = n.getObjectValue<AWS_tags>(createAWS_tagsFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the private_link property value. For PrivateLink-enabled clusters
     * @returns a boolean
     */
    public get private_link() {
        return this._private_link;
    };
    /**
     * Sets the private_link property value. For PrivateLink-enabled clusters
     * @param value Value to set for the private_link property.
     */
    public set private_link(value: boolean | undefined) {
        this._private_link = value;
    };
    /**
     * Gets the secret_access_key property value. AWS secret access key.
     * @returns a string
     */
    public get secret_access_key() {
        return this._secret_access_key;
    };
    /**
     * Sets the secret_access_key property value. AWS secret access key.
     * @param value Value to set for the secret_access_key property.
     */
    public set secret_access_key(value: string | undefined) {
        this._secret_access_key = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("access_key_id", this.access_key_id);
        writer.writeStringValue("account_id", this.account_id);
        writer.writeBooleanValue("private_link", this.private_link);
        writer.writeStringValue("secret_access_key", this.secret_access_key);
        writer.writeObjectValue<STS>("sts", this.sts);
        writer.writeCollectionOfPrimitiveValues<string>("subnet_ids", this.subnet_ids);
        writer.writeObjectValue<AWS_tags>("tags", this.tags);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the sts property value. Contains the necessary attributes to support role-based authentication on AWS.
     * @returns a STS
     */
    public get sts() {
        return this._sts;
    };
    /**
     * Sets the sts property value. Contains the necessary attributes to support role-based authentication on AWS.
     * @param value Value to set for the sts property.
     */
    public set sts(value: STS | undefined) {
        this._sts = value;
    };
    /**
     * Gets the subnet_ids property value. The subnet ids to be used when installing the cluster.
     * @returns a string
     */
    public get subnet_ids() {
        return this._subnet_ids;
    };
    /**
     * Sets the subnet_ids property value. The subnet ids to be used when installing the cluster.
     * @param value Value to set for the subnet_ids property.
     */
    public set subnet_ids(value: string[] | undefined) {
        this._subnet_ids = value;
    };
    /**
     * Gets the tags property value. Optional keys and values that the installer will add as tags to all AWS resources it creates
     * @returns a AWS_tags
     */
    public get tags() {
        return this._tags;
    };
    /**
     * Sets the tags property value. Optional keys and values that the installer will add as tags to all AWS resources it creates
     * @param value Value to set for the tags property.
     */
    public set tags(value: AWS_tags | undefined) {
        this._tags = value;
    };
}
