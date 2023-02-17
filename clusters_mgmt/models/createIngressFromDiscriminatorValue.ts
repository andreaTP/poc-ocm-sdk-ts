import {Ingress} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIngressFromDiscriminatorValue(parseNode: ParseNode | undefined) : Ingress {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Ingress();
}
