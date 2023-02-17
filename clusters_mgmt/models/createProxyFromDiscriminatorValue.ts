import {Proxy} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createProxyFromDiscriminatorValue(parseNode: ParseNode | undefined) : Proxy {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Proxy();
}
