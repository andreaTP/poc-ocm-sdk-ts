import {ManagementClusterParent} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagementClusterParentFromDiscriminatorValue(parseNode: ParseNode | undefined) : ManagementClusterParent {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ManagementClusterParent();
}
