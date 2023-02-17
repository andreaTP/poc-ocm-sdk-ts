import {createAddOnEnvironmentVariableFromDiscriminatorValue} from './createAddOnEnvironmentVariableFromDiscriminatorValue';
import {createAddOnSecretPropagationFromDiscriminatorValue} from './createAddOnSecretPropagationFromDiscriminatorValue';
import {AddOnEnvironmentVariable, AddOnSecretPropagation} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Representation of an add-on config.The attributes under it are to be used by the addon once its installed in the cluster.
 */
export class AddOnConfig implements AdditionalDataHolder, Parsable {
    /** List of environment variables for the addon */
    private _add_on_environment_variables?: AddOnEnvironmentVariable[] | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Self link. */
    private _href?: string | undefined;
    /** Unique identifier of the object. */
    private _id?: string | undefined;
    /** Indicates the type of this object. Will be 'AddOnConfig' if this is a complete object or 'AddOnConfigLink' if it is just a link. */
    private _kind?: string | undefined;
    /** List of secret propagations for the addon */
    private _secret_propagations?: AddOnSecretPropagation[] | undefined;
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
     * Gets the add_on_environment_variables property value. List of environment variables for the addon
     * @returns a AddOnEnvironmentVariable
     */
    public get add_on_environment_variables() {
        return this._add_on_environment_variables;
    };
    /**
     * Sets the add_on_environment_variables property value. List of environment variables for the addon
     * @param value Value to set for the add_on_environment_variables property.
     */
    public set add_on_environment_variables(value: AddOnEnvironmentVariable[] | undefined) {
        this._add_on_environment_variables = value;
    };
    /**
     * Instantiates a new AddOnConfig and sets the default values.
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
            "add_on_environment_variables": n => { this.add_on_environment_variables = n.getCollectionOfObjectValues<AddOnEnvironmentVariable>(createAddOnEnvironmentVariableFromDiscriminatorValue); },
            "href": n => { this.href = n.getStringValue(); },
            "id": n => { this.id = n.getStringValue(); },
            "kind": n => { this.kind = n.getStringValue(); },
            "secret_propagations": n => { this.secret_propagations = n.getCollectionOfObjectValues<AddOnSecretPropagation>(createAddOnSecretPropagationFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the href property value. Self link.
     * @returns a string
     */
    public get href() {
        return this._href;
    };
    /**
     * Sets the href property value. Self link.
     * @param value Value to set for the href property.
     */
    public set href(value: string | undefined) {
        this._href = value;
    };
    /**
     * Gets the id property value. Unique identifier of the object.
     * @returns a string
     */
    public get id() {
        return this._id;
    };
    /**
     * Sets the id property value. Unique identifier of the object.
     * @param value Value to set for the id property.
     */
    public set id(value: string | undefined) {
        this._id = value;
    };
    /**
     * Gets the kind property value. Indicates the type of this object. Will be 'AddOnConfig' if this is a complete object or 'AddOnConfigLink' if it is just a link.
     * @returns a string
     */
    public get kind() {
        return this._kind;
    };
    /**
     * Sets the kind property value. Indicates the type of this object. Will be 'AddOnConfig' if this is a complete object or 'AddOnConfigLink' if it is just a link.
     * @param value Value to set for the kind property.
     */
    public set kind(value: string | undefined) {
        this._kind = value;
    };
    /**
     * Gets the secret_propagations property value. List of secret propagations for the addon
     * @returns a AddOnSecretPropagation
     */
    public get secret_propagations() {
        return this._secret_propagations;
    };
    /**
     * Sets the secret_propagations property value. List of secret propagations for the addon
     * @param value Value to set for the secret_propagations property.
     */
    public set secret_propagations(value: AddOnSecretPropagation[] | undefined) {
        this._secret_propagations = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfObjectValues<AddOnEnvironmentVariable>("add_on_environment_variables", this.add_on_environment_variables);
        writer.writeStringValue("href", this.href);
        writer.writeStringValue("id", this.id);
        writer.writeStringValue("kind", this.kind);
        writer.writeCollectionOfObjectValues<AddOnSecretPropagation>("secret_propagations", this.secret_propagations);
        writer.writeAdditionalData(this.additionalData);
    };
}
