import {Metadata} from '../../../models/';
import {createMetadataFromDiscriminatorValue} from '../../../models/createMetadataFromDiscriminatorValue';
import {Access_tokenRequestBuilder} from './access_token/access_tokenRequestBuilder';
import {AccountsRequestBuilder} from './accounts/accountsRequestBuilder';
import {WithAccount_ItemRequestBuilder} from './accounts/item/withAccount_ItemRequestBuilder';
import {CapabilitiesRequestBuilder} from './capabilities/capabilitiesRequestBuilder';
import {Cloud_resourcesRequestBuilder} from './cloud_resources/cloud_resourcesRequestBuilder';
import {WithCloud_resource_ItemRequestBuilder} from './cloud_resources/item/withCloud_resource_ItemRequestBuilder';
import {Cluster_authorizationsRequestBuilder} from './cluster_authorizations/cluster_authorizationsRequestBuilder';
import {Cluster_registrationsRequestBuilder} from './cluster_registrations/cluster_registrationsRequestBuilder';
import {Current_accessRequestBuilder} from './current_access/current_accessRequestBuilder';
import {WithRole_ItemRequestBuilder as Ia1872525c459ec198d887ad408ce90648d3f730b9624bcd15973bb0d7984039e} from './current_access/item/withRole_ItemRequestBuilder';
import {Current_accountRequestBuilder} from './current_account/current_accountRequestBuilder';
import {Deleted_subscriptionsRequestBuilder} from './deleted_subscriptions/deleted_subscriptionsRequestBuilder';
import {Feature_togglesRequestBuilder} from './feature_toggles/feature_togglesRequestBuilder';
import {WithFeature_toggle_ItemRequestBuilder} from './feature_toggles/item/withFeature_toggle_ItemRequestBuilder';
import {LabelsRequestBuilder} from './labels/labelsRequestBuilder';
import {NotifyRequestBuilder} from './notify/notifyRequestBuilder';
import {WithOrganization_ItemRequestBuilder} from './organizations/item/withOrganization_ItemRequestBuilder';
import {OrganizationsRequestBuilder} from './organizations/organizationsRequestBuilder';
import {WithPermission_ItemRequestBuilder} from './permissions/item/withPermission_ItemRequestBuilder';
import {PermissionsRequestBuilder} from './permissions/permissionsRequestBuilder';
import {WithPull_secret_ItemRequestBuilder} from './pull_secrets/item/withPull_secret_ItemRequestBuilder';
import {Pull_secretsRequestBuilder} from './pull_secrets/pull_secretsRequestBuilder';
import {WithRegistry_ItemRequestBuilder} from './registries/item/withRegistry_ItemRequestBuilder';
import {RegistriesRequestBuilder} from './registries/registriesRequestBuilder';
import {WithRegistry_credential_ItemRequestBuilder} from './registry_credentials/item/withRegistry_credential_ItemRequestBuilder';
import {Registry_credentialsRequestBuilder} from './registry_credentials/registry_credentialsRequestBuilder';
import {WithResource_quota_ItemRequestBuilder} from './resource_quota/item/withResource_quota_ItemRequestBuilder';
import {Resource_quotaRequestBuilder} from './resource_quota/resource_quotaRequestBuilder';
import {WithRole_binding_ItemRequestBuilder} from './role_bindings/item/withRole_binding_ItemRequestBuilder';
import {Role_bindingsRequestBuilder} from './role_bindings/role_bindingsRequestBuilder';
import {WithRole_ItemRequestBuilder as I1f8dee2187a0d0bb0d58fe5d237cde22f916596df740a1926e6fd3e55f400699} from './roles/item/withRole_ItemRequestBuilder';
import {RolesRequestBuilder} from './roles/rolesRequestBuilder';
import {WithSku_rule_ItemRequestBuilder} from './sku_rules/item/withSku_rule_ItemRequestBuilder';
import {Sku_rulesRequestBuilder} from './sku_rules/sku_rulesRequestBuilder';
import {WithSubscription_ItemRequestBuilder} from './subscriptions/item/withSubscription_ItemRequestBuilder';
import {SubscriptionsRequestBuilder} from './subscriptions/subscriptionsRequestBuilder';
import {WithSupport_case_ItemRequestBuilder} from './support_cases/item/withSupport_case_ItemRequestBuilder';
import {Support_casesRequestBuilder} from './support_cases/support_casesRequestBuilder';
import {Token_authorizationRequestBuilder} from './token_authorization/token_authorizationRequestBuilder';
import {V1RequestBuilderGetRequestConfiguration} from './v1RequestBuilderGetRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /api/accounts_mgmt/v1
 */
