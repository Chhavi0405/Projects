"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next-intl/client";
import AboutPage from "./about/page";

export default function Index() {
  const t = useTranslations("LocaleSwitcher");

  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function onSelectChange(event: any) {
    const nextLocale = event.target.value;
    router.replace(pathname, { locale: nextLocale });
  }

  return (
    <>
      <label>choose language</label>
      <br />

      <select
      //  defaultValue={locale}
      onChange={onSelectChange}>
        {["en", "de"].map((cur: any) => (
          <option key={cur} value={cur}>
            {t("locale", { locale: cur })}
          </option>
        ))}
      </select>

      <AboutPage/>
    </>
  );
}
