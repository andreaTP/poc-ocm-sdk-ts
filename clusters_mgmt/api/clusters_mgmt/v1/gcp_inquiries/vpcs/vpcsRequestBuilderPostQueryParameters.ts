
/**
 * Retrieves the list of available vpcs of the cloud provider for specific region.IMPORTANT: This collection doesn't currently support paging or searching, so the returned`page` will always be 1 and `size` and `total` will always be the total number of available vpcsof the provider.
 */
export class VpcsRequestBuilderPostQueryParameters {
    /** Index of the returned page, where one corresponds to the first page. As thiscollection doesn't support paging the result will always be `1`. */
    public page?: number | undefined;
    /** Number of items that will be contained in the returned page. As this collectiondoesn't support paging or searching the result will always be the total number ofvpcs of the provider. */
    public size?: number | undefined;
}
