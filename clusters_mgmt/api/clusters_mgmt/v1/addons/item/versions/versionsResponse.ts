import {AddOnVersion} from '../../../../../../models/';
import {createAddOnVersionFromDiscriminatorValue} from '../../../../../../models/createAddOnVersionFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class VersionsResponse implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Retrieved list of add-on versions. */
    private _items?: AddOnVersion[] | undefined;
    /** Index of the requested page, where one corresponds to the first page. */
    private _page?: number | undefined;
    /** Maximum number of items that will be contained in the returned page. */
    private _size?: number | undefined;
    /** Total number of items of the collection that match the search criteria,regardless of the size of the page. */
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
     * Instantiates a new versionsResponse and sets the default values.
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
            "items": n => { this.items = n.getCollectionOfObjectValues<AddOnVersion>(createAddOnVersionFromDiscriminatorValue); },
            "page": n => { this.page = n.getNumberValue(); },
            "size": n => { this.size = n.getNumberValue(); },
            "total": n => { this.total = n.getNumberValue(); },
        };
    };
    /**
     * Gets the items property value. Retrieved list of add-on versions.
     * @returns a AddOnVersion
     */
    public get items() {
        return this._items;
    };
    /**
     * Sets the items property value. Retrieved list of add-on versions.
     * @param value Value to set for the items property.
     */
    public set items(value: AddOnVersion[] | undefined) {
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
        writer.writeCollectionOfObjectValues<AddOnVersion>("items", this.items);
        writer.writeNumberValue("page", this.page);
        writer.writeNumberValue("size", this.size);
        writer.writeNumberValue("total", this.total);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the size property value. Maximum number of items that will be contained in the returned page.
     * @returns a integer
     */
    public get size() {
        return this._size;
    };
    /**
     * Sets the size property value. Maximum number of items that will be contained in the returned page.
     * @param value Value to set for the size property.
     */
    public set size(value: number | undefined) {
        this._size = value;
    };
    /**
     * Gets the total property value. Total number of items of the collection that match the search criteria,regardless of the size of the page.
     * @returns a integer
     */
    public get total() {
        return this._total;
    };
    /**
     * Sets the total property value. Total number of items of the collection that match the search criteria,regardless of the size of the page.
     * @param value Value to set for the total property.
     */
    public set total(value: number | undefined) {
        this._total = value;
    };
}
