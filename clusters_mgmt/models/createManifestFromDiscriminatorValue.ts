import {Manifest} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManifestFromDiscriminatorValue(parseNode: ParseNode | undefined) : Manifest {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Manifest();
}
