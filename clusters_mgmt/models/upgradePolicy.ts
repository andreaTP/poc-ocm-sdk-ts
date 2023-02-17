import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Representation of an upgrade policy that can be set for a cluster.
 */
export class UpgradePolicy implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Cluster ID this upgrade policy is defined for. */
    private _cluster_id?: string | undefined;
    /** Indicates if minor version upgrades are allowed for automatic upgrades (for manual it's always allowed). */
    private _enable_minor_version_upgrades?: boolean | undefined;
    /** Self link. */
    private _href?: string | undefined;
    /** Unique identifier of the object. */
    private _id?: string | undefined;
    /** Indicates the type of this object. Will be 'UpgradePolicy' if this is a complete object or 'UpgradePolicyLink' if it is just a link. */
    private _kind?: string | undefined;
    /** Next time the upgrade should run. */
    private _next_run?: Date | undefined;
    /** Schedule cron expression that defines automatic upgrade scheduling. */
    private _schedule?: string | undefined;
    /** Schedule type can be either "manual" (single execution) or "automatic" (re-occurring). */
    private _schedule_type?: string | undefined;
    /** Upgrade type specify the type of the upgrade. Can be "OSD" or "CVE". */
    private _upgrade_type?: string | undefined;
    /** Version is the desired upgrade version. */
    private _version?: string | undefined;
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
     * Gets the cluster_id property value. Cluster ID this upgrade policy is defined for.
     * @returns a string
     */
    public get cluster_id() {
        return this._cluster_id;
    };
    /**
     * Sets the cluster_id property value. Cluster ID this upgrade policy is defined for.
     * @param value Value to set for the cluster_id property.
     */
    public set cluster_id(value: string | undefined) {
        this._cluster_id = value;
    };
    /**
     * Instantiates a new UpgradePolicy and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the enable_minor_version_upgrades property value. Indicates if minor version upgrades are allowed for automatic upgrades (for manual it's always allowed).
     * @returns a boolean
     */
    public get enable_minor_version_upgrades() {
        return this._enable_minor_version_upgrades;
    };
    /**
     * Sets the enable_minor_version_upgrades property value. Indicates if minor version upgrades are allowed for automatic upgrades (for manual it's always allowed).
     * @param value Value to set for the enable_minor_version_upgrades property.
     */
    public set enable_minor_version_upgrades(value: boolean | undefined) {
        this._enable_minor_version_upgrades = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "cluster_id": n => { this.cluster_id = n.getStringValue(); },
            "enable_minor_version_upgrades": n => { this.enable_minor_version_upgrades = n.getBooleanValue(); },
            "href": n => { this.href = n.getStringValue(); },
            "id": n => { this.id = n.getStringValue(); },
            "kind": n => { this.kind = n.getStringValue(); },
            "next_run": n => { this.next_run = n.getDateValue(); },
            "schedule": n => { this.schedule = n.getStringValue(); },
            "schedule_type": n => { this.schedule_type = n.getStringValue(); },
            "upgrade_type": n => { this.upgrade_type = n.getStringValue(); },
            "version": n => { this.version = n.getStringValue(); },
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
     * Gets the kind property value. Indicates the type of this object. Will be 'UpgradePolicy' if this is a complete object or 'UpgradePolicyLink' if it is just a link.
     * @returns a string
     */
    public get kind() {
        return this._kind;
    };
    /**
     * Sets the kind property value. Indicates the type of this object. Will be 'UpgradePolicy' if this is a complete object or 'UpgradePolicyLink' if it is just a link.
     * @param value Value to set for the kind property.
     */
    public set kind(value: string | undefined) {
        this._kind = value;
    };
    /**
     * Gets the next_run property value. Next time the upgrade should run.
     * @returns a Date
     */
    public get next_run() {
        return this._next_run;
    };
    /**
     * Sets the next_run property value. Next time the upgrade should run.
     * @param value Value to set for the next_run property.
     */
    public set next_run(value: Date | undefined) {
        this._next_run = value;
    };
    /**
     * Gets the schedule property value. Schedule cron expression that defines automatic upgrade scheduling.
     * @returns a string
     */
    public get schedule() {
        return this._schedule;
    };
    /**
     * Sets the schedule property value. Schedule cron expression that defines automatic upgrade scheduling.
     * @param value Value to set for the schedule property.
     */
    public set schedule(value: string | undefined) {
        this._schedule = value;
    };
    /**
     * Gets the schedule_type property value. Schedule type can be either "manual" (single execution) or "automatic" (re-occurring).
     * @returns a string
     */
    public get schedule_type() {
        return this._schedule_type;
    };
    /**
     * Sets the schedule_type property value. Schedule type can be either "manual" (single execution) or "automatic" (re-occurring).
     * @param value Value to set for the schedule_type property.
     */
    public set schedule_type(value: string | undefined) {
        this._schedule_type = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("cluster_id", this.cluster_id);
        writer.writeBooleanValue("enable_minor_version_upgrades", this.enable_minor_version_upgrades);
        writer.writeStringValue("href", this.href);
        writer.writeStringValue("id", this.id);
        writer.writeStringValue("kind", this.kind);
        writer.writeDateValue("next_run", this.next_run);
        writer.writeStringValue("schedule", this.schedule);
        writer.writeStringValue("schedule_type", this.schedule_type);
        writer.writeStringValue("upgrade_type", this.upgrade_type);
        writer.writeStringValue("version", this.version);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the upgrade_type property value. Upgrade type specify the type of the upgrade. Can be "OSD" or "CVE".
     * @returns a string
     */
    public get upgrade_type() {
        return this._upgrade_type;
    };
    /**
     * Sets the upgrade_type property value. Upgrade type specify the type of the upgrade. Can be "OSD" or "CVE".
     * @param value Value to set for the upgrade_type property.
     */
    public set upgrade_type(value: string | undefined) {
        this._upgrade_type = value;
    };
    /**
     * Gets the version property value. Version is the desired upgrade version.
     * @returns a string
     */
    public get version() {
        return this._version;
    };
    /**
     * Sets the version property value. Version is the desired upgrade version.
     * @param value Value to set for the version property.
     */
    public set version(value: string | undefined) {
        this._version = value;
    };
}
