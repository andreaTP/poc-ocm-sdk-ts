import {LogEntry} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLogEntryFromDiscriminatorValue(parseNode: ParseNode | undefined) : LogEntry {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new LogEntry();
}
