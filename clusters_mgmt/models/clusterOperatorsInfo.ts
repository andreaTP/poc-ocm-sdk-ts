import {createClusterOperatorInfoFromDiscriminatorValue} from './createClusterOperatorInfoFromDiscriminatorValue';
import {ClusterOperatorInfo} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Provides detailed information about the operators installed on the cluster.
 */
export class ClusterOperatorsInfo implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The operators property */
    private _operators?: ClusterOperatorInfo[] | undefined;
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
     * Instantiates a new ClusterOperatorsInfo and sets the default values.
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
            "operators": n => { this.operators = n.getCollectionOfObjectValues<ClusterOperatorInfo>(createClusterOperatorInfoFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the operators property value. The operators property
     * @returns a ClusterOperatorInfo
     */
    public get operators() {
        return this._operators;
    };
    /**
     * Sets the operators property value. The operators property
     * @param value Value to set for the operators property.
     */
    public set operators(value: ClusterOperatorInfo[] | undefined) {
        this._operators = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfObjectValues<ClusterOperatorInfo>("operators", this.operators);
        writer.writeAdditionalData(this.additionalData);
    };
}
