import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Proxy configuration of a cluster.
 */
export class Proxy implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** HTTPProxy is the URL of the proxy for HTTP requests. */
    private _http_proxy?: string | undefined;
    /** HTTPSProxy is the URL of the proxy for HTTPS requests. */
    private _https_proxy?: string | undefined;
    /** NoProxy is a comma-separated list of domains and CIDRs for which the proxy should not be used */
    private _no_proxy?: string | undefined;
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
     * Instantiates a new Proxy and sets the default values.
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
            "https_proxy": n => { this.https_proxy = n.getStringValue(); },
            "http_proxy": n => { this.http_proxy = n.getStringValue(); },
            "no_proxy": n => { this.no_proxy = n.getStringValue(); },
        };
    };
    /**
     * Gets the http_proxy property value. HTTPProxy is the URL of the proxy for HTTP requests.
     * @returns a string
     */
    public get http_proxy() {
        return this._http_proxy;
    };
    /**
     * Sets the http_proxy property value. HTTPProxy is the URL of the proxy for HTTP requests.
     * @param value Value to set for the http_proxy property.
     */
    public set http_proxy(value: string | undefined) {
        this._http_proxy = value;
    };
    /**
     * Gets the https_proxy property value. HTTPSProxy is the URL of the proxy for HTTPS requests.
     * @returns a string
     */
    public get https_proxy() {
        return this._https_proxy;
    };
    /**
     * Sets the https_proxy property value. HTTPSProxy is the URL of the proxy for HTTPS requests.
     * @param value Value to set for the https_proxy property.
     */
    public set https_proxy(value: string | undefined) {
        this._https_proxy = value;
    };
    /**
     * Gets the no_proxy property value. NoProxy is a comma-separated list of domains and CIDRs for which the proxy should not be used
     * @returns a string
     */
    public get no_proxy() {
        return this._no_proxy;
    };
    /**
     * Sets the no_proxy property value. NoProxy is a comma-separated list of domains and CIDRs for which the proxy should not be used
     * @param value Value to set for the no_proxy property.
     */
    public set no_proxy(value: string | undefined) {
        this._no_proxy = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("https_proxy", this.https_proxy);
        writer.writeStringValue("http_proxy", this.http_proxy);
        writer.writeStringValue("no_proxy", this.no_proxy);
        writer.writeAdditionalData(this.additionalData);
    };
}
