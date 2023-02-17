import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Contains the necessary attributes to allow each operator to access the necessary AWS resources
 */
export class CredentialRequest implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Name of the credentials secret used to access cloud resources */
    private _name?: string | undefined;
    /** Namespace where the credentials secret lives in the cluster */
    private _namespace?: string | undefined;
    /** List of policy permissions needed to access cloud resources */
    private _policy_permissions?: string[] | undefined;
    /** Service account name to use when authenticating */
    private _service_account?: string | undefined;
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
     * Instantiates a new CredentialRequest and sets the default values.
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
            "name": n => { this.name = n.getStringValue(); },
            "namespace": n => { this.namespace = n.getStringValue(); },
            "policy_permissions": n => { this.policy_permissions = n.getCollectionOfPrimitiveValues<string>(); },
            "service_account": n => { this.service_account = n.getStringValue(); },
        };
    };
    /**
     * Gets the name property value. Name of the credentials secret used to access cloud resources
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. Name of the credentials secret used to access cloud resources
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Gets the namespace property value. Namespace where the credentials secret lives in the cluster
     * @returns a string
     */
    public get namespace() {
        return this._namespace;
    };
    /**
     * Sets the namespace property value. Namespace where the credentials secret lives in the cluster
     * @param value Value to set for the namespace property.
     */
    public set namespace(value: string | undefined) {
        this._namespace = value;
    };
    /**
     * Gets the policy_permissions property value. List of policy permissions needed to access cloud resources
     * @returns a string
     */
    public get policy_permissions() {
        return this._policy_permissions;
    };
    /**
     * Sets the policy_permissions property value. List of policy permissions needed to access cloud resources
     * @param value Value to set for the policy_permissions property.
     */
    public set policy_permissions(value: string[] | undefined) {
        this._policy_permissions = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("name", this.name);
        writer.writeStringValue("namespace", this.namespace);
        writer.writeCollectionOfPrimitiveValues<string>("policy_permissions", this.policy_permissions);
        writer.writeStringValue("service_account", this.service_account);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the service_account property value. Service account name to use when authenticating
     * @returns a string
     */
    public get service_account() {
        return this._service_account;
    };
    /**
     * Sets the service_account property value. Service account name to use when authenticating
     * @param value Value to set for the service_account property.
     */
    public set service_account(value: string | undefined) {
        this._service_account = value;
    };
}
