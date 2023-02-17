
/**
 * Retrieves a list of role bindings.
 */
export class Role_bindingsRequestBuilderGetQueryParameters {
    /** Index of the requested page, where one corresponds to the first page. */
    public page?: number | undefined;
    /** Search criteria.The syntax of this parameter is similar to the syntax of the _where_ clauseof an SQL statement, but using the names of the attributes of the role bindinginstead of the names of the columns of a table. For example, in order toretrieve role bindings with role_id AuthenticatedUser:```sqlrole_id = 'AuthenticatedUser'```If the parameter isn't provided, or if the value is empty, then all theitems that the user has permission to see will be returned. */
    public search?: string | undefined;
    /** Maximum number of items that will be contained in the returned page. */
    public size?: number | undefined;
}
