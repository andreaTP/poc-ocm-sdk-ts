import {Sku_rulesResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSku_rulesResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : Sku_rulesResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Sku_rulesResponse();
}
