import {ClusterConsole} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createClusterConsoleFromDiscriminatorValue(parseNode: ParseNode | undefined) : ClusterConsole {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ClusterConsole();
}
