
/**
 * Retrieves the list of add-on installations.
 */
export class AddonsRequestBuilderGetQueryParameters {
    /** Order criteria.The syntax of this parameter is similar to the syntax of the _order by_ clause ofa SQL statement, but using the names of the attributes of the add-on installationinstead of the names of the columns of a table. For example, in order to sort theadd-on installations descending by name the value should be:```sqlname desc```If the parameter isn't provided, or if the value is empty, then the order of theresults is undefined. */
    public order?: string | undefined;
    /** Index of the requested page, where one corresponds to the first page. */
    public page?: number | undefined;
    /** Search criteria.The syntax of this parameter is similar to the syntax of the _where_ clause of anSQL statement, but using the names of the attributes of the add-on installationinstead of the names of the columns of a table. For example, in order to retrieveall the add-on installations with a name starting with `my` the value should be:```sqlname like 'my%'```If the parameter isn't provided, or if the value is empty, then all the add-oninstallations that the user has permission to see will be returned. */
    public search?: string | undefined;
    /** Maximum number of items that will be contained in the returned page. */
    public size?: number | undefined;
}
