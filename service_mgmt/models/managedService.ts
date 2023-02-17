import {createClusterFromDiscriminatorValue} from './createClusterFromDiscriminatorValue';
import {createServiceParameterFromDiscriminatorValue} from './createServiceParameterFromDiscriminatorValue';
import {createStatefulObjectFromDiscriminatorValue} from './createStatefulObjectFromDiscriminatorValue';
import {Cluster, ServiceParameter, StatefulObject} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Represents data about a running Managed Service.
 */
export class ManagedService implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The addon property */
    private _addon?: StatefulObject | undefined;
    /** This represents the parameters needed by Managed Service to create a cluster. */
    private _cluster?: Cluster | undefined;
    /** The created_at property */
    private _created_at?: Date | undefined;
    /** The expired_at property */
    private _expired_at?: Date | undefined;
    /** Self link. */
    private _href?: string | undefined;
    /** Unique identifier of the object. */
    private _id?: string | undefined;
    /** Indicates the type of this object. Will be 'ManagedService' if this is a complete object or 'ManagedServiceLink' if it is just a link. */
    private _kind?: string | undefined;
    /** The parameters property */
    private _parameters?: ServiceParameter[] | undefined;
    /** The resources property */
    private _resources?: StatefulObject[] | undefined;
    /** The service property */
    private _service?: string | undefined;
    /** The service_state property */
    private _service_state?: string | undefined;
    /** The updated_at property */
    private _updated_at?: Date | undefined;
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
     * Gets the addon property value. The addon property
     * @returns a StatefulObject
     */
    public get addon() {
        return this._addon;
    };
    /**
     * Sets the addon property value. The addon property
     * @param value Value to set for the addon property.
     */
    public set addon(value: StatefulObject | undefined) {
        this._addon = value;
    };
    /**
     * Gets the cluster property value. This represents the parameters needed by Managed Service to create a cluster.
     * @returns a Cluster
     */
    public get cluster() {
        return this._cluster;
    };
    /**
     * Sets the cluster property value. This represents the parameters needed by Managed Service to create a cluster.
     * @param value Value to set for the cluster property.
     */
    public set cluster(value: Cluster | undefined) {
        this._cluster = value;
    };
    /**
     * Instantiates a new ManagedService and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the created_at property value. The created_at property
     * @returns a Date
     */
    public get created_at() {
        return this._created_at;
    };
    /**
     * Sets the created_at property value. The created_at property
     * @param value Value to set for the created_at property.
     */
    public set created_at(value: Date | undefined) {
        this._created_at = value;
    };
    /**
     * Gets the expired_at property value. The expired_at property
     * @returns a Date
     */
    public get expired_at() {
        return this._expired_at;
    };
    /**
     * Sets the expired_at property value. The expired_at property
     * @param value Value to set for the expired_at property.
     */
    public set expired_at(value: Date | undefined) {
        this._expired_at = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "addon": n => { this.addon = n.getObjectValue<StatefulObject>(createStatefulObjectFromDiscriminatorValue); },
            "cluster": n => { this.cluster = n.getObjectValue<Cluster>(createClusterFromDiscriminatorValue); },
            "created_at": n => { this.created_at = n.getDateValue(); },
            "expired_at": n => { this.expired_at = n.getDateValue(); },
            "href": n => { this.href = n.getStringValue(); },
            "id": n => { this.id = n.getStringValue(); },
            "kind": n => { this.kind = n.getStringValue(); },
            "parameters": n => { this.parameters = n.getCollectionOfObjectValues<ServiceParameter>(createServiceParameterFromDiscriminatorValue); },
            "resources": n => { this.resources = n.getCollectionOfObjectValues<StatefulObject>(createStatefulObjectFromDiscriminatorValue); },
            "service": n => { this.service = n.getStringValue(); },
            "service_state": n => { this.service_state = n.getStringValue(); },
            "updated_at": n => { this.updated_at = n.getDateValue(); },
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
     * Gets the kind property value. Indicates the type of this object. Will be 'ManagedService' if this is a complete object or 'ManagedServiceLink' if it is just a link.
     * @returns a string
     */
    public get kind() {
        return this._kind;
    };
    /**
     * Sets the kind property value. Indicates the type of this object. Will be 'ManagedService' if this is a complete object or 'ManagedServiceLink' if it is just a link.
     * @param value Value to set for the kind property.
     */
    public set kind(value: string | undefined) {
        this._kind = value;
    };
    /**
     * Gets the parameters property value. The parameters property
     * @returns a ServiceParameter
     */
    public get parameters() {
        return this._parameters;
    };
    /**
     * Sets the parameters property value. The parameters property
     * @param value Value to set for the parameters property.
     */
    public set parameters(value: ServiceParameter[] | undefined) {
        this._parameters = value;
    };
    /**
     * Gets the resources property value. The resources property
     * @returns a StatefulObject
     */
    public get resources() {
        return this._resources;
    };
    /**
     * Sets the resources property value. The resources property
     * @param value Value to set for the resources property.
     */
    public set resources(value: StatefulObject[] | undefined) {
        this._resources = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<StatefulObject>("addon", this.addon);
        writer.writeObjectValue<Cluster>("cluster", this.cluster);
        writer.writeDateValue("created_at", this.created_at);
        writer.writeDateValue("expired_at", this.expired_at);
        writer.writeStringValue("href", this.href);
        writer.writeStringValue("id", this.id);
        writer.writeStringValue("kind", this.kind);
        writer.writeCollectionOfObjectValues<ServiceParameter>("parameters", this.parameters);
        writer.writeCollectionOfObjectValues<StatefulObject>("resources", this.resources);
        writer.writeStringValue("service", this.service);
        writer.writeStringValue("service_state", this.service_state);
        writer.writeDateValue("updated_at", this.updated_at);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the service property value. The service property
     * @returns a string
     */
    public get service() {
        return this._service;
    };
    /**
     * Sets the service property value. The service property
     * @param value Value to set for the service property.
     */
    public set service(value: string | undefined) {
        this._service = value;
    };
    /**
     * Gets the service_state property value. The service_state property
     * @returns a string
     */
    public get service_state() {
        return this._service_state;
    };
    /**
     * Sets the service_state property value. The service_state property
     * @param value Value to set for the service_state property.
     */
    public set service_state(value: string | undefined) {
        this._service_state = value;
    };
    /**
     * Gets the updated_at property value. The updated_at property
     * @returns a Date
     */
    public get updated_at() {
        return this._updated_at;
    };
    /**
     * Sets the updated_at property value. The updated_at property
     * @param value Value to set for the updated_at property.
     */
    public set updated_at(value: Date | undefined) {
        this._updated_at = value;
    };
}
