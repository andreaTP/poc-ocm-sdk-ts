import {createLimitedSupportReasonTemplateFromDiscriminatorValue} from './createLimitedSupportReasonTemplateFromDiscriminatorValue';
import {DetectionType} from './detectionType';
import {LimitedSupportReasonTemplate} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * A reason that a cluster is in limited support.
 */
export class LimitedSupportReason implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The time the reason was detected. */
    private _creation_timestamp?: Date | undefined;
    /** URL with a link to a detailed description of the reason. */
    private _details?: string | undefined;
    /** The detection_type property */
    private _detection_type?: DetectionType | undefined;
    /** Self link. */
    private _href?: string | undefined;
    /** Unique identifier of the object. */
    private _id?: string | undefined;
    /** Indicates the type of this object. Will be 'LimitedSupportReason' if this is a complete object or 'LimitedSupportReasonLink' if it is just a link. */
    private _kind?: string | undefined;
    /** Summary of the reason. */
    private _summary?: string | undefined;
    /** A template for cluster limited support reason. */
    private _template?: LimitedSupportReasonTemplate | undefined;
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
     * Instantiates a new LimitedSupportReason and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the creation_timestamp property value. The time the reason was detected.
     * @returns a Date
     */
    public get creation_timestamp() {
        return this._creation_timestamp;
    };
    /**
     * Sets the creation_timestamp property value. The time the reason was detected.
     * @param value Value to set for the creation_timestamp property.
     */
    public set creation_timestamp(value: Date | undefined) {
        this._creation_timestamp = value;
    };
    /**
     * Gets the details property value. URL with a link to a detailed description of the reason.
     * @returns a string
     */
    public get details() {
        return this._details;
    };
    /**
     * Sets the details property value. URL with a link to a detailed description of the reason.
     * @param value Value to set for the details property.
     */
    public set details(value: string | undefined) {
        this._details = value;
    };
    /**
     * Gets the detection_type property value. The detection_type property
     * @returns a DetectionType
     */
    public get detection_type() {
        return this._detection_type;
    };
    /**
     * Sets the detection_type property value. The detection_type property
     * @param value Value to set for the detection_type property.
     */
    public set detection_type(value: DetectionType | undefined) {
        this._detection_type = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "creation_timestamp": n => { this.creation_timestamp = n.getDateValue(); },
            "details": n => { this.details = n.getStringValue(); },
            "detection_type": n => { this.detection_type = n.getEnumValue<DetectionType>(DetectionType); },
            "href": n => { this.href = n.getStringValue(); },
            "id": n => { this.id = n.getStringValue(); },
            "kind": n => { this.kind = n.getStringValue(); },
            "summary": n => { this.summary = n.getStringValue(); },
            "template": n => { this.template = n.getObjectValue<LimitedSupportReasonTemplate>(createLimitedSupportReasonTemplateFromDiscriminatorValue); },
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
     * Gets the kind property value. Indicates the type of this object. Will be 'LimitedSupportReason' if this is a complete object or 'LimitedSupportReasonLink' if it is just a link.
     * @returns a string
     */
    public get kind() {
        return this._kind;
    };
    /**
     * Sets the kind property value. Indicates the type of this object. Will be 'LimitedSupportReason' if this is a complete object or 'LimitedSupportReasonLink' if it is just a link.
     * @param value Value to set for the kind property.
     */
    public set kind(value: string | undefined) {
        this._kind = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeDateValue("creation_timestamp", this.creation_timestamp);
        writer.writeStringValue("details", this.details);
        writer.writeEnumValue<DetectionType>("detection_type", this.detection_type);
        writer.writeStringValue("href", this.href);
        writer.writeStringValue("id", this.id);
        writer.writeStringValue("kind", this.kind);
        writer.writeStringValue("summary", this.summary);
        writer.writeObjectValue<LimitedSupportReasonTemplate>("template", this.template);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the summary property value. Summary of the reason.
     * @returns a string
     */
    public get summary() {
        return this._summary;
    };
    /**
     * Sets the summary property value. Summary of the reason.
     * @param value Value to set for the summary property.
     */
    public set summary(value: string | undefined) {
        this._summary = value;
    };
    /**
     * Gets the template property value. A template for cluster limited support reason.
     * @returns a LimitedSupportReasonTemplate
     */
    public get template() {
        return this._template;
    };
    /**
     * Sets the template property value. A template for cluster limited support reason.
     * @param value Value to set for the template property.
     */
    public set template(value: LimitedSupportReasonTemplate | undefined) {
        this._template = value;
    };
}
