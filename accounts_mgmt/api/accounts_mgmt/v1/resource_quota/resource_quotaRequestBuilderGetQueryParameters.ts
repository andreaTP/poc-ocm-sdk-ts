
/**
 * Retrieves the list of resource quotas.
 */
export class Resource_quotaRequestBuilderGetQueryParameters {
    /** Index of the requested page, where one corresponds to the first page. */
    public page?: number | undefined;
    /** Search criteria.The syntax of this parameter is similar to the syntax of the _where_ clauseof an SQL statement, but using the names of the attributes of the accountinstead of the names of the columns of a table. For example, in order toretrieve resource quota with resource_type cluster.aws:```sqlresource_type = 'cluster.aws'```If the parameter isn't provided, or if the value is empty, then all theitems that the user has permission to see will be returned. */
    public search?: string | undefined;
    /** Maximum number of items that will be contained in the returned page. */
    public size?: number | undefined;
}
