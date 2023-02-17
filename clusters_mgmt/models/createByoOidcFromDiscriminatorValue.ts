import {ByoOidc} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createByoOidcFromDiscriminatorValue(parseNode: ParseNode | undefined) : ByoOidc {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ByoOidc();
}
