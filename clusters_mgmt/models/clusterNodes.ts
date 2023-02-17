import {createClusterNodes_compute_labelsFromDiscriminatorValue} from './createClusterNodes_compute_labelsFromDiscriminatorValue';
import {createMachinePoolAutoscalingFromDiscriminatorValue} from './createMachinePoolAutoscalingFromDiscriminatorValue';
import {createMachinePoolSecurityGroupFilterFromDiscriminatorValue} from './createMachinePoolSecurityGroupFilterFromDiscriminatorValue';
import {createMachineTypeFromDiscriminatorValue} from './createMachineTypeFromDiscriminatorValue';
import {ClusterNodes_compute_labels, MachinePoolAutoscaling, MachinePoolSecurityGroupFilter, MachineType} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Counts of different classes of nodes inside a cluster.
 */
export class ClusterNodes implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Representation of a autoscaling in a machine pool. */
    private _autoscale_compute?: MachinePoolAutoscaling | undefined;
    /** The availability zones upon which the nodes are created. */
    private _availability_zones?: string[] | undefined;
    /** Number of compute nodes of the cluster.Compute and AutoscaleCompute cannot be used together.     */
    private _compute?: number | undefined;
    /** The labels set on the "default" compute machine pool. */
    private _compute_labels?: ClusterNodes_compute_labels | undefined;
    /** Machine type. */
    private _compute_machine_type?: MachineType | undefined;
    /** Number of infrastructure nodes of the cluster. */
    private _infra?: number | undefined;
    /** Number of master nodes of the cluster. */
    private _master?: number | undefined;
    /** List of security groups to be applied to nodes (Optional) */
    private _security_group_filters?: MachinePoolSecurityGroupFilter[] | undefined;
    /** Total number of nodes of the cluster. */
    private _total?: number | undefined;
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
     * Gets the autoscale_compute property value. Representation of a autoscaling in a machine pool.
     * @returns a MachinePoolAutoscaling
     */
    public get autoscale_compute() {
        return this._autoscale_compute;
    };
    /**
     * Sets the autoscale_compute property value. Representation of a autoscaling in a machine pool.
     * @param value Value to set for the autoscale_compute property.
     */
    public set autoscale_compute(value: MachinePoolAutoscaling | undefined) {
        this._autoscale_compute = value;
    };
    /**
     * Gets the availability_zones property value. The availability zones upon which the nodes are created.
     * @returns a string
     */
    public get availability_zones() {
        return this._availability_zones;
    };
    /**
     * Sets the availability_zones property value. The availability zones upon which the nodes are created.
     * @param value Value to set for the availability_zones property.
     */
    public set availability_zones(value: string[] | undefined) {
        this._availability_zones = value;
    };
    /**
     * Gets the compute property value. Number of compute nodes of the cluster.Compute and AutoscaleCompute cannot be used together.    
     * @returns a integer
     */
    public get compute() {
        return this._compute;
    };
    /**
     * Sets the compute property value. Number of compute nodes of the cluster.Compute and AutoscaleCompute cannot be used together.    
     * @param value Value to set for the compute property.
     */
    public set compute(value: number | undefined) {
        this._compute = value;
    };
    /**
     * Gets the compute_labels property value. The labels set on the "default" compute machine pool.
     * @returns a ClusterNodes_compute_labels
     */
    public get compute_labels() {
        return this._compute_labels;
    };
    /**
     * Sets the compute_labels property value. The labels set on the "default" compute machine pool.
     * @param value Value to set for the compute_labels property.
     */
    public set compute_labels(value: ClusterNodes_compute_labels | undefined) {
        this._compute_labels = value;
    };
    /**
     * Gets the compute_machine_type property value. Machine type.
     * @returns a MachineType
     */
    public get compute_machine_type() {
        return this._compute_machine_type;
    };
    /**
     * Sets the compute_machine_type property value. Machine type.
     * @param value Value to set for the compute_machine_type property.
     */
    public set compute_machine_type(value: MachineType | undefined) {
        this._compute_machine_type = value;
    };
    /**
     * Instantiates a new ClusterNodes and sets the default values.
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
            "autoscale_compute": n => { this.autoscale_compute = n.getObjectValue<MachinePoolAutoscaling>(createMachinePoolAutoscalingFromDiscriminatorValue); },
            "availability_zones": n => { this.availability_zones = n.getCollectionOfPrimitiveValues<string>(); },
            "compute": n => { this.compute = n.getNumberValue(); },
            "compute_labels": n => { this.compute_labels = n.getObjectValue<ClusterNodes_compute_labels>(createClusterNodes_compute_labelsFromDiscriminatorValue); },
            "compute_machine_type": n => { this.compute_machine_type = n.getObjectValue<MachineType>(createMachineTypeFromDiscriminatorValue); },
            "infra": n => { this.infra = n.getNumberValue(); },
            "master": n => { this.master = n.getNumberValue(); },
            "security_group_filters": n => { this.security_group_filters = n.getCollectionOfObjectValues<MachinePoolSecurityGroupFilter>(createMachinePoolSecurityGroupFilterFromDiscriminatorValue); },
            "total": n => { this.total = n.getNumberValue(); },
        };
    };
    /**
     * Gets the infra property value. Number of infrastructure nodes of the cluster.
     * @returns a integer
     */
    public get infra() {
        return this._infra;
    };
    /**
     * Sets the infra property value. Number of infrastructure nodes of the cluster.
     * @param value Value to set for the infra property.
     */
    public set infra(value: number | undefined) {
        this._infra = value;
    };
    /**
     * Gets the master property value. Number of master nodes of the cluster.
     * @returns a integer
     */
    public get master() {
        return this._master;
    };
    /**
     * Sets the master property value. Number of master nodes of the cluster.
     * @param value Value to set for the master property.
     */
    public set master(value: number | undefined) {
        this._master = value;
    };
    /**
     * Gets the security_group_filters property value. List of security groups to be applied to nodes (Optional)
     * @returns a MachinePoolSecurityGroupFilter
     */
    public get security_group_filters() {
        return this._security_group_filters;
    };
    /**
     * Sets the security_group_filters property value. List of security groups to be applied to nodes (Optional)
     * @param value Value to set for the security_group_filters property.
     */
    public set security_group_filters(value: MachinePoolSecurityGroupFilter[] | undefined) {
        this._security_group_filters = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<MachinePoolAutoscaling>("autoscale_compute", this.autoscale_compute);
        writer.writeCollectionOfPrimitiveValues<string>("availability_zones", this.availability_zones);
        writer.writeNumberValue("compute", this.compute);
        writer.writeObjectValue<ClusterNodes_compute_labels>("compute_labels", this.compute_labels);
        writer.writeObjectValue<MachineType>("compute_machine_type", this.compute_machine_type);
        writer.writeNumberValue("infra", this.infra);
        writer.writeNumberValue("master", this.master);
        writer.writeCollectionOfObjectValues<MachinePoolSecurityGroupFilter>("security_group_filters", this.security_group_filters);
        writer.writeNumberValue("total", this.total);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the total property value. Total number of nodes of the cluster.
     * @returns a integer
     */
    public get total() {
        return this._total;
    };
    /**
     * Sets the total property value. Total number of nodes of the cluster.
     * @param value Value to set for the total property.
     */
    public set total(value: number | undefined) {
        this._total = value;
    };
}
