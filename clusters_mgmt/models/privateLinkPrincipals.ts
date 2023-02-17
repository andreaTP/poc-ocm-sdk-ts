import {createPrivateLinkPrincipalFromDiscriminatorValue} from './createPrivateLinkPrincipalFromDiscriminatorValue';
import {PrivateLinkPrincipal} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Contains a list of principals for the Private Link.
 */
export class PrivateLinkPrincipals implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Self link. */
    private _href?: string | undefined;
    /** Unique identifier of the object. */
    private _id?: string | undefined;
    /** Indicates the type of this object. Will be 'PrivateLinkPrincipals' if this is a complete object or 'PrivateLinkPrincipalsLink' if it is just a link. */
    private _kind?: string | undefined;
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
     * Instantiates a new PrivateLinkPrincipals and sets the default values.
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
            "href": n => { this.href = n.getStringValue(); },
            "id": n => { this.id = n.getStringValue(); },
            "kind": n => { this.kind = n.getStringValue(); },
            "principals": n => { this.principals = n.getCollectionOfObjectValues<PrivateLinkPrincipal>(createPrivateLinkPrincipalFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the href property value. Self link.
     * @returns a string
     */
    public get href() {
        return this._href;
    };
    /**
     * Sets the href property value. Self link.
     * @param value Value to set for the href property.
     */
    public set href(value: string | undefined) {
        this._href = value;
    };
    /**
     * Gets the id property value. Unique identifier of the object.
     * @returns a string
     */
    public get id() {
        return this._id;
    };
    /**
     * Sets the id property value. Unique identifier of the object.
     * @param value Value to set for the id property.
     */
    public set id(value: string | undefined) {
        this._id = value;
    };
    /**
     * Gets the kind property value. Indicates the type of this object. Will be 'PrivateLinkPrincipals' if this is a complete object or 'PrivateLinkPrincipalsLink' if it is just a link.
     * @returns a string
     */
    public get kind() {
        return this._kind;
    };
    /**
     * Sets the kind property value. Indicates the type of this object. Will be 'PrivateLinkPrincipals' if this is a complete object or 'PrivateLinkPrincipalsLink' if it is just a link.
     * @param value Value to set for the kind property.
     */
    public set kind(value: string | undefined) {
        this._kind = value;
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
        writer.writeStringValue("href", this.href);
        writer.writeStringValue("id", this.id);
        writer.writeStringValue("kind", this.kind);
        writer.writeCollectionOfObjectValues<PrivateLinkPrincipal>("principals", this.principals);
        writer.writeAdditionalData(this.additionalData);
    };
}
