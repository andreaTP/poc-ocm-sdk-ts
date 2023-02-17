import {createCPUTotalNodeRoleOSMetricNodeFromDiscriminatorValue} from './createCPUTotalNodeRoleOSMetricNodeFromDiscriminatorValue';
import {CPUTotalNodeRoleOSMetricNode} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Representation of information from telemetry about the CPU capacity by noderole and OS of a cluster.
 */
export class CPUTotalsNodeRoleOSMetricNode implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The cpu_totals property */
    private _cpu_totals?: CPUTotalNodeRoleOSMetricNode[] | undefined;
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
     * Instantiates a new CPUTotalsNodeRoleOSMetricNode and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the cpu_totals property value. The cpu_totals property
     * @returns a CPUTotalNodeRoleOSMetricNode
     */
    public get cpu_totals() {
        return this._cpu_totals;
    };
    /**
     * Sets the cpu_totals property value. The cpu_totals property
     * @param value Value to set for the cpu_totals property.
     */
    public set cpu_totals(value: CPUTotalNodeRoleOSMetricNode[] | undefined) {
        this._cpu_totals = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "cpu_totals": n => { this.cpu_totals = n.getCollectionOfObjectValues<CPUTotalNodeRoleOSMetricNode>(createCPUTotalNodeRoleOSMetricNodeFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfObjectValues<CPUTotalNodeRoleOSMetricNode>("cpu_totals", this.cpu_totals);
        writer.writeAdditionalData(this.additionalData);
    };
}
