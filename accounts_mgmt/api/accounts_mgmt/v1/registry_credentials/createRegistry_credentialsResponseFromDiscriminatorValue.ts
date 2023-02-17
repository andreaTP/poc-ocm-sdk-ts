import {Registry_credentialsResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRegistry_credentialsResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : Registry_credentialsResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Registry_credentialsResponse();
}
