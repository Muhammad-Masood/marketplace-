import { InjectedConnector } from "@web3-react/injected-connector";

// MetaMask
export const Injected = new InjectedConnector({
    supportedChainIds: [ 1,2,3,4,5,137, 80001]
});
