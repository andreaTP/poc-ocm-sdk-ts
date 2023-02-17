import {createAddonEnvironmentVariableFromDiscriminatorValue} from './createAddonEnvironmentVariableFromDiscriminatorValue';
import {createAddonSecretPropagationFromDiscriminatorValue} from './createAddonSecretPropagationFromDiscriminatorValue';
import {AddonEnvironmentVariable, AddonSecretPropagation} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Representation of an addon config.The attributes under it are to be used by the addon once its installed in the cluster.
 */
export class AddonConfig implements AdditionalDataHolder, Parsable {
    /** List of environment variables for the addon */
    private _add_on_environment_variables?: AddonEnvironmentVariable[] | undefined;
    /** List of secret propagations for the addon */
    private _add_on_secret_propagations?: AddonSecretPropagation[] | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
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
     * @returns a AddonEnvironmentVariable
     */
    public get add_on_environment_variables() {
        return this._add_on_environment_variables;
    };
    /**
     * Sets the add_on_environment_variables property value. List of environment variables for the addon
     * @param value Value to set for the add_on_environment_variables property.
     */
    public set add_on_environment_variables(value: AddonEnvironmentVariable[] | undefined) {
        this._add_on_environment_variables = value;
    };
    /**
     * Gets the add_on_secret_propagations property value. List of secret propagations for the addon
     * @returns a AddonSecretPropagation
     */
    public get add_on_secret_propagations() {
        return this._add_on_secret_propagations;
    };
    /**
     * Sets the add_on_secret_propagations property value. List of secret propagations for the addon
     * @param value Value to set for the add_on_secret_propagations property.
     */
    public set add_on_secret_propagations(value: AddonSecretPropagation[] | undefined) {
        this._add_on_secret_propagations = value;
    };
    /**
     * Instantiates a new AddonConfig and sets the default values.
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
            "add_on_environment_variables": n => { this.add_on_environment_variables = n.getCollectionOfObjectValues<AddonEnvironmentVariable>(createAddonEnvironmentVariableFromDiscriminatorValue); },
            "add_on_secret_propagations": n => { this.add_on_secret_propagations = n.getCollectionOfObjectValues<AddonSecretPropagation>(createAddonSecretPropagationFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfObjectValues<AddonEnvironmentVariable>("add_on_environment_variables", this.add_on_environment_variables);
        writer.writeCollectionOfObjectValues<AddonSecretPropagation>("add_on_secret_propagations", this.add_on_secret_propagations);
        writer.writeAdditionalData(this.additionalData);
    };
}
