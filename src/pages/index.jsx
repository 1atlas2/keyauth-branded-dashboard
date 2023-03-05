import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";
import { env } from "~/env.mjs";

const Home = () => {
  //const hello = api.example.hello.useQuery({ text: "from tRPC" });

  const loginform = (event) => {
    event.preventDefault();
  }

  return (
    <>
      <Head>
        <title>{env.NEXT_PUBLIC_WEBSITE_TITLE}</title>
        <meta property="og:title" content={env.NEXT_PUBLIC_DISCORD_TITLE} />
        <meta property="og:description" content={env.NEXT_PUBLIC_DISCORD_DESCRIPTION} />
        <meta property="og:image" content={env.NEXT_PUBLIC_DISCORD_IMAGE} />
        <meta property="og:site_name" content={env.NEXT_PUBLIC_DISCORD_SITE_NAME} />
      </Head>
      <main>
        <div className="forms">
          <form onSubmit={loginform}>
            <input type="text" placeholder="Username" /><br />
            <input type="password" placeholder="Password" /><br />
            <button type="submit">Login</button>
          </form>
        </div>
      </main>
    </>
  );
};

export default Home;
