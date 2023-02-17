
/**
 * Retrieves a list of job queues.
 */
export class QueuesRequestBuilderGetQueryParameters {
    /** Index of the requested page, where one corresponds to the first page.Page may be a token to the next page */
    public page?: number | undefined;
    /** Maximum number of items that will be contained in the returned page. */
    public size?: number | undefined;
}
