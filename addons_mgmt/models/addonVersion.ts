import {createAdditionalCatalogSourceFromDiscriminatorValue} from './createAdditionalCatalogSourceFromDiscriminatorValue';
import {createAddonConfigFromDiscriminatorValue} from './createAddonConfigFromDiscriminatorValue';
import {createAddonParameterFromDiscriminatorValue} from './createAddonParameterFromDiscriminatorValue';
import {createAddonRequirementFromDiscriminatorValue} from './createAddonRequirementFromDiscriminatorValue';
import {createAddonSubOperatorFromDiscriminatorValue} from './createAddonSubOperatorFromDiscriminatorValue';
import {AdditionalCatalogSource, AddonConfig, AddonParameter, AddonRequirement, AddonSubOperator} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Representation of an addon version.
 */
export class AddonVersion implements AdditionalDataHolder, Parsable {
    /** Additional catalog sources associated with this addon version */
    private _additional_catalog_sources?: AdditionalCatalogSource[] | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** AvailableUpgrades is the list of versions this version can be upgraded to. */
    private _available_upgrades?: string[] | undefined;
    /** The specific addon catalog source channel of packages */
    private _channel?: string | undefined;
    /** Representation of an addon config.The attributes under it are to be used by the addon once its installed in the cluster. */
    private _config?: AddonConfig | undefined;
    /** Indicates if this addon version can be added to clusters. */
    private _enabled?: boolean | undefined;
    /** Self link. */
    private _href?: string | undefined;
    /** Unique identifier of the object. */
    private _id?: string | undefined;
    /** Indicates the type of this object. Will be 'AddonVersion' if this is a complete object or 'AddonVersionLink' if it is just a link. */
    private _kind?: string | undefined;
    /** List of parameters for this addon version. */
    private _parameters?: AddonParameter[] | undefined;
    /** The pull secret name used for this addon version. */
    private _pull_secret_name?: string | undefined;
    /** List of requirements for this addon version. */
    private _requirements?: AddonRequirement[] | undefined;
    /** The catalog source image for this addon version. */
    private _source_image?: string | undefined;
    /** List of sub operators for this addon version. */
    private _sub_operators?: AddonSubOperator[] | undefined;
    /**
     * Gets the additional_catalog_sources property value. Additional catalog sources associated with this addon version
     * @returns a AdditionalCatalogSource
     */
    public get additional_catalog_sources() {
        return this._additional_catalog_sources;
    };
    /**
     * Sets the additional_catalog_sources property value. Additional catalog sources associated with this addon version
     * @param value Value to set for the additional_catalog_sources property.
     */
    public set additional_catalog_sources(value: AdditionalCatalogSource[] | undefined) {
        this._additional_catalog_sources = value;
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
     * Gets the available_upgrades property value. AvailableUpgrades is the list of versions this version can be upgraded to.
     * @returns a string
     */
    public get available_upgrades() {
        return this._available_upgrades;
    };
    /**
     * Sets the available_upgrades property value. AvailableUpgrades is the list of versions this version can be upgraded to.
     * @param value Value to set for the available_upgrades property.
     */
    public set available_upgrades(value: string[] | undefined) {
        this._available_upgrades = value;
    };
    /**
     * Gets the channel property value. The specific addon catalog source channel of packages
     * @returns a string
     */
    public get channel() {
        return this._channel;
    };
    /**
     * Sets the channel property value. The specific addon catalog source channel of packages
     * @param value Value to set for the channel property.
     */
    public set channel(value: string | undefined) {
        this._channel = value;
    };
    /**
     * Gets the config property value. Representation of an addon config.The attributes under it are to be used by the addon once its installed in the cluster.
     * @returns a AddonConfig
     */
    public get config() {
        return this._config;
    };
    /**
     * Sets the config property value. Representation of an addon config.The attributes under it are to be used by the addon once its installed in the cluster.
     * @param value Value to set for the config property.
     */
    public set config(value: AddonConfig | undefined) {
        this._config = value;
    };
    /**
     * Instantiates a new AddonVersion and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the enabled property value. Indicates if this addon version can be added to clusters.
     * @returns a boolean
     */
    public get enabled() {
        return this._enabled;
    };
    /**
     * Sets the enabled property value. Indicates if this addon version can be added to clusters.
     * @param value Value to set for the enabled property.
     */
    public set enabled(value: boolean | undefined) {
        this._enabled = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "additional_catalog_sources": n => { this.additional_catalog_sources = n.getCollectionOfObjectValues<AdditionalCatalogSource>(createAdditionalCatalogSourceFromDiscriminatorValue); },
            "available_upgrades": n => { this.available_upgrades = n.getCollectionOfPrimitiveValues<string>(); },
            "channel": n => { this.channel = n.getStringValue(); },
            "config": n => { this.config = n.getObjectValue<AddonConfig>(createAddonConfigFromDiscriminatorValue); },
            "enabled": n => { this.enabled = n.getBooleanValue(); },
            "href": n => { this.href = n.getStringValue(); },
            "id": n => { this.id = n.getStringValue(); },
            "kind": n => { this.kind = n.getStringValue(); },
            "parameters": n => { this.parameters = n.getCollectionOfObjectValues<AddonParameter>(createAddonParameterFromDiscriminatorValue); },
            "pull_secret_name": n => { this.pull_secret_name = n.getStringValue(); },
            "requirements": n => { this.requirements = n.getCollectionOfObjectValues<AddonRequirement>(createAddonRequirementFromDiscriminatorValue); },
            "source_image": n => { this.source_image = n.getStringValue(); },
            "sub_operators": n => { this.sub_operators = n.getCollectionOfObjectValues<AddonSubOperator>(createAddonSubOperatorFromDiscriminatorValue); },
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
     * Gets the kind property value. Indicates the type of this object. Will be 'AddonVersion' if this is a complete object or 'AddonVersionLink' if it is just a link.
     * @returns a string
     */
    public get kind() {
        return this._kind;
    };
    /**
     * Sets the kind property value. Indicates the type of this object. Will be 'AddonVersion' if this is a complete object or 'AddonVersionLink' if it is just a link.
     * @param value Value to set for the kind property.
     */
    public set kind(value: string | undefined) {
        this._kind = value;
    };
    /**
     * Gets the parameters property value. List of parameters for this addon version.
     * @returns a AddonParameter
     */
    public get parameters() {
        return this._parameters;
    };
    /**
     * Sets the parameters property value. List of parameters for this addon version.
     * @param value Value to set for the parameters property.
     */
    public set parameters(value: AddonParameter[] | undefined) {
        this._parameters = value;
    };
    /**
     * Gets the pull_secret_name property value. The pull secret name used for this addon version.
     * @returns a string
     */
    public get pull_secret_name() {
        return this._pull_secret_name;
    };
    /**
     * Sets the pull_secret_name property value. The pull secret name used for this addon version.
     * @param value Value to set for the pull_secret_name property.
     */
    public set pull_secret_name(value: string | undefined) {
        this._pull_secret_name = value;
    };
    /**
     * Gets the requirements property value. List of requirements for this addon version.
     * @returns a AddonRequirement
     */
    public get requirements() {
        return this._requirements;
    };
    /**
     * Sets the requirements property value. List of requirements for this addon version.
     * @param value Value to set for the requirements property.
     */
    public set requirements(value: AddonRequirement[] | undefined) {
        this._requirements = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfObjectValues<AdditionalCatalogSource>("additional_catalog_sources", this.additional_catalog_sources);
        writer.writeCollectionOfPrimitiveValues<string>("available_upgrades", this.available_upgrades);
        writer.writeStringValue("channel", this.channel);
        writer.writeObjectValue<AddonConfig>("config", this.config);
        writer.writeBooleanValue("enabled", this.enabled);
        writer.writeStringValue("href", this.href);
        writer.writeStringValue("id", this.id);
        writer.writeStringValue("kind", this.kind);
        writer.writeCollectionOfObjectValues<AddonParameter>("parameters", this.parameters);
        writer.writeStringValue("pull_secret_name", this.pull_secret_name);
        writer.writeCollectionOfObjectValues<AddonRequirement>("requirements", this.requirements);
        writer.writeStringValue("source_image", this.source_image);
        writer.writeCollectionOfObjectValues<AddonSubOperator>("sub_operators", this.sub_operators);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the source_image property value. The catalog source image for this addon version.
     * @returns a string
     */
    public get source_image() {
        return this._source_image;
    };
    /**
     * Sets the source_image property value. The catalog source image for this addon version.
     * @param value Value to set for the source_image property.
     */
    public set source_image(value: string | undefined) {
        this._source_image = value;
    };
    /**
     * Gets the sub_operators property value. List of sub operators for this addon version.
     * @returns a AddonSubOperator
     */
    public get sub_operators() {
        return this._sub_operators;
    };
    /**
     * Sets the sub_operators property value. List of sub operators for this addon version.
     * @param value Value to set for the sub_operators property.
     */
    public set sub_operators(value: AddonSubOperator[] | undefined) {
        this._sub_operators = value;
    };
}
