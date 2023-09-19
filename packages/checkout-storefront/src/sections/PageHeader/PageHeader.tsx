import { LanguageSelect } from "@/checkout-storefront/sections/PageHeader/LanguageSelect";
import Link from "next/link";

export const PageHeader = () => {
  return (
    <div className="page-header">
      <Link href="/">
        <img src="/eminstore_logo.png" alt="logo" className="logo" />
      </Link>
      <LanguageSelect />
    </div>
  );
};
