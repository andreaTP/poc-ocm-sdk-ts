import {BillingModel} from './billingModel';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DeletedSubscription implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The billing_expiration_date property */
    private _billing_expiration_date?: Date | undefined;
    /** The billing_marketplace_account property */
    private _billing_marketplace_account?: string | undefined;
    /** The cloud_account_id property */
    private _cloud_account_id?: string | undefined;
    /** The cloud_provider_id property */
    private _cloud_provider_id?: string | undefined;
    /** Billing model for subscripiton and reserved_resource resources. */
    private _cluster_billing_model?: BillingModel | undefined;
    /** The cluster_id property */
    private _cluster_id?: string | undefined;
    /** The console_url property */
    private _console_url?: string | undefined;
    /** The consumer_uuid property */
    private _consumer_uuid?: string | undefined;
    /** The cpu_total property */
    private _cpu_total?: number | undefined;
    /** The created_at property */
    private _created_at?: Date | undefined;
    /** The creator_id property */
    private _creator_id?: string | undefined;
    /** The display_name property */
    private _display_name?: string | undefined;
    /** The external_cluster_id property */
    private _external_cluster_id?: string | undefined;
    /** Self link. */
    private _href?: string | undefined;
    /** Unique identifier of the object. */
    private _id?: string | undefined;
    /** Indicates the type of this object. Will be 'DeletedSubscription' if this is a complete object or 'DeletedSubscriptionLink' if it is just a link. */
    private _kind?: string | undefined;
    /** The last_reconcile_date property */
    private _last_reconcile_date?: Date | undefined;
    /** The last_released_at property */
    private _last_released_at?: Date | undefined;
    /** The last_telemetry_date property */
    private _last_telemetry_date?: Date | undefined;
    /** The managed property */
    private _managed?: boolean | undefined;
    /** The metrics property */
    private _metrics?: string | undefined;
    /** The organization_id property */
    private _organization_id?: string | undefined;
    /** The plan_id property */
    private _plan_id?: string | undefined;
    /** The product_bundle property */
    private _product_bundle?: string | undefined;
    /** The provenance property */
    private _provenance?: string | undefined;
    /** The query_timestamp property */
    private _query_timestamp?: Date | undefined;
    /** The region_id property */
    private _region_id?: string | undefined;
    /** The released property */
    private _released?: boolean | undefined;
    /** The service_level property */
    private _service_level?: string | undefined;
    /** The socket_total property */
    private _socket_total?: number | undefined;
    /** The status property */
    private _status?: string | undefined;
    /** The support_level property */
    private _support_level?: string | undefined;
    /** The system_units property */
    private _system_units?: string | undefined;
    /** The trial_end_date property */
    private _trial_end_date?: Date | undefined;
    /** The usage property */
    private _usage?: string | undefined;
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
     * Gets the billing_expiration_date property value. The billing_expiration_date property
     * @returns a Date
     */
    public get billing_expiration_date() {
        return this._billing_expiration_date;
    };
    /**
     * Sets the billing_expiration_date property value. The billing_expiration_date property
     * @param value Value to set for the billing_expiration_date property.
     */
    public set billing_expiration_date(value: Date | undefined) {
        this._billing_expiration_date = value;
    };
    /**
     * Gets the billing_marketplace_account property value. The billing_marketplace_account property
     * @returns a string
     */
    public get billing_marketplace_account() {
        return this._billing_marketplace_account;
    };
    /**
     * Sets the billing_marketplace_account property value. The billing_marketplace_account property
     * @param value Value to set for the billing_marketplace_account property.
     */
    public set billing_marketplace_account(value: string | undefined) {
        this._billing_marketplace_account = value;
    };
    /**
     * Gets the cloud_account_id property value. The cloud_account_id property
     * @returns a string
     */
    public get cloud_account_id() {
        return this._cloud_account_id;
    };
    /**
     * Sets the cloud_account_id property value. The cloud_account_id property
     * @param value Value to set for the cloud_account_id property.
     */
    public set cloud_account_id(value: string | undefined) {
        this._cloud_account_id = value;
    };
    /**
     * Gets the cloud_provider_id property value. The cloud_provider_id property
     * @returns a string
     */
    public get cloud_provider_id() {
        return this._cloud_provider_id;
    };
    /**
     * Sets the cloud_provider_id property value. The cloud_provider_id property
     * @param value Value to set for the cloud_provider_id property.
     */
    public set cloud_provider_id(value: string | undefined) {
        this._cloud_provider_id = value;
    };
    /**
     * Gets the cluster_billing_model property value. Billing model for subscripiton and reserved_resource resources.
     * @returns a BillingModel
     */
    public get cluster_billing_model() {
        return this._cluster_billing_model;
    };
    /**
     * Sets the cluster_billing_model property value. Billing model for subscripiton and reserved_resource resources.
     * @param value Value to set for the cluster_billing_model property.
     */
    public set cluster_billing_model(value: BillingModel | undefined) {
        this._cluster_billing_model = value;
    };
    /**
     * Gets the cluster_id property value. The cluster_id property
     * @returns a string
     */
    public get cluster_id() {
        return this._cluster_id;
    };
    /**
     * Sets the cluster_id property value. The cluster_id property
     * @param value Value to set for the cluster_id property.
     */
    public set cluster_id(value: string | undefined) {
        this._cluster_id = value;
    };
    /**
     * Gets the console_url property value. The console_url property
     * @returns a string
     */
    public get console_url() {
        return this._console_url;
    };
    /**
     * Sets the console_url property value. The console_url property
     * @param value Value to set for the console_url property.
     */
    public set console_url(value: string | undefined) {
        this._console_url = value;
    };
    /**
     * Instantiates a new DeletedSubscription and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the consumer_uuid property value. The consumer_uuid property
     * @returns a string
     */
    public get consumer_uuid() {
        return this._consumer_uuid;
    };
    /**
     * Sets the consumer_uuid property value. The consumer_uuid property
     * @param value Value to set for the consumer_uuid property.
     */
    public set consumer_uuid(value: string | undefined) {
        this._consumer_uuid = value;
    };
    /**
     * Gets the cpu_total property value. The cpu_total property
     * @returns a integer
     */
    public get cpu_total() {
        return this._cpu_total;
    };
    /**
     * Sets the cpu_total property value. The cpu_total property
     * @param value Value to set for the cpu_total property.
     */
    public set cpu_total(value: number | undefined) {
        this._cpu_total = value;
    };
    /**
     * Gets the created_at property value. The created_at property
     * @returns a Date
     */
    public get created_at() {
        return this._created_at;
    };
    /**
     * Sets the created_at property value. The created_at property
     * @param value Value to set for the created_at property.
     */
    public set created_at(value: Date | undefined) {
        this._created_at = value;
    };
    /**
     * Gets the creator_id property value. The creator_id property
     * @returns a string
     */
    public get creator_id() {
        return this._creator_id;
    };
    /**
     * Sets the creator_id property value. The creator_id property
     * @param value Value to set for the creator_id property.
     */
    public set creator_id(value: string | undefined) {
        this._creator_id = value;
    };
    /**
     * Gets the display_name property value. The display_name property
     * @returns a string
     */
    public get display_name() {
        return this._display_name;
    };
    /**
     * Sets the display_name property value. The display_name property
     * @param value Value to set for the display_name property.
     */
    public set display_name(value: string | undefined) {
        this._display_name = value;
    };
    /**
     * Gets the external_cluster_id property value. The external_cluster_id property
     * @returns a string
     */
    public get external_cluster_id() {
        return this._external_cluster_id;
    };
    /**
     * Sets the external_cluster_id property value. The external_cluster_id property
     * @param value Value to set for the external_cluster_id property.
     */
    public set external_cluster_id(value: string | undefined) {
        this._external_cluster_id = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "billing_expiration_date": n => { this.billing_expiration_date = n.getDateValue(); },
            "billing_marketplace_account": n => { this.billing_marketplace_account = n.getStringValue(); },
            "cloud_account_id": n => { this.cloud_account_id = n.getStringValue(); },
            "cloud_provider_id": n => { this.cloud_provider_id = n.getStringValue(); },
            "cluster_billing_model": n => { this.cluster_billing_model = n.getEnumValue<BillingModel>(BillingModel); },
            "cluster_id": n => { this.cluster_id = n.getStringValue(); },
            "console_url": n => { this.console_url = n.getStringValue(); },
            "consumer_uuid": n => { this.consumer_uuid = n.getStringValue(); },
            "cpu_total": n => { this.cpu_total = n.getNumberValue(); },
            "created_at": n => { this.created_at = n.getDateValue(); },
            "creator_id": n => { this.creator_id = n.getStringValue(); },
            "display_name": n => { this.display_name = n.getStringValue(); },
            "external_cluster_id": n => { this.external_cluster_id = n.getStringValue(); },
            "href": n => { this.href = n.getStringValue(); },
            "id": n => { this.id = n.getStringValue(); },
            "kind": n => { this.kind = n.getStringValue(); },
            "last_reconcile_date": n => { this.last_reconcile_date = n.getDateValue(); },
            "last_released_at": n => { this.last_released_at = n.getDateValue(); },
            "last_telemetry_date": n => { this.last_telemetry_date = n.getDateValue(); },
            "managed": n => { this.managed = n.getBooleanValue(); },
            "metrics": n => { this.metrics = n.getStringValue(); },
            "organization_id": n => { this.organization_id = n.getStringValue(); },
            "plan_id": n => { this.plan_id = n.getStringValue(); },
            "product_bundle": n => { this.product_bundle = n.getStringValue(); },
            "provenance": n => { this.provenance = n.getStringValue(); },
            "query_timestamp": n => { this.query_timestamp = n.getDateValue(); },
            "region_id": n => { this.region_id = n.getStringValue(); },
            "released": n => { this.released = n.getBooleanValue(); },
            "service_level": n => { this.service_level = n.getStringValue(); },
            "socket_total": n => { this.socket_total = n.getNumberValue(); },
            "status": n => { this.status = n.getStringValue(); },
            "support_level": n => { this.support_level = n.getStringValue(); },
            "system_units": n => { this.system_units = n.getStringValue(); },
            "trial_end_date": n => { this.trial_end_date = n.getDateValue(); },
            "usage": n => { this.usage = n.getStringValue(); },
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
     * Gets the kind property value. Indicates the type of this object. Will be 'DeletedSubscription' if this is a complete object or 'DeletedSubscriptionLink' if it is just a link.
     * @returns a string
     */
    public get kind() {
        return this._kind;
    };
    /**
     * Sets the kind property value. Indicates the type of this object. Will be 'DeletedSubscription' if this is a complete object or 'DeletedSubscriptionLink' if it is just a link.
     * @param value Value to set for the kind property.
     */
    public set kind(value: string | undefined) {
        this._kind = value;
    };
    /**
     * Gets the last_reconcile_date property value. The last_reconcile_date property
     * @returns a Date
     */
    public get last_reconcile_date() {
        return this._last_reconcile_date;
    };
    /**
     * Sets the last_reconcile_date property value. The last_reconcile_date property
     * @param value Value to set for the last_reconcile_date property.
     */
    public set last_reconcile_date(value: Date | undefined) {
        this._last_reconcile_date = value;
    };
    /**
     * Gets the last_released_at property value. The last_released_at property
     * @returns a Date
     */
    public get last_released_at() {
        return this._last_released_at;
    };
    /**
     * Sets the last_released_at property value. The last_released_at property
     * @param value Value to set for the last_released_at property.
     */
    public set last_released_at(value: Date | undefined) {
        this._last_released_at = value;
    };
    /**
     * Gets the last_telemetry_date property value. The last_telemetry_date property
     * @returns a Date
     */
    public get last_telemetry_date() {
        return this._last_telemetry_date;
    };
    /**
     * Sets the last_telemetry_date property value. The last_telemetry_date property
     * @param value Value to set for the last_telemetry_date property.
     */
    public set last_telemetry_date(value: Date | undefined) {
        this._last_telemetry_date = value;
    };
    /**
     * Gets the managed property value. The managed property
     * @returns a boolean
     */
    public get managed() {
        return this._managed;
    };
    /**
     * Sets the managed property value. The managed property
     * @param value Value to set for the managed property.
     */
    public set managed(value: boolean | undefined) {
        this._managed = value;
    };
    /**
     * Gets the metrics property value. The metrics property
     * @returns a string
     */
    public get metrics() {
        return this._metrics;
    };
    /**
     * Sets the metrics property value. The metrics property
     * @param value Value to set for the metrics property.
     */
    public set metrics(value: string | undefined) {
        this._metrics = value;
    };
    /**
     * Gets the organization_id property value. The organization_id property
     * @returns a string
     */
    public get organization_id() {
        return this._organization_id;
    };
    /**
     * Sets the organization_id property value. The organization_id property
     * @param value Value to set for the organization_id property.
     */
    public set organization_id(value: string | undefined) {
        this._organization_id = value;
    };
    /**
     * Gets the plan_id property value. The plan_id property
     * @returns a string
     */
    public get plan_id() {
        return this._plan_id;
    };
    /**
     * Sets the plan_id property value. The plan_id property
     * @param value Value to set for the plan_id property.
     */
    public set plan_id(value: string | undefined) {
        this._plan_id = value;
    };
    /**
     * Gets the product_bundle property value. The product_bundle property
     * @returns a string
     */
    public get product_bundle() {
        return this._product_bundle;
    };
    /**
     * Sets the product_bundle property value. The product_bundle property
     * @param value Value to set for the product_bundle property.
     */
    public set product_bundle(value: string | undefined) {
        this._product_bundle = value;
    };
    /**
     * Gets the provenance property value. The provenance property
     * @returns a string
     */
    public get provenance() {
        return this._provenance;
    };
    /**
     * Sets the provenance property value. The provenance property
     * @param value Value to set for the provenance property.
     */
    public set provenance(value: string | undefined) {
        this._provenance = value;
    };
    /**
     * Gets the query_timestamp property value. The query_timestamp property
     * @returns a Date
     */
    public get query_timestamp() {
        return this._query_timestamp;
    };
    /**
     * Sets the query_timestamp property value. The query_timestamp property
     * @param value Value to set for the query_timestamp property.
     */
    public set query_timestamp(value: Date | undefined) {
        this._query_timestamp = value;
    };
    /**
     * Gets the region_id property value. The region_id property
     * @returns a string
     */
    public get region_id() {
        return this._region_id;
    };
    /**
     * Sets the region_id property value. The region_id property
     * @param value Value to set for the region_id property.
     */
    public set region_id(value: string | undefined) {
        this._region_id = value;
    };
    /**
     * Gets the released property value. The released property
     * @returns a boolean
     */
    public get released() {
        return this._released;
    };
    /**
     * Sets the released property value. The released property
     * @param value Value to set for the released property.
     */
    public set released(value: boolean | undefined) {
        this._released = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeDateValue("billing_expiration_date", this.billing_expiration_date);
        writer.writeStringValue("billing_marketplace_account", this.billing_marketplace_account);
        writer.writeStringValue("cloud_account_id", this.cloud_account_id);
        writer.writeStringValue("cloud_provider_id", this.cloud_provider_id);
        writer.writeEnumValue<BillingModel>("cluster_billing_model", this.cluster_billing_model);
        writer.writeStringValue("cluster_id", this.cluster_id);
        writer.writeStringValue("console_url", this.console_url);
        writer.writeStringValue("consumer_uuid", this.consumer_uuid);
        writer.writeNumberValue("cpu_total", this.cpu_total);
        writer.writeDateValue("created_at", this.created_at);
        writer.writeStringValue("creator_id", this.creator_id);
        writer.writeStringValue("display_name", this.display_name);
        writer.writeStringValue("external_cluster_id", this.external_cluster_id);
        writer.writeStringValue("href", this.href);
        writer.writeStringValue("id", this.id);
        writer.writeStringValue("kind", this.kind);
        writer.writeDateValue("last_reconcile_date", this.last_reconcile_date);
        writer.writeDateValue("last_released_at", this.last_released_at);
        writer.writeDateValue("last_telemetry_date", this.last_telemetry_date);
        writer.writeBooleanValue("managed", this.managed);
        writer.writeStringValue("metrics", this.metrics);
        writer.writeStringValue("organization_id", this.organization_id);
        writer.writeStringValue("plan_id", this.plan_id);
        writer.writeStringValue("product_bundle", this.product_bundle);
        writer.writeStringValue("provenance", this.provenance);
        writer.writeDateValue("query_timestamp", this.query_timestamp);
        writer.writeStringValue("region_id", this.region_id);
        writer.writeBooleanValue("released", this.released);
        writer.writeStringValue("service_level", this.service_level);
        writer.writeNumberValue("socket_total", this.socket_total);
        writer.writeStringValue("status", this.status);
        writer.writeStringValue("support_level", this.support_level);
        writer.writeStringValue("system_units", this.system_units);
        writer.writeDateValue("trial_end_date", this.trial_end_date);
        writer.writeStringValue("usage", this.usage);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the service_level property value. The service_level property
     * @returns a string
     */
    public get service_level() {
        return this._service_level;
    };
    /**
     * Sets the service_level property value. The service_level property
     * @param value Value to set for the service_level property.
     */
    public set service_level(value: string | undefined) {
        this._service_level = value;
    };
    /**
     * Gets the socket_total property value. The socket_total property
     * @returns a integer
     */
    public get socket_total() {
        return this._socket_total;
    };
    /**
     * Sets the socket_total property value. The socket_total property
     * @param value Value to set for the socket_total property.
     */
    public set socket_total(value: number | undefined) {
        this._socket_total = value;
    };
    /**
     * Gets the status property value. The status property
     * @returns a string
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. The status property
     * @param value Value to set for the status property.
     */
    public set status(value: string | undefined) {
        this._status = value;
    };
    /**
     * Gets the support_level property value. The support_level property
     * @returns a string
     */
    public get support_level() {
        return this._support_level;
    };
    /**
     * Sets the support_level property value. The support_level property
     * @param value Value to set for the support_level property.
     */
    public set support_level(value: string | undefined) {
        this._support_level = value;
    };
    /**
     * Gets the system_units property value. The system_units property
     * @returns a string
     */
    public get system_units() {
        return this._system_units;
    };
    /**
     * Sets the system_units property value. The system_units property
     * @param value Value to set for the system_units property.
     */
    public set system_units(value: string | undefined) {
        this._system_units = value;
    };
    /**
     * Gets the trial_end_date property value. The trial_end_date property
     * @returns a Date
     */
    public get trial_end_date() {
        return this._trial_end_date;
    };
    /**
     * Sets the trial_end_date property value. The trial_end_date property
     * @param value Value to set for the trial_end_date property.
     */
    public set trial_end_date(value: Date | undefined) {
        this._trial_end_date = value;
    };
    /**
     * Gets the usage property value. The usage property
     * @returns a string
     */
    public get usage() {
        return this._usage;
    };
    /**
     * Sets the usage property value. The usage property
     * @param value Value to set for the usage property.
     */
    public set usage(value: string | undefined) {
        this._usage = value;
    };
}
