import React from "react";
import { useRouter } from "next/router";

const User = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <h1>Welcome Back {id} </h1>
    </div>
  );
};

export default User;
