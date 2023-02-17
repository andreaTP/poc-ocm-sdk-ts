
/**
 * Retrieves the list of add-on versions.
 */
export class VersionsRequestBuilderGetQueryParameters {
    /** Order criteria.The syntax of this parameter is similar to the syntax of the _order by_ clause ofa SQL statement, but using the names of the attributes of the add-on instead ofthe names of the columns of a table. For example, in order to sort the add-onversions descending by id the value should be:```sqlid desc```If the parameter isn't provided, or if the value is empty, then the order of theresults is undefined. */
    public order?: string | undefined;
    /** Index of the requested page, where one corresponds to the first page. */
    public page?: number | undefined;
    /** Search criteria.The syntax of this parameter is similar to the syntax of the _where_ clause of anSQL statement, but using the names of the attributes of the add-on version insteadof the names of the columns of a table. For example, in order to retrieve all theadd-on versions with an id starting with `0.1` the value should be:```sqlid like '0.1.%'```If the parameter isn't provided, or if the value is empty, then all the add-onversions that the user has permission to see will be returned. */
    public search?: string | undefined;
    /** Maximum number of items that will be contained in the returned page. */
    public size?: number | undefined;
}
