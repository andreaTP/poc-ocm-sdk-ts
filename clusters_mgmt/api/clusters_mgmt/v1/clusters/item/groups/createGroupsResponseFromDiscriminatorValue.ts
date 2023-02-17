import {GroupsResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGroupsResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GroupsResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GroupsResponse();
}
