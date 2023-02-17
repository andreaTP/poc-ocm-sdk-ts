/** Overall state of a cluster operator. */
export enum ClusterOperatorState {
    Available = "available",
    Degraded = "degraded",
    Failing = "failing",
    Upgrading = "upgrading",
}
