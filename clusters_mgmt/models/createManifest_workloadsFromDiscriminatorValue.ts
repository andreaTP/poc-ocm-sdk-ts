import {Manifest_workloads} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManifest_workloadsFromDiscriminatorValue(parseNode: ParseNode | undefined) : Manifest_workloads {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Manifest_workloads();
}
