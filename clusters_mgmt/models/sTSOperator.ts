import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Representation of an sts operator
 */
export class STSOperator implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Maximum ocp version supported */
    private _max_version?: string | undefined;
    /** Minimum ocp version supported */
    private _min_version?: string | undefined;
    /** Operator Name */
    private _name?: string | undefined;
    /** Operator Namespace */
    private _namespace?: string | undefined;
    /** Service Accounts */
    private _service_accounts?: string[] | undefined;
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
     * Instantiates a new STSOperator and sets the default values.
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
            "max_version": n => { this.max_version = n.getStringValue(); },
            "min_version": n => { this.min_version = n.getStringValue(); },
            "name": n => { this.name = n.getStringValue(); },
            "namespace": n => { this.namespace = n.getStringValue(); },
            "service_accounts": n => { this.service_accounts = n.getCollectionOfPrimitiveValues<string>(); },
        };
    };
    /**
     * Gets the max_version property value. Maximum ocp version supported
     * @returns a string
     */
    public get max_version() {
        return this._max_version;
    };
    /**
     * Sets the max_version property value. Maximum ocp version supported
     * @param value Value to set for the max_version property.
     */
    public set max_version(value: string | undefined) {
        this._max_version = value;
    };
    /**
     * Gets the min_version property value. Minimum ocp version supported
     * @returns a string
     */
    public get min_version() {
        return this._min_version;
    };
    /**
     * Sets the min_version property value. Minimum ocp version supported
     * @param value Value to set for the min_version property.
     */
    public set min_version(value: string | undefined) {
        this._min_version = value;
    };
    /**
     * Gets the name property value. Operator Name
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. Operator Name
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Gets the namespace property value. Operator Namespace
     * @returns a string
     */
    public get namespace() {
        return this._namespace;
    };
    /**
     * Sets the namespace property value. Operator Namespace
     * @param value Value to set for the namespace property.
     */
    public set namespace(value: string | undefined) {
        this._namespace = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("max_version", this.max_version);
        writer.writeStringValue("min_version", this.min_version);
        writer.writeStringValue("name", this.name);
        writer.writeStringValue("namespace", this.namespace);
        writer.writeCollectionOfPrimitiveValues<string>("service_accounts", this.service_accounts);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the service_accounts property value. Service Accounts
     * @returns a string
     */
    public get service_accounts() {
        return this._service_accounts;
    };
    /**
     * Sets the service_accounts property value. Service Accounts
     * @param value Value to set for the service_accounts property.
     */
    public set service_accounts(value: string[] | undefined) {
        this._service_accounts = value;
    };
}
