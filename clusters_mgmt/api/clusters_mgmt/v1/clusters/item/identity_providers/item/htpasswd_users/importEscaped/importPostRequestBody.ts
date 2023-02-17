import {HTPasswdUser} from '../../../../../../../../../models/';
import {createHTPasswdUserFromDiscriminatorValue} from '../../../../../../../../../models/createHTPasswdUserFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ImportPostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** List of users to add to the IDP. */
    private _items?: HTPasswdUser[] | undefined;
    /** Index of the requested page, where one corresponds to the first page. */
    private _page?: number | undefined;
    /** Number of items contained in the returned page. */
    private _size?: number | undefined;
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
     * Instantiates a new importPostRequestBody and sets the default values.
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
            "items": n => { this.items = n.getCollectionOfObjectValues<HTPasswdUser>(createHTPasswdUserFromDiscriminatorValue); },
            "page": n => { this.page = n.getNumberValue(); },
            "size": n => { this.size = n.getNumberValue(); },
        };
    };
    /**
     * Gets the items property value. List of users to add to the IDP.
     * @returns a HTPasswdUser
     */
    public get items() {
        return this._items;
    };
    /**
     * Sets the items property value. List of users to add to the IDP.
     * @param value Value to set for the items property.
     */
    public set items(value: HTPasswdUser[] | undefined) {
        this._items = value;
    };
    /**
     * Gets the page property value. Index of the requested page, where one corresponds to the first page.
     * @returns a integer
     */
    public get page() {
        return this._page;
    };
    /**
     * Sets the page property value. Index of the requested page, where one corresponds to the first page.
     * @param value Value to set for the page property.
     */
    public set page(value: number | undefined) {
        this._page = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfObjectValues<HTPasswdUser>("items", this.items);
        writer.writeNumberValue("page", this.page);
        writer.writeNumberValue("size", this.size);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the size property value. Number of items contained in the returned page.
     * @returns a integer
     */
    public get size() {
        return this._size;
    };
    /**
     * Sets the size property value. Number of items contained in the returned page.
     * @param value Value to set for the size property.
     */
    public set size(value: number | undefined) {
        this._size = value;
    };
}
