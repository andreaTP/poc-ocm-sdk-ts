import {createInstanceIAMRolesFromDiscriminatorValue} from './createInstanceIAMRolesFromDiscriminatorValue';
import {createOperatorIAMRoleFromDiscriminatorValue} from './createOperatorIAMRoleFromDiscriminatorValue';
import {InstanceIAMRoles, OperatorIAMRole} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Contains the necessary attributes to support role-based authentication on AWS.
 */
export class STS implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Contains the necessary attributes to support role-based authentication on AWS. */
    private _instance_iam_roles?: InstanceIAMRoles | undefined;
    /** URL of the location where OIDC configuration and keys are available */
    private _oidc_endpoint_url?: string | undefined;
    /** List of roles necessary to access the AWS resources of the various operators used during installation */
    private _operator_iam_roles?: OperatorIAMRole[] | undefined;
    /** The operator_role_prefix property */
    private _operator_role_prefix?: string | undefined;
    /** ARN of the AWS role to assume when installing the cluster */
    private _role_arn?: string | undefined;
    /** ARN of the AWS role used by SREs to access the cluster AWS account in order to provide support */
    private _support_role_arn?: string | undefined;
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
     * Instantiates a new STS and sets the default values.
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
            "instance_iam_roles": n => { this.instance_iam_roles = n.getObjectValue<InstanceIAMRoles>(createInstanceIAMRolesFromDiscriminatorValue); },
            "oidc_endpoint_url": n => { this.oidc_endpoint_url = n.getStringValue(); },
            "operator_iam_roles": n => { this.operator_iam_roles = n.getCollectionOfObjectValues<OperatorIAMRole>(createOperatorIAMRoleFromDiscriminatorValue); },
            "operator_role_prefix": n => { this.operator_role_prefix = n.getStringValue(); },
            "role_arn": n => { this.role_arn = n.getStringValue(); },
            "support_role_arn": n => { this.support_role_arn = n.getStringValue(); },
        };
    };
    /**
     * Gets the instance_iam_roles property value. Contains the necessary attributes to support role-based authentication on AWS.
     * @returns a InstanceIAMRoles
     */
    public get instance_iam_roles() {
        return this._instance_iam_roles;
    };
    /**
     * Sets the instance_iam_roles property value. Contains the necessary attributes to support role-based authentication on AWS.
     * @param value Value to set for the instance_iam_roles property.
     */
    public set instance_iam_roles(value: InstanceIAMRoles | undefined) {
        this._instance_iam_roles = value;
    };
    /**
     * Gets the oidc_endpoint_url property value. URL of the location where OIDC configuration and keys are available
     * @returns a string
     */
    public get oidc_endpoint_url() {
        return this._oidc_endpoint_url;
    };
    /**
     * Sets the oidc_endpoint_url property value. URL of the location where OIDC configuration and keys are available
     * @param value Value to set for the oidc_endpoint_url property.
     */
    public set oidc_endpoint_url(value: string | undefined) {
        this._oidc_endpoint_url = value;
    };
    /**
     * Gets the operator_iam_roles property value. List of roles necessary to access the AWS resources of the various operators used during installation
     * @returns a OperatorIAMRole
     */
    public get operator_iam_roles() {
        return this._operator_iam_roles;
    };
    /**
     * Sets the operator_iam_roles property value. List of roles necessary to access the AWS resources of the various operators used during installation
     * @param value Value to set for the operator_iam_roles property.
     */
    public set operator_iam_roles(value: OperatorIAMRole[] | undefined) {
        this._operator_iam_roles = value;
    };
    /**
     * Gets the operator_role_prefix property value. The operator_role_prefix property
     * @returns a string
     */
    public get operator_role_prefix() {
        return this._operator_role_prefix;
    };
    /**
     * Sets the operator_role_prefix property value. The operator_role_prefix property
     * @param value Value to set for the operator_role_prefix property.
     */
    public set operator_role_prefix(value: string | undefined) {
        this._operator_role_prefix = value;
    };
    /**
     * Gets the role_arn property value. ARN of the AWS role to assume when installing the cluster
     * @returns a string
     */
    public get role_arn() {
        return this._role_arn;
    };
    /**
     * Sets the role_arn property value. ARN of the AWS role to assume when installing the cluster
     * @param value Value to set for the role_arn property.
     */
    public set role_arn(value: string | undefined) {
        this._role_arn = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<InstanceIAMRoles>("instance_iam_roles", this.instance_iam_roles);
        writer.writeStringValue("oidc_endpoint_url", this.oidc_endpoint_url);
        writer.writeCollectionOfObjectValues<OperatorIAMRole>("operator_iam_roles", this.operator_iam_roles);
        writer.writeStringValue("operator_role_prefix", this.operator_role_prefix);
        writer.writeStringValue("role_arn", this.role_arn);
        writer.writeStringValue("support_role_arn", this.support_role_arn);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the support_role_arn property value. ARN of the AWS role used by SREs to access the cluster AWS account in order to provide support
     * @returns a string
     */
    public get support_role_arn() {
        return this._support_role_arn;
    };
    /**
     * Sets the support_role_arn property value. ARN of the AWS role used by SREs to access the cluster AWS account in order to provide support
     * @param value Value to set for the support_role_arn property.
     */
    public set support_role_arn(value: string | undefined) {
        this._support_role_arn = value;
    };
}
