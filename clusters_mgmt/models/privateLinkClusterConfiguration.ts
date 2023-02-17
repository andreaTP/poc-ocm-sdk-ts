import {createPrivateLinkPrincipalFromDiscriminatorValue} from './createPrivateLinkPrincipalFromDiscriminatorValue';
import {PrivateLinkPrincipal} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Manages the configuration for the Private Links.
 */
export class PrivateLinkClusterConfiguration implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** List of additional principals for the Private Link */
    private _principals?: PrivateLinkPrincipal[] | undefined;
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
     * Instantiates a new PrivateLinkClusterConfiguration and sets the default values.
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
            "principals": n => { this.principals = n.getCollectionOfObjectValues<PrivateLinkPrincipal>(createPrivateLinkPrincipalFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the principals property value. List of additional principals for the Private Link
     * @returns a PrivateLinkPrincipal
     */
    public get principals() {
        return this._principals;
    };
    /**
     * Sets the principals property value. List of additional principals for the Private Link
     * @param value Value to set for the principals property.
     */
    public set principals(value: PrivateLinkPrincipal[] | undefined) {
        this._principals = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfObjectValues<PrivateLinkPrincipal>("principals", this.principals);
        writer.writeAdditionalData(this.additionalData);
    };
}
