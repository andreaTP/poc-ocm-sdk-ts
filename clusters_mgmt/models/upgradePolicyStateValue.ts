/** Overall state of a cluster upgrade policy. */
export enum UpgradePolicyStateValue {
    Cancelled = "cancelled",
    Completed = "completed",
    Delayed = "delayed",
    Failed = "failed",
    Pending = "pending",
    Scheduled = "scheduled",
    Started = "started",
}
