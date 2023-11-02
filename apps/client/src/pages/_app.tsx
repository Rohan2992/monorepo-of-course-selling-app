import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { isUserLoading, userState } from "store";
import axios from "axios";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <InitUser />
      <App2 Component={Component} pageProps={...pageProps} />
    </RecoilRoot>
  );
}

function App2({ Component, pageProps }) {
  const userLoading = useRecoilValue(isUserLoading);
  if (userLoading) {
    return (
      <>
        loading...
        <InitUser />
      </>
    );
  }
  return (
    <div>
      {/* <AppBar /> */}
      <Component {...pageProps} />
    </div>
  );
}

const InitUser = () => {
  const setUser = useSetRecoilState(userState);
  const init = async () => {
    try {
      const response = await axios.get("api/auth/me", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token")
        }
      });

      if (response.data.username) {
        setUser({
          isLoading: false,
          userEmail: response.data.username
        });
      } else {
        setUser({
          isLoading: false,
          userEmail: null
        });
      }
    } catch (e) {
      setUser({
        isLoading: false,
        userEmail: null
      });
    }
  };

  useEffect(() => {
    init();
  }, []);

  return <></>;
};
