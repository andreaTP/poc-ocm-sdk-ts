import {createLabelFromDiscriminatorValue} from './createLabelFromDiscriminatorValue';
import {createManifestFromDiscriminatorValue} from './createManifestFromDiscriminatorValue';
import {createSyncsetFromDiscriminatorValue} from './createSyncsetFromDiscriminatorValue';
import {Label, Manifest, Syncset} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Representation of cluster external configuration.
 */
export class ExternalConfiguration implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** list of labels externally configured on the clusterdeployment. */
    private _labels?: Label[] | undefined;
    /** list of manifest externally configured for a hosted cluster. */
    private _manifests?: Manifest[] | undefined;
    /** list of syncsets externally configured on the cluster. */
    private _syncsets?: Syncset[] | undefined;
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
     * Instantiates a new ExternalConfiguration and sets the default values.
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
            "labels": n => { this.labels = n.getCollectionOfObjectValues<Label>(createLabelFromDiscriminatorValue); },
            "manifests": n => { this.manifests = n.getCollectionOfObjectValues<Manifest>(createManifestFromDiscriminatorValue); },
            "syncsets": n => { this.syncsets = n.getCollectionOfObjectValues<Syncset>(createSyncsetFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the labels property value. list of labels externally configured on the clusterdeployment.
     * @returns a Label
     */
    public get labels() {
        return this._labels;
    };
    /**
     * Sets the labels property value. list of labels externally configured on the clusterdeployment.
     * @param value Value to set for the labels property.
     */
    public set labels(value: Label[] | undefined) {
        this._labels = value;
    };
    /**
     * Gets the manifests property value. list of manifest externally configured for a hosted cluster.
     * @returns a Manifest
     */
    public get manifests() {
        return this._manifests;
    };
    /**
     * Sets the manifests property value. list of manifest externally configured for a hosted cluster.
     * @param value Value to set for the manifests property.
     */
    public set manifests(value: Manifest[] | undefined) {
        this._manifests = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfObjectValues<Label>("labels", this.labels);
        writer.writeCollectionOfObjectValues<Manifest>("manifests", this.manifests);
        writer.writeCollectionOfObjectValues<Syncset>("syncsets", this.syncsets);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the syncsets property value. list of syncsets externally configured on the cluster.
     * @returns a Syncset
     */
    public get syncsets() {
        return this._syncsets;
    };
    /**
     * Sets the syncsets property value. list of syncsets externally configured on the cluster.
     * @param value Value to set for the syncsets property.
     */
    public set syncsets(value: Syncset[] | undefined) {
        this._syncsets = value;
    };
}
