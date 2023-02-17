
/**
 * Retrieves a list of roles.
 */
export class Current_accessRequestBuilderGetQueryParameters {
    /** Index of the requested page, where one corresponds to the first page. */
    public page?: number | undefined;
    /** Search criteria.The syntax of this parameter is similar to the syntax of the _where_ clauseof an SQL statement, but using the names of the attributes of the roleinstead of the names of the columns of a table. For example, in order toretrieve roles named starting with `Organization`:```sqlname like 'Organization%'```If the parameter isn't provided, or if the value is empty, then all theitems that the user has permission to see will be returned. */
    public search?: string | undefined;
    /** Maximum number of items that will be contained in the returned page. */
    public size?: number | undefined;
}
