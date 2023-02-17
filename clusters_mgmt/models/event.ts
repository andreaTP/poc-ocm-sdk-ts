import {createEvent_bodyFromDiscriminatorValue} from './createEvent_bodyFromDiscriminatorValue';
import {Event_body} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Representation of a trackable event.
 */
export class Event implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Body of the event to track the details of the tracking event as Key value pair */
    private _body?: Event_body | undefined;
    /** Key of the event to be tracked. This key should start with anuppercase letter followed by alphanumeric characters orunderscores. The entire key needs to be smaller than 64 characters. */
    private _key?: string | undefined;
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
     * Gets the body property value. Body of the event to track the details of the tracking event as Key value pair
     * @returns a Event_body
     */
    public get body() {
        return this._body;
    };
    /**
     * Sets the body property value. Body of the event to track the details of the tracking event as Key value pair
     * @param value Value to set for the body property.
     */
    public set body(value: Event_body | undefined) {
        this._body = value;
    };
    /**
     * Instantiates a new Event and sets the default values.
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
            "body": n => { this.body = n.getObjectValue<Event_body>(createEvent_bodyFromDiscriminatorValue); },
            "key": n => { this.key = n.getStringValue(); },
        };
    };
    /**
     * Gets the key property value. Key of the event to be tracked. This key should start with anuppercase letter followed by alphanumeric characters orunderscores. The entire key needs to be smaller than 64 characters.
     * @returns a string
     */
    public get key() {
        return this._key;
    };
    /**
     * Sets the key property value. Key of the event to be tracked. This key should start with anuppercase letter followed by alphanumeric characters orunderscores. The entire key needs to be smaller than 64 characters.
     * @param value Value to set for the key property.
     */
    public set key(value: string | undefined) {
        this._key = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Event_body>("body", this.body);
        writer.writeStringValue("key", this.key);
        writer.writeAdditionalData(this.additionalData);
    };
}
