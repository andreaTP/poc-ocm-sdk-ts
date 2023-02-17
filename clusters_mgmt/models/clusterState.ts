/** Overall state of a cluster. */
export enum ClusterState {
    ErrorEscaped = "error",
    Hibernating = "hibernating",
    Installing = "installing",
    Pending = "pending",
    Powering_down = "powering_down",
    Ready = "ready",
    Resuming = "resuming",
    Uninstalling = "uninstalling",
    Unknown = "unknown",
    Validating = "validating",
    Waiting = "waiting",
}
