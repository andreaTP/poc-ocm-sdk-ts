import {Ingress_route_selectors} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIngress_route_selectorsFromDiscriminatorValue(parseNode: ParseNode | undefined) : Ingress_route_selectors {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Ingress_route_selectors();
}
