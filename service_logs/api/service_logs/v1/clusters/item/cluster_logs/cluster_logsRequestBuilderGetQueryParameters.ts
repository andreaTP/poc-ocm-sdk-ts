
/**
 * Retrieves the list of cluster logs by cluster uuid.
 */
export class Cluster_logsRequestBuilderGetQueryParameters {
    /** Order criteria.The syntax of this parameter is similar to the syntax of the _order by_ clause ofa SQL statement. For example, in order to sort thecluster logs descending by name identifier the value should be:```sqlname desc```If the parameter isn't provided, or if the value is empty, then the order of theresults is undefined. */
    public order?: string | undefined;
    /** Index of the requested page, where one corresponds to the first page. */
    public page?: number | undefined;
    /** Search criteria.The syntax of this parameter is similar to the syntax of the _where_ clauseof an SQL statement, but using the names of the attributes of the cluster logsinstead of the names of the columns of a table. For example, in order toretrieve cluster logs with service_name starting with my:```sqlservice_name like 'my%'```If the parameter isn't provided, or if the value is empty, then all theitems that the user has permission to see will be returned. */
    public search?: string | undefined;
    /** Maximum number of items that will be contained in the returned page. */
    public size?: number | undefined;
}
