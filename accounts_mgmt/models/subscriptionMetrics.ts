import {createClusterMetricsNodesFromDiscriminatorValue} from './createClusterMetricsNodesFromDiscriminatorValue';
import {createClusterResourceFromDiscriminatorValue} from './createClusterResourceFromDiscriminatorValue';
import {createClusterUpgradeFromDiscriminatorValue} from './createClusterUpgradeFromDiscriminatorValue';
import {ClusterMetricsNodes, ClusterResource, ClusterUpgrade} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Each field is a metric fetched for a specific Subscription's cluster.
 */
export class SubscriptionMetrics implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The cloud_provider property */
    private _cloud_provider?: string | undefined;
    /** The compute_nodes_cpu property */
    private _compute_nodes_cpu?: ClusterResource | undefined;
    /** The compute_nodes_memory property */
    private _compute_nodes_memory?: ClusterResource | undefined;
    /** The compute_nodes_sockets property */
    private _compute_nodes_sockets?: ClusterResource | undefined;
    /** The console_url property */
    private _console_url?: string | undefined;
    /** The cpu property */
    private _cpu?: ClusterResource | undefined;
    /** The critical_alerts_firing property */
    private _critical_alerts_firing?: number | undefined;
    /** The health_state property */
    private _health_state?: string | undefined;
    /** The memory property */
    private _memory?: ClusterResource | undefined;
    /** The nodes property */
    private _nodes?: ClusterMetricsNodes | undefined;
    /** The openshift_version property */
    private _openshift_version?: string | undefined;
    /** The operating_system property */
    private _operating_system?: string | undefined;
    /** The operators_condition_failing property */
    private _operators_condition_failing?: number | undefined;
    /** The region property */
    private _region?: string | undefined;
    /** The sockets property */
    private _sockets?: ClusterResource | undefined;
    /** The state property */
    private _state?: string | undefined;
    /** The state_description property */
    private _state_description?: string | undefined;
    /** The storage property */
    private _storage?: ClusterResource | undefined;
    /** The subscription_cpu_total property */
    private _subscription_cpu_total?: number | undefined;
    /** The subscription_obligation_exists property */
    private _subscription_obligation_exists?: number | undefined;
    /** The subscription_socket_total property */
    private _subscription_socket_total?: number | undefined;
    /** The upgrade property */
    private _upgrade?: ClusterUpgrade | undefined;
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
     * Gets the cloud_provider property value. The cloud_provider property
     * @returns a string
     */
    public get cloud_provider() {
        return this._cloud_provider;
    };
    /**
     * Sets the cloud_provider property value. The cloud_provider property
     * @param value Value to set for the cloud_provider property.
     */
    public set cloud_provider(value: string | undefined) {
        this._cloud_provider = value;
    };
    /**
     * Gets the compute_nodes_cpu property value. The compute_nodes_cpu property
     * @returns a ClusterResource
     */
    public get compute_nodes_cpu() {
        return this._compute_nodes_cpu;
    };
    /**
     * Sets the compute_nodes_cpu property value. The compute_nodes_cpu property
     * @param value Value to set for the compute_nodes_cpu property.
     */
    public set compute_nodes_cpu(value: ClusterResource | undefined) {
        this._compute_nodes_cpu = value;
    };
    /**
     * Gets the compute_nodes_memory property value. The compute_nodes_memory property
     * @returns a ClusterResource
     */
    public get compute_nodes_memory() {
        return this._compute_nodes_memory;
    };
    /**
     * Sets the compute_nodes_memory property value. The compute_nodes_memory property
     * @param value Value to set for the compute_nodes_memory property.
     */
    public set compute_nodes_memory(value: ClusterResource | undefined) {
        this._compute_nodes_memory = value;
    };
    /**
     * Gets the compute_nodes_sockets property value. The compute_nodes_sockets property
     * @returns a ClusterResource
     */
    public get compute_nodes_sockets() {
        return this._compute_nodes_sockets;
    };
    /**
     * Sets the compute_nodes_sockets property value. The compute_nodes_sockets property
     * @param value Value to set for the compute_nodes_sockets property.
     */
    public set compute_nodes_sockets(value: ClusterResource | undefined) {
        this._compute_nodes_sockets = value;
    };
    /**
     * Gets the console_url property value. The console_url property
     * @returns a string
     */
    public get console_url() {
        return this._console_url;
    };
    /**
     * Sets the console_url property value. The console_url property
     * @param value Value to set for the console_url property.
     */
    public set console_url(value: string | undefined) {
        this._console_url = value;
    };
    /**
     * Instantiates a new SubscriptionMetrics and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the cpu property value. The cpu property
     * @returns a ClusterResource
     */
    public get cpu() {
        return this._cpu;
    };
    /**
     * Sets the cpu property value. The cpu property
     * @param value Value to set for the cpu property.
     */
    public set cpu(value: ClusterResource | undefined) {
        this._cpu = value;
    };
    /**
     * Gets the critical_alerts_firing property value. The critical_alerts_firing property
     * @returns a float
     */
    public get critical_alerts_firing() {
        return this._critical_alerts_firing;
    };
    /**
     * Sets the critical_alerts_firing property value. The critical_alerts_firing property
     * @param value Value to set for the critical_alerts_firing property.
     */
    public set critical_alerts_firing(value: number | undefined) {
        this._critical_alerts_firing = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "cloud_provider": n => { this.cloud_provider = n.getStringValue(); },
            "compute_nodes_cpu": n => { this.compute_nodes_cpu = n.getObjectValue<ClusterResource>(createClusterResourceFromDiscriminatorValue); },
            "compute_nodes_memory": n => { this.compute_nodes_memory = n.getObjectValue<ClusterResource>(createClusterResourceFromDiscriminatorValue); },
            "compute_nodes_sockets": n => { this.compute_nodes_sockets = n.getObjectValue<ClusterResource>(createClusterResourceFromDiscriminatorValue); },
            "console_url": n => { this.console_url = n.getStringValue(); },
            "cpu": n => { this.cpu = n.getObjectValue<ClusterResource>(createClusterResourceFromDiscriminatorValue); },
            "critical_alerts_firing": n => { this.critical_alerts_firing = n.getNumberValue(); },
            "health_state": n => { this.health_state = n.getStringValue(); },
            "memory": n => { this.memory = n.getObjectValue<ClusterResource>(createClusterResourceFromDiscriminatorValue); },
            "nodes": n => { this.nodes = n.getObjectValue<ClusterMetricsNodes>(createClusterMetricsNodesFromDiscriminatorValue); },
            "openshift_version": n => { this.openshift_version = n.getStringValue(); },
            "operating_system": n => { this.operating_system = n.getStringValue(); },
            "operators_condition_failing": n => { this.operators_condition_failing = n.getNumberValue(); },
            "region": n => { this.region = n.getStringValue(); },
            "sockets": n => { this.sockets = n.getObjectValue<ClusterResource>(createClusterResourceFromDiscriminatorValue); },
            "state": n => { this.state = n.getStringValue(); },
            "state_description": n => { this.state_description = n.getStringValue(); },
            "storage": n => { this.storage = n.getObjectValue<ClusterResource>(createClusterResourceFromDiscriminatorValue); },
            "subscription_cpu_total": n => { this.subscription_cpu_total = n.getNumberValue(); },
            "subscription_obligation_exists": n => { this.subscription_obligation_exists = n.getNumberValue(); },
            "subscription_socket_total": n => { this.subscription_socket_total = n.getNumberValue(); },
            "upgrade": n => { this.upgrade = n.getObjectValue<ClusterUpgrade>(createClusterUpgradeFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the health_state property value. The health_state property
     * @returns a string
     */
    public get health_state() {
        return this._health_state;
    };
    /**
     * Sets the health_state property value. The health_state property
     * @param value Value to set for the health_state property.
     */
    public set health_state(value: string | undefined) {
        this._health_state = value;
    };
    /**
     * Gets the memory property value. The memory property
     * @returns a ClusterResource
     */
    public get memory() {
        return this._memory;
    };
    /**
     * Sets the memory property value. The memory property
     * @param value Value to set for the memory property.
     */
    public set memory(value: ClusterResource | undefined) {
        this._memory = value;
    };
    /**
     * Gets the nodes property value. The nodes property
     * @returns a ClusterMetricsNodes
     */
    public get nodes() {
        return this._nodes;
    };
    /**
     * Sets the nodes property value. The nodes property
     * @param value Value to set for the nodes property.
     */
    public set nodes(value: ClusterMetricsNodes | undefined) {
        this._nodes = value;
    };
    /**
     * Gets the openshift_version property value. The openshift_version property
     * @returns a string
     */
    public get openshift_version() {
        return this._openshift_version;
    };
    /**
     * Sets the openshift_version property value. The openshift_version property
     * @param value Value to set for the openshift_version property.
     */
    public set openshift_version(value: string | undefined) {
        this._openshift_version = value;
    };
    /**
     * Gets the operating_system property value. The operating_system property
     * @returns a string
     */
    public get operating_system() {
        return this._operating_system;
    };
    /**
     * Sets the operating_system property value. The operating_system property
     * @param value Value to set for the operating_system property.
     */
    public set operating_system(value: string | undefined) {
        this._operating_system = value;
    };
    /**
     * Gets the operators_condition_failing property value. The operators_condition_failing property
     * @returns a float
     */
    public get operators_condition_failing() {
        return this._operators_condition_failing;
    };
    /**
     * Sets the operators_condition_failing property value. The operators_condition_failing property
     * @param value Value to set for the operators_condition_failing property.
     */
    public set operators_condition_failing(value: number | undefined) {
        this._operators_condition_failing = value;
    };
    /**
     * Gets the region property value. The region property
     * @returns a string
     */
    public get region() {
        return this._region;
    };
    /**
     * Sets the region property value. The region property
     * @param value Value to set for the region property.
     */
    public set region(value: string | undefined) {
        this._region = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("cloud_provider", this.cloud_provider);
        writer.writeObjectValue<ClusterResource>("compute_nodes_cpu", this.compute_nodes_cpu);
        writer.writeObjectValue<ClusterResource>("compute_nodes_memory", this.compute_nodes_memory);
        writer.writeObjectValue<ClusterResource>("compute_nodes_sockets", this.compute_nodes_sockets);
        writer.writeStringValue("console_url", this.console_url);
        writer.writeObjectValue<ClusterResource>("cpu", this.cpu);
        writer.writeNumberValue("critical_alerts_firing", this.critical_alerts_firing);
        writer.writeStringValue("health_state", this.health_state);
        writer.writeObjectValue<ClusterResource>("memory", this.memory);
        writer.writeObjectValue<ClusterMetricsNodes>("nodes", this.nodes);
        writer.writeStringValue("openshift_version", this.openshift_version);
        writer.writeStringValue("operating_system", this.operating_system);
        writer.writeNumberValue("operators_condition_failing", this.operators_condition_failing);
        writer.writeStringValue("region", this.region);
        writer.writeObjectValue<ClusterResource>("sockets", this.sockets);
        writer.writeStringValue("state", this.state);
        writer.writeStringValue("state_description", this.state_description);
        writer.writeObjectValue<ClusterResource>("storage", this.storage);
        writer.writeNumberValue("subscription_cpu_total", this.subscription_cpu_total);
        writer.writeNumberValue("subscription_obligation_exists", this.subscription_obligation_exists);
        writer.writeNumberValue("subscription_socket_total", this.subscription_socket_total);
        writer.writeObjectValue<ClusterUpgrade>("upgrade", this.upgrade);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the sockets property value. The sockets property
     * @returns a ClusterResource
     */
    public get sockets() {
        return this._sockets;
    };
    /**
     * Sets the sockets property value. The sockets property
     * @param value Value to set for the sockets property.
     */
    public set sockets(value: ClusterResource | undefined) {
        this._sockets = value;
    };
    /**
     * Gets the state property value. The state property
     * @returns a string
     */
    public get state() {
        return this._state;
    };
    /**
     * Sets the state property value. The state property
     * @param value Value to set for the state property.
     */
    public set state(value: string | undefined) {
        this._state = value;
    };
    /**
     * Gets the state_description property value. The state_description property
     * @returns a string
     */
    public get state_description() {
        return this._state_description;
    };
    /**
     * Sets the state_description property value. The state_description property
     * @param value Value to set for the state_description property.
     */
    public set state_description(value: string | undefined) {
        this._state_description = value;
    };
    /**
     * Gets the storage property value. The storage property
     * @returns a ClusterResource
     */
    public get storage() {
        return this._storage;
    };
    /**
     * Sets the storage property value. The storage property
     * @param value Value to set for the storage property.
     */
    public set storage(value: ClusterResource | undefined) {
        this._storage = value;
    };
    /**
     * Gets the subscription_cpu_total property value. The subscription_cpu_total property
     * @returns a float
     */
    public get subscription_cpu_total() {
        return this._subscription_cpu_total;
    };
    /**
     * Sets the subscription_cpu_total property value. The subscription_cpu_total property
     * @param value Value to set for the subscription_cpu_total property.
     */
    public set subscription_cpu_total(value: number | undefined) {
        this._subscription_cpu_total = value;
    };
    /**
     * Gets the subscription_obligation_exists property value. The subscription_obligation_exists property
     * @returns a float
     */
    public get subscription_obligation_exists() {
        return this._subscription_obligation_exists;
    };
    /**
     * Sets the subscription_obligation_exists property value. The subscription_obligation_exists property
     * @param value Value to set for the subscription_obligation_exists property.
     */
    public set subscription_obligation_exists(value: number | undefined) {
        this._subscription_obligation_exists = value;
    };
    /**
     * Gets the subscription_socket_total property value. The subscription_socket_total property
     * @returns a float
     */
    public get subscription_socket_total() {
        return this._subscription_socket_total;
    };
    /**
     * Sets the subscription_socket_total property value. The subscription_socket_total property
     * @param value Value to set for the subscription_socket_total property.
     */
    public set subscription_socket_total(value: number | undefined) {
        this._subscription_socket_total = value;
    };
    /**
     * Gets the upgrade property value. The upgrade property
     * @returns a ClusterUpgrade
     */
    public get upgrade() {
        return this._upgrade;
    };
    /**
     * Sets the upgrade property value. The upgrade property
     * @param value Value to set for the upgrade property.
     */
    public set upgrade(value: ClusterUpgrade | undefined) {
        this._upgrade = value;
    };
}
