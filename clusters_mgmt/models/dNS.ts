import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * DNS settings of the cluster.
 */
export class DNS implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Base DNS domain of the cluster.During the installation of the cluster it is necessary to create multiple DNS records.They will be created as sub-domains of this domain. For example, if the name of thecluster is `mycluster` and the base domain is `example.com` then the following DNSrecords will be created:```mycluster-api.example.commycluster-etcd-0.example.commycluster-etcd-1.example.commycluster-etcd-3.example.com```The exact number, type and names of the created DNS record depends on the characteristicsof the cluster, and may be different for different versions of _OpenShift_. Please don'trely on them. For example, to find what is the URL of the Kubernetes API server of thecluster don't assume that it will be `mycluster-api.example.com`. Instead of that usethis API to retrieve the description of the cluster, and get it from the `api.url`attribute. For example, if the identifier of the cluster is `123` send a request likethis:```httpGET /api/clusters_mgmt/v1/clusters/123 HTTP/1.1```That will return a response like this, including the `api.url` attribute:```json{    "kind": "Cluster",    "id": "123",    "href": "/api/clusters_mgmt/v1/clusters/123",        "api": {        "url": "https://mycluster-api.example.com:6443"    },    ...}```When the cluster is created in Amazon Web Services it is necessary to create this baseDNS domain in advance, using AWS Route53 (https://console.aws.amazon.com/route53). */
    private _base_domain?: string | undefined;
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
     * Gets the base_domain property value. Base DNS domain of the cluster.During the installation of the cluster it is necessary to create multiple DNS records.They will be created as sub-domains of this domain. For example, if the name of thecluster is `mycluster` and the base domain is `example.com` then the following DNSrecords will be created:```mycluster-api.example.commycluster-etcd-0.example.commycluster-etcd-1.example.commycluster-etcd-3.example.com```The exact number, type and names of the created DNS record depends on the characteristicsof the cluster, and may be different for different versions of _OpenShift_. Please don'trely on them. For example, to find what is the URL of the Kubernetes API server of thecluster don't assume that it will be `mycluster-api.example.com`. Instead of that usethis API to retrieve the description of the cluster, and get it from the `api.url`attribute. For example, if the identifier of the cluster is `123` send a request likethis:```httpGET /api/clusters_mgmt/v1/clusters/123 HTTP/1.1```That will return a response like this, including the `api.url` attribute:```json{    "kind": "Cluster",    "id": "123",    "href": "/api/clusters_mgmt/v1/clusters/123",        "api": {        "url": "https://mycluster-api.example.com:6443"    },    ...}```When the cluster is created in Amazon Web Services it is necessary to create this baseDNS domain in advance, using AWS Route53 (https://console.aws.amazon.com/route53).
     * @returns a string
     */
    public get base_domain() {
        return this._base_domain;
    };
    /**
     * Sets the base_domain property value. Base DNS domain of the cluster.During the installation of the cluster it is necessary to create multiple DNS records.They will be created as sub-domains of this domain. For example, if the name of thecluster is `mycluster` and the base domain is `example.com` then the following DNSrecords will be created:```mycluster-api.example.commycluster-etcd-0.example.commycluster-etcd-1.example.commycluster-etcd-3.example.com```The exact number, type and names of the created DNS record depends on the characteristicsof the cluster, and may be different for different versions of _OpenShift_. Please don'trely on them. For example, to find what is the URL of the Kubernetes API server of thecluster don't assume that it will be `mycluster-api.example.com`. Instead of that usethis API to retrieve the description of the cluster, and get it from the `api.url`attribute. For example, if the identifier of the cluster is `123` send a request likethis:```httpGET /api/clusters_mgmt/v1/clusters/123 HTTP/1.1```That will return a response like this, including the `api.url` attribute:```json{    "kind": "Cluster",    "id": "123",    "href": "/api/clusters_mgmt/v1/clusters/123",        "api": {        "url": "https://mycluster-api.example.com:6443"    },    ...}```When the cluster is created in Amazon Web Services it is necessary to create this baseDNS domain in advance, using AWS Route53 (https://console.aws.amazon.com/route53).
     * @param value Value to set for the base_domain property.
     */
    public set base_domain(value: string | undefined) {
        this._base_domain = value;
    };
    /**
     * Instantiates a new DNS and sets the default values.
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
            "base_domain": n => { this.base_domain = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("base_domain", this.base_domain);
        writer.writeAdditionalData(this.additionalData);
    };
}
