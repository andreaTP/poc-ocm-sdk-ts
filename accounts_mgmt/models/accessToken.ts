import {createAccessToken_authsFromDiscriminatorValue} from './createAccessToken_authsFromDiscriminatorValue';
import {AccessToken_auths} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AccessToken implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The auths property */
    private _auths?: AccessToken_auths | undefined;
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
     * Gets the auths property value. The auths property
     * @returns a AccessToken_auths
     */
    public get auths() {
        return this._auths;
    };
    /**
     * Sets the auths property value. The auths property
     * @param value Value to set for the auths property.
     */
    public set auths(value: AccessToken_auths | undefined) {
        this._auths = value;
    };
    /**
     * Instantiates a new AccessToken and sets the default values.
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
            "auths": n => { this.auths = n.getObjectValue<AccessToken_auths>(createAccessToken_authsFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<AccessToken_auths>("auths", this.auths);
        writer.writeAdditionalData(this.additionalData);
    };
}
