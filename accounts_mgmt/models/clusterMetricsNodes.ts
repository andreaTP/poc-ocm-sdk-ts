import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ClusterMetricsNodes implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The compute property */
    private _compute?: number | undefined;
    /** The infra property */
    private _infra?: number | undefined;
    /** The master property */
    private _master?: number | undefined;
    /** The total property */
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
     * Gets the compute property value. The compute property
     * @returns a float
     */
    public get compute() {
        return this._compute;
    };
    /**
     * Sets the compute property value. The compute property
     * @param value Value to set for the compute property.
     */
    public set compute(value: number | undefined) {
        this._compute = value;
    };
    /**
     * Instantiates a new ClusterMetricsNodes and sets the default values.
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
            "compute": n => { this.compute = n.getNumberValue(); },
            "infra": n => { this.infra = n.getNumberValue(); },
            "master": n => { this.master = n.getNumberValue(); },
            "total": n => { this.total = n.getNumberValue(); },
        };
    };
    /**
     * Gets the infra property value. The infra property
     * @returns a float
     */
    public get infra() {
        return this._infra;
    };
    /**
     * Sets the infra property value. The infra property
     * @param value Value to set for the infra property.
     */
    public set infra(value: number | undefined) {
        this._infra = value;
    };
    /**
     * Gets the master property value. The master property
     * @returns a float
     */
    public get master() {
        return this._master;
    };
    /**
     * Sets the master property value. The master property
     * @param value Value to set for the master property.
     */
    public set master(value: number | undefined) {
        this._master = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeNumberValue("compute", this.compute);
        writer.writeNumberValue("infra", this.infra);
        writer.writeNumberValue("master", this.master);
        writer.writeNumberValue("total", this.total);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the total property value. The total property
     * @returns a float
     */
    public get total() {
        return this._total;
    };
    /**
     * Sets the total property value. The total property
     * @param value Value to set for the total property.
     */
    public set total(value: number | undefined) {
        this._total = value;
    };
}
