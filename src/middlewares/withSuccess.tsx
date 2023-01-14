import { API_URL } from "@/lib/constants/urls";
import { PayloadToBase64 } from "@/utils/helpers/conversions";
import { GetServerSidePropsContext } from "next";

const withSuccess = async (ctx: GetServerSidePropsContext) => {
  const { query } = ctx;
  const { package_id, session_id } = query;

  const base64 = PayloadToBase64({
    session_id: session_id as string,
    package_id: package_id as string,
  });

  const url = `${API_URL}/tarball?data=${base64}`;

  return {
    props: {
      installation_url: url,
    },
  };
};

export { withSuccess };
