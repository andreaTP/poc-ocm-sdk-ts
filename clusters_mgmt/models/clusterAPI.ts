import {ListeningMethod} from './listeningMethod';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Information about the API of a cluster.
 */
export class ClusterAPI implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Cluster components listening method. */
    private _listening?: ListeningMethod | undefined;
    /** The URL of the API server of the cluster. */
    private _url?: string | undefined;
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
     * Instantiates a new ClusterAPI and sets the default values.
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
            "listening": n => { this.listening = n.getEnumValue<ListeningMethod>(ListeningMethod); },
            "url": n => { this.url = n.getStringValue(); },
        };
    };
    /**
     * Gets the listening property value. Cluster components listening method.
     * @returns a ListeningMethod
     */
    public get listening() {
        return this._listening;
    };
    /**
     * Sets the listening property value. Cluster components listening method.
     * @param value Value to set for the listening property.
     */
    public set listening(value: ListeningMethod | undefined) {
        this._listening = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeEnumValue<ListeningMethod>("listening", this.listening);
        writer.writeStringValue("url", this.url);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the url property value. The URL of the API server of the cluster.
     * @returns a string
     */
    public get url() {
        return this._url;
    };
    /**
     * Sets the url property value. The URL of the API server of the cluster.
     * @param value Value to set for the url property.
     */
    public set url(value: string | undefined) {
        this._url = value;
    };
}
