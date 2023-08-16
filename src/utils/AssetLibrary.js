const AssetLibrary = {
    assets: [
        {
            id: 0,
            symbol: 'MTRG',
            name: 'Meter Governance',
            shortName: 'MeterGov',
            image: 'mtrg',
            type: 'native',
            address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
            maxDecimal: 6,
            faucetAmount: '0',
            minLendOffer: 160,
            maxLendOffer: 32000,
            minBorrowOffer: 160,
            maxBorrowOffer: 16000
        },
        {
            id: 1,
            symbol: 'WBTC',
            name: 'Wrapped Bitcoin',
            shortName: 'Bitcoin',
            image: 'btc',
            type: 'native',
            address: '0xa7bc85311540f0276ab60c3d632dfaf2f759f172',
            maxDecimal: 10,
            faucetAmount: '10000000000000000000',
            minLendOffer: 0.008,
            maxLendOffer: 0.6,
            minBorrowOffer: 0.008,
            maxBorrowOffer: 0.3
        }, {
            id: 2,
            symbol: 'WETH',
            name: 'Wrapped Ethereum',
            shortName: 'Ethereum',
            image: 'eth',
            type: 'native',
            address: '0xc0aef3b8e13e57a1f696c1c8f887d6d532afaf9a',
            maxDecimal: 5,
            faucetAmount: '50000000000000000000',
            minLendOffer: 0.08,
            maxLendOffer: 10,
            minBorrowOffer: 0.08,
            maxBorrowOffer: 5
        }, {
            id: 3,
            symbol: 'USDT',
            name: 'USDT',
            shortName: 'USDT',
            image: 'usdt',
            type: 'stable',
            address: '0xb74902f10f56f971192334782dfed7c2ca0d18ad',
            maxDecimal: 2,
            faucetAmount: '40000000000000000000000',
            minLendOffer: 80,
            maxLendOffer: 20000,
            minBorrowOffer: 80,
            maxBorrowOffer: 10000
        }, {
            id: 4,
            symbol: 'USDC',
            name: 'USDC',
            shortName: 'USDC',
            image: 'usdc',
            type: 'stable',
            address: '0x1417e6c24b55add1a23a3bbab542f1b5560972b2',
            maxDecimal: 2,
            faucetAmount: '40000000000000000000000',
            minLendOffer: 80,
            maxLendOffer: 20000,
            minBorrowOffer: 80,
            maxBorrowOffer: 10000
        }, {
            id: 5,
            symbol: 'DAI',
            name: 'DAI',
            shortName: 'DAI',
            image: 'dai',
            type: 'stable',
            address: '0xb892a9c206b2baee370058db9f878b24687fdb5e',
            maxDecimal: 2,
            faucetAmount: '40000000000000000000000',
            minLendOffer: 80,
            maxLendOffer: 20000,
            minBorrowOffer: 80,
            maxBorrowOffer: 10000
        },
    ],
    findAsset: function(address) {
        return this.assets.find(asset => asset.address.toLowerCase() == address.toLowerCase())
    },
    otherAssets: function(address) {
        return this.assets.filter(asset => asset.address.toLowerCase() != address.toLowerCase())
    },
    findConjugates: function(type, except = null) {
        return this.assets.filter(asset => asset.type != type && asset.address != except)
    }
}

export default AssetLibrary