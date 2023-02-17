import {Event_body} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEvent_bodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : Event_body {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Event_body();
}
