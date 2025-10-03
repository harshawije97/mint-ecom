import React from "react";
import SettingsWrapper from "./_components/settings-wrapper";
import SettingsForm from "./_components/settings-form";
import { createClient } from "@/utils/supabase/server-props";
import { redirect } from "next/navigation";

async function SettingsPage() {
  const client = await createClient();
  const { error } = await client.auth.getUser();

  if (error) {
    redirect("/sign-in");
  }

  return (
    <div className="min-h-screen overflow-y-auto flex flex-col">
      <div className="flex-1 p-8 space-y-4 pt-16">
        <SettingsWrapper>
          <SettingsForm />
        </SettingsWrapper>
      </div>
    </div>
  );
}

export default SettingsPage;
