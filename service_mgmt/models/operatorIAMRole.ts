import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Contains the necessary attributes to allow each operator to access the necessary AWS resources
 */
export class OperatorIAMRole implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Name of the operator */
    private _name?: string | undefined;
    /** Namespace where the operator lives in the cluster */
    private _namespace?: string | undefined;
    /** Role to assume when accessing AWS resources */
    private _role_arn?: string | undefined;
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
     * Instantiates a new OperatorIAMRole and sets the default values.
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
            "role_arn": n => { this.role_arn = n.getStringValue(); },
        };
    };
    /**
     * Gets the name property value. Name of the operator
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. Name of the operator
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Gets the namespace property value. Namespace where the operator lives in the cluster
     * @returns a string
     */
    public get namespace() {
        return this._namespace;
    };
    /**
     * Sets the namespace property value. Namespace where the operator lives in the cluster
     * @param value Value to set for the namespace property.
     */
    public set namespace(value: string | undefined) {
        this._namespace = value;
    };
    /**
     * Gets the role_arn property value. Role to assume when accessing AWS resources
     * @returns a string
     */
    public get role_arn() {
        return this._role_arn;
    };
    /**
     * Sets the role_arn property value. Role to assume when accessing AWS resources
     * @param value Value to set for the role_arn property.
     */
    public set role_arn(value: string | undefined) {
        this._role_arn = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("name", this.name);
        writer.writeStringValue("namespace", this.namespace);
        writer.writeStringValue("role_arn", this.role_arn);
        writer.writeAdditionalData(this.additionalData);
    };
}
