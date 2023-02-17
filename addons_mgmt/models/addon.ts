import {AddonInstallMode} from './addonInstallMode';
import {createAddonConfigFromDiscriminatorValue} from './createAddonConfigFromDiscriminatorValue';
import {createAddonNamespaceFromDiscriminatorValue} from './createAddonNamespaceFromDiscriminatorValue';
import {createAddonParameterFromDiscriminatorValue} from './createAddonParameterFromDiscriminatorValue';
import {createAddonRequirementFromDiscriminatorValue} from './createAddonRequirementFromDiscriminatorValue';
import {createAddonSubOperatorFromDiscriminatorValue} from './createAddonSubOperatorFromDiscriminatorValue';
import {createAddonVersionFromDiscriminatorValue} from './createAddonVersionFromDiscriminatorValue';
import {createCredentialRequestFromDiscriminatorValue} from './createCredentialRequestFromDiscriminatorValue';
import {AddonConfig, AddonNamespace, AddonParameter, AddonRequirement, AddonSubOperator, AddonVersion, CredentialRequest} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Representation of an addon that can be installed in a cluster.
 */
export class Addon implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Representation of an addon config.The attributes under it are to be used by the addon once its installed in the cluster. */
    private _config?: AddonConfig | undefined;
    /** List of credentials requests to authenticate operators to access cloud resources. */
    private _credentials_requests?: CredentialRequest[] | undefined;
    /** Description of the addon. */
    private _description?: string | undefined;
    /** Link to documentation about the addon. */
    private _docs_link?: string | undefined;
    /** Indicates if this addon can be added to clusters. */
    private _enabled?: boolean | undefined;
    /** Indicates if this addon has external resources associated with it */
    private _has_external_resources?: boolean | undefined;
    /** Indicates if this addon is hidden. */
    private _hidden?: boolean | undefined;
    /** Self link. */
    private _href?: string | undefined;
    /** Base64-encoded icon representing an addon. The icon should be in PNG format. */
    private _icon?: string | undefined;
    /** Unique identifier of the object. */
    private _id?: string | undefined;
    /** Representation of an addon InstallMode field. */
    private _install_mode?: AddonInstallMode | undefined;
    /** Indicates the type of this object. Will be 'Addon' if this is a complete object or 'AddonLink' if it is just a link. */
    private _kind?: string | undefined;
    /** Label used to attach to a cluster deployment when addon is installed. */
    private _label?: string | undefined;
    /** Indicates if addon is part of a managed service */
    private _managed_service?: boolean | undefined;
    /** Name of the addon. */
    private _name?: string | undefined;
    /** List of namespaces associated with this addon. */
    private _namespaces?: AddonNamespace[] | undefined;
    /** The name of the operator installed by this addon. */
    private _operator_name?: string | undefined;
    /** List of parameters for this addon. */
    private _parameters?: AddonParameter[] | undefined;
    /** List of requirements for this addon. */
    private _requirements?: AddonRequirement[] | undefined;
    /** Used to determine how many units of quota an addon consumes per resource name. */
    private _resource_cost?: number | undefined;
    /** Used to determine from where to reserve quota for this addon. */
    private _resource_name?: string | undefined;
    /** List of sub operators for this addon. */
    private _sub_operators?: AddonSubOperator[] | undefined;
    /** The namespace in which the addon CRD exists. */
    private _target_namespace?: string | undefined;
    /** Representation of an addon version. */
    private _version?: AddonVersion | undefined;
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
     * Instantiates a new Addon and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the credentials_requests property value. List of credentials requests to authenticate operators to access cloud resources.
     * @returns a CredentialRequest
     */
    public get credentials_requests() {
        return this._credentials_requests;
    };
    /**
     * Sets the credentials_requests property value. List of credentials requests to authenticate operators to access cloud resources.
     * @param value Value to set for the credentials_requests property.
     */
    public set credentials_requests(value: CredentialRequest[] | undefined) {
        this._credentials_requests = value;
    };
    /**
     * Gets the description property value. Description of the addon.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. Description of the addon.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Gets the docs_link property value. Link to documentation about the addon.
     * @returns a string
     */
    public get docs_link() {
        return this._docs_link;
    };
    /**
     * Sets the docs_link property value. Link to documentation about the addon.
     * @param value Value to set for the docs_link property.
     */
    public set docs_link(value: string | undefined) {
        this._docs_link = value;
    };
    /**
     * Gets the enabled property value. Indicates if this addon can be added to clusters.
     * @returns a boolean
     */
    public get enabled() {
        return this._enabled;
    };
    /**
     * Sets the enabled property value. Indicates if this addon can be added to clusters.
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
            "config": n => { this.config = n.getObjectValue<AddonConfig>(createAddonConfigFromDiscriminatorValue); },
            "credentials_requests": n => { this.credentials_requests = n.getCollectionOfObjectValues<CredentialRequest>(createCredentialRequestFromDiscriminatorValue); },
            "description": n => { this.description = n.getStringValue(); },
            "docs_link": n => { this.docs_link = n.getStringValue(); },
            "enabled": n => { this.enabled = n.getBooleanValue(); },
            "has_external_resources": n => { this.has_external_resources = n.getBooleanValue(); },
            "hidden": n => { this.hidden = n.getBooleanValue(); },
            "href": n => { this.href = n.getStringValue(); },
            "icon": n => { this.icon = n.getStringValue(); },
            "id": n => { this.id = n.getStringValue(); },
            "install_mode": n => { this.install_mode = n.getEnumValue<AddonInstallMode>(AddonInstallMode); },
            "kind": n => { this.kind = n.getStringValue(); },
            "label": n => { this.label = n.getStringValue(); },
            "managed_service": n => { this.managed_service = n.getBooleanValue(); },
            "name": n => { this.name = n.getStringValue(); },
            "namespaces": n => { this.namespaces = n.getCollectionOfObjectValues<AddonNamespace>(createAddonNamespaceFromDiscriminatorValue); },
            "operator_name": n => { this.operator_name = n.getStringValue(); },
            "parameters": n => { this.parameters = n.getCollectionOfObjectValues<AddonParameter>(createAddonParameterFromDiscriminatorValue); },
            "requirements": n => { this.requirements = n.getCollectionOfObjectValues<AddonRequirement>(createAddonRequirementFromDiscriminatorValue); },
            "resource_cost": n => { this.resource_cost = n.getNumberValue(); },
            "resource_name": n => { this.resource_name = n.getStringValue(); },
            "sub_operators": n => { this.sub_operators = n.getCollectionOfObjectValues<AddonSubOperator>(createAddonSubOperatorFromDiscriminatorValue); },
            "target_namespace": n => { this.target_namespace = n.getStringValue(); },
            "version": n => { this.version = n.getObjectValue<AddonVersion>(createAddonVersionFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the has_external_resources property value. Indicates if this addon has external resources associated with it
     * @returns a boolean
     */
    public get has_external_resources() {
        return this._has_external_resources;
    };
    /**
     * Sets the has_external_resources property value. Indicates if this addon has external resources associated with it
     * @param value Value to set for the has_external_resources property.
     */
    public set has_external_resources(value: boolean | undefined) {
        this._has_external_resources = value;
    };
    /**
     * Gets the hidden property value. Indicates if this addon is hidden.
     * @returns a boolean
     */
    public get hidden() {
        return this._hidden;
    };
    /**
     * Sets the hidden property value. Indicates if this addon is hidden.
     * @param value Value to set for the hidden property.
     */
    public set hidden(value: boolean | undefined) {
        this._hidden = value;
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
     * Gets the icon property value. Base64-encoded icon representing an addon. The icon should be in PNG format.
     * @returns a string
     */
    public get icon() {
        return this._icon;
    };
    /**
     * Sets the icon property value. Base64-encoded icon representing an addon. The icon should be in PNG format.
     * @param value Value to set for the icon property.
     */
    public set icon(value: string | undefined) {
        this._icon = value;
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
     * Gets the install_mode property value. Representation of an addon InstallMode field.
     * @returns a AddonInstallMode
     */
    public get install_mode() {
        return this._install_mode;
    };
    /**
     * Sets the install_mode property value. Representation of an addon InstallMode field.
     * @param value Value to set for the install_mode property.
     */
    public set install_mode(value: AddonInstallMode | undefined) {
        this._install_mode = value;
    };
    /**
     * Gets the kind property value. Indicates the type of this object. Will be 'Addon' if this is a complete object or 'AddonLink' if it is just a link.
     * @returns a string
     */
    public get kind() {
        return this._kind;
    };
    /**
     * Sets the kind property value. Indicates the type of this object. Will be 'Addon' if this is a complete object or 'AddonLink' if it is just a link.
     * @param value Value to set for the kind property.
     */
    public set kind(value: string | undefined) {
        this._kind = value;
    };
    /**
     * Gets the label property value. Label used to attach to a cluster deployment when addon is installed.
     * @returns a string
     */
    public get label() {
        return this._label;
    };
    /**
     * Sets the label property value. Label used to attach to a cluster deployment when addon is installed.
     * @param value Value to set for the label property.
     */
    public set label(value: string | undefined) {
        this._label = value;
    };
    /**
     * Gets the managed_service property value. Indicates if addon is part of a managed service
     * @returns a boolean
     */
    public get managed_service() {
        return this._managed_service;
    };
    /**
     * Sets the managed_service property value. Indicates if addon is part of a managed service
     * @param value Value to set for the managed_service property.
     */
    public set managed_service(value: boolean | undefined) {
        this._managed_service = value;
    };
    /**
     * Gets the name property value. Name of the addon.
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. Name of the addon.
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Gets the namespaces property value. List of namespaces associated with this addon.
     * @returns a AddonNamespace
     */
    public get namespaces() {
        return this._namespaces;
    };
    /**
     * Sets the namespaces property value. List of namespaces associated with this addon.
     * @param value Value to set for the namespaces property.
     */
    public set namespaces(value: AddonNamespace[] | undefined) {
        this._namespaces = value;
    };
    /**
     * Gets the operator_name property value. The name of the operator installed by this addon.
     * @returns a string
     */
    public get operator_name() {
        return this._operator_name;
    };
    /**
     * Sets the operator_name property value. The name of the operator installed by this addon.
     * @param value Value to set for the operator_name property.
     */
    public set operator_name(value: string | undefined) {
        this._operator_name = value;
    };
    /**
     * Gets the parameters property value. List of parameters for this addon.
     * @returns a AddonParameter
     */
    public get parameters() {
        return this._parameters;
    };
    /**
     * Sets the parameters property value. List of parameters for this addon.
     * @param value Value to set for the parameters property.
     */
    public set parameters(value: AddonParameter[] | undefined) {
        this._parameters = value;
    };
    /**
     * Gets the requirements property value. List of requirements for this addon.
     * @returns a AddonRequirement
     */
    public get requirements() {
        return this._requirements;
    };
    /**
     * Sets the requirements property value. List of requirements for this addon.
     * @param value Value to set for the requirements property.
     */
    public set requirements(value: AddonRequirement[] | undefined) {
        this._requirements = value;
    };
    /**
     * Gets the resource_cost property value. Used to determine how many units of quota an addon consumes per resource name.
     * @returns a float
     */
    public get resource_cost() {
        return this._resource_cost;
    };
    /**
     * Sets the resource_cost property value. Used to determine how many units of quota an addon consumes per resource name.
     * @param value Value to set for the resource_cost property.
     */
    public set resource_cost(value: number | undefined) {
        this._resource_cost = value;
    };
    /**
     * Gets the resource_name property value. Used to determine from where to reserve quota for this addon.
     * @returns a string
     */
    public get resource_name() {
        return this._resource_name;
    };
    /**
     * Sets the resource_name property value. Used to determine from where to reserve quota for this addon.
     * @param value Value to set for the resource_name property.
     */
    public set resource_name(value: string | undefined) {
        this._resource_name = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<AddonConfig>("config", this.config);
        writer.writeCollectionOfObjectValues<CredentialRequest>("credentials_requests", this.credentials_requests);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("docs_link", this.docs_link);
        writer.writeBooleanValue("enabled", this.enabled);
        writer.writeBooleanValue("has_external_resources", this.has_external_resources);
        writer.writeBooleanValue("hidden", this.hidden);
        writer.writeStringValue("href", this.href);
        writer.writeStringValue("icon", this.icon);
        writer.writeStringValue("id", this.id);
        writer.writeEnumValue<AddonInstallMode>("install_mode", this.install_mode);
        writer.writeStringValue("kind", this.kind);
        writer.writeStringValue("label", this.label);
        writer.writeBooleanValue("managed_service", this.managed_service);
        writer.writeStringValue("name", this.name);
        writer.writeCollectionOfObjectValues<AddonNamespace>("namespaces", this.namespaces);
        writer.writeStringValue("operator_name", this.operator_name);
        writer.writeCollectionOfObjectValues<AddonParameter>("parameters", this.parameters);
        writer.writeCollectionOfObjectValues<AddonRequirement>("requirements", this.requirements);
        writer.writeNumberValue("resource_cost", this.resource_cost);
        writer.writeStringValue("resource_name", this.resource_name);
        writer.writeCollectionOfObjectValues<AddonSubOperator>("sub_operators", this.sub_operators);
        writer.writeStringValue("target_namespace", this.target_namespace);
        writer.writeObjectValue<AddonVersion>("version", this.version);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the sub_operators property value. List of sub operators for this addon.
     * @returns a AddonSubOperator
     */
    public get sub_operators() {
        return this._sub_operators;
    };
    /**
     * Sets the sub_operators property value. List of sub operators for this addon.
     * @param value Value to set for the sub_operators property.
     */
    public set sub_operators(value: AddonSubOperator[] | undefined) {
        this._sub_operators = value;
    };
    /**
     * Gets the target_namespace property value. The namespace in which the addon CRD exists.
     * @returns a string
     */
    public get target_namespace() {
        return this._target_namespace;
    };
    /**
     * Sets the target_namespace property value. The namespace in which the addon CRD exists.
     * @param value Value to set for the target_namespace property.
     */
    public set target_namespace(value: string | undefined) {
        this._target_namespace = value;
    };
    /**
     * Gets the version property value. Representation of an addon version.
     * @returns a AddonVersion
     */
    public get version() {
        return this._version;
    };
    /**
     * Sets the version property value. Representation of an addon version.
     * @param value Value to set for the version property.
     */
    public set version(value: AddonVersion | undefined) {
        this._version = value;
    };
}
