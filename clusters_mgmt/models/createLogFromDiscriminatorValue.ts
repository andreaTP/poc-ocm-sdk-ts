import {Log} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLogFromDiscriminatorValue(parseNode: ParseNode | undefined) : Log {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Log();
}
