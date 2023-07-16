import { useCallback } from "react"
import { Interface } from "ethers/lib/utils"
import abi from './0x34bE7f35132E97915633BC1fc020364EA5134863.json'
import { useSmartPrivy } from '@zerodevapp/privy'

const contractAddress = '0x34bE7f35132E97915633BC1fc020364EA5134863'
const contractInterface = new Interface(abi)

const MintButton: React.FC = () => {
    const smartPrivy = useSmartPrivy()

    const handleMint = useCallback(() => {
        if (smartPrivy.user?.wallet?.address !== undefined && smartPrivy.sendTransaction) {
            smartPrivy.sendTransaction({
              to: contractAddress,
              data: contractInterface.encodeFunctionData('mint', [smartPrivy.user.wallet.address]),
            }).then((receipt: any) => {
              console.log(receipt)
            })
          }
    }, [smartPrivy])

    return (
        <button onClick={handleMint} style={{ marginTop: "20px", padding: "12px", backgroundColor: "#069478", color: "#FFF", border: "none", borderRadius: "6px", cursor: 'pointer' }}>
            Mint
        </button>
    )

}

export default MintButton
