
export class Provision_shardsRequestBuilderGetQueryParameters {
    /** Index of the requested page, where one corresponds to the first page. */
    public page?: number | undefined;
    /** Search criteria.The syntax of this parameter is similar to the syntax of the _where_ clause of aSQL statement, but using the names of the attributes of the cluster instead ofthe names of the columns of a table. For example, in order to retrieve all theclusters with a name starting with `my` in the `us-east-1` region the valueshould be:```sqlname like 'my%' and region.id = 'us-east-1'```If the parameter isn't provided, or if the value is empty, then all theprovision shards that the user has permission to see will be returned. */
    public search?: string | undefined;
    /** Maximum number of items that will be contained in the returned page. */
    public size?: number | undefined;
}
