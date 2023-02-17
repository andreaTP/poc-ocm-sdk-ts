
/**
 * Retrieves the list of accounts.
 */
export class AccountsRequestBuilderGetQueryParameters {
    /** If true, includes the labels on an account in the output. Could slow request response time. */
    public fetchlabels_labels?: boolean | undefined;
    /** ProjectionThis field contains a comma-separated list of fields you'd like to get ina result. No new fields can be added, only existing ones can be filtered.To specify a field 'id' of a structure 'plan' use 'plan.id'.To specify all fields of a structure 'labels' use 'labels.*'. */
    public fields?: string | undefined;
    /** Order criteria.The syntax of this parameter is similar to the syntax of the _order by_ clause ofa SQL statement. For example, in order to sort theaccounts descending by name identifier the value should be:```sqlname desc```If the parameter isn't provided, or if the value is empty, then the order of theresults is undefined. */
    public order?: string | undefined;
    /** Index of the requested page, where one corresponds to the first page. */
    public page?: number | undefined;
    /** Search criteria.The syntax of this parameter is similar to the syntax of the _where_ clauseof an SQL statement, but using the names of the attributes of the accountinstead of the names of the columns of a table. For example, in order toretrieve accounts with username starting with my:```sqlusername like 'my%'```If the parameter isn't provided, or if the value is empty, then all theitems that the user has permission to see will be returned. */
    public search?: string | undefined;
    /** Maximum number of items that will be contained in the returned page. */
    public size?: number | undefined;
}
