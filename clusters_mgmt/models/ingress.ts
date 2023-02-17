import {createClusterFromDiscriminatorValue} from './createClusterFromDiscriminatorValue';
import {createIngress_route_selectorsFromDiscriminatorValue} from './createIngress_route_selectorsFromDiscriminatorValue';
import {Cluster, Ingress_route_selectors} from './index';
import {ListeningMethod} from './listeningMethod';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Representation of an ingress.
 */
export class Ingress implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Definition of an _OpenShift_ cluster.The `cloud_provider` attribute is a reference to the cloud provider. When acluster is retrieved it will be a link to the cloud provider, containing onlythe kind, id and href attributes:```json{  "cloud_provider": {    "kind": "CloudProviderLink",    "id": "123",    "href": "/api/clusters_mgmt/v1/cloud_providers/123"  }}```When a cluster is created this is optional, and if used it should contain theidentifier of the cloud provider to use:```json{  "cloud_provider": {    "id": "123",  }}```If not included, then the cluster will be created using the default cloudprovider, which is currently Amazon Web Services.The region attribute is mandatory when a cluster is created.The `aws.access_key_id`, `aws.secret_access_key` and `dns.base_domain`attributes are mandatory when creation a cluster with your own Amazon WebServices account. */
    private _cluster?: Cluster | undefined;
    /** Indicates if this is the default ingress. */
    private _defaultEscaped?: boolean | undefined;
    /** DNS Name of the ingress. */
    private _dns_name?: string | undefined;
    /** Self link. */
    private _href?: string | undefined;
    /** Unique identifier of the object. */
    private _id?: string | undefined;
    /** Indicates the type of this object. Will be 'Ingress' if this is a complete object or 'IngressLink' if it is just a link. */
    private _kind?: string | undefined;
    /** Cluster components listening method. */
    private _listening?: ListeningMethod | undefined;
    /** A set of labels for the ingress.  */
    private _route_selectors?: Ingress_route_selectors | undefined;
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
     * Gets the cluster property value. Definition of an _OpenShift_ cluster.The `cloud_provider` attribute is a reference to the cloud provider. When acluster is retrieved it will be a link to the cloud provider, containing onlythe kind, id and href attributes:```json{  "cloud_provider": {    "kind": "CloudProviderLink",    "id": "123",    "href": "/api/clusters_mgmt/v1/cloud_providers/123"  }}```When a cluster is created this is optional, and if used it should contain theidentifier of the cloud provider to use:```json{  "cloud_provider": {    "id": "123",  }}```If not included, then the cluster will be created using the default cloudprovider, which is currently Amazon Web Services.The region attribute is mandatory when a cluster is created.The `aws.access_key_id`, `aws.secret_access_key` and `dns.base_domain`attributes are mandatory when creation a cluster with your own Amazon WebServices account.
     * @returns a Cluster
     */
    public get cluster() {
        return this._cluster;
    };
    /**
     * Sets the cluster property value. Definition of an _OpenShift_ cluster.The `cloud_provider` attribute is a reference to the cloud provider. When acluster is retrieved it will be a link to the cloud provider, containing onlythe kind, id and href attributes:```json{  "cloud_provider": {    "kind": "CloudProviderLink",    "id": "123",    "href": "/api/clusters_mgmt/v1/cloud_providers/123"  }}```When a cluster is created this is optional, and if used it should contain theidentifier of the cloud provider to use:```json{  "cloud_provider": {    "id": "123",  }}```If not included, then the cluster will be created using the default cloudprovider, which is currently Amazon Web Services.The region attribute is mandatory when a cluster is created.The `aws.access_key_id`, `aws.secret_access_key` and `dns.base_domain`attributes are mandatory when creation a cluster with your own Amazon WebServices account.
     * @param value Value to set for the cluster property.
     */
    public set cluster(value: Cluster | undefined) {
        this._cluster = value;
    };
    /**
     * Instantiates a new Ingress and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the default property value. Indicates if this is the default ingress.
     * @returns a boolean
     */
    public get defaultEscaped() {
        return this._defaultEscaped;
    };
    /**
     * Sets the default property value. Indicates if this is the default ingress.
     * @param value Value to set for the defaultEscaped property.
     */
    public set defaultEscaped(value: boolean | undefined) {
        this._defaultEscaped = value;
    };
    /**
     * Gets the dns_name property value. DNS Name of the ingress.
     * @returns a string
     */
    public get dns_name() {
        return this._dns_name;
    };
    /**
     * Sets the dns_name property value. DNS Name of the ingress.
     * @param value Value to set for the dns_name property.
     */
    public set dns_name(value: string | undefined) {
        this._dns_name = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "cluster": n => { this.cluster = n.getObjectValue<Cluster>(createClusterFromDiscriminatorValue); },
            "default": n => { this.defaultEscaped = n.getBooleanValue(); },
            "dns_name": n => { this.dns_name = n.getStringValue(); },
            "href": n => { this.href = n.getStringValue(); },
            "id": n => { this.id = n.getStringValue(); },
            "kind": n => { this.kind = n.getStringValue(); },
            "listening": n => { this.listening = n.getEnumValue<ListeningMethod>(ListeningMethod); },
            "route_selectors": n => { this.route_selectors = n.getObjectValue<Ingress_route_selectors>(createIngress_route_selectorsFromDiscriminatorValue); },
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
     * Gets the kind property value. Indicates the type of this object. Will be 'Ingress' if this is a complete object or 'IngressLink' if it is just a link.
     * @returns a string
     */
    public get kind() {
        return this._kind;
    };
    /**
     * Sets the kind property value. Indicates the type of this object. Will be 'Ingress' if this is a complete object or 'IngressLink' if it is just a link.
     * @param value Value to set for the kind property.
     */
    public set kind(value: string | undefined) {
        this._kind = value;
    };
    /**
     * Gets the listening property value. Cluster components listening method.
     * @returns a ListeningMethod
     */
    public get listening() {
        return this._listening;
    };
    /**
     * Sets the listening property value. Cluster components listening method.
     * @param value Value to set for the listening property.
     */
    public set listening(value: ListeningMethod | undefined) {
        this._listening = value;
    };
    /**
     * Gets the route_selectors property value. A set of labels for the ingress. 
     * @returns a Ingress_route_selectors
     */
    public get route_selectors() {
        return this._route_selectors;
    };
    /**
     * Sets the route_selectors property value. A set of labels for the ingress. 
     * @param value Value to set for the route_selectors property.
     */
    public set route_selectors(value: Ingress_route_selectors | undefined) {
        this._route_selectors = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Cluster>("cluster", this.cluster);
        writer.writeBooleanValue("default", this.defaultEscaped);
        writer.writeStringValue("dns_name", this.dns_name);
        writer.writeStringValue("href", this.href);
        writer.writeStringValue("id", this.id);
        writer.writeStringValue("kind", this.kind);
        writer.writeEnumValue<ListeningMethod>("listening", this.listening);
        writer.writeObjectValue<Ingress_route_selectors>("route_selectors", this.route_selectors);
        writer.writeAdditionalData(this.additionalData);
    };
}
