
/**
 * Retrieves the list of AWS infrastructure access role grants.
 */
export class Aws_infrastructure_access_role_grantsRequestBuilderGetQueryParameters {
    /** Order criteria.The syntax of this parameter is similar to the syntax of the _order by_ clause ofa SQL statement, but using the names of the attributes of the AWS infrastructure access role grantinstead of the names of the columns of a table. For example, in order to sort theAWS infrastructure access role grants descending by user ARN the value should be:```sqluser_arn desc```If the parameter isn't provided, or if the value is empty, then the order of theresults is undefined. */
    public order?: string | undefined;
    /** Index of the requested page, where one corresponds to the first page. */
    public page?: number | undefined;
    /** Search criteria.The syntax of this parameter is similar to the syntax of the _where_ clause of anSQL statement, but using the names of the attributes of the AWS infrastructure access role grantinstead of the names of the columns of a table. For example, in order to retrieveall the AWS infrastructure access role grants with a user ARN starting with `user` the value should be:```sqluser_arn like '%user'```If the parameter isn't provided, or if the value is empty, then all the AWSinfrastructure access role grants that the user has permission to see will be returned. */
    public search?: string | undefined;
    /** Maximum number of items that will be contained in the returned page. */
    public size?: number | undefined;
}
