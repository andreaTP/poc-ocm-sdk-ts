
/**
 * Retrieves the list of principals.
 */
export class PrincipalsRequestBuilderGetQueryParameters {
    /** Index of the requested page, where one corresponds to the first page. */
    public page?: number | undefined;
    /** Search criteria.The syntax of this parameter is similar to the syntax of the _where_ clauseof an SQL statement, but using the names of the attributes of the role bindinginstead of the names of the columns of a table. For example, in order toretrieve role bindings with role_id AuthenticatedUser:```sqlrole_id = 'AuthenticatedUser'```If the parameter isn't provided, or if the value is empty, then all theitems that the user has permission to see will be returned. */
    public search?: string | undefined;
    /** Number of items contained in the returned page. */
    public size?: number | undefined;
}
