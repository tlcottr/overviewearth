import React, { useState, useEffect } from "react";
import { createClient } from "../../prismicio";
import { SliceZone } from "@prismicio/react";
import { components } from "../../slices";

type Props = {};

const Team = ({ initialData }) => {
  const [page, setPage] = useState(initialData);

  useEffect(() => {
    async function fetchData() {
      const client = createClient({
        /* your client config */
      });
      const fetchedPage = await client.getByUID("page", "team", {
        lang: "en-us",
      });
      setPage(fetchedPage);
    }

    if (!initialData) {
      fetchData();
    }
  }, [initialData]);

  return (
    <>
      <SliceZone slices={page?.data?.slices} components={components} />
    </>
  );
};

export default Team;

