
/**
 * Retrieves the list of addon statuses for a cluster.
 */
export class StatusRequestBuilderGetQueryParameters {
    /** If the parameter isn't provided, or if the value is empty, then the order of theresults is undefined. */
    public order?: string | undefined;
    /** Index of the requested page, where one corresponds to the first page. */
    public page?: number | undefined;
    /** Maximum number of items that will be contained in the returned page. */
    public size?: number | undefined;
}
