import {AWSInfrastructureAccessRoleGrantState} from './aWSInfrastructureAccessRoleGrantState';
import {createAWSInfrastructureAccessRoleFromDiscriminatorValue} from './createAWSInfrastructureAccessRoleFromDiscriminatorValue';
import {AWSInfrastructureAccessRole} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Representation of an AWS infrastructure access role grant.
 */
export class AWSInfrastructureAccessRoleGrant implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** URL to switch to the role in AWS console. */
    private _console_url?: string | undefined;
    /** Self link. */
    private _href?: string | undefined;
    /** Unique identifier of the object. */
    private _id?: string | undefined;
    /** Indicates the type of this object. Will be 'AWSInfrastructureAccessRoleGrant' if this is a complete object or 'AWSInfrastructureAccessRoleGrantLink' if it is just a link. */
    private _kind?: string | undefined;
    /** A set of acces permissions for AWS resources */
    private _role?: AWSInfrastructureAccessRole | undefined;
    /** State of an AWS infrastructure access role grant. */
    private _state?: AWSInfrastructureAccessRoleGrantState | undefined;
    /** Description of the state.Will be empty unless state is 'Failed'. */
    private _state_description?: string | undefined;
    /** The user AWS IAM ARN we want to grant the role. */
    private _user_arn?: string | undefined;
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
     * Gets the console_url property value. URL to switch to the role in AWS console.
     * @returns a string
     */
    public get console_url() {
        return this._console_url;
    };
    /**
     * Sets the console_url property value. URL to switch to the role in AWS console.
     * @param value Value to set for the console_url property.
     */
    public set console_url(value: string | undefined) {
        this._console_url = value;
    };
    /**
     * Instantiates a new AWSInfrastructureAccessRoleGrant and sets the default values.
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
            "console_url": n => { this.console_url = n.getStringValue(); },
            "href": n => { this.href = n.getStringValue(); },
            "id": n => { this.id = n.getStringValue(); },
            "kind": n => { this.kind = n.getStringValue(); },
            "role": n => { this.role = n.getObjectValue<AWSInfrastructureAccessRole>(createAWSInfrastructureAccessRoleFromDiscriminatorValue); },
            "state": n => { this.state = n.getEnumValue<AWSInfrastructureAccessRoleGrantState>(AWSInfrastructureAccessRoleGrantState); },
            "state_description": n => { this.state_description = n.getStringValue(); },
            "user_arn": n => { this.user_arn = n.getStringValue(); },
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
     * Gets the kind property value. Indicates the type of this object. Will be 'AWSInfrastructureAccessRoleGrant' if this is a complete object or 'AWSInfrastructureAccessRoleGrantLink' if it is just a link.
     * @returns a string
     */
    public get kind() {
        return this._kind;
    };
    /**
     * Sets the kind property value. Indicates the type of this object. Will be 'AWSInfrastructureAccessRoleGrant' if this is a complete object or 'AWSInfrastructureAccessRoleGrantLink' if it is just a link.
     * @param value Value to set for the kind property.
     */
    public set kind(value: string | undefined) {
        this._kind = value;
    };
    /**
     * Gets the role property value. A set of acces permissions for AWS resources
     * @returns a AWSInfrastructureAccessRole
     */
    public get role() {
        return this._role;
    };
    /**
     * Sets the role property value. A set of acces permissions for AWS resources
     * @param value Value to set for the role property.
     */
    public set role(value: AWSInfrastructureAccessRole | undefined) {
        this._role = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("console_url", this.console_url);
        writer.writeStringValue("href", this.href);
        writer.writeStringValue("id", this.id);
        writer.writeStringValue("kind", this.kind);
        writer.writeObjectValue<AWSInfrastructureAccessRole>("role", this.role);
        writer.writeEnumValue<AWSInfrastructureAccessRoleGrantState>("state", this.state);
        writer.writeStringValue("state_description", this.state_description);
        writer.writeStringValue("user_arn", this.user_arn);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the state property value. State of an AWS infrastructure access role grant.
     * @returns a AWSInfrastructureAccessRoleGrantState
     */
    public get state() {
        return this._state;
    };
    /**
     * Sets the state property value. State of an AWS infrastructure access role grant.
     * @param value Value to set for the state property.
     */
    public set state(value: AWSInfrastructureAccessRoleGrantState | undefined) {
        this._state = value;
    };
    /**
     * Gets the state_description property value. Description of the state.Will be empty unless state is 'Failed'.
     * @returns a string
     */
    public get state_description() {
        return this._state_description;
    };
    /**
     * Sets the state_description property value. Description of the state.Will be empty unless state is 'Failed'.
     * @param value Value to set for the state_description property.
     */
    public set state_description(value: string | undefined) {
        this._state_description = value;
    };
    /**
     * Gets the user_arn property value. The user AWS IAM ARN we want to grant the role.
     * @returns a string
     */
    public get user_arn() {
        return this._user_arn;
    };
    /**
     * Sets the user_arn property value. The user AWS IAM ARN we want to grant the role.
     * @param value Value to set for the user_arn property.
     */
    public set user_arn(value: string | undefined) {
        this._user_arn = value;
    };
}
