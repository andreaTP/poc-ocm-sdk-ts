
/**
 * Retrieves a list of organizations.
 */
export class OrganizationsRequestBuilderGetQueryParameters {
    /** If true, includes the labels on an organization in the output. Could slow request response time. */
    public fetchlabels_labels?: boolean | undefined;
    /** ProjectionThis field contains a comma-separated list of fields you'd like to get ina result. No new fields can be added, only existing ones can be filtered.To specify a field 'id' of a structure 'plan' use 'plan.id'.To specify all fields of a structure 'labels' use 'labels.*'. */
    public fields?: string | undefined;
    /** Index of the requested page, where one corresponds to the first page. */
    public page?: number | undefined;
    /** Search criteria.The syntax of this parameter is similar to the syntax of the _where_ clauseof an SQL statement, but using the names of the attributes of the organizationinstead of the names of the columns of a table. For example, in order toretrieve organizations with name starting with my:```sqlname like 'my%'```If the parameter isn't provided, or if the value is empty, then all theitems that the user has permission to see will be returned. */
    public search?: string | undefined;
    /** Maximum number of items that will be contained in the returned page. */
    public size?: number | undefined;
}
