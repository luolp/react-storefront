import { LanguageSelect } from "@/checkout-storefront/sections/PageHeader/LanguageSelect";
import Link from "next/link";

export const PageHeader = () => {
  return (
    <div className="page-header">
      <Link href="https://www.eminstore.com/" target="_blank">
        <img src="/eminstore_logo.png" alt="logo" className="logo" />
      </Link>
      <LanguageSelect />
    </div>
  );
};
