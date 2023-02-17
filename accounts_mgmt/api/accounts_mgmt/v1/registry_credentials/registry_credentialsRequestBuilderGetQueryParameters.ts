
/**
 * Retrieves the list of accounts.
 */
export class Registry_credentialsRequestBuilderGetQueryParameters {
    /** Order criteria.The syntax of this parameter is similar to the syntax of the _order by_ clause ofa SQL statement. For example, in order to sort theRegistryCredentials descending by username the value should be:```sqlusername desc```If the parameter isn't provided, or if the value is empty, then the order of theresults is undefined. */
    public order?: string | undefined;
    /** Index of the requested page, where one corresponds to the first page. */
    public page?: number | undefined;
    /** Search criteria.The syntax of this parameter is similar to the syntax of the _where_ clause of aSQL statement, but using the names of the attributes of the RegistryCredentials insteadof the names of the columns of a table. For example, in order to retrieve all theRegistryCredentials for a user the value should be:```sqlusername = 'abcxyz...'```If the parameter isn't provided, or if the value is empty, then all theRegistryCredentials that the user has permission to see will be returned. */
    public search?: string | undefined;
    /** Maximum number of items that will be contained in the returned page. */
    public size?: number | undefined;
}
