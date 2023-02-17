import {LogsResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLogsResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : LogsResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new LogsResponse();
}
