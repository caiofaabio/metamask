/* eslint-disable @next/next/no-img-element */
"use client";
import styles from "./page.module.css";

import {
  useAccount,
  useConnect,
  useDisconnect,
  useEnsAvatar,
  useEnsName,
} from "wagmi";

export function Profile() {
  const { address, connector, isConnected } = useAccount();
  const { data: ensAvatar }: any = useEnsAvatar({ enabled: true });
  const { data: ensName } = useEnsName({ address });
  const { connect, connectors, error, isLoading, pendingConnector }: any =
    useConnect();
  const { disconnect }: any = useDisconnect();
  const formattedAddress = formatWalletAddress(address);

  function formatWalletAddress(address: any) {
    const formattedAddress = `${address?.substring(
      0,
      4
    )}...${address?.substring(address.length - 4)}`;
    return formattedAddress;
  }

  if (isConnected) {
    return (
      <div>
        {/* <img src={ensAvatar} alt="Avatar" /> */}
        <div>
          {ensName ? `${ensName} (${formattedAddress})` : formattedAddress}
        </div>
        <div>Connected to {connector?.name}</div>

        <button onClick={disconnect}>Disconnect</button>
      </div>
    );
  }

  return (
    <div className={styles.divWallet}>
      {connectors.map((connector: any) => (
        <button
          className={styles.wallet}
          disabled={!connector.ready}
          key={connector.id}
          onClick={() => connect({ connector: connectors[window as any] })}
        >
          {connector.name}
          {!connector.ready && " (unsupported)"}
          {isLoading &&
            connector.id === pendingConnector?.id &&
            " (connecting)"}
        </button>
      ))}

      {error && <div>{error.message}</div>}
    </div>
  );
}

export default function Home() {
  return (
    <main className={styles.main}>
      <h4>Connection com Wagmi</h4>
      <Profile />
    </main>
  );
}
