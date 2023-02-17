
/**
 * Retrieves the list of policies.
 */
export class Sts_policiesRequestBuilderGetQueryParameters {
    /** Order criteria.The syntax of this parameter is similar to the syntax of the _order by_ clause ofa SQL statement, but using the names of the attributes of the awsstspolicies instead ofthe names of the columns of a table. For example, in order to sort the policiesdescending by operator type identifier the value should be:```sqlorderBy id desc```If the parameter isn't provided, or if the value is empty, then the order of theresults is undefined. */
    public order?: string | undefined;
    /** Index of the requested page, where one corresponds to the first page. */
    public page?: number | undefined;
    /** Search criteria.The syntax of this parameter is similar to the syntax of the _where_ clause of aSQL statement, but using the names of the attributes of the awsstspolicies instead ofthe names of the columns of a table. For example, in order to retrieve all thepolicies of type  `operatorrole`should be:```sqlpolicy_type like 'OperatorRole%'```If the parameter isn't provided, or if the value is empty, then all thepolicies  will be returned. */
    public search?: string | undefined;
    /** Maximum number of items that will be contained in the returned page. */
    public size?: number | undefined;
}
