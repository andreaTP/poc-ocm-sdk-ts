
/**
 * Deletes the cluster.
 */
export class WithCluster_ItemRequestBuilderDeleteQueryParameters {
    /** If false it will only delete from OCM but not the actual cluster resources.false is only allowed for OCP clusters. true by default. */
    public deprovision?: boolean | undefined;
    /** Dry run flag is used to check if the operation can be completed, but won't delete. */
    public dry_run?: boolean | undefined;
}
