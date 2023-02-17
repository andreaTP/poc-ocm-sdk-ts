
/**
 * Retrieves a list of version gates.
 */
export class Version_gatesRequestBuilderGetQueryParameters {
    /** Order criteria.The syntax of this parameter is similar to the syntax of the _order by_ clause ofan SQL statement, but using the names of the attributes of the version gate instead ofthe names of the columns of a table. For example, in order to sort the version gatesdescending by identifier the value should be:```sqlid desc```If the parameter isn't provided, or if the value is empty, then the order of theresults is undefined. */
    public order?: string | undefined;
    /** Index of the requested page, where one corresponds to the first page. */
    public page?: number | undefined;
    /** Search criteria.The syntax of this parameter is similar to the syntax of the _where_ clause of anSQL statement, but using the names of the attributes of the version gate instead ofthe names of the columns of a table.If the parameter isn't provided, or if the value is empty, then all the version gatesthat the user has permission to see will be returned. */
    public search?: string | undefined;
    /** Maximum number of items that will be contained in the returned page.Default value is `100`. */
    public size?: number | undefined;
}
