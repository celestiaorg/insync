export const config = {
    RPC_URL: 'wss://<rpc_celestia_node_address>',
    REST_URL: 'https://<rest_celestia_node_address>',
    EXPLORER_URL: 'https://celestia.observer/',
    STAKING_URL: 'https://staking.celestia.observer/',
    NETWORK_NAME: 'Celestia',
    NETWORK_TYPE: 'testnet',
    CHAIN_ID: 'devnet-2',
    CHAIN_NAME: 'Celestia devnet-2',
    COIN_DENOM: 'celes',
    COIN_MINIMAL_DENOM: 'celes',
    COIN_DECIMALS: 0,
    PREFIX: 'celes',
    COIN_TYPE: 118,
    COINGECKO_ID: '-',
    GAS_PRICE_STEP_LOW: 0.0025,
    GAS_PRICE_STEP_AVERAGE: 0.025,
    GAS_PRICE_STEP_HIGH: 0.04,
    FEATURES: ['stargate', 'ibc-transfer', 'no-legacy-stdTx', 'ibc-go'],
};
