import { useCallback, useState } from "react"
import abi from './0x34bE7f35132E97915633BC1fc020364EA5134863.json'
import { useSmartPrivy } from '@zerodevapp/privy'
import { encodeFunctionData } from "viem"


const contractAddress = '0x34bE7f35132E97915633BC1fc020364EA5134863'

const MintButton: React.FC = () => {
    const [loading, setLoading] = useState(false)

    const smartPrivy = useSmartPrivy()

    const handleMint = useCallback(() => {
      console.log(smartPrivy.user?.wallet?.address !== undefined && !!smartPrivy.sendTransaction)
        if (smartPrivy.user?.wallet?.address !== undefined && !!smartPrivy.sendTransaction) {
            setLoading(true)
            smartPrivy.sendTransaction({
              to: contractAddress,
              data: encodeFunctionData({
                abi,
                functionName: 'mint',
                args: [smartPrivy.user.wallet.address],
              })
            }).then((receipt: any) => {
              setLoading(false)
              console.log(receipt)
            })
          }
    }, [smartPrivy])

    return (
        <button disabled={loading} onClick={handleMint}>
            Mint
        </button>
    )

}

export default MintButton
