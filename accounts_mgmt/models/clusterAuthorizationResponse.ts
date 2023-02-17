import {createReservedResourceFromDiscriminatorValue} from './createReservedResourceFromDiscriminatorValue';
import {createSubscriptionFromDiscriminatorValue} from './createSubscriptionFromDiscriminatorValue';
import {ReservedResource, Subscription} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ClusterAuthorizationResponse implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The allowed property */
    private _allowed?: boolean | undefined;
    /** The excess_resources property */
    private _excess_resources?: ReservedResource[] | undefined;
    /** The subscription property */
    private _subscription?: Subscription | undefined;
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
     * Gets the allowed property value. The allowed property
     * @returns a boolean
     */
    public get allowed() {
        return this._allowed;
    };
    /**
     * Sets the allowed property value. The allowed property
     * @param value Value to set for the allowed property.
     */
    public set allowed(value: boolean | undefined) {
        this._allowed = value;
    };
    /**
     * Instantiates a new ClusterAuthorizationResponse and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the excess_resources property value. The excess_resources property
     * @returns a ReservedResource
     */
    public get excess_resources() {
        return this._excess_resources;
    };
    /**
     * Sets the excess_resources property value. The excess_resources property
     * @param value Value to set for the excess_resources property.
     */
    public set excess_resources(value: ReservedResource[] | undefined) {
        this._excess_resources = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "allowed": n => { this.allowed = n.getBooleanValue(); },
            "excess_resources": n => { this.excess_resources = n.getCollectionOfObjectValues<ReservedResource>(createReservedResourceFromDiscriminatorValue); },
            "subscription": n => { this.subscription = n.getObjectValue<Subscription>(createSubscriptionFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeBooleanValue("allowed", this.allowed);
        writer.writeCollectionOfObjectValues<ReservedResource>("excess_resources", this.excess_resources);
        writer.writeObjectValue<Subscription>("subscription", this.subscription);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the subscription property value. The subscription property
     * @returns a Subscription
     */
    public get subscription() {
        return this._subscription;
    };
    /**
     * Sets the subscription property value. The subscription property
     * @param value Value to set for the subscription property.
     */
    public set subscription(value: Subscription | undefined) {
        this._subscription = value;
    };
}
