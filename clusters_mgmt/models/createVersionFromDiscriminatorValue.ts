import {Version} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createVersionFromDiscriminatorValue(parseNode: ParseNode | undefined) : Version {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Version();
}
