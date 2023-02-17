import {createAlertInfoFromDiscriminatorValue} from './createAlertInfoFromDiscriminatorValue';
import {AlertInfo} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Provides information about the alerts firing on the cluster.
 */
export class AlertsInfo implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The alerts property */
    private _alerts?: AlertInfo[] | undefined;
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
     * Gets the alerts property value. The alerts property
     * @returns a AlertInfo
     */
    public get alerts() {
        return this._alerts;
    };
    /**
     * Sets the alerts property value. The alerts property
     * @param value Value to set for the alerts property.
     */
    public set alerts(value: AlertInfo[] | undefined) {
        this._alerts = value;
    };
    /**
     * Instantiates a new AlertsInfo and sets the default values.
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
            "alerts": n => { this.alerts = n.getCollectionOfObjectValues<AlertInfo>(createAlertInfoFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfObjectValues<AlertInfo>("alerts", this.alerts);
        writer.writeAdditionalData(this.additionalData);
    };
}