export class V1RequestBuilder {
    /** The access_token property */
    public get access_token(): Access_tokenRequestBuilder {
        return new Access_tokenRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The accounts property */
    public get accounts(): AccountsRequestBuilder {
        return new AccountsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The capabilities property */
    public get capabilities(): CapabilitiesRequestBuilder {
        return new CapabilitiesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The cloud_resources property */
    public get cloud_resources(): Cloud_resourcesRequestBuilder {
        return new Cloud_resourcesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The cluster_authorizations property */
    public get cluster_authorizations(): Cluster_authorizationsRequestBuilder {
        return new Cluster_authorizationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The cluster_registrations property */
    public get cluster_registrations(): Cluster_registrationsRequestBuilder {
        return new Cluster_registrationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The current_access property */
    public get current_access(): Current_accessRequestBuilder {
        return new Current_accessRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The current_account property */
    public get current_account(): Current_accountRequestBuilder {
        return new Current_accountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The deleted_subscriptions property */
    public get deleted_subscriptions(): Deleted_subscriptionsRequestBuilder {
        return new Deleted_subscriptionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The feature_toggles property */
    public get feature_toggles(): Feature_togglesRequestBuilder {
        return new Feature_togglesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The labels property */
    public get labels(): LabelsRequestBuilder {
        return new LabelsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The notify property */
    public get notify(): NotifyRequestBuilder {
        return new NotifyRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The organizations property */
    public get organizations(): OrganizationsRequestBuilder {
        return new OrganizationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private pathParameters: Record<string, unknown>;
    /** The permissions property */
    public get permissions(): PermissionsRequestBuilder {
        return new PermissionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The pull_secrets property */
    public get pull_secrets(): Pull_secretsRequestBuilder {
        return new Pull_secretsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The registries property */
    public get registries(): RegistriesRequestBuilder {
        return new RegistriesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The registry_credentials property */
    public get registry_credentials(): Registry_credentialsRequestBuilder {
        return new Registry_credentialsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The request adapter to use to execute the requests. */
    private requestAdapter: RequestAdapter;
    /** The resource_quota property */
    public get resource_quota(): Resource_quotaRequestBuilder {
        return new Resource_quotaRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The role_bindings property */
    public get role_bindings(): Role_bindingsRequestBuilder {
        return new Role_bindingsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The roles property */
    public get roles(): RolesRequestBuilder {
        return new RolesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The sku_rules property */
    public get sku_rules(): Sku_rulesRequestBuilder {
        return new Sku_rulesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The subscriptions property */
    public get subscriptions(): SubscriptionsRequestBuilder {
        return new SubscriptionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The support_cases property */
    public get support_cases(): Support_casesRequestBuilder {
        return new Support_casesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The token_authorization property */
    public get token_authorization(): Token_authorizationRequestBuilder {
        return new Token_authorizationRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private urlTemplate: string;
    /**
     * Gets an item from the ApiSdk.api.accounts_mgmt.v1.accounts.item collection
     * @param id Unique identifier of the item
     * @returns a WithAccount_ItemRequestBuilder
     */
    public accountsById(id: string) : WithAccount_ItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["account_id"] = id
        return new WithAccount_ItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.api.accounts_mgmt.v1.cloud_resources.item collection
     * @param id Unique identifier of the item
     * @returns a WithCloud_resource_ItemRequestBuilder
     */
    public cloud_resourcesById(id: string) : WithCloud_resource_ItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["cloud_resource_id"] = id
        return new WithCloud_resource_ItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new V1RequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/api/accounts_mgmt/v1";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Gets an item from the ApiSdk.api.accounts_mgmt.v1.current_access.item collection
     * @param id Unique identifier of the item
     * @returns a WithRole_ItemRequestBuilder
     */
    public current_accessById(id: string) : Ia1872525c459ec198d887ad408ce90648d3f730b9624bcd15973bb0d7984039e {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["role_id"] = id
        return new Ia1872525c459ec198d887ad408ce90648d3f730b9624bcd15973bb0d7984039e(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.api.accounts_mgmt.v1.feature_toggles.item collection
     * @param id Unique identifier of the item
     * @returns a WithFeature_toggle_ItemRequestBuilder
     */
    public feature_togglesById(id: string) : WithFeature_toggle_ItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["feature_toggle_id"] = id
        return new WithFeature_toggle_ItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Retrieves the version metadata.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Metadata
     */
    public get(requestConfiguration?: V1RequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Metadata | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<Metadata>(requestInfo, createMetadataFromDiscriminatorValue, responseHandler, undefined) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Gets an item from the ApiSdk.api.accounts_mgmt.v1.organizations.item collection
     * @param id Unique identifier of the item
     * @returns a WithOrganization_ItemRequestBuilder
     */
    public organizationsById(id: string) : WithOrganization_ItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["organization_id"] = id
        return new WithOrganization_ItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.api.accounts_mgmt.v1.permissions.item collection
     * @param id Unique identifier of the item
     * @returns a WithPermission_ItemRequestBuilder
     */
    public permissionsById(id: string) : WithPermission_ItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["permission_id"] = id
        return new WithPermission_ItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.api.accounts_mgmt.v1.pull_secrets.item collection
     * @param id Unique identifier of the item
     * @returns a WithPull_secret_ItemRequestBuilder
     */
    public pull_secretsById(id: string) : WithPull_secret_ItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["pull_secret_id"] = id
        return new WithPull_secret_ItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.api.accounts_mgmt.v1.registries.item collection
     * @param id Unique identifier of the item
     * @returns a WithRegistry_ItemRequestBuilder
     */
    public registriesById(id: string) : WithRegistry_ItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["registry_id"] = id
        return new WithRegistry_ItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.api.accounts_mgmt.v1.registry_credentials.item collection
     * @param id Unique identifier of the item
     * @returns a WithRegistry_credential_ItemRequestBuilder
     */
    public registry_credentialsById(id: string) : WithRegistry_credential_ItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["registry_credential_id"] = id
        return new WithRegistry_credential_ItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.api.accounts_mgmt.v1.resource_quota.item collection
     * @param id Unique identifier of the item
     * @returns a WithResource_quota_ItemRequestBuilder
     */
    public resource_quotaById(id: string) : WithResource_quota_ItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["resource_quota_id"] = id
        return new WithResource_quota_ItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.api.accounts_mgmt.v1.role_bindings.item collection
     * @param id Unique identifier of the item
     * @returns a WithRole_binding_ItemRequestBuilder
     */
    public role_bindingsById(id: string) : WithRole_binding_ItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["role_binding_id"] = id
        return new WithRole_binding_ItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.api.accounts_mgmt.v1.roles.item collection
     * @param id Unique identifier of the item
     * @returns a WithRole_ItemRequestBuilder
     */
    public rolesById(id: string) : I1f8dee2187a0d0bb0d58fe5d237cde22f916596df740a1926e6fd3e55f400699 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["role_id"] = id
        return new I1f8dee2187a0d0bb0d58fe5d237cde22f916596df740a1926e6fd3e55f400699(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.api.accounts_mgmt.v1.sku_rules.item collection
     * @param id Unique identifier of the item
     * @returns a WithSku_rule_ItemRequestBuilder
     */
    public sku_rulesById(id: string) : WithSku_rule_ItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["sku_rule_id"] = id
        return new WithSku_rule_ItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.api.accounts_mgmt.v1.subscriptions.item collection
     * @param id Unique identifier of the item
     * @returns a WithSubscription_ItemRequestBuilder
     */
    public subscriptionsById(id: string) : WithSubscription_ItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["subscription_id"] = id
        return new WithSubscription_ItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.api.accounts_mgmt.v1.support_cases.item collection
     * @param id Unique identifier of the item
     * @returns a WithSupport_case_ItemRequestBuilder
     */
    public support_casesById(id: string) : WithSupport_case_ItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["support_case_id"] = id
        return new WithSupport_case_ItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Retrieves the version metadata.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: V1RequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
}
