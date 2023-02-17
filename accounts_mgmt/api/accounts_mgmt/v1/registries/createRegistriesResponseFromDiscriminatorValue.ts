import {RegistriesResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRegistriesResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : RegistriesResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RegistriesResponse();
}
