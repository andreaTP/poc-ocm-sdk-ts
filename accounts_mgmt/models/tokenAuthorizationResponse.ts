import {createAccountFromDiscriminatorValue} from './createAccountFromDiscriminatorValue';
import {Account} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TokenAuthorizationResponse implements AdditionalDataHolder, Parsable {
    /** The account property */
    private _account?: Account | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /**
     * Gets the account property value. The account property
     * @returns a Account
     */
    public get account() {
        return this._account;
    };
    /**
     * Sets the account property value. The account property
     * @param value Value to set for the account property.
     */
    public set account(value: Account | undefined) {
        this._account = value;
    };
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
     * Instantiates a new TokenAuthorizationResponse and sets the default values.
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
            "account": n => { this.account = n.getObjectValue<Account>(createAccountFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Account>("account", this.account);
        writer.writeAdditionalData(this.additionalData);
    };
}
