// import ethereum from "./assets/images/ethereum.png";
// import compound from "./assets/images/compound.png";
// import yearnfin from "./assets/images/yearnfin.png";
// import uniswap from "./assets/images/uniswap.png";

module.exports = () => {
    const baseURL = "https://test-builder-api.herokuapp.com";

    const ethereum = baseURL + "/assets/images/ethereum.png";
    const compound = baseURL + "/assets/images/compound.png";
    const yearnfin = baseURL + "/assets/images/yearnfin.png";
    const uniswap = baseURL + "/assets/images/uniswap.png";

    const wbtc = baseURL + "/assets/images/wbtc.png";
    const ftm = baseURL + "/assets/images/ftm.png";
    const eth = baseURL + "/assets/images/eth.png";
    const dai = baseURL + "/assets/images/dai.png";

    const data = {
        protocols: [
            {
                id: "0",
                name: "Ethereum",
                backgroundColor: "#f6f6f6",
                borderColor: "#8c8c8c",
                image: ethereum
            },
            {
                id: "1",
                name: "Compound",
                backgroundColor: "#F2FBF8",
                borderColor: "#00D395",
                image: compound
            },
            {
                id: "2",
                name: "Yearn.finance",
                backgroundColor: "#EEF1F4",
                borderColor: "#307FD2",
                image: yearnfin
            },
            {
                id: "3",
                name: "Uniswap",
                backgroundColor: "#FFEFF7",
                borderColor: "#FF5DAC",
                image: uniswap
            }
        ],
        tokens: [
            {
                id: "0",
                name: "WBTC",
                image: wbtc
            },
            {
                id: "1",
                name: "FTM",
                image: ftm
            },
            {
                id: "2",
                name: "ETH",
                image: eth
            },
            {
                id: "3",
                name: "DAI",
                image: dai
            }
        ]
    };
    return data;
}