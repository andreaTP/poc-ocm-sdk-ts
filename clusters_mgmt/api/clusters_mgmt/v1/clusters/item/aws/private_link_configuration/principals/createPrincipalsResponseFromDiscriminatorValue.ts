import {PrincipalsResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrincipalsResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : PrincipalsResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PrincipalsResponse();
}
