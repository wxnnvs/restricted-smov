import { useNavigate } from 'react-router-dom';

import { ThinContainer } from "@/components/layout/ThinContainer";
import { Heading1, Paragraph } from "@/components/utils/Text";
import { SubPageLayout } from "@/pages/layouts/SubPageLayout";
import { AccountCreatePart } from "@/pages/parts/auth/AccountCreatePart";
import { ConfigValuesPart } from "@/pages/parts/admin/ConfigValuesPart";
import { TMDBTestPart } from "@/pages/parts/admin/TMDBTestPart";
import { WorkerTestPart } from "@/pages/parts/admin/WorkerTestPart";
import { useAuth } from "@/hooks/auth/useAuth";

import { BackendTestPart } from "../parts/admin/BackendTestPart";

export function AdminPage() {
  const navigate = useNavigate();
  const { loggedIn } = useAuth();
  if (!loggedIn){
    navigate("/login");
  }

  return (
    <SubPageLayout>
      <ThinContainer>
        <Heading1>Admin tools</Heading1>
        <Paragraph>Silly tools used test sudo-flix! ૮₍´˶• . • ⑅ ₎ა</Paragraph>

        <AccountCreatePart />
        <ConfigValuesPart />
        <BackendTestPart />
        <WorkerTestPart />
        <TMDBTestPart />
      </ThinContainer>
    </SubPageLayout>
  );
}
