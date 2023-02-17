import {ManagedService} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedServiceFromDiscriminatorValue(parseNode: ParseNode | undefined) : ManagedService {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ManagedService();
}
