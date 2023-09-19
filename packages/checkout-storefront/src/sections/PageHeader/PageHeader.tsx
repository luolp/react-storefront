import Link from "next/link";
import { LanguageSelect } from "@/checkout-storefront/sections/PageHeader/LanguageSelect";

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
