import {ServiceParameter} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createServiceParameterFromDiscriminatorValue(parseNode: ParseNode | undefined) : ServiceParameter {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ServiceParameter();
}
