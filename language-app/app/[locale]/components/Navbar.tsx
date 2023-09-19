import Link from "next-intl/link";
import { useTranslations } from "next-intl";

export default function Navbar() {
  const t = useTranslations("navbar");

  return (
    <>
      <header>
        <nav>
          <div>
            <Link href="/" locale="en">
              Eng
            </Link>{" "}
            &nbsp;&nbsp;
            <Link href="/" locale="fr">
              french
            </Link>
            &nbsp;&nbsp;
            <Link href="/" locale="sv">
              Swedish
            </Link>
          </div>
          {/* //Components */}
          <div>
            <span>
              <Link href={"/"}>{t("home")}</Link>
            </span>
            &nbsp;&nbsp; &nbsp;&nbsp;
            <span>
              <Link href={"/about"}>{t("about")}</Link>
            </span>
            &nbsp;&nbsp; &nbsp;&nbsp;
            <span>
              <Link href={"/contact"}>{t("contact")}</Link>
            </span>
          </div>
        </nav>
      </header>
    </>
  );
}
