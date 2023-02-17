
/**
 * Retrieves the details of the log.
 */
export class UninstallRequestBuilderGetQueryParameters {
    /** Line offset to start logs from. if 0 retreive entire log.If offset > #lines return an empty log. */
    public offset?: number | undefined;
    /** Returns the number of tail lines from the end of the log.If there are no line breaks or the number of lines < tailreturn the entire log.Either 'tail' or 'offset' can be set. Not both.  */
    public tail?: number | undefined;
}
