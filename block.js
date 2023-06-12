const MathContractAddress = "0x7ea91a0FF218F3609315bda7D236d6f574B74c2C";
const MathContractABI = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_num",
        type: "uint256",
      },
    ],
    name: "setNUMBER",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getNUMBER",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
let MathContract;
let signer;

const provider = new ethers.providers.Web3Provider(window.ethereum, "goerli");
provider.send("eth_requestAccounts", []).then(() => {
  provider.listAccounts().then((accounts) => {
    signer = provider.getSigner(accounts[0]);
    MathContract = new ethers.Contract(
      MathContractAddress,
      MathContractABI,
      signer
    );
  });
});

async function getNUMBER() {
  const getNUMBERPromise = MathContract.getNUMBER();
  const NUMBER = await getNUMBERPromise;
  document.getElementById("showNUMBER").innerText = `Your NUMBER: ${NUMBER}`;
  console.log(NUMBER);
}

async function setNUMBER() {
  const NUMBERS = document.getElementById("NUMBERS").value;
  const setNUMBERPromise = MathContract.setNUMBER(NUMBERS);
  await setNUMBERPromise;
}
