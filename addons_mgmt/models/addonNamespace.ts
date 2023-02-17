import {createAddonNamespace_annotationsFromDiscriminatorValue} from './createAddonNamespace_annotationsFromDiscriminatorValue';
import {createAddonNamespace_labelsFromDiscriminatorValue} from './createAddonNamespace_labelsFromDiscriminatorValue';
import {AddonNamespace_annotations, AddonNamespace_labels} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Representation of an addon namespace object.
 */
export class AddonNamespace implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Annotations to be included in the addon namespace */
    private _annotations?: AddonNamespace_annotations | undefined;
    /** Enabled shows if this namespace object is in use */
    private _enabled?: boolean | undefined;
    /** Labels to be included in the addon namespace */
    private _labels?: AddonNamespace_labels | undefined;
    /** Name of the namespace */
    private _name?: string | undefined;
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
     * Gets the annotations property value. Annotations to be included in the addon namespace
     * @returns a AddonNamespace_annotations
     */
    public get annotations() {
        return this._annotations;
    };
    /**
     * Sets the annotations property value. Annotations to be included in the addon namespace
     * @param value Value to set for the annotations property.
     */
    public set annotations(value: AddonNamespace_annotations | undefined) {
        this._annotations = value;
    };
    /**
     * Instantiates a new AddonNamespace and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the enabled property value. Enabled shows if this namespace object is in use
     * @returns a boolean
     */
    public get enabled() {
        return this._enabled;
    };
    /**
     * Sets the enabled property value. Enabled shows if this namespace object is in use
     * @param value Value to set for the enabled property.
     */
    public set enabled(value: boolean | undefined) {
        this._enabled = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "annotations": n => { this.annotations = n.getObjectValue<AddonNamespace_annotations>(createAddonNamespace_annotationsFromDiscriminatorValue); },
            "enabled": n => { this.enabled = n.getBooleanValue(); },
            "labels": n => { this.labels = n.getObjectValue<AddonNamespace_labels>(createAddonNamespace_labelsFromDiscriminatorValue); },
            "name": n => { this.name = n.getStringValue(); },
        };
    };
    /**
     * Gets the labels property value. Labels to be included in the addon namespace
     * @returns a AddonNamespace_labels
     */
    public get labels() {
        return this._labels;
    };
    /**
     * Sets the labels property value. Labels to be included in the addon namespace
     * @param value Value to set for the labels property.
     */
    public set labels(value: AddonNamespace_labels | undefined) {
        this._labels = value;
    };
    /**
     * Gets the name property value. Name of the namespace
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. Name of the namespace
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<AddonNamespace_annotations>("annotations", this.annotations);
        writer.writeBooleanValue("enabled", this.enabled);
        writer.writeObjectValue<AddonNamespace_labels>("labels", this.labels);
        writer.writeStringValue("name", this.name);
        writer.writeAdditionalData(this.additionalData);
    };
}
