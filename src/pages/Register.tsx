import { useNavigate } from "react-router-dom";

import { SubPageLayout } from "@/pages/layouts/SubPageLayout";
import { LoginFormPart } from "@/pages/parts/auth/LoginFormPart";
import { PageTitle } from "@/pages/parts/util/PageTitle";

export function RegisterPage() {
  const navigate = useNavigate();
  navigate("/login");
  return (
    disabled
  );
}
