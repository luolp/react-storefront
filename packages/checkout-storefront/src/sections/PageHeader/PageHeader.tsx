import { LanguageSelect } from "@/checkout-storefront/sections/PageHeader/LanguageSelect";

export const PageHeader = () => {
  return (
    <div className="page-header">
      <img src="/eminstore_logo.png" alt="logo" className="logo" />
      <LanguageSelect />
    </div>
  );
};
